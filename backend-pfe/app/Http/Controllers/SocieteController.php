<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Societe;

class SocieteController extends Controller
{
     public function index() {
        return Societe::all();
    }

    public function store(Request $request) {
        return Societe::create($request->all());
    }

    public function show($id) {
        return Societe::findOrFail($id);
    }

    public function update(Request $request, $id) {
        $societe = Societe::findOrFail($id);
        $societe->update($request->all());
        return $societe;
    }

    public function destroy($id) {
        Societe::destroy($id);
        return response()->json(['message' => 'Deleted successfully']);
    }
}
