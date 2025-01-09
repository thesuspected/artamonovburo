<template>
    <Layout>
        <PageHeader
            title="Строительство 
            <br> домов"
            description="Воспользуйтесь готовым проверенным решением или создайте уникальный дом по вашим пожеланиям"
            button-label="Рассчитать стоимость"
        />
        <ProjectsSection />
        <StagesSection />
        <FormSection>
            Вместе <b class="text-primary">создадим дом</b>, <br> который будет соответствовать<br>
            <b class="text-primary">вашим ожиданиям </b> и предпочтениям
        </FormSection>
        <AccordionSection />
    </Layout>
</template>

<script lang="ts" setup>
import PageHeader from "~/components/text/PageHeader.vue"
import ProjectsSection from "~/components/pages/construction/ProjectsSection.vue"
import StagesSection from "~/components/pages/construction/StagesSection.vue"
import FormSection from "~/components/pages/general/FormSection.vue"
import AccordionSection from "~/components/pages/general/AccordionSection.vue"
</script>

<style lang="scss" scoped></style>

