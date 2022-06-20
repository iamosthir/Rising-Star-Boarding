<?php

namespace App\Http\Controllers;

use App\Models\BoardingBookings;
use App\Models\BoardingPets;
use App\Models\BookingNotification;
use App\Models\Customer;
use App\Models\Discoutn;
use App\Models\Kennel;
use App\Models\KennelBookingRecords;
use App\Models\Pets;
use App\Models\Price;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BoardingController extends Controller
{
    private $colors = array(
        "#0048BA",
        "#B0BF1A",
        "#7CB9E8",
        "#B284BE",
        "#C46210",
        "#E52B50",
        "#AB274F",
        "#3B7A57",
        "#008000",
        "#A52A2A",
        "#007FFF",
        "#3D0C02",
        "#000000",
        "#D891EF",
        "#004225",
        "#CD7F32",
        "#88540B",
        "#1B4D3E",
    );
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function getKennels(Request $req)
    {
        $periods = Carbon::parse($req->startDate)->daysUntil($req->endDate)->toArray();

        $notAvailableKennels = array();
        foreach ($periods as $per) {
            $kennels = KennelBookingRecords::whereDate("book_date", $per)->get();
            foreach ($kennels as $kennel) {
                if (!in_array($kennel->kennel_id, $notAvailableKennels)) {
                    array_push($notAvailableKennels, $kennel->kennel_id);
                }
            }
        }
        $data = Kennel::whereNotIn("id", $notAvailableKennels)->get();

        return response()->json($data);
    }



    public function submitOrder(Request $req)
    {
        $this->validate($req, [
            "startDate" => "required",
            "endDate" => "required",
            "dogs" => "required|array",
            "requestedKennel" => "required",
            "note" => "max:400",
            "pickTime" => "required",
            "dropTime" => "required", 
        ],[
            "startDate.required" => "Please choose your starting date for the reservation",
            "endDate.required" => "Please choose your ending date for the reservation",
            "pickTime.required" => "Please select the pick up time of your pet's",
            "dropTime.required" => "Please select the drop off time of your pet's"
        ]);

        $dropTime = Carbon::parse($req->startDate)->format("Y-m-d") . " $req->dropTime";
        $pickTime = Carbon::parse($req->endDate)->format("Y-m-d")." $req->pickTime";

        $customerId = Customer::where("email", Auth::user()->email)->first();

        $dogs = $req->dogs;

        $boarding = new BoardingBookings();
        $boarding->customer_id = $customerId->id;
        $boarding->start_date = $req->startDate;
        $boarding->ending_date = $req->endDate;
        $boarding->stay_day = Carbon::parse($req->startDate)
        ->diffInDays(Carbon::parse($req->endDate)) + 1;
        $boarding->checkIn = Carbon::parse($dropTime)->format("Y-m-d H:i:s");
        $boarding->checkOut = Carbon::parse($pickTime)->format("Y-m-d H:i:s");
        $boarding->color = $this->colors[rand(0, count($this->colors) - 1)];
        $boarding->status= "pending";
        $boarding->note = $req->note;
        $boarding->requested_kennel = $req->requestedKennel;
        $boarding->save();

        // Upload pet infos
        foreach ($dogs as $dog) {
            BoardingPets::insert([
                "pet_id" => $dog["dog_id"],
                "boarding_id" => $boarding->id,
                "created_at" => Carbon::now(),
                "updated_at" => Carbon::now(),
            ]);
        }
        //

        $bookingNotify = new BookingNotification();
        $bookingNotify->type="boarding";
        $bookingNotify->booking_id = $boarding->id;
        $bookingNotify->boarding_string = Carbon::parse($req->startDate)
            ->diffInDays(Carbon::parse($req->endDate)) + 1 . " days booking";
        $bookingNotify->save();
        broadcast(new \App\Events\BookingNotification($bookingNotify));

        return[
            "status" => "ok",
            "msg" => "Your new booking request was submitted. You will be notified via Email once we approve your reservation request. Thanks for using our services",
            "boardingId" => $boarding->id
        ];
    }


    public function history(Request $req)
    {
        $customerId = Customer::where("email",Auth::user()->email)->first()->id;
        $data = BoardingBookings::orderBy("id","desc")->where("customer_id",$customerId)->paginate(10);

        // Main Data
        $mainData = array();
        // 

        // Go throuh data
        foreach($data as $boarding)
        {
            $statusText = "";
            if($boarding->status == "pending")
            {
                $statusText = "Waiting For Approval";
            }
            elseif($boarding->status == "onprogress")
            {
                if(Carbon::now()->greaterThanOrEqualTo(Carbon::parse($boarding->start_date)))
                {
                    $statusText = "Reservation Started";
                }
                else
                {
                    $statusText = "Approved";
                }
            }
            elseif($boarding->status == "canceled")
            {
                $statusText = "Canceled";
            }
            elseif($boarding->status == "completed")
            {
                $statusText = "Completed";
            }

            array_push($mainData,array(
                "id" => $boarding->id,
                "range" => Carbon::parse($boarding->start_date)->format("d M"). " - ". Carbon::parse($boarding->ending_date)->format("d M Y"),
                "stay_day" => $boarding->stay_day,
                "price" => $boarding->price,
                "status" => $boarding->status,
                "statusText" => $statusText
            ));
        }
        // 

        return response()->json(array(
            "mainData" => $mainData,
            "paginateData" => $data,
        ));
    }

    public function cancel(Request $req)
    {
        $resp = null;
        $msg = null;
        $this->validate($req,[
            "boardingId" => "required|numeric|exists:boarding_bookings,id"
        ]);

        // validate the customer
        $customerId = Customer::where("email",Auth::user()->email)->first()->id;
        // Get boarding data
        $data = BoardingBookings::find($req->boardingId);
        if($data->customer_id == $customerId)
        {
            if($data->status == "pending")
            {
                $data->status = "canceled";
                $data->save();
                KennelBookingRecords::where("boarding_id", $req->boardingId)->delete();

                $resp = "ok";
                $msg = "Your Booking Was Canceled";
            }
            else
            {
                $resp = "fail";
                $msg = "You can not cancel your booking at this moment. Please contact with support";
            }
        }
        else
        {
            $resp = "auth_fail";
            $msg = "You don't have permission for this operation";
        }

        return [
            "status" => $resp,
            "msg" => $msg
        ];
    }

    public function details(Request $req)
    {
        if($req->boardingId && $data = BoardingBookings::find($req->boardingId))
        {
            $statusText = "";
            if($data->status == "pending")
            {
                $statusText = "Waiting For Approval";
            }
            elseif($data->status == "onprogress")
            {
                if(Carbon::now()->greaterThanOrEqualTo(Carbon::parse($data->start_date)))
                {
                    $statusText = "Reservation Started";
                }
                else
                {
                    $statusText = "Approved";
                }
            }
            elseif($data->status == "canceled")
            {
                $statusText = "Canceled";
            }
            elseif($data->status == "completed")
            {
                $statusText = "Completed";
            }

            // Booking Data
            $bookingData = array(
                "id" => $data->id,
                "date" => $data->created_at->format("d F, Y - h:i a"),
                "startingDate" => Carbon::parse($data->start_date)->format("d F, Y"),
                "endingDate" => Carbon::parse($data->ending_date)->format("d F, Y"),
                "totalDays" => $data->stay_day,
                "status" => $data->status,
                "statusText" => $statusText,
                "price" => $data->price,
                "checkIn" => Carbon::parse($data->checkIn)->format("d M Y,  h:i A"),
                "checkOut" => Carbon::parse($data->checkOut)->format("d M Y,  h:i A"),

            );
            // End

            $boardingPets = BoardingPets::where("boarding_id",$data->id)->with("pet:id,name,photo")->with("kennel:id,unique_id")->get();
            $myPets = array();
            foreach($boardingPets as $pet)
            {
                if ($pet->pet["photo"] != "") {
                    $petPhoto = env("MIX_ADMIN_HOST") . "/uploads/customer/$data->customer_id/" . $pet->pet["photo"];
                } else {
                    $petPhoto = asset('image/dog-placeholder-tall.svg');
                }
                array_push($myPets,array(
                    "id" => $pet->id,
                    "petName" => $pet->pet["name"],
                    "photo" => $petPhoto,
                    "kennel" => $pet->kennel_id,
                ));
            }

            $respData = array(
                "bookingData" => $bookingData,
                "pets" => $myPets,
            );

            return [
                "status" => "ok",
                "data" => $respData,
            ];
        }
        else
        {
            return [
                "status" => "fail"
            ];
        }
    }
}
