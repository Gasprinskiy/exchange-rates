<script lang="ts" setup>
import { NIcon } from 'naive-ui';
import { AttachMoneyFilled } from '@vicons/material';

import { RouteLinks } from './constants';
</script>

<template>
  <div class="app-page-header">
    <div class="app-page-header__logo">
      <NIcon
        size="50"
        color="#5fbc21"
      >
        <AttachMoneyFilled />
      </NIcon>
      <div class="app-page-header__logo-text">
        Exchange-rates
      </div>
    </div>

    <div class="app-page-header__links">
      <RouterLink
        v-for="link in RouteLinks"
        :key="link.path"
        :to="link.path"
        class="app-page-header__link"
      >
        {{ link.label }}
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" />
