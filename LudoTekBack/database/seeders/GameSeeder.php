<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $games = [
            [
                'title' => 'New Super Mario Bros',
                'imageUrl' => 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_ds_22/SI_NDS_NewSuperMarioBrosDS_image1600w.jpg',
                'plateform' => 'Wii',
                'sort' => 'plateform game',
                'developper' => 'Nintendo',
                'releaseDate' => '2006-05-15',
                'inventory' => 8,
            ],
            [
                'title' => 'Animal Crossing: New Horizons',
                'imageUrl' => 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AnimalCrossingNewHorizons_image1600w.jpg',
                'plateform' => 'Switch',
                'sort' => 'adventure',
                'developper' => 'Nintendo',
                'releaseDate' => '2020-03-20',
                'inventory' => 4,
            ],
            [
                'title' => 'Minecraft',
                'imageUrl' => 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_Minecraft.jpg',
                'plateform' => 'pc',
                'sort' => 'survival',
                'developper' => 'Mojang',
                'releaseDate' => '2009-05-17',
                'inventory' => 7,
            ],
            [
                'title' => 'Sims 4',
                'imageUrl' => 'https://cdn1.epicgames.com/offer/2a14cf8a83b149919a2399504e5686a6/EGS_TheSims4DigitalDeluxeUpgrade_Maxis_DLC_S1_2560x1440-dd3e4bdf8936608a2d109d26a4bab26f',
                'plateform' => 'pc',
                'sort' => 'simulation',
                'developper' => 'Electronics art',
                'releaseDate' => '2014-09-02',
                'inventory' => 3,
            ],
            [
                'title' => 'The Legend of Zelda: Breath of the Wild',
                'imageUrl' => 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild.jpg',
                'plateform' => 'Switch',
                'sort' => 'adventure',
                'developper' => 'Nintendo',
                'releaseDate' => '2017-03-03',
                'inventory' => 12,
            ],
        ];

        DB::table('games')->insert($games);
    }
}
