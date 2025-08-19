<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Encadreur;

class EncadreurController extends Controller
{
    // Récupérer tous les encadreurs
    public function index()
    {
        return Encadreur::with('societe')->get(); // inclut la société liée
    }

    // Créer un nouvel encadreur
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string',
            'prenom' => 'required|string',
            'adresse' => 'required|string',
            'email' => 'required|email|unique:encadreurs',
            'telephone' => 'required|string',
            'autre_telephone' => 'nullable|string',
            'fonction' => 'required|string',
            'societe_id' => 'required|exists:societes,id'
        ]);

        return Encadreur::create($validated);
    }

    // Afficher un encadreur spécifique
    public function show($id)
    {
        return Encadreur::with('societe')->findOrFail($id);
    }

    // Mettre à jour un encadreur
    public function update(Request $request, $id)
    {
        $encadreur = Encadreur::findOrFail($id);

        $validated = $request->validate([
            'nom' => 'sometimes|string',
            'prenom' => 'sometimes|string',
            'adresse' => 'sometimes|string',
            'email' => 'sometimes|email|unique:encadreurs,email,' . $id,
            'telephone' => 'sometimes|string',
            'autre_telephone' => 'nullable|string',
            'fonction' => 'sometimes|string',
            'societe_id' => 'sometimes|exists:societes,id'
        ]);

        $encadreur->update($validated);
        return $encadreur;
    }

    // Supprimer un encadreur
    public function destroy($id)
    {
        Encadreur::destroy($id);
        return response()->json(['message' => 'Encadreur supprimé avec succès']);
    }
}