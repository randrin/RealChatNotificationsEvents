<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationsResource;
use Illuminate\Http\Request;

class NotificationsController extends Controller
{

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('jwt');
    }

    public function getNotifications() {
        return [
            'read' => NotificationsResource::collection(auth()->user()->readNotifications()->get()),
            'unread' => NotificationsResource::collection(auth()->user()->unreadNotifications()->get())
        ];
    }
    public function markAsRead(Request $request) {
        auth()->user()->notifications->where('id', $request->id)->markAsRead();
    }
}
