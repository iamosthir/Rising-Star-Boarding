<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $req)
    {
        $this->validate($req,[
            "email" => "required|exists:customer_accounts,email",
            "password" => "required",
        ],[
            "email.required" => "Please provide your email",
            "email.exists" => "This email address was not found",
            "password.required" => "Your'e missing the password",
        ]);

        if(Auth::attempt(['email' => $req->email, 'password' => $req->password],$req->remember))
        {
            return [
                "status" => "ok",
                "msg" => "Login success"
            ];
        }
        else
        {
            return[
                "status" => "fail",
                "msg" => "Invalid email or password !",
            ];
        }
    }

    public function logout()
    {
        if(Auth::check())
        {
            Auth::logout();
            return [
                "status" => "ok"
            ];
        }
    }
}
