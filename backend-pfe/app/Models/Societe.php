<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Societe extends Model
{
    protected $fillable = [
        'nom',
        'domaine_activite',
        'email',
        'adresse',
        'telephone'
    ];

    public function encadreurs()
    {
        return $this->hasMany(Encadreur::class);
    }
}
