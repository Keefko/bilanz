<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ServiceController extends Controller
{

    public function index()
    {
        $services = Service::all();
        return response($services, Response::HTTP_OK);
    }


    public function store(Request $request)
    {
        $service = Service::create($request->only('icon', 'title', 'text', 'img', 'button_text', 'button_url'));
        return \response($service, Response::HTTP_CREATED);
    }


    public function show($id)
    {
        $service = Service::find($id);
        if(!$service){
            return \response('Služba sa nenašla', Response::HTTP_NOT_FOUND);
        }

        return \response($service, Response::HTTP_OK);
    }


    public function update(Request $request, $id)
    {
        $service = Service::find($id);
        $service->update($request->only('icon', 'title', 'text', 'img', 'button_text', 'button_url'));

        return \response($service, Response::HTTP_ACCEPTED);
    }


    public function destroy($id)
    {
        $service = Service::find($id);

        $service->delete();

        return \response(null, Response::HTTP_NO_CONTENT);
    }
}
