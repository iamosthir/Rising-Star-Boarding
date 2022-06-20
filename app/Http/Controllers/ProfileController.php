<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\CustomerAccount;
use App\Models\Pets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function profileData()
    {
        $profile = Customer::where("email", auth()->user()->email)->first();
        if($profile){
            $pets = Pets::where("customer_id", $profile->id)->get(["id","name","photo"]);
        }
        return [
            "profile" => $profile??[],
            "userName" => auth()->user()->first_name." ".auth()->user()->last_name,
            "customerExists" => $profile?true:false,
            "pets" => $pets??[],
            "first_name" =>auth()->user()->first_name,
            "last_name" => auth()->user()->last_name,
            "email" => auth()->user()->email
        ];
    }

    public function update(Request $req)
    {
        $userId = auth()->user()->id;
        $this->validate($req,[
            "first_name" => "required",
            "last_name" => "required",
            "email" => "required|email|unique:customer_accounts,email,$userId,id",
            "cell_phone" => "required",
            "city" => "required",
            "state" => "required",
            "zip" => "required",
            "address1" => "required",
        ],[
            "first_name.required" => "Your first name is required",
            "last_name.required" => "Your last name is required",
            "email.required" => "Email is required",
            "cell_phone.required" => "Your cell phone number is required",
            "city.required" => "Please fill the city box",
            "state.required" => "Please fill the state box",
            "zip.required" => "Please fill the zip code box",
            "address1.required" => "Address is required",
        ]);

        // Update name and email
        $user = CustomerAccount::find($userId);
        $customer = Customer::where("email",$user->email)->first();
        $user->first_name = $req->first_name;
        $user->last_name = $req->last_name;
        $user->email = $req->email;
        // 

        // Check if the customer already exists in customer DB
        if(!$customer){
            $customer = new Customer();
        }
        // 

        // Save the customer info
        $customer->first_name = $req->first_name;
        $customer->last_name = $req->last_name;
        $customer->email = $req->email;
        $customer->address1 = $req->address1;
        $customer->address2 = $req->address2;
        $customer->cell_phone = $req->cell_phone;
        $customer->home_phone = $req->home_phone;
        $customer->city = $req->city;
        $customer->state = $req->state;
        $customer->zip = $req->zip;
        $customer->vet_name = $req->vetName;
        $customer->vet_number = $req->vetNumber;
        $customer->emergency_person = $req->emergencyPerson;
        $customer->emergency_contact = $req->emergencyContact;
        $customer->save();
        // End
        $user->save();
        return [
            "status" => "ok",
            "msg" => "Profile information was updated",
        ];

    }

    public function profileStatus(Request $req)
    {
        if($c = Customer::where("email",Auth::user()->email)->first())
        {
            $petCount = count(Pets::where("customer_id",$c->id)->get());
            $serviceStatus = DB::table('booking_statuses')->find(1);
            return [
                "status" => "completed",
                "customerId" => $c->id,
                "petCount" => $petCount,
                "serviceStatus" => $serviceStatus
            ];
        }
        else
        {
            return [
                "status" => "denied",
                "petCount" => 0
            ];
        }
    }
}
