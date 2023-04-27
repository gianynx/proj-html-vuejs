<template>
    <section id="our_values">
        <div id="our_values_container" class="text-center">
            <div class="text-center text-white">
                <h2 class="text-uppercase fs-1">Our values</h2>
                <div class="splitter pt-4"></div>
                <div class="pt-5 fs-4">Think Big. Act Bigger.</div>
            </div>
            <div class="container">
                <div class="row">
                    <OurValuesElementsComponent v-for="(element, index) in store.ourValuesElements" :key="element.id"
                        :icon="element.icon" :title="element.title" :paragraph="element.paragraph" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../data/store';
import OurValuesElementsComponent from './OurValuesElementsComponent.vue';
export default {
    name: 'OurValue',
    components: {
        OurValuesElementsComponent
    },
    data() {
        return {
            store
        }
    }
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
}
</style>