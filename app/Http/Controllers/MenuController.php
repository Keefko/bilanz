<?php

namespace App\Http\Controllers;

use App\Http\Requests\MenuRequest;
use App\Http\Resources\MenuResource;
use App\Models\Menu;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class MenuController extends Controller
{
    public function index(){
        return response(MenuResource::collection(Menu::all()), Response::HTTP_OK);
    }

    public function store(MenuRequest $request){
        return \response(Menu::create($request->all()), Response::HTTP_CREATED);
    }

    public function update(MenuRequest $request, $id){
        $menu = Menu::findOrFail($id);
        $menu->update($request->all());
        return \response($menu, Response::HTTP_ACCEPTED);
    }

    public function destroy($id){
        $menu = Menu::findOrFail($id);
        $menu->delete();
        return \response(null, Response::HTTP_NO_CONTENT);
    }
}
