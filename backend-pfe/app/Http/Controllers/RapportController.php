<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rapport;

class RapportController extends Controller
{
    public function index() {
        return Rapport::all();
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'nom' => 'required|string',
            'prenom' => 'required|string',
            'code_sujet' => 'required|string',
            'version_pdf' => 'required|file|mimes:pdf|max:2048',
            'mots_cles' => 'required|string',
        ]);

        // Sauvegarde du fichier PDF
        if ($request->hasFile('version_pdf')) {
            $path = $request->file('version_pdf')->store('rapports', 'public');
            $validated['version_pdf'] = $path;
        }

        return Rapport::create($validated);
    }

    public function show($id) {
        return Rapport::findOrFail($id);
    }

    public function update(Request $request, $id) {
        $rapport = Rapport::findOrFail($id);
        $rapport->update($request->all());
        return $rapport;
    }

    public function destroy($id) {
        Rapport::destroy($id);
        return response()->json(['message' => 'Deleted successfully']);
    }
}
