<?php

namespace App\Http\Controllers;

use App\Models\ContactInformation;
use App\Models\SiteAbout;
use Illuminate\Http\Request;

class SiteAboutController extends Controller
{
    public function index()
    {
        $data = SiteAbout::find(1);
        return response()->json($data);
    }

    public function contact()
    {
        $data = ContactInformation::find(1);
        return response()->json($data);
    }
}
