<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $table = 'games';

    protected $primaryKey = 'gameId';

    public $incrementing = true;

    protected $fillable = [
        'title',
        'imageUrl',
        'plateform',
        'sort',
        'developper',
        'releaseDate',
        'inventory'
    ];

    public function bookings(): HasMany {
        return $this->hasMany(Booking::class);
    }

    use HasFactory;
}
