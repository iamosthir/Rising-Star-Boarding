@php
    $seo = \App\Models\Seo::find(1);
@endphp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home - Rising Star Boarding</title>

    {{-- styles --}}
    <link rel="stylesheet" href="{{ asset("css/bootstrap.min.css") }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" 
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="stylesheet" href="{{ asset("css/main.css") }}">

    {{-- Fav Icons --}}
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset("image/favico/apple-touch-icon.png") }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset("image/favico/favicon-32x32.png") }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset("image/favico/favicon-16x16.png") }}">
    <link rel="manifest" href="{{ asset("image/favico/site.webmanifest") }}">
    <link rel="mask-icon" href="{{ asset("image/favico/safari-pinned-tab.svg") }}" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#603cba">
    <meta name="theme-color" content="#ffffff">
    {{-- Endd --}}

    {{-- Meta Tags --}}
    <!-- Primary Meta Tags -->
    <meta name="title" content="{{ $seo->title }}">
    <meta name="description" content="{{ $seo->desc }}">
    <meta name="keywords" content="{{ $seo->keywords }}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url("/") }}">
    <meta property="og:title" content="{{ $seo->title }}">
    <meta property="og:description" content="{{ $seo->desc }}">
    <meta property="og:image" content="{{ asset("image/meta.png") }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ url("/") }}">
    <meta property="twitter:title" content="{{ $seo->title }}">
    <meta property="twitter:description" content="{{ $seo->desc }}">
    <meta property="twitter:image" content="{{ asset("image/meta.png") }}">
    {{-- End --}}
</head>
<body>
    
    {{-- main content --}}
    <div id="app">
        <vue-progress-bar></vue-progress-bar>
        {{-- Header --}}
        <header>
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                            <a class="navbar-brand" href="#"><img src="/image/logo.png" alt=""></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a data-nav-custom="none" class="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a data-nav-custom="about" class="nav-link" aria-current="page" href="/#about-us">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a data-nav-custom="pricing" class="nav-link" aria-current="page" href="/#pricing">Pricing</a>
                                </li>
                                <li class="nav-item">
                                    <a data-nav-custom="none" class="nav-link" aria-current="page" href="/contact-us">Contact Us</a>
                                </li>


                                @guest
                                <li class="nav-item">
                                    <a data-nav-custom="none"  href="/login" class="nav-link" aria-current="page">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a data-nav-custom="none" href="/register" class="nav-link" aria-current="page">Register</a>
                                </li> 
                                @endguest
                                
                                
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        {{-- End --}}

        @yield('content')




        
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-6 text-start">
                        <ul>
                            <li><a href="{name: 'terms'}">Terms & Conditions</a></li>
                            <li><a href="{name: 'privacy'}">Privacy & Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-6 text-end">
                        <ul>
                            <li><a href="{name: 'login'}">Login</a></li>
                            <li><a href="{name: 'register'}">Register new account</a></li>
                        </ul>
                    </div>
                    <hr class="text-white">
                    <div class="col-md-12 text-center">
                            <p class="text-white">© {{ \Carbon\Carbon::now()->format("Y") }} Rising Star Boarding | All Rights Reserved</p>
                        </div>
                </div>
            </div>
        </footer>

        <div class="wrapper" id="loader">
            <div class="pulse-spinner"></div>
        </div>
    </div>
    {{-- End --}}
    <script src="{{ asset("js/jquery.min.js") }}"></script>
    <script src="{{ asset("js/app.js") }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" 
    integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="{{ asset("js/bootstrap.min.js") }}"></script>
    <script>
        $(window).on("load",function(){
            $("#loader").remove();
        });

        $('a[data-nav-custom]').each(function(){
            $(this).click(function(){
                if($(this).data("nav-custom") == "none")
                {
                    $('a[data-nav-custom]').removeClass("active");
                    $(this).addClass("active")
                }
                else
                {
                    $('a[data-nav-custom]').removeClass("active");
                    $(this).addClass("active");
                }
            });
        })
    </script>
</body>
</html>