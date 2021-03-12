<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ContactController extends Controller
{
    public function show($id){
        $contact = Contact::with('faqs')->findOrFail($id);
        return response($contact, Response::HTTP_OK);
    }

    public function update(ContactRequest $request, $id){
        $contact = Contact::findOrFail($id);
        $contact->update($request->all());
        return response(new ContactResource($contact), Response::HTTP_ACCEPTED);
    }
}
