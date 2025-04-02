<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Models\Booking;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class BookingController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Booking::all());
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'bookingDate' => 'required|date',
            'bookingStatus' => 'required|string',
            'customerId' => 'required|number',
            'gameId' => 'required|number',
        ]);

        $booking = Booking::create($validated);
        return response()->json($booking, 201);
    }

    public function show(int $id): JsonResponse
    {
        $booking = Booking::findOrFail($id);
        return response()->json($booking, 200);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $validated = $request->validate([
            'bookingDate' => 'required|date',
            'bookingStatus' => 'required|string',
            'customerId' => 'required|number',
            'gameId' => 'required|number',
        ]);
    
        $booking = Booking::findOrFail($id);
        $booking->update($validated);
    
        return response()->json($booking, 200);
    }

    public function destroy(int $id): JsonResponse
    {
        $booking = Booking::findOrFail($id);
        $booking->delete();
        return response()->json(['message' => 'Booking deleted'], 200);
    }
}
