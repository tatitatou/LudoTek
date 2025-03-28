<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customer';

    protected $primaryKey = 'customerId';

    public $incrementing = true;

    protected $fillable = [
        'name',
        'mail',
        'phone'
    ];


    
    use HasFactory;
}
