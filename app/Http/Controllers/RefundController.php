<?php

namespace App\Http\Controllers;

use App\Http\Requests\RefundRequest;
use App\Models\Refund;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RefundController extends Controller
{
    public function index(){
        return response(Refund::all(), Response::HTTP_OK);
    }

    public function store(RefundRequest $request){
        return \response(Refund::create($request->all()), Response::HTTP_CREATED );
    }

    public function update(RefundRequest $request,$id){
        $refund = Refund::findOrFail($id);
        $refund->update($request->all());
        return response($refund, Response::HTTP_ACCEPTED);
    }

    public function destroy($id){
        $refund = Refund::findOrFail($id);
        $refund->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
