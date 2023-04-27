<template>
    <div class="item">
        <div class="d-flex">
            <a href="#">
                <img :src="image" alt="latest_articles_images" class="image">
            </a>
            <div class="px-4">
                <a href="#" class="text-decoration-none">
                    <h3>{{ title }}</h3>
                </a>
                <p>
                    {{ paragraph }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LatestArticlesItems',
    props: [
        'image', 'title', 'paragraph'
    ]
}
</script>

<style lang="scss" scoped>
.item {
    padding-bottom: 1.2rem;
}

.image {
    height: 9rem;
}

h3 {
    color: rgb(242, 190, 103);
    font-size: 21px;
}

p {
    line-height: 2.5rem;
    font-size: 16px;
}
</style>