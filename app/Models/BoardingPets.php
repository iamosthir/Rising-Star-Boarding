<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BoardingPets extends Model
{
    use HasFactory;

    public function pet()
    {
        return $this->belongsTo(Pets::class,"pet_id");
    }
    public function kennel()
    {
        return $this->belongsTo(Kennel::class,"kennel_id");
    }
}
