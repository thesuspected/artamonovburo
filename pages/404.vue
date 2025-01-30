<template>
    <div>
        <Section>
            <Container class="block">
                <h1 class="error infant-font">404</h1>
                <h6 class="font-size:40px">Страница не найдена</h6>
                <p class="font-size:20px ">Кажется, эта страница не найдена. Вернитесь на главную<br> или воспользуйтесь
                    меню, чтобы найти нужную информацию</p>
                <m-btn label="На главную" full-width />
            </Container>
        </Section>
    </div>
</template>

<script lang="ts" setup>

import MBtn from "~/components/buttons/MBtn.vue"
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"

</script>

<style lang="scss" scoped>

.block {
    align-content: center;
    flex-direction: column;
    display: flex;
    gap: 20px;
    justify-items: center;
    height: 80vh;
}

.error {
    display: contents;
    font-size: 350px;
}

</style>