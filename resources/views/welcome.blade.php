@extends('layouts.home')

@section('content')
<div class="main-content-wrapper section-padding-100">
    <div class="container">
    	<div class="row justify-content-center">
    		<div class="col-12 col-lg-8">
			    <router-view name="hBody"></router-view>
			    <router-view name="bBody"></router-view>
			</div>
			<router-view name="fBody"></router-view>
			<router-view></router-view>
		</div>
	</div>
</div>
@endsection