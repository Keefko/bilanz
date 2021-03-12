<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('icon');
            $table->string('title');
            $table->longtext('text');
            $table->string('img');
            $table->string('button_text');
            $table->string('button_url');
            $table->string('slug');
            $table->boolean('calc');
            $table->boolean('journey');
            $table->boolean('others');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('services');
    }
}
