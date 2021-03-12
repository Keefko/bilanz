<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
{


    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'img' => $this->img,
            'title' => $this->title,
            'address' => $this->address,
            'phone' => $this->phone,
            'mail' => $this->mail,
            'bank' => $this->bank,
            'info' => $this->info,
            'map' => $this->map,
            'faqs' => $this->faqs
        ];
    }
}
