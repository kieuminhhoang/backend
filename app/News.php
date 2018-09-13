<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model
{
    use SoftDeletes;
    protected $fillable = ['name_imf', 'imf', 'img', 'user_id'];
    protected $hidden = [];

    public function setCompanyIdAttribute($input)
    {
        $this->attributes['user_id'] = $input ? $input : null;
    }

    public function company()
    {
        return $this->belongsTo(User::class, 'user_id')->withTrashed();
    }

}
