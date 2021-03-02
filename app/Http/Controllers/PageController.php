<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PageController extends Controller
{
    public function index(){
        $pages = Page::all();
        return response($pages, Response::HTTP_OK);
    }

    public function show($slug){
        $page = Page::where('slug', $slug)->first();

        if(!$page){
            return \response('Stránka nebola nájdená', Response::HTTP_NOT_FOUND);
        }

        return \response($page, Response::HTTP_OK);
    }

    public function store(Request $request){
        $this->validate($request, [
            'title' => 'required'
        ]);

        $page = Page::create($request->only('title', 'img', 'text', 'slug'));

        return response($page, Response::HTTP_CREATED);
    }

    public function update(Request $request, $id){

        $this->validate($request, [
            'title' => 'required'
        ]);

        $page = Page::find($id);
        $page->update($request->only('title', 'img', 'text', 'slug'));

        return response($page, Response::HTTP_ACCEPTED);
    }

    public function destroy($id){
        $page = Page::find($id);
        $page->delete();

        return \response(null, Response::HTTP_NO_CONTENT);
    }
}
