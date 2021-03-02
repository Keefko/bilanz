<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImageRequest;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImageController extends Controller
{
    public function upload(ImageRequest $request){
        $file = $request->file('image');
        $name = Str::random(10);
        $url = Storage::putFileAs('images', $file, $name . '.' . $file->extension());

        return [ 'url' => env('APP_URL'). '/' . $url];
    }
}
