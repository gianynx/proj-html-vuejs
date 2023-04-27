<template>
    <section id="latest_articles">
        <div id="latest_articles_container">
            <div class="text-center">
                <h2 class="text-uppercase fs-1">Latest articles</h2>
                <div class="splitter pt-4"></div>
                <p class="pt-5 fs-4">Together we make all the difference</p>
            </div>
            <div class="container">
                <div class="d-flex">
                    <div id="latest_articles_container-left" class="card pb-4 mb-5 mx-4" style="width: 38rem;">
                        <a href="#">
                            <img src='/images/latest_articles_1.png/' class="card-img-top" alt="latest_articles_1.png">
                        </a>
                        <div class="card-body">
                            <a href="#" class="text-decoration-none">
                                <h3>Understanding community complexities</h3>
                            </a>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempora.
                            </p>
                        </div>
                    </div>
                    <div id="latest_articles_container-right">
                        <div class="d-flex flex-column">
                            <LatestArticlesItemsComponent v-for="(item, index) in store.latestArticles" :key="item.id"
                                :image="item.image" :title="item.title" :paragraph="item.paragraph" />
                        </div>
                    </div>
                </div>
                <div class="d-grid gap-2 pt-5">
                    <button class="btn btn-primary text-uppercase fs-5" type="button">View all our articles</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../data/store';
import LatestArticlesItemsComponent from './LatestArticlesItemsComponent.vue';
export default {
    name: 'LatestArticles',
    components: {
        LatestArticlesItemsComponent
    },
    data() {
        return {
            store
        }
    }
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
        padding: 5rem 0 7rem 0;
    }

    #latest_articles_container-left {
        width: 50%;
    }

    .card {
        --bs-card-border-radius: none;
        --bs-card-inner-border-radius: none;
    }

    .card-body {
        padding: 2.8rem 0 0 1.8rem;
    }

    #latest_articles_container-right {
        width: 50%;
    }

    .btn {
        --bs-btn-padding-y: 1rem;
        --bs-btn-border-radius: none;
        --bs-btn-bg: #ed6967;
        --bs-btn-hover-bg: #408292;
        --bs-btn-border-color: none;
    }
}
</style>