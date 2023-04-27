<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 element">
        <a href="#" class="text-decoration-none text-white">
            <i class="pb-2" :class="icon"></i>
            <h3 class="pt-4">{{ title }}</h3>
        </a>
        <p class="pt-4 lh-lg text-white">
            {{ paragraph }}
        </p>
        <GoldButtonComponent />
    </div>
</template>

<script>
import GoldButtonComponent from './GoldButtonComponent.vue';
export default {
    name: 'OurValuesElement',
    props: [
        'icon', 'title', 'paragraph'
    ],
    components: {
        GoldButtonComponent
    }
}
</script>

<style lang="scss" scoped>
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
</style>