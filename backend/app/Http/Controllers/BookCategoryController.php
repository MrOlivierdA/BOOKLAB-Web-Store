<?php

namespace App\Http\Controllers;

use App\Http\Requests\Storebook_categoryRequest;
use App\Http\Requests\Updatebook_categoryRequest;
use App\Models\book_category;

class BookCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Storebook_categoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Storebook_categoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\book_category  $book_category
     * @return \Illuminate\Http\Response
     */
    public function show(book_category $book_category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\book_category  $book_category
     * @return \Illuminate\Http\Response
     */
    public function edit(book_category $book_category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Updatebook_categoryRequest  $request
     * @param  \App\Models\book_category  $book_category
     * @return \Illuminate\Http\Response
     */
    public function update(Updatebook_categoryRequest $request, book_category $book_category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\book_category  $book_category
     * @return \Illuminate\Http\Response
     */
    public function destroy(book_category $book_category)
    {
        //
    }
}
