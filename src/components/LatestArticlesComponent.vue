<template>
    <div id="latest_articles_container">
        <div class="text-center">
            <h2 class="text-uppercase fs-1">Latest articles</h2>
            <div class="splitter pt-4"></div>
            <p class="pt-5 fs-4">Together we make all the difference</p>
        </div>
        <div class="container">
            <div class="d-flex">
                <div class="card pb-4 mb-5" style="width: 38rem;">
                    <a href="#">
                        <img src='/images/latest_articles_1.png/' class="card-img-top" alt="latest_articles_1.png">
                    </a>
                    <div class="card-body">
                        <h3>Understanding community complexities</h3>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempora.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LatestArticles'
}
</script>

<style lang="scss" scoped>
#latest_articles_container {
    padding-top: 7rem;

    .splitter {
        width: 13.5rem;
        height: 1rem;
        border-bottom: 3px solid rgb(242, 190, 103);
        margin-left: 42rem;
    }

    .container {
        padding-top: 5rem;
    }

    .card {
        --bs-card-border-radius: none;
        --bs-card-inner-border-radius: none;
    }

    .card-body {
        padding: 2.8rem 0 0 1.8rem;
    }

    h3 {
        color: rgb(242, 190, 103);
        font-size: 21px;
    }

    p {
        line-height: 2.5rem;
        font-size: 16px;
    }
}
</style>