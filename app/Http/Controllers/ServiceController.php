<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ServiceController extends Controller
{

    public function index()
    {
        return response(Service::all(), Response::HTTP_OK);
    }


    public function store(Request $request)
    {
        return \response(Service::create($request->all()), Response::HTTP_CREATED);
    }

    public function name($slug){
        return \response(Service::where('slug', $slug)->firstOrFail(), Response::HTTP_OK);
    }

    public function show($slug)
    {
        return \response(Service::where('slug', $slug)->firstOrFail(), Response::HTTP_OK);
    }


    public function update(Request $request, $id)
    {
        $service = Service::findOrFail($id);
        $service->update($request->all());

        return \response($service, Response::HTTP_ACCEPTED);
    }


    public function destroy($id)
    {
        $service = Service::findOrFail($id);

        $service->delete();

        return \response(null, Response::HTTP_NO_CONTENT);
    }
}
