<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('v1')->group(function () {
    Route::get("/banner-data","SiteBannerController@index");
    Route::get("/get-about-us","SiteAboutController@index");
    Route::get("/get-pricings","SitePricingController@index");
    Route::get("/get-terms-and-conditions","TermConditionController@index");
    Route::get("/get-privacy", "PrivacyController@index");
    Route::get('/get-contact-data',"SiteAboutController@contact");
});