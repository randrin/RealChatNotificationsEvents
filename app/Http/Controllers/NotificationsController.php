<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationsResource;
use Illuminate\Http\Request;

class NotificationsController extends Controller
{
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
