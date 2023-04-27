<template>
    <div id="our_values_container" class="text-center">
        <div class="text-center text-white">
            <h2 class="text-uppercase fs-1">Our Values</h2>
            <div class="splitter pt-4"></div>
            <div class="pt-5 fs-4">Think Big. Act Bigger.</div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 element">
                    <a href="#" class="text-decoration-none text-white">
                        <i class="fa-solid fa-droplet pb-2"></i>
                        <h3 class="pt-4">Clean Water</h3>
                    </a>
                    <p class="pt-4 lh-lg text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis eum quos!
                    </p>
                    <button class="btn gold_btn text-uppercase text-white fs-5 mt-4" type="button">
                        Learn more
                    </button>
                </div>
                <div class="col element">
                    <a href="#" class="text-decoration-none text-white">
                        <i class="fa-solid fa-stethoscope pb-2"></i>
                        <h3 class="pt-4">Vaccinations</h3>
                    </a>
                    <p class="pt-4 lh-lg text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis eum quos!
                    </p>
                    <button class="btn gold_btn text-uppercase text-white fs-5 mt-4" type="button">
                        Learn more
                    </button>
                </div>
                <div class="col element">
                    <a href="#" class="text-decoration-none text-white">
                        <i class="fa-solid fa-graduation-cap pb-2"></i>
                        <h3 class="pt-4">Education</h3>
                    </a>
                    <p class="pt-4 lh-lg text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis eum quos!
                    </p>
                    <button class="btn gold_btn text-uppercase text-white fs-5 mt-4" type="button">
                        Learn more
                    </button>
                </div>
                <div class="col element">
                    <a href="#" class="text-decoration-none text-white">
                        <i class="fa-solid fa-wheat-awn pb-2"></i>
                        <h3 class="pt-4">Farming</h3>
                    </a>
                    <p class="pt-4 lh-lg text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis eum quos!
                    </p>
                    <button class="btn gold_btn text-uppercase text-white fs-5 mt-4" type="button">
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurValue'
}
</script>

<style lang="scss" scoped>
#our_values_container {
    height: 74rem;
    background-image: url('/images/our_values.png');
    background-position: center;
    padding-top: 14rem;

    .splitter {
        width: 13.5rem;
        height: 1rem;
        border-bottom: 3px solid rgb(242, 190, 103);
        margin-left: 42rem;
    }

    .container {
        padding-top: 8rem;
    }

    .element {
        width: 25%;
    }

    .fa-solid {
        font-size: 55px;
        color: rgb(242, 190, 103);

        &:hover {
            color: white;
        }
    }

    p {
        font-size: 16px;
    }

    .btn {
        --bs-btn-border-radius: none;
        --bs-btn-padding-x: 2rem;
        --bs-btn-padding-y: 0.7rem;
    }
}
</style>