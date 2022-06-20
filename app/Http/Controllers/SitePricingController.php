<?php

namespace App\Http\Controllers;

use App\Models\SitePricing;
use Illuminate\Http\Request;

class SitePricingController extends Controller
{
    public function index()
    {
        $data = SitePricing::orderBy("sort_number","asc")->get();
        return response()->json($data);
    }
}
