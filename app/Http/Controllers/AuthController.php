<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{

    public function register(RegisterRequest $request){
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);

        return response($user, Response::HTTP_CREATED);
    }


    public function login(Request $request){
        if(!Auth::attempt($request->only('name', 'password'))){
            return \response(['error' => 'Zadali ste nesprávne údaje'], Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();
        $cookie = cookie('user', $user, 60*24);
        return \response($user,Response::HTTP_OK)->withCookie($cookie);
    }
}
