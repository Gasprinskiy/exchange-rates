<script setup lang="ts">
import { onMounted } from 'vue';

import { useExchangeRates } from '@/composables/exchange-rates';

const { fetchAndSetState } = useExchangeRates();

onMounted(fetchAndSetState);
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style lang="scss">
.app-wrapper {
  &__scrollbar-container {
    padding: 16px;
  }

  &__scrollbar {
    height: calc(100vh - 92px);
  }
}
</style>
