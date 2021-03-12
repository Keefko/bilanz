<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PageController extends Controller
{
    public function index(){
        return response(Page::all(), Response::HTTP_OK);
    }

    public function show($slug){
        return \response(Page::where('slug', $slug)->firstOrFail(), Response::HTTP_OK);
    }

    public function store(Request $request){
        $this->validate($request, [
            'title' => 'required'
        ]);
        return response(Page::create($request->all()), Response::HTTP_CREATED);
    }

    public function update(Request $request, $id){

        $this->validate($request, [
            'title' => 'required'
        ]);

        $page = Page::findOrFail($id);
        $page->update($request->all());

        return response($page, Response::HTTP_ACCEPTED);
    }

    public function destroy($id){
        $page = Page::findOrFail($id);
        $page->delete();

        return \response(null, Response::HTTP_NO_CONTENT);
    }
}
