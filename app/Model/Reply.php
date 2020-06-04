<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Reply extends Model
{
    protected $guarded = [];

    public static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub
        static::creating(function ($reply) {
            $reply->user_id = auth()->id();
        });
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
    
    public function question() {
        return $this->belongsTo(Question::class);
    }

    public function likes() {
        return $this->hasMany(Like::class);
    }
}
