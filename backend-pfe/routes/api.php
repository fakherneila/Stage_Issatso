
<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SocieteController;
use App\Http\Controllers\EncadreurController;
use App\Http\Controllers\EtudiantController;

use App\Http\Controllers\RapportController;

Route::apiResource('rapports', RapportController::class);
Route::apiResource('societes', SocieteController::class);
Route::apiResource('encadreurs', EncadreurController::class);
Route::apiResource('etudiants', EtudiantController::class);


?>