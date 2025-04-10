<script setup lang="ts">
import { NConfigProvider, NGlobalStyle, NScrollbar, NMessageProvider } from 'naive-ui';
// import AppPageHeader from '@/components/header/Header.vue';
</script>

<template>
  <NConfigProvider>
    <NMessageProvider>
      <NGlobalStyle />

      <div class="app-wrapper">
        <!-- <AppPageHeader /> -->
        <div class="app-wrapper__scrollbar-container">
          <NScrollbar class="app-wrapper__scrollbar">
            <RouterView />
          </NScrollbar>
        </div>
      </div>
    </NMessageProvider>
  </NConfigProvider>
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
