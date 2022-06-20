<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\CustomerAccount;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\CustomerAccount
     */
    protected function create(array $data)
    {
        return CustomerAccount::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    public function customRegistration(Request $req)
    {
        $this->validate($req,[
            "first_name" => "required",
            "last_name" => "required",
            "email" => "required|email|unique:customer_accounts,email",
            "password" => "required|min:8|confirmed",
        ],[
            "email.unique" => "This email is already taken",
            "password.confirmed" => "Password is not matching"
        ]);

        $customer = new CustomerAccount();
        $customer->first_name = $req->first_name;
        $customer->last_name = $req->last_name;
        $customer->email = $req->email;
        $customer->password = bcrypt($req->password);
        $customer->save();
        Auth::attempt(['email' => $req->email, 'password' => $req->password],true);
        return[
            "status" => "ok",
        ];
    }
}
