<template>
    <Container class="grid grid-cols-2">
        <div class="feedback span-1">
            <q-img class="image" src="/public/img/construction/house_5.png" :ratio="1">
            <h3 class="infant-font title">Обратная связь</h3></q-img>
        </div>
        <div class="request span-1"><img src="/public/img/construction/request.png" /></div>
        
    </Container>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>

.feedback  {
        position: relative;

       

        &:before {
            content: '';
            position: absolute;
           
            top: 0;
            left: 0;
            bottom: -20px;
            right: -20px;
            z-index: -1;
        }

        .title {
            font-size: 40px;
            padding-top: 40px;
            padding-left: 40px;
            padding-bottom: 120px;
            color: $white-color;
            font-weight: 500;
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
        }
    }

</style>
