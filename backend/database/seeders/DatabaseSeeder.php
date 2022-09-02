<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Author;
use App\Models\Book;
use App\Models\Category;
use App\Models\Order;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Author::factory()->count(20)->create();
        Book::factory()->count(20)->create();
        Category::factory()->count(20)->create();
        Order::factory()->count(20)->create();
        User::factory()->count(20)->create();
    }
}
