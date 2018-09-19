<!DOCTYPE html>
<html lang="en">

<head>
    @include('support.head')
</head>


<body>

<div id="app">
    @include('support.header')
    @include('support.slider')
    @yield('content')
    @include('support.footer')
</div>

@include('support.javascripts')
</body>
</html>