<?php

namespace App\Http\Controllers;

use App\Models\SiteBanner;
use Illuminate\Http\Request;

class SiteBannerController extends Controller
{
    public function index()
    {
        $data = SiteBanner::find(1);
        return response()->json($data);
    }
}
