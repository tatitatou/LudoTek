<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Models\Customer;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class CustomerController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Customer::all());
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'mail' => 'required|string',
            'phone' => 'required|string',
        ]);

        $customer = Customer::create($validated);
        return response()->json($customer, 201);
    }

    public function show(int $id): JsonResponse
    {
        $customer = Customer::findOrFail($id);
        return response()->json($customer, 200);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'mail' => 'required|string',
            'phone' => 'required|string',
        ]);
    
        $customer = Customer::findOrFail($id);
        $customer->update($validated);
    
        return response()->json($customer, 200);
    }

    public function destroy(int $id): JsonResponse
    {
        $customer = Customer::findOrFail($id);
        $customer->delete();
        return response()->json(['message' => 'Customer deleted'], 200);
    }
}
