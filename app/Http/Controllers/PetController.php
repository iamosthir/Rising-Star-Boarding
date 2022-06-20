<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Pets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class PetController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function add(Request $req)
    {
        $this->validate($req,[
            "petName" => "required",
            "petColor" => "required",
            "petBreed" => "required",
            "petAge" => "required",
            "rabiesExpDate" => "required",
            "feed" => "required",
            "photo" => "nullable|mimes:png,jpg,jpeg,PNG,JPG,JPEG",
            "vaccine" => "nullable|mimes:png,jpg,jpeg,PNG,JPG,JPEG",
            "gender" => "required",
        ],[
            "petName.required" => "Pet name is required",
            "petColor.required" => "Pet color is required",
            "petBreed.required" => "Pet breed name is required",
            "petAge.required" => "Pet age is required",
            "rabiesExpDate.required" => "Rabies expiration date is required",
            "feed.required" => "Feeding instruction is required",
            "vaccine.required" => "Vaccination is required",
            "photo.required" => "Pet Photo is required",
            "vaccine.mimes" => "Invalid file. Upload valid image file",
            "photo.mimes" => "Invalid file. Upload valid image file",
            "gender.required" => "Select Gender"
        ]);
        
        if ($c = Customer::where("email",Auth::user()->email)->first()) {
            $pet = new Pets();
            $pet->name = $req->petName;
            $pet->customer_id = $c->id;
            $pet->breed = $req->petBreed;
            $pet->color =  $req->petColor;
            $pet->age = $req->petAge;
            $pet->gender = $req->gender;
            $pet->rabies = $req->rabiesExpDate;
            $pet->feeding = $req->feed;
            $pet->medic = $req->medic;


            if($req->hasFile("photo") && !$req->hasFile("vaccine"))
            {
                $photo = $req->file("photo")->getClientOriginalName();
                $resp = Http::attach("photo", file_get_contents($req->file("photo")), $photo)
                ->post(env("ADMIN_HOST") . "/users/upload-pet-file", [
                    "customerId" => $c->id,
                    "petName" => $req->petName
                ]);
            }

            elseif (!$req->hasFile("photo") && $req->hasFile("vaccine")) {
                $vaccine = $req->file("vaccine")->getClientOriginalName();
                $resp = Http::attach("vaccine", file_get_contents($req->file("vaccine")), $vaccine)
                ->post(env("ADMIN_HOST") . "/users/upload-pet-file", [
                    "customerId" => $c->id,
                    "petName" => $req->petName
                ]);
            } 

            elseif ($req->hasFile("photo") && $req->hasFile("vaccine")) {
                $photo = $req->file("photo")->getClientOriginalName();
                $vaccine = $req->file("vaccine")->getClientOriginalName();
                $resp = Http::attach("photo", file_get_contents($req->file("photo")),$photo)
                    ->attach("vaccine", file_get_contents($req->file("vaccine")), $vaccine)
                ->post(env("ADMIN_HOST")."/users/upload-pet-file",[
                    "customerId" => $c->id,
                    "petName" => $req->petName
                ]);
            }
            else
            {
                $resp = array(
                    "photo" => null,
                    "vaccine" => null
                );
            }

            $pet->photo = $resp["photo"];
            $pet->vac_record = $resp["vaccine"];
            $pet->save();
            return ["status" => "ok", "data" => "Pet data was added successfully"];
            // return $resp;

        } else {
            return ["status" => "fail", "msg" => "Customer doesn't exist"];
        }

    }

    public function getData(Request $req)
    {
        if($req->petId && $data = Pets::find($req->petId))
        {
            if($data->customer_id == Customer::where("email",Auth::user()->email)->first()->id)
            {
                return [
                    "status" => "ok",
                    "petData" => $data,
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
    public function delete(Request $req)
    {
        $this->validate($req, [
            "petId" => "required|exists:pets,id"
        ]);

        $customerId = Customer::where("email", Auth::user()->email)->first()->id;
        $pet = Pets::find($req->petId);
        if($pet->customer_id == $customerId)
        {
            if($pet->photo!= ""){
                Http::post(env("ADMIN_HOST")."/users/delete-pet-file",[
                    "petPhoto" => $pet->photo,
                    "customerId" => $customerId,
                ]);
            }
            if($pet->vac_record != ""){
                Http::post(env("ADMIN_HOST") . "/users/delete-pet-file", [
                    "vacRecord" => $pet->vac_record,
                    "customerId" => $customerId,
                ]);
            }

            $pet->delete();

            return [
                "status" => "ok",
                "msg" => "Your pet was deleted successfully"
            ];
        }
        else
        {
            return [
                "status" => "fail",
                "type" => "Invalid Pet Owner",
                "msg" => "Failed to delete. Try again later"
            ];
        }
    }

    public function updatePet(Request $req)
    {
        $this->validate($req, [
            "petId" => "required|numeric|exists:pets,id",
            "petName" => "required",
            "petColor" => "required",
            "petBreed" => "required",
            "petAge" => "required",
            "rabiesExpDate" => "required",
            "feed" => "required",
            "medic" => "required",
            "gender" => "required",
        ], [
            "petName.required" => "Pet name is required",
            "petColor.required" => "Pet color is required",
            "petBreed.required" => "Pet breed name is required",
            "petAge.required" => "Pet age is required",
            "rabiesExpDate.required" => "Rabies expiration date is required",
            "feed.required" => "Feeding instruction is required",
            "medic.required" => "Medication is required",
            "gender.required" => "Select Gender"
        ]);
        $c = Customer::where("email", Auth::user()->email)->first();
        $pet = Pets::find($req->petId);

        if ($c->id == $pet->customer_id) {

            $pet->name = $req->petName;
            $pet->customer_id = $c->id;
            $pet->breed = $req->petBreed;
            $pet->color =  $req->petColor;
            $pet->age = $req->petAge;
            $pet->gender = $req->gender;
            $pet->rabies = $req->rabiesExpDate;
            $pet->feeding = $req->feed;
            $pet->medic = $req->medic;


            if($req->hasFile("photo"))
            {
                $photo = $req->file("photo")->getClientOriginalName();
                $resp = Http::attach("photo",file_get_contents($req->file("photo")),$photo)->post(env("ADMIN_HOST")."/users/update-pet-file",[
                    "customerId" => $pet->customer_id,
                    "oldPhoto" => $pet->photo,
                    "petName" => $req->petName
                ]);
                if($resp["newPhoto"] != "")
                {
                    $pet->photo = $resp["newPhoto"];
                }
            }

            if($req->hasFile("vaccine"))
            {
                $vaccine = $req->file("vaccine")->getClientOriginalName();
                $resp = Http::attach("vaccine",file_get_contents($req->file("vaccine")),$vaccine)->post(env("ADMIN_HOST")."/users/update-pet-file",[
                    "customerId" => $pet->customer_id,
                    "oldVacRecord" => $pet->vac_record,
                    "petName" => $req->petName
                ]);
                if ($resp["newVac"] != "") {
                    $pet->vac_record = $resp["newVac"];
                }
            }
            

            $pet->save();
            return ["status" => "ok", "msg" => "Pet data was updated successfully"];
        } else {
            return ["status" => "fail", "msg" => "Customer doesn't exist"];
        }

    }

    public function list(Request $req)
    {
        $customer = Customer::where("email",Auth::user()->email)->first();
        if($customer){
            $pets = Pets::where("customer_id",$customer->id)->get(["id","name","age","color"]);
            return [
                "status" => "ok",
                "pets" => $pets,
            ];
        }
        else
        {
            return [
                "status" => "fail",
            ];
        }
    }
}
