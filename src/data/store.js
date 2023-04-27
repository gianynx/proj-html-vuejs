import { reactive } from 'vue';
export const store = reactive({
    ourValuesElements: [
        {
            id: 1,
            icon: "fa-solid fa-droplet",
            title: "Clean water",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis eum quos!"
        },
        {
            id: 2,
            icon: "fa-solid fa-stethoscope",
            title: "Vaccinations",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis eum quos!"
        },
        {
            id: 3,
            icon: "fa-solid fa-graduation-cap",
            title: "Education",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis eum quos!"
        },
        {
            id: 4,
            icon: "fa-solid fa-wheat-awn",
            title: "Farming",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis eum quos!"
        }
    ],
    latestArticles: [
        {
            id: 1,
            image: '/images/latest_articles_2.png/',
            title: "The human story of uniqueness",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempora."
        },
        {
            id: 2,
            image: '/images/latest_articles_3.png/',
            title: "Sustainable trade tactics",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempora."
        },
        {
            id: 3,
            image: '/images/latest_articles_4.png/',
            title: "Farmers making a difference",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempora."
        },
        {
            id: 4,
            image: '/images/latest_articles_5.png/',
            title: "Meeting remote tribes in Peru",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempora."
        }
    ]
});