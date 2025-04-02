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

use App\Http\Controllers\api\bookingController;
Route::apiresource('booking', bookingController::class);

use App\Http\Controllers\api\CustomerController;
Route::apiresource('customer', CustomerController::class);
