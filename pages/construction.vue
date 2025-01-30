<template>
    <Layout>
        <Container>
            <PageHeader
                title="Строительство 
            <br> домов"
                description="Воспользуйтесь готовым проверенным решением или создайте уникальный дом по вашим пожеланиям"
                button-label="Рассчитать стоимость"
            />
            <ProjectsSection />
            <StagesSection />
            <FormSection>
                Вместе создадим<b class="text-primary"> дом</b>,<br />
                который <b class="text-primary">будет соответствовать</b><br />
                вашим<b class="text-primary"> ожиданиям </b> и предпочтениям
            </FormSection>
            <QuizSection />
            <AccordionSection />
        </Container>
    </Layout>
</template>

<script lang="ts" setup>
import Container from "~/components/layout/Container.vue"
import PageHeader from "~/components/text/PageHeader.vue"
import ProjectsSection from "~/components/pages/construction/ProjectsSection.vue"
import StagesSection from "~/components/pages/construction/StagesSection.vue"
import FormSection from "~/components/pages/general/FormSection.vue"
import AccordionSection from "~/components/pages/general/AccordionSection.vue"
import QuizSection from "~/components/pages/cooperation/QuizSection.vue"
</script>

<style lang="scss" scoped></style>
