<template>
    <header>
        <nav class="navbar navbar-expand-lg pt-5">
            <div class="container">
                <div id="logo_container">
                    <a href="#">
                        <img src='/images/logo_1.png/' alt="logo_img">
                    </a>
                </div>
                <div id="navbar_container" class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase fs-5">
                        <li class="nav-item px-3">
                            <a class="nav-link active text-white" href="#">{{ home }}</a>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link text-white" href="#every_moment_counts">{{ mission }}</a>
                        </li>
                        <li class="nav-item dropdown px-3">
                            <a class="nav-link dropdown-toggle text-white" href="#our_values" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                {{ causes }}
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link text-white" href="#">{{ journal }}</a>
                        </li>
                    </ul>
                    <button id="navbar_btn" class="btn text-uppercase text-white fs-5" type="button">Donate</button>
                </div>
            </div>
        </nav>
        <div id="header_info" class="text-center text-white">
            <h1 class="text-uppercase">Make a difference</h1>
            <p class="fs-5">As long as poverty, injustice <span>&#38;</span> inequality persist, none of us can truly rest
            </p>
            <div id="btn_container" class="pt-5">
                <button id="first_header_btn" class="btn text-uppercase fs-5 mx-4" type="button">Our
                    mission</button>
                <button id="second_header_btn" class="btn text-uppercase fs-5" type="button">Donate now</button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: [
        'home', 'mission', 'causes', 'journal'
    ]
}
</script>

<style lang="scss" scoped>
header {
    height: 44rem;
    background-image: url('/images/jumbotron.png/');
    background-size: cover;

    #navbar_container {
        padding-left: 10rem;
    }

    .btn {
        --bs-btn-border-radius: none;
        --bs-btn-padding-x: 2rem;
        --bs-btn-padding-y: 0.7rem;
    }

    #header_info {
        padding-top: 5rem;
    }

    h1 {
        font-size: 70px;
    }

    #first_header_btn {
        background-color: none;
        border: 2px solid white;
        color: white;
    }

    #first_header_btn:hover {
        border: 2px solid rgb(242, 190, 103);
        color: rgb(242, 190, 103);
    }

    #second_header_btn {
        background-color: none;
        border: 2px solid rgb(242, 190, 103);
        color: rgb(242, 190, 103);
    }

    #second_header_btn:hover {
        background-color: rgb(38, 46, 68);
        border: 2px solid white;
        color: white;
    }
}
</style>