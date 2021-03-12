<?php

namespace App\Http\Controllers;

use App\Models\Journey;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class JourneyController extends Controller
{
    public function index(){
        return response(Journey::all(), Response::HTTP_OK);
    }

    public function store(Request $request){
        return \response(Journey::create($request->all()), Response::HTTP_CREATED);
    }

    public function update(Request $request, $id){
        $journey = Journey::findOrFail($id);
        $this->validate($request, [
            'title' => 'required'
        ]);
        $journey->update($request->all());

        return \response($journey, Response::HTTP_ACCEPTED);
    }

    public function destroy($id){
        $journey = Journey::findOrFail($id);
        $journey->delete();
        return \response(null, Response::HTTP_NO_CONTENT);
    }

}
