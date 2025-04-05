<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id('bookingId');
            $table->date('bookingDate');
            $table->enum('bookingStatus',['Pending', 'Confirmed','Cancelled'])->default('Pending');
            $table->unsignedBigInteger('customerId');
            $table->unsignedBigInteger('gameId');
            
            
            $table->foreign('customerId') 
                ->references('customerId')->on('customers')
                ->onDelete('cascade');
            $table->foreign('gameId') 
                ->references('gameId')->on('games') 
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
