<template>
    <section id="recent_causes">
        <div id="recent_causes_container-top" class="text-center">
            <div class="text-center">
                <h2 class="text-uppercase fs-1">Recent causes</h2>
                <div class="splitter pt-4"></div>
                <p class="pt-5 fs-4">We run projects in over 30 countries in 5 continents</p>
            </div>
            <div class="container">
                <div class="row gy-4">
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <a href="#">
                            <img class="w-100" :src="first_image" alt="first_image">
                        </a>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <a href="#">
                            <img class="w-100" :src="second_image" alt="second_image">
                        </a>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <a href="#">
                            <img class="w-100" :src="third_image" alt="third_image">
                        </a>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <a href="#">
                            <img class="w-100" :src="fourth_image" alt="fourth_image">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="recent_causes_container-bottom" class="text-center">
            <a href="#" class="text-decoration-none">
                <div class="container-fluid">
                    <h3 class="text-uppercase text-white">View all our causes</h3>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'RecentCauses',
    props: [
        'first_image', 'second_image', 'third_image', 'fourth_image'
    ]
}
</script>

<style lang="scss" scoped>
#recent_causes_container-top {
    padding-top: 7rem;

    .splitter {
        width: 13.5rem;
        height: 1rem;
        border-bottom: 3px solid rgb(242, 190, 103);
        margin-left: 42rem;
    }

    .container {
        padding: 5rem 0 5rem 0;
    }
}

#recent_causes_container-bottom {
    height: 11rem;
    cursor: pointer;
    background-color: #ed6967;

    &:hover {
        background-color: #408292;
    }

    h3 {
        padding-top: 4.5rem;
    }
}


@media (min-width: 576px) {
    .splitter {
        display: none;
    }
}

@media (min-width: 1366px) {
    .splitter {
        display: block;
    }
}
</style>