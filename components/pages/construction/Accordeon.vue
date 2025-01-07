<template>
    <Section>
        <Container>
            <MainTitle>Постарались ответить <br> на вопросы, которые вы чаще <br>
                всего задаёте</MainTitle>

<q-list bordered>
    <q-expansion-item
      group="somegroup"
      label="Вопрос"
      default-opened
      header-class="text-primary"
      expand-icon="add"
    >
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
          commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-separator />

    <q-expansion-item group="somegroup"  label="Вопрос"  expand-icon="add">
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
          commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-separator />

    <q-expansion-item group="somegroup"  label="Вопрос"  expand-icon="add">
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
          commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-separator />

   
  </q-list>
</Container>
    </Section>
</template>
<script lang="ts" setup>
import MainTitle from '~/components/text/MainTitle.vue';
</script>

<style lang="scss" scoped>
</style>