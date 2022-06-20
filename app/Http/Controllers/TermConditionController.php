<?php

namespace App\Http\Controllers;

use App\Models\TermCondition;
use Illuminate\Http\Request;

class TermConditionController extends Controller
{
    public function index(Request $req)
    {
        $data = TermCondition::find(1);

        return [
            "content" => $data->content
        ];
    }
}
