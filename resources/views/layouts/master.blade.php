@php
    $seo = \App\Models\Seo::find(1);
    $about = \App\Models\SiteAbout::find(1)->content;
    $contact = \App\Models\ContactInformation::find(1);
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
        <div id="loader">
            <div class="spinner">
                <img src="{{ asset("image/loader.gif") }}" alt="">
            </div>
        </div>
        <!-- Mobile menu -->
        <div class="side-menu" id="mobileMenu">
            <div class="side-menu-close text-end">
                <button data-mobile-menu-toggle><i class="fas fa-times-circle" title="Close menu"></i></button>
            </div>
            <div class="menu text-center mt-4">
                <h3 class="text-blue"><b>Menu</b></h3>

                <ul class="mobile-menu-item">
                    <li><router-link data-nav-custom="none" :to="{name: 'index'}"><i class="fas fa-paw me-2"></i> Home</router-link></li>
                    <li><a data-nav-custom="about" href="/#about-us"><i class="fas fa-paw me-2"></i> About Us</a></li>
                    <li><a data-nav-custom="pricing" href="/#pricing"><i class="fas fa-paw me-2"></i> Pricing</a></li>
                    <li><router-link data-nav-custom="none" :to="{name: 'contact-us'}"><i class="fas fa-paw me-2"></i> Contact Us</router-link></li>

                    @guest
                        <li><router-link data-nav-custom="none"  :to="{name: 'login'}"><i class="fas fa-paw me-2"></i> Login</router-link></li>
                        <li><router-link data-nav-custom="none" :to="{name: 'register'}"><i class="fas fa-paw me-2"></i> Register</router-link></li>
                    @endguest

                    @auth
                    <li>
                        <a class="nav-link drop-btn-mobile" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fas fa-user"></i> &nbsp; {{ auth()->user()->last_name }}
                        </a>
                        <ul class="dropdown-menu drop-menu-mobile" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="/home"><i class="fas fa-user"></i> &nbsp; Dashboard</a></li>
                            <li><a class="dropdown-item" href="/home/history"><i class="fas fa-clock"></i> &nbsp; My Bookings</a></li>
                            <li><a class="dropdown-item" href="/home/reservation"><i class="fas fa-plus"></i> &nbsp; Start new booking</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <a class="dropdown-item" onclick="event.preventDefault();
                                                    document.getElementById('logout-form2').submit();" href="#"><i class="fas fa-sign-out-alt"></i> &nbsp; Logout</a>
                                <form id="logout-form2" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </li>
                        </ul>
                    </li>
                    @endauth
                </ul>
            </div>
        </div>
        <!-- End -->


        <div class="header" id="nav">
            <nav class="navbar navbar-expand navbar-light top-nav">
                <div class="container">
                    <a class="navbar-brand" href="#"><img src="{{ asset("image/logo.png") }}" alt=""></a>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 top-menu-nav">
                        <li class="nav-item">
                            <router-link data-nav-custom="none" class="nav-link" aria-current="page" :to="{name: 'index'}"><i class="fas fa-paw me-2"></i> Home</router-link>
                        </li>
                        <li class="nav-item">
                            <a data-nav-custom="about" class="nav-link" aria-current="page" href="/#about-us"><i class="fas fa-paw me-2"></i> About Us</a>
                        </li>
                        <li class="nav-item">
                            <a data-nav-custom="pricing" class="nav-link" aria-current="page" href="/#pricing"><i class="fas fa-paw me-2"></i> Pricing</a>
                        </li>
                        <li class="nav-item">
                            <router-link data-nav-custom="none" class="nav-link" aria-current="page" :to="{name: 'contact-us'}"><i class="fas fa-paw me-2"></i> Contact Us</router-link>
                        </li>
                        @guest
                        <li class="nav-item">
                            <router-link data-nav-custom="none"  :to="{name: 'login'}" class="nav-link"><i class="fas fa-paw me-2"></i> Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link data-nav-custom="none" :to="{name: 'register'}" class="nav-link"><i class="fas fa-paw me-2"></i> Register</router-link>
                        </li> 
                        @endguest
                        @auth
                        <li class="nav-item dropdown">
                            <a class="nav-link drop-btn" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="fas fa-user"></i> &nbsp; {{ auth()->user()->last_name }}
                            </a>
                            <ul class="dropdown-menu drop-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/home"><i class="fas fa-user"></i> &nbsp; Dashboard</a></li>
                                <li><a class="dropdown-item" href="/home/history"><i class="fas fa-clock"></i> &nbsp; My Bookings</a></li>
                                <li><a class="dropdown-item" href="/home/reservation"><i class="fas fa-plus"></i> &nbsp; Start new booking</a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li>
                                    <a class="dropdown-item" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();" href="#"><i class="fas fa-sign-out-alt"></i> &nbsp; Logout</a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </li>
                            </ul>
                        </li>
                        @endauth
        
        
                    </ul>
                    <a class="menu-toggle-icon" href="#" data-mobile-menu-toggle>Menu &nbsp; <i class="fas fa-bars"></i></a>
                </div>
            </nav>
        </div>
        {{-- End --}}
        
        @yield('content')




        
        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <h4 class="footer-title">Rising Star Boarding</h4>
                        <p class="footer-about">{{ $about }}</p>
                    </div>
                    <div class="col-md-4">
                        <h4 class="footer-title">Quick Links</h4>
                        <ul class="footer-menu">
                            @guest
                                <li><router-link :to="{name: 'login'}">Login</router-link></li>
                                <li><router-link :to="{name: 'register'}">Register</router-link></li>
                            @endguest

                            <li><router-link :to="{name: 'privacy'}">Privacy & Policy</router-link></li>
                            <li><router-link :to="{name: 'terms'}">Terms & Conditions</router-link></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h4 class="footer-title">Contact Us</h4>
                        <ul class="footer-menu">
                            @if($contact->address != "")
                            <li>Address : {{ $contact->address }}</li>    
                            @endif

                            @if($contact->email != "")
                            <li>Email : {{ $contact->email }}</li>    
                            @endif
                            
                            @if($contact->mobile != "")
                            <li>Phone : {{ $contact->mobile }}</li>
                            @endif
                            
                            @if($contact->fb != "")
                            <li><a href="{{ $contact->fb }}">Follow us on facebook</a></li>    
                            @endif
                            
                        </ul>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12 text-center">
                        <p class="copyright">© 2021 Rising Star Boarding | All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
        <!-- End -->


    </div>
    {{-- End --}}
    <script src="{{ asset("js/jquery.min.js") }}"></script>
    <script src="{{ asset("js/app.js") }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" 
    integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="{{ asset("js/bootstrap.min.js") }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script src="{{ asset("js/main.js") }}"></script>
    <script>

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