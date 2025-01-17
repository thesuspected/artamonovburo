<template>
    <Section>
        <Container>
            <hr />
            <h3 class="infant-font">Дом в стиле Тюдор</h3>
            <ImagesGrid :images="images" />
            <div class="house-block">
                <div v-for="(house, key) in houses" :key="key" class="house-card">

                    <p>О проекте:</p>
                    <div class="flex justify-between">
                        <div class="icons">
                            
                            <div v-for="(icon, key) in house.icons" :key="key" class="icon">
                                
                                <img class="icon_house" :src="icon.src" alt="icon house" />
                                
                                <p>{{ icon.title }}</p>
                            </div>
                        </div>
                        <hr class="vertical" />
                        <div class="icons2">
                        <div v-for="(house, key) in houses" :key="key" class="house-card2">
                            <div class="flex ">
                                <div class="icons">
                                    <div v-for="(icon, key) in house.icons2" :key="key" class="icon">
                                        <img class="icon_house" :src="icon.src" alt="icon house" />
                                        <p>{{ icon.title }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="buttons">
                            <m-btn label="Консультация" outline />
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <hr class="b-b"/>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import type { PropType } from "vue"
import type { ImageGridType } from "~/components/pages/general/types"
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
import ImagesGrid from "../general/ImagesGrid.vue"
import MBtn from "~/components/buttons/MBtn.vue"
defineProps({
    images: {
        type: Array as PropType<ImageGridType[]>,
    },
})
const images: ImageGridType[] = [
    {
        src: "img/cooperation/tudor_1.png",
        rows: 3,
        cols: 8,
        alt: "house 1",
    },
    {
        src: "img/cooperation/tudor_2.png",
        rows: 2,
        cols: 4,
        alt: "house 2",
    },
    {
        src: "img/cooperation/tudor_3.png",
        rows: 1,
        cols: 4,
        alt: "house 3",
    },
]
const houses = [
    {
        icons: [
            {
                title: "250м2",
                src: "/img/construction/house.svg",
            },
            {
                title: "10 соток",
                src: "/img/cooperation/trees.svg",
            },
            {
                title: "IV к. 2025 г.",
                src: "/img/cooperation/calendar.svg",
            },
        ],
        icons2: [
            {
                title: "30% годовых",
                src: "/img/cooperation/hand-coins.svg",
            },
            {
                title: "от 1 млн. ₽ ",
                src: "/img/cooperation/door.svg",
            },
        ],
    },
]
</script>

<style lang="scss" scoped>
h3 {
    margin-top: 40px;
    margin-bottom: 40px;
}
.house-card2{
    margin-top: 15px;
}
.house-block {
    display: flex;
    margin-top: 15px;
}
.vertical {
    height: 70px;
    border-left: 1px solid;
    margin: 10px;
    
}
.flex {
    .icons {
        display: flex;
        gap: 20px;
       

        .icon {
            display: flex;
            align-items: center;
        }
    }
    .icons2 {
        display: flex;
        gap: 20px;
        

        .icon {
            display: flex;
            align-items: center;


        }
    }
    
    p {
        margin-top: 17px;
        margin-left: 5px;
    }

    .buttons {
        display: flex;
        gap: 12px;
       
        
        
    }
}

</style>
