<?php

namespace App\Http\Controllers;

use App\Models\EncadreurPedagogique;
use Illuminate\Http\Request;
class EncadreurPedagogiqueController extends Controller
{
    public function index()
    {
        return EncadreurPedagogique::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string',
            'prenom' => 'required|string',
            'email' => 'required|email|unique:encadreur_pedagogiques',
            'num_tel' => 'required|string|max:20',
        ]);

        return EncadreurPedagogique::create($request->all());
    }

    public function show($id)
    {
        return EncadreurPedagogique::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $encadreur = EncadreurPedagogique::findOrFail($id);
        $encadreur->update($request->all());
        return $encadreur;
    }

    public function destroy($id)
    {
        return EncadreurPedagogique::destroy($id);
    }
}