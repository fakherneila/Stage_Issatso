<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Encadreur extends Model
{
    protected $fillable = [
        'nom',
        'prenom',
        'adresse',
        'email',
        'telephone',
        'autre_telephone',
        'fonction',
        'societe_id'
    ];

    public function societe()
    {
        return $this->belongsTo(Societe::class);
    }
}
