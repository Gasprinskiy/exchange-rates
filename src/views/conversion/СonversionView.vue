<script lang="ts" setup>
import { computed, onMounted, shallowRef, watch } from 'vue';
import type { SelectMixedOption } from 'naive-ui/es/select/src/interface';
import { NSelect, NInputNumber, NSkeleton } from 'naive-ui';

import { useExchangeRates } from '@/composables/exchange-rates';
import { DefaultExchangeOption, MainCurrency } from '@/config/exchange-rates';
import type { Currency, ExchangeRateKey } from '@/shared/types/exchange-rates';

const { exchangeRates, fetchPending, allExchangeRateOptions } = useExchangeRates();

const fistValue = shallowRef<number>(0);
const secondValue = shallowRef<number>(0);
const firstOption = shallowRef<Currency>(DefaultExchangeOption.cur);
const secondOption = shallowRef<Currency>(MainCurrency.cur);

const currentExchangeRate = computed<number>(() => {
  if (!exchangeRates.value) {
    return 0;
  }

  return exchangeRates.value[`${firstOption.value}-${secondOption.value}` as ExchangeRateKey];
});
const firstOptionsList = computed<SelectMixedOption[]>(() => mapOptionsList(secondOption.value));
const secondOptionsList = computed<SelectMixedOption[]>(() => mapOptionsList(firstOption.value));
const fistValueCalclulator = computed<number>({
  get(): number {
    return fistValue.value;
  },

  set(value: number) {
    fistValue.value = value;
    secondValue.value = +(value * currentExchangeRate.value).toFixed(2);
  },
});
const secondValueValueCalclulator = computed<number>({
  get(): number {
    return secondValue.value;
  },

  set(value: number) {
    secondValue.value = value;
    fistValue.value = +(value / currentExchangeRate.value).toFixed(2);
  },
});

watch(fetchPending, (value) => {
  if (value) {
    return;
  }

  fistValueCalclulator.value = 1;
});

function mapOptionsList(disabledValue: Currency): SelectMixedOption[] {
  return allExchangeRateOptions.value.map(option => ({
    label: option.title,
    value: option.cur,
    disabled: option.cur === disabledValue,
  }));
}

function onUpdateSelect(): void {
  fistValueCalclulator.value = fistValue.value;
}

onMounted(() => fistValueCalclulator.value = 1);
</script>

<template>
  <div class="conversion-view">
    <h2>Конвертация</h2>

    <div class="conversion-view__content">
      <template v-if="fetchPending">
        <div class="conversion-view__content-item">
          <NSkeleton class="conversion-view__content-input conversion-view__content-skeleton" />
          <NSkeleton class="conversion-view__content-select conversion-view__content-skeleton" />
        </div>

        <div class="conversion-view__content-item">
          <NSkeleton class="conversion-view__content-input conversion-view__content-skeleton" />
          <NSkeleton class="conversion-view__content-select conversion-view__content-skeleton" />
        </div>
      </template>

      <template v-else>
        <div class="conversion-view__content-item">
          <NInputNumber
            v-model:value="fistValueCalclulator"
            class="conversion-view__content-input"
            :show-button="false"
          />

          <NSelect
            v-model:value="firstOption"
            class="conversion-view__content-select"
            :options="firstOptionsList"
            @update:value="onUpdateSelect"
          />
        </div>

        <div class="conversion-view__content-item">
          <NInputNumber
            v-model:value="secondValueValueCalclulator"
            class="conversion-view__content-input"
            :show-button="false"
          />

          <NSelect
            v-model:value="secondOption"
            :options="secondOptionsList"
            class="conversion-view__content-select"
            @update:value="onUpdateSelect"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" />
