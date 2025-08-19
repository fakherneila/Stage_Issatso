<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
       Schema::create('encadreurs', function (Blueprint $table) {
    $table->id();
    $table->string('nom');
    $table->string('prenom');
    $table->string('adresse');
    $table->string('email')->unique();
    $table->string('telephone');
    $table->string('autre_telephone')->nullable();
    $table->string('fonction');
    $table->foreignId('societe_id')->constrained()->onDelete('cascade'); // Relation avec société
    $table->timestamps();
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('encadreurs');
    }
};
