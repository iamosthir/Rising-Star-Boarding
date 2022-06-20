<?php

namespace App\Providers;

use App\Models\EmailSetup;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;

class MailConfigProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $mailData = EmailSetup::where("default_email",true)->first();

        if(!is_null($mailData))
        {
            $config = array(
                "driver" => $mailData->driver,
                "host" => $mailData->host,
                'port'       =>     $mailData->port,
                'username'   =>     $mailData->user_name,
                'password'   =>     $mailData->password,
                'encryption' =>     $mailData->encryption,
                'from'       =>     array('address' => $mailData->sender_email, 'name' => $mailData->sender_name),
            );
        }
        else
        {
            $config = array(
                "driver" => "smtp",
                "host" => "",
                'port'       =>     "",
                'username'   =>     "",
                'password'   =>     "",
                'encryption' =>     "",
                'from'       =>     array('address' => "", 'name' => ""),
            );
        }
        Config::set('mail', $config);
    }
}
