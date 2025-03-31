<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
use App\Http\Controllers\api\gameController;
Route::apiresource('game', gameController::class);

// Routes pour les sauces
Route::get('/', [gameController::class, 'index'])->name('games.index');
Route::get('/games', [gameController::class, 'index'])->name('games.index');
Route::get('/games/create', [gameController::class, 'create'])->name('games.create');
Route::post('/games/store', [gameController::class, 'store'])->name('games.store');
Route::get('/game/{id}', [gameController::class, 'show'])->name('games.show');
Route::get('/game/edit/{id}', [gameController::class, 'edit'])->name('games.edit');
Route::put('/game/update/{id}', [gameController::class, 'update'])->name('games.update');
Route::delete('/game/destroy/{id}', [gameController::class, 'destroy'])->name('games.destroy');