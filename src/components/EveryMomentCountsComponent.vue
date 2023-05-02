<template>
    <section id="every_moment_counts">
        <div id="sections_container">
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
                        <span>{{ firstCurrentValue }}</span>
                    </div>
                    <div class="text-center fs-3">Volunteers worldwide</div>
                </div>
                <div class="pt-5 text-white">
                    <div class="d-flex justify-content-center align-content-center align-items-center font_size">
                        <i class="fa-solid fa-earth-americas px-2"></i>
                        <span>{{ secondCurrentValue }}</span>
                    </div>
                    <div class="text-center fs-3">Active projects</div>
                </div>
                <div class="pt-5 text-white">
                    <div class="d-flex justify-content-center align-content-center align-items-center font_size">
                        <i class="fa-solid fa-dollar-sign px-2"></i>
                        <span>{{ thirdCurrentValue }}M</span>
                    </div>
                    <div class="text-center fs-3">Donated</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'EveryMomentCountsComponent',
    data() {
        return {
            firstCurrentValue: 0,
            secondCurrentValue: 0,
            thirdCurrentValue: 0,
            firstMaxValue: 2032,
            secondMaxValue: 132,
            thirdMaxValue: 4,
            increment: 1
        }
    },
    mounted() {
        const firstInterval = setInterval(() => {
            this.firstCurrentValue += this.increment;
            if (this.firstCurrentValue >= this.firstMaxValue) {
                clearInterval(firstInterval);
            }
        }, 0.1);
        const secondInterval = setInterval(() => {
            this.secondCurrentValue += this.increment;
            if (this.secondCurrentValue >= this.secondMaxValue) {
                clearInterval(secondInterval);
            }
        }, 50);
        const thirdInterval = setInterval(() => {
            this.thirdCurrentValue += this.increment;
            if (this.thirdCurrentValue >= this.thirdMaxValue) {
                clearInterval(thirdInterval);
            }
        }, 400);
    }
}
</script>

<style lang="scss" scoped>
#every_moment_counts_left {
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
    background: linear-gradient(#e1615e, #9198e5);

    .icons_container {
        padding-top: 7rem;
    }

    .font_size {
        font-size: 50px;
    }
}


@media (min-width: 576px) {
    #every_moment_counts_left {
        padding: 7rem 0 7rem 7rem;
    }

    #every_moment_counts_right {
        padding-bottom: 7rem;
    }
}

@media (min-width: 768px) {
    #sections_container {
        display: flex;
    }

    #every_moment_counts_left {
        width: 60%;
    }

    #every_moment_counts_right {
        width: 40%;
        padding-top: 7rem;
    }
}

@media (min-width: 868px) {
    #every_moment_counts_left {
        padding-right: 1rem;
    }
}

@media (min-width: 992px) {
    #every_moment_counts_right {
        padding-top: 2rem;
    }
}
</style>