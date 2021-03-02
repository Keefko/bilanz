<?php

namespace App\Http\Controllers;

use App\Http\Requests\SectionRequest;
use App\Models\Section;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SectionController extends Controller
{
    public function index(){
        $section = Section::all();
        return response($section, Response::HTTP_OK);
    }

    public function show($id){
        $section = Section::find($id);
        return response($section, Response::HTTP_OK);
    }

    public function update(SectionRequest $request, $id){
        $section = Section::find($id);
        $section->update($request->only('img', 'title', 'text', 'button_one_text','button_one_url','button_two_text','button_two_url'));
    }
}
