<template>
    <footer>
        <div id="footer_container">
            <div id="footer_top_container" class="text-center text-white">
                <h2 class="text-uppercase fs-1">Change a life today</h2>
                <div class="splitter pt-4"></div>
                <div id="text_container">
                    <p class="pt-5 fs-4">As long as poverty, injustice <span>&#38;</span> inequality persist, none of us can
                        truly rest. It doesn't take much to change a life. Get in touch today and start making the
                        difference.
                    </p>
                </div>
                <div id="btn_container" class="pt-5">
                    <button class="btn text-uppercase fs-5 mx-5" type="button">
                        Volunteer
                    </button>
                    <button class="btn text-uppercase fs-5 mx-3" type="button">
                        Donate now
                    </button>
                </div>
            </div>
            <div id="footer_bottom_container" class="text-center">
                <div id="logo_container">
                    <a href="#">
                        <img src='/images/logo_3.png/' alt="logo_img">
                    </a>
                </div>
                <div id="social_container" class="pb-5">
                    <a href="#">
                        <i class="fa-brands fa-facebook-f px-3"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-instagram px-3"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-twitter px-3"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-youtube px-3"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>
#footer_top_container {
    height: 44rem;
    background-image: url('/images/footer_top.png/');
    background-size: cover;
    background-position: center;
    padding-top: 10rem;

    .splitter {
        width: 13.5rem;
        height: 1rem;
        border-bottom: 3px solid rgb(242, 190, 103);
        margin-left: 42rem;
    }

    #text_container {
        margin: 0 17rem 0 17rem;
    }

    .btn {
        --bs-btn-border-radius: none;
        --bs-btn-padding-x: 2rem;
        --bs-btn-padding-y: 0.7rem;
        background-color: none;
        border: 2px solid white;
        color: white;

        &:hover {
            border: 2px solid rgb(242, 190, 103);
            color: rgb(242, 190, 103);
        }
    }
}

#footer_bottom_container {
    padding-top: 6rem;

    #logo_container {
        padding-bottom: 7rem;
    }

    .fa-brands {
        color: rgb(242, 190, 103);
        font-size: 30px;
    }
}
</style>