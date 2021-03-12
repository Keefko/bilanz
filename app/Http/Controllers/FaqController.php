<?php

namespace App\Http\Controllers;

use App\Http\Requests\FaqRequest;
use App\Models\Faq;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class FaqController extends Controller
{
    public function index(){
        return response(Faq::all(), Response::HTTP_OK);
    }

    public function store(FaqRequest $request){
        $faq = Faq::create($request->all());
        return \response($faq, Response::HTTP_CREATED);
    }
    public function update(FaqRequest $request, $id){
        $faq = Faq::findOrFail($id);
        $faq->update($request->all());
        return \response($faq, Response::HTTP_ACCEPTED);
    }

    public function destroy($id){
        $faq = Faq::findOrFail($id);
        $faq->delete();
        return \response(null , Response::HTTP_NO_CONTENT);
    }

}
