<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $customers = [
            [
                'name' => 'Maxime BOURCIEZ',
                'mail' => 'mbourciez@mail.fr',
                'phone' => '+33 6 59 87 41 22',
            ],
            [
                'name' => 'Jules VINET LATRILLE',
                'mail' => 'jvlatrille@mail.fr',
                'phone' => '+33 6 45 63 58 77',
            ],
            [
                'name' => 'Thibault LATXAGUE',
                'mail' => 'tlatxague@mail.fr',
                'phone' => '+33 6 89 45 20 11',
            ],
            [
                'name' => 'François BARLIC',
                'mail' => 'fbarlic@mail.fr',
                'phone' => '+33 6 77 85 69 84',
            ],
            [
                'name' => 'Thibault CHIPY',
                'mail' => 'tchipy@mail.fr',
                'phone' => '+33 6 35 48 66 52',
            ],
        ];

        DB::table('customers')->insert($customers);
    }
}
