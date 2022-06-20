<?php

namespace App\Http\Controllers;

use App\Models\Privacy;
use Illuminate\Http\Request;

class PrivacyController extends Controller
{
    public function index()
    {
        $data = Privacy::find(1);
        return [
            "content" => $data->content
        ];
    }
}
