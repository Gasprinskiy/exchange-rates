<script setup lang="ts">
import { NConfigProvider, NGlobalStyle, NMessageProvider } from 'naive-ui';

import AppWrapper from '@/templates/AppWrapper.vue';
</script>

<template>
  <NConfigProvider>
    <NMessageProvider>
      <NGlobalStyle />
      <AppWrapper />
    </NMessageProvider>
  </NConfigProvider>
</template>
