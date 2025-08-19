<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rapport extends Model
{
     

    protected $fillable = [
        'nom',
        'prenom',
        'code_sujet',
        'version_pdf',
        'mots_cles',
    ];
}
