<?php

namespace App\Http\Controllers;

use App\Http\Requests\SectionRequest;
use App\Models\Section;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SectionController extends Controller
{
    public function index(){
        return response(Section::all(), Response::HTTP_OK);
    }

    public function show($id){
        $section = Section::findOrFail($id);
        return response($section, Response::HTTP_OK);
    }

    public function update(SectionRequest $request, $id){
        $section = Section::findOrFail($id);
        $section->update($request->all());
        return response($section, Response::HTTP_ACCEPTED);
    }
}
