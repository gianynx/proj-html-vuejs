<template>
    <header>
        <nav class="navbar navbar-expand-lg pt-5">
            <div class="container">
                <div id="logo_container">
                    <a href="#">
                        <img src='/images/logo_1.png/' alt="logo_img">
                    </a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse navbar_container" id="navbarNavDarkDropdown">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase fs-5">
                        <li class="nav-item px-3">
                            <a class="nav-link item" href="#">{{ home }}</a>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link item" href="#every_moment_counts">{{ mission }}</a>
                        </li>
                        <li class="nav-item dropdown px-3">
                            <div class="dropdown">
                                <a class="nav-link dropdown-toggle item" href="#our_values" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    {{ causes }}
                                </a>
                                <ul class="dropdown-content list-unstyled text-uppercase">
                                    <li><a href="#">Fair trade</a></li>
                                    <li><a href="#">Farming</a></li>
                                    <li><a href="#">Vaccines</a></li>
                                    <li><a href="#">Education</a></li>
                                    <li><a href="#">Clean water</a></li>
                                    <li><a href="#">Shelter</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link item" href="#latest_articles">{{ journal }}</a>
                        </li>
                    </ul>
                    <button class="btn gold_btn text-uppercase text-white fs-5" type="button">Donate</button>
                </div>
            </div>
        </nav>
        <div id="header_info" class="text-center text-white" v-if="isVisible">
            <h1 class="text-uppercase">Make a difference</h1>
            <p class="fs-5">
                As long as poverty, injustice <span>&#38;</span> inequality persist, none of us can truly rest
            </p>
            <div id="btn_container" class="pt-5">
                <button id="first_header_btn" class="btn text-uppercase fs-5 mx-4" type="button">
                    Our mission
                </button>
                <button id="second_header_btn" class="btn text-uppercase fs-5" type="button">
                    Donate now
                </button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: [
        'home', 'mission', 'causes', 'journal'
    ],
    data() {
        return {
            isVisible: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.isVisible = true;
        }, 2000);
    }
}
</script>

<style lang="scss" scoped>
// CSS dropdown
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);
    z-index: 1;
    border-radius: 5px;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 13px;
}

.dropdown-content a:hover {
    background-color: rgb(242, 190, 103);
    color: white;
}

.dropdown:hover .dropdown-content {
    display: block;
}

header {
    height: 44rem;
    background-image: url('/images/jumbotron.png/');
    background-size: cover;

    .navbar_container {
        padding-left: 10rem;
    }

    .item::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        transition: width .3s;
    }

    .item:hover::after {
        width: 90%;
        transition: width .3s;
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