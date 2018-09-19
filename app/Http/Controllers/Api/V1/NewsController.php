<?php

namespace App\Http\Controllers\Api\V1;

use App\News;
use App\Http\Controllers\Controller;
use App\Http\Resources\News as NewsResource;
use App\Http\Requests\Admin\StoreNewsRequest;
use App\Http\Requests\Admin\UpdateNewsRequest;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        return new NewsResource(News::with(['user'])->get());
    }

    public function show($id)
    {
        $news = News::with(['user'])->findOrFail($id);

        return new NewsResource($news);
    }

    public function store(StoreNewsRequest $request)
    {
        $news = News::create($request->all());

        return (new NewsResource($news))
            ->response()
            ->setStatusCode(201);
    }

    public function update(UpdateNewsRequest $request, $id)
    {
        $news = News::findOrFail($id);
        $news->update($request->all());

        return (new NewsResource($news))
            ->response()
            ->setStatusCode(202);
    }

    public function destroy($id)
    {
        $news = News::findOrFail($id);
        $news->delete();
        return response(null, 204);
    }
}
