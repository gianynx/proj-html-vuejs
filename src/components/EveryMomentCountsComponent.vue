<template>
    <section id="every_moment_counts">
        <div class="d-flex">
            <div id="every_moment_counts_left">
                <h2 class="text-uppercase fs-1">Every moment counts</h2>
                <div class="splitter pt-4"></div>
                <div id="text_container">
                    <p class="pt-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo distinctio architecto quaerat
                        sapiente
                        itaque dignissimos adipisci recusandae?
                    </p>
                    <p class="pt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia hic molestiae reprehenderit
                        molestias
                        fugit debitis necessitatibus autem aperiam dolore. Voluptas obcaecati numquam quibusdam asperiores
                        sint.
                    </p>
                    <p class="pt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis odio id nihil accusantium
                        aut?
                    </p>
                    <button class="btn gold_btn text-uppercase text-white fs-5 mt-4" type="button">Our mission</button>
                </div>
            </div>
            <div id="every_moment_counts_right">
                <div class="icons_container text-white">
                    <div class="d-flex justify-content-center align-content-center align-items-center font_size">
                        <i class="fa-regular fa-heart px-2"></i>
                        <span>2032</span>
                    </div>
                    <div class="text-center fs-3">Volunteers worldwide</div>
                </div>
                <div class="pt-5 text-white">
                    <div class="d-flex justify-content-center align-content-center align-items-center font_size">
                        <i class="fa-solid fa-earth-americas px-2"></i>
                        <span>132</span>
                    </div>
                    <div class="text-center fs-3">Active projects</div>
                </div>
                <div class="pt-5 text-white">
                    <div class="d-flex justify-content-center align-content-center align-items-center font_size">
                        <i class="fa-solid fa-dollar-sign px-2"></i>
                        <span>3.8M</span>
                    </div>
                    <div class="text-center fs-3">Donated</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'EveryMomentCountsComponent'
}
</script>

<style lang="scss" scoped>
#every_moment_counts_left {
    width: 67%;
    padding: 7rem 0 7rem 10rem;

    .splitter {
        width: 13.5rem;
        height: 1rem;
        border-bottom: 3px solid rgb(242, 190, 103);
    }

    #text_container {
        width: 82%;
    }

    #text_container p {
        font-size: 16px;
    }

    .btn {
        --bs-btn-border-radius: none;
        --bs-btn-padding-x: 2rem;
        --bs-btn-padding-y: 0.7rem;
    }
}

#every_moment_counts_right {
    width: 33%;
    background: linear-gradient(#e1615e, #9198e5);

    .icons_container {
        padding-top: 7rem;
    }

    .font_size {
        font-size: 50px;
    }
}</style>