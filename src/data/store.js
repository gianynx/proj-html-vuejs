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
    ]
});