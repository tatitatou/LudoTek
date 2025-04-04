<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customers';

    protected $primaryKey = 'customerId';

    public $incrementing = true;

    protected $fillable = [
        'name',
        'mail',
        'phone'
    ];

    public function bookings(): HasMany {
        return $this->hasMany(Booking::class);
    }
    
    use HasFactory;
}
