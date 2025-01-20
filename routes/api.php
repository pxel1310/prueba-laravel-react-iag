<?php

use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\LogoutController;
use App\Http\Controllers\Api\RegisterController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);

// Ruta protegida
Route::middleware('auth:sanctum')->post('/logout', [LogoutController::class, 'logout']);
