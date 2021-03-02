<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    protected $table = 'sections';
    public $primaryKey = 'id';
    public $timestamps = false;

    private $img;
    private $title;
    private $text;
    private $slug;
}