<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Etudiant;

class EtudiantController extends Controller
{
    // Récupérer tous les étudiants
    public function index()
    {
        return Etudiant::all();
    }

    // Créer un étudiant
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string',
            'prenom' => 'required|string',
            'niveau' => 'required|string',
            'telephone' => 'required|string',
            'email' => 'required|email|unique:etudiants',
            'specialite' => 'required|string',
        ]);

        return Etudiant::create($validated);
    }

    // Afficher un étudiant spécifique
    public function show($id)
    {
        return Etudiant::findOrFail($id);
    }

    // Mettre à jour un étudiant
    public function update(Request $request, $id)
    {
        $etudiant = Etudiant::findOrFail($id);

        $validated = $request->validate([
            'nom' => 'sometimes|string',
            'prenom' => 'sometimes|string',
            'niveau' => 'sometimes|string',
            'telephone' => 'sometimes|string',
            'email' => 'sometimes|email|unique:etudiants,email,' . $id,
            'specialite' => 'sometimes|string',
        ]);

        $etudiant->update($validated);
        return $etudiant;
    }

    // Supprimer un étudiant
    public function destroy($id)
    {
        Etudiant::destroy($id);
        return response()->json(['message' => 'Étudiant supprimé avec succès']);
    }
}