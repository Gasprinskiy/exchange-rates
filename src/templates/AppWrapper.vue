<script setup lang="ts">
import { onMounted } from 'vue';

import { useExchangeRates } from '@/composables/exchange-rates';

import Header from './components/header/Header.vue';

const { fetchAndSetState } = useExchangeRates();

onMounted(fetchAndSetState);
</script>

<template>
  <div class="app-wrapper">
    <Header />

    <div class="app-wrapper__container">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">
.app-wrapper {
  max-width: 768px;
  margin: auto;

  &__container {
    padding: 16px;
    height: calc(100vh - 92px);
  }
}
</style>
