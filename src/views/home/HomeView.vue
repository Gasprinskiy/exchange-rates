<script lang="ts" setup>
import { NNumberAnimation, NButton, NIcon, NSkeleton } from 'naive-ui';
import { RefreshFilled } from '@vicons/material';

import { useExchangeRates } from '@/composables/exchange-rates';
import { MainCurrency } from '@/config/exchange-rates';

const { fetchPending, mainCurrencyExchangeRateOptions, fetchAndSetState } = useExchangeRates();
</script>

<template>
  <div class="home-view">
    <div class="home-view__head">
      <h2>Главная</h2>
      <NButton @click="fetchAndSetState">
        <template #icon>
          <NIcon>
            <RefreshFilled />
          </NIcon>
        </template>
      </NButton>
    </div>

    <ul class="home-view__content">
      <template v-if="fetchPending">
        <NSkeleton
          v-for="n in 5"
          :key="n"
          class="home-view__content-skeleton"
        />
      </template>

      <template v-else>
        <li
          v-for="(option) in mainCurrencyExchangeRateOptions"
          :key="option.value"
          class="home-view__content-item"
        >
          <span class="home-view__content-value">1</span> {{ option.title }}
          =
          <span class="home-view__content-value">
            <NNumberAnimation
              :from="0"
              :to="option.value"
              :precision="3"
              :duration="400"
            />
          </span>
          {{ MainCurrency.title }}
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="scss" src="./style.scss" />
