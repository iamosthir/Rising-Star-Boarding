@php
    $routeName = \Route::currentRouteName();
@endphp
@extends('layouts.master')
@section('content')
    <router-view></router-view>
@endsection