<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div id="container_logo_img">
                    <img src='/images/logo_1.png/' alt="logo_img">
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#">{{ home }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">{{ mission }}</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
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
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">{{ journal }}</a>
                        </li>
                    </ul>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </div>
            </div>
        </nav>
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
    height: 40rem;
    background-image: url('/images/jumbotron.png/');
    background-size: cover;
}
</style>