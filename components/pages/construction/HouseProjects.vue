<template>
          <Section>
        <div class="fix"><Container class="text">
            проекты домов <br>
готовые для <br>
строительства </Container>
        <Container class="text2">
        Вы сэкономите время, так как разработка <br>индивидуального проекта не требуется, <br>что способствует быстрому началу <br>строительного процесса. <br>
        <br>
Предварительно рассчитанные сметы <br>помогают избежать перерасхода бюджета, <br>обеспечивая экономию денежных средств
</Container>
</div>




    </Section>
  
</template>

<script lang="ts" setup>
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"
</script>

<style lang="scss" scoped>
.text{
    text-align: left;
    margin-bottom: 60px;
    position: relative;
    
    font-family: "Cormorant Infant", serif;
    text-transform: uppercase;
    font-weight: 450;
    font-size: 2.75rem;
    font-weight: 300;
    line-height: 2.75rem;
    letter-spacing: -0.00833em;
}
.text2 {
    text-align: left;
    margin-bottom: 60px;
    position: relative;
    
    letter-spacing: -0.00833em;
    font-size: 1rem;
   
}
.fix{
  position: sticky;
  top: 15px;
}
.house1{
    justify-content: right;
}
</style>