<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Booking extends Model
{
    protected $table = 'bookings';

    protected $primaryKey = 'bookingId';

    public $incrementing = true;

    protected $fillable = [
        'bookingDate',
        'bookingStatus',
        'customerId',
        'gameId'
    ];

    public function game(): BelongsTo {
        return $this->belongsTo(Game::class, 'gameId');
    }

    public function customer(): BelongsTo {
        return $this->belongsTo(Customer::class, 'customerId');
    }

    protected $hidden = ['gameId', 'customerId'];


    use HasFactory;
}
