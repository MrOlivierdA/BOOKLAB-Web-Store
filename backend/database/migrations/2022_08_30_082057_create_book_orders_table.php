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
        Schema::create('book_orders', function (Blueprint $table) {
            $table->id();
            $table->integer('bookId');
            $table->integer('orderId');
            $table->integer('quantity');
            $table->index('bookId');
            $table->index('orderId');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('book_orders');
    }
};
