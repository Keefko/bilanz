<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\JourneyController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\RefundController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);


Route::apiResource('users', UserController::class);
Route::apiResource('services', ServiceController::class);
Route::apiResource('sections', SectionController::class);
Route::apiResource('pages', PageController::class);
Route::apiResource('contacts', ContactController::class);
Route::apiResource('faqs', FaqController::class);
Route::apiResource('refunds', RefundController::class);
Route::apiResource('journeys', JourneyController::class);
Route::apiResource('menus', MenuController::class);

Route::post('upload', [ImageController::class, 'upload']);
Route::get('name', [ServiceController::class, 'name']);
