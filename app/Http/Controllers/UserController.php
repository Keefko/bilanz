<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{

    public function index()
    {
        return User::all();
    }


    public function store(Request $request)
    {
        $user = User::create(
            $request->only('name', 'email') + ['password' => Hash::make($request->input('password'))]
        );

        return response($user, Response::HTTP_CREATED);
    }


    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->update($request->only('name', 'email'));

        return \response($user, Response::HTTP_ACCEPTED);
    }


    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();

        return \response(null, Response::HTTP_ACCEPTED);
    }
}
