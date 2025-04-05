<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bookings = [
            [
                'bookingDate' => '2025-02-07',
                'bookingStatus' => 'Confirmed',
                'customerId' => '1',
                'gameId' => '1',
            ],
            [
                'bookingDate' => '2025-02-07',
                'bookingStatus' => 'Cancelled',
                'customerId' => '3',
                'gameId' => '4',
            ],
            [
                'bookingDate' => '2025-02-07',
                'bookingStatus' => 'Confirmed',
                'customerId' => '5',
                'gameId' => '2',
            ],
            [
                'bookingDate' => '2025-02-07',
                'bookingStatus' => 'Confirmed',
                'customerId' => '2',
                'gameId' => '3',
            ],
            [
                'bookingDate' => '2025-02-07',
                'bookingStatus' => 'Confirmed',
                'customerId' => '4',
                'gameId' => '5',
            ],
        ];

        DB::table('bookings')->insert($bookings);
    }
}
