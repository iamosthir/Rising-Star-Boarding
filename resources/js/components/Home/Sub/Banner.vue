<template>
    <!-- Banner Section -->
    <section>
        <div class="hero">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-md-5">
                        <div class="hero-text">
                            <h4 id="welcome"></h4>
                            <a class="booking-btn" href="/home/reservation">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End -->
</template>

<script>
import Typed from "typed.js";
export default {
    mounted(){
        // Initiate Type.Js
        var typed = new Typed('#welcome', {
            strings: ["Welcome to <br> Rising Star Boarding"],
            typeSpeed: 50,
            showCursor: false,
            startDelay: 1000,
            loop: true,
            backSpeed: 50,
            backDelay: 4000,
        });
    }
}
</script>

<style>

</style>