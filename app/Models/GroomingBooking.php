<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GroomingBooking extends Model
{
    use HasFactory;

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'pets' => 'array',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class,"customer_id");
    }
}

