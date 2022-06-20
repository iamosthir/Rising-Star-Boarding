<?php

namespace App\Http\Controllers;

use App\Models\BookingNotification;
use App\Models\Customer;
use App\Models\GroomingBooking;
use App\Models\Pets;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class GroomingController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function create(Request $req)
    {
        $now = Carbon::now();
        $this->validate($req,[
            "petValues" => "required|array",
            "dateTime" => "required|date|after_or_equal:$now",
            "note" => "nullable|max:400",
            "time" => "required" 
        ],[
            "petValues.required" => "Tell us which pets your'e going to bring",
            "dateTime.required" => "Please set your appointment time",
            "note.max" => "You can not write more than 400 characters",
            "time.required" => "Please select your suitable time for the appointment"
        ]);

        $appointmentTime = Carbon::parse($req->dateTime)->format("Y-m-d")." ".$req->time;
        $appointmentTime = Carbon::parse($appointmentTime)->format("Y-m-d H:i:s");

        $customerId = Customer::where("email",Auth::user()->email)->first()->id;

        $grooming = new GroomingBooking();
        $grooming->customer_id = $customerId;
        $grooming->appointment_date = $appointmentTime;
        $grooming->pets = $req->petValues;
        $grooming->note = $req->note;
        $grooming->status = "pending";
        $grooming->save();

        $bookingNotify = new BookingNotification();
        $bookingNotify->type = "grooming";
        $bookingNotify->booking_id = $grooming->id;
        $bookingNotify->grooming_string = "Appointment at - ".Carbon::parse($req->dateTime)->format("d F h:i A");
        $bookingNotify->save();

        broadcast(new \App\Events\BookingNotification($bookingNotify));

        return [
            "status" => "ok",
            "msg" => "Your new booking request was submitted. You will be notified via Email once we approve your reservation request. Thanks for using our services",
        ];

    }

    public function history(Request $req)
    {
        $data = GroomingBooking::orderBy("id","desc")->paginate(10);

        $mainData = array();

        foreach($data as $grooming)
        {
            $statusText = null;

            if($grooming->status == "ongoing")
            {
                $statusText = "Approved";
            } 
            elseif ($grooming->status == "pending")
            {
                $statusText = "Waiting For Approval";
            } 
            elseif ($grooming->status == "canceled")
            {
                $statusText = "Canceled";
            } 
            elseif ($grooming->status == "completed")
            {
                $statusText = "Finished";
            }
            array_push($mainData,array(
                "id" => $grooming->id,
                "status" => $grooming->status,
                "time" => Carbon::parse($grooming->appointment_date)->format("l, d M Y - h:i a"),
                "end" => $grooming->end_time?Carbon::parse($grooming->end_time)->format("l , h:i a"):'',
                "statusText" => $statusText
            ));
        }

        return [
            "groomings" => $mainData,
            "paginateData" => $data,
        ];
    }

    public function cancel(Request $req)
    {
        $this->validate($req,[
            "groomingId"=> "required|numeric|exists:grooming_bookings,id"
        ]);
        $data = GroomingBooking::find($req->groomingId);
        $customerId = Customer::where("email",Auth::user()->email)->first()->id;
        $status = null;
        $msg = null;

        if($data->customer_id == $customerId)
        {
            if($data->status == "pending")
            {
                $data->status = "canceled";
                $data->save();
                $status = "ok";
                $msg = "Your booking was canceled.";
            }  
            else
            {
                $status = "fail";
                $msg = "Can not process your request. Try again later";
            }
        }
        else
        {
            $status = "fail";
            $msg = "You don't have permission for this action";
        }

        return [
            "status" => $status,
            "msg" => $msg
        ];
    }

    public function details(Request $req)
    {
        if($req->id && $data = GroomingBooking::find($req->id))
        {
            $customerId = Customer::where("email",Auth::user()->email)->first()->id;
            if($data->customer_id == $customerId)
            {

                $statusText = null;
                $pets = array();

                if($data->status == "pending")
                {
                    $statusText = "Waitng For Approval";
                }
                elseif ($data->status == "ongoing")
                {
                    if(Carbon::now()->greaterThanOrEqualTo(Carbon::parse($data->appointment_date)))
                    {
                        $statusText = "On Progress";
                    }
                    else
                    {
                        $statusText = "Approved";
                    }
                }
                elseif ($data->status == "canceled")
                {
                    $statusText = "Canceled";
                } 
                elseif ($data->status == "completed")
                {
                    $statusText = "Completed";
                }

                foreach($data->pets as $pet)
                {
                    if($petData = Pets::find($pet["id"]))
                    {
                        if ($petData->photo != "") {
                            $petPhoto = env("ADMIN_HOST") . "/uploads/customer/$petData->customer_id/$petData->photo";
                        } else {
                            $petPhoto = asset('image/dog-placeholder-tall.svg');
                        }
                        array_push($pets, array(
                            "id" => $pet["id"],
                            "name" => $pet["name"],
                            "photo" => $petPhoto,
                        ));
                    }
                    
                }

                $resp = array(
                    "id" => $data->id,
                    "startDate" => Carbon::parse($data->appointment_date)->format("d F, Y - h:i a"),
                    "endTime" => $data->end_time?Carbon::parse($data->end_time)->format("d F, Y - h:i a"):'',
                    "status" => $data->status,
                    "statusText" => $statusText,
                    "pets" => $pets,
                    "price" => $data->price?$data->price." USD":"",
                    "note" => $data->note
                );
                return [
                    "status"=>"ok",
                    "data"=> $resp,
                ];
            }
            else
            {
                return [
                    "status" => "fail"
                ];
            }
        }
        else
        {
            return [
                "status" => "fail"
            ];
        }
    }
}
