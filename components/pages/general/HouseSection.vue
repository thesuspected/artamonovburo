<template>
    <section class="house-section">
        <img src="/img/building_design_bg.png" alt="building design" />
        <div class="grid grid-cols-1 lg:grid-cols-3">
            <span class="col-start-3 text">Проектирование домов от 4 200 ₽/м2</span>
        </div>
    </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.house-section {
    position: relative;

    .grid {
        padding: 80px;
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;

        .text {
            color: $white-color;
            font-size: 40px;
            font-weight: 400;
        }
    }
}
</style>