<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("/home", function () {
    return redirect()->to("/home/profile");
});
Route::group(["prefix" => "home", "middleware" => "auth"], function () {
    Route::any("{any}", function () {
        return view("dashboard.dashboard");
    })->where("any", "^(?!api/.*$).*$");

    Route::group(["prefix" => "api"], function () {
        // Profile Data
        Route::get("/get-profile-data", "ProfileController@profileData");
        // Update profile data
        Route::post("/update-profile-data", "ProfileController@update");
        // Check profile completed or not
        Route::get('/profile-check', "ProfileController@profileStatus");


        // Add pet
        Route::post("/add-pet", "PetController@add");
        // Get Pet data
        Route::get("/get-pet-data", "PetController@getData");
        // Delete Pet
        Route::post("/delete-pet", "PetController@delete");
        // Update Pet
        Route::post("/update-pet-data", "PetController@updatePet");
        // Get pet list 
        Route::get('/get-pet-list', "PetController@list");
        // End


        ####### Boarding ########
        // Get Available Kennels
        Route::get('/get-available-kennels', "BoardingController@getKennels");
    
        // Submit Order
        Route::post('/submit-boarding-booking', "BoardingController@submitOrder");
        ######## END ############


        ######### Groooming #############
        // submite grooming order
        Route::post("/submit-grooming-order", "GroomingController@create");
        ######### END ###################



        ######### History ############
        // get boarding history
        Route::get('/get-boarding-history', "BoardingController@history");
        // Cancel Boarding
        Route::post('/cancel-boarding', "BoardingController@cancel");

        // Get grooming history
        Route::get('/grooming-history', "GroomingController@history");

        // Get Boarding Details
        Route::get("/get-boarding-details", "BoardingController@details");

        // Cancel Grooming 
        Route::post('/cancel-grooming', "GroomingController@cancel");

        // Get Grooming data
        Route::get('/get-grooming-data', "GroomingController@details");
        ########## END ###############
    });
});
Route::post("/custom-login","LoginController@login");
Route::post("/cutomer-registration" , "Auth\RegisterController@customRegistration");
Auth::routes();
Route::any("{any}",function(){
    return view("index");
})->where("any", "^(?!api|home$).*$");




