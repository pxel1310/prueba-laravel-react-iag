<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'Laravel') }}  - IAG</title>
    <script src="https://cdn.tailwindcss.com"></script>


    <!-- Vite -->
    @vitereactrefresh
    @vite(['resources/js/app.jsx'])
</head>
{{--    Tailwind CSS--}}
<body class="font-sans text-lg">
<div id="app">
</div>
    </body>
</html>
