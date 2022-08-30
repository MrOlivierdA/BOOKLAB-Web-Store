<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->char('firstName');
            $table->char('lastName');
            $table->char('email')->unique();
            $table->char('street')->nullable();
            $table->integer('number')->nullable();
            $table->char('city')->nullable();
            $table->integer('postalCode')->nullable();
            $table->char('country')->nullable();
            $table->integer('status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
