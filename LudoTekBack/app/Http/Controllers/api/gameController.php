<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Models\Game;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class gameController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Game::all());
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'imageUrl' => 'required|string',
            'plateform' => 'required|string',
            'sort' => 'nullable|string',
            'developper' => 'required|string',
            'releaseDate' => 'required',
            'inventory' => 'nullable|integer'
        ]);

        $game = Game::create($validated);
        return response()->json($game, 201);
    }

    public function show(int $id): JsonResponse
    {
        $game = Game::findOrFail($id);
        return response()->json($game, 200);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'imageUrl' => 'required|string',
            'plateform' => 'required|string',
            'sort' => 'nullable|string',
            'developper' => 'required|string',
            'releaseDate' => 'required',
            'inventory' => 'nullable|integer'
        ]);
    
        $game = Game::findOrFail($id);
        $game->update($validated);
    
        return response()->json($game, 200);
    }

    public function destroy(int $id): JsonResponse
    {
        $game = Game::findOrFail($id);
        $game->delete();
        return response()->json(['message' => 'Game deleted'], 200);
    }
}



    
