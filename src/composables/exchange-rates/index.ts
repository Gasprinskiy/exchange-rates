import { shallowReactive } from 'vue';

import { getExchangeRates } from '@/api/methods/exchange-rates';

import { useAsyncDataWithNotification } from '../async-data';

import type { UseExchangeRatesState } from './types';

const state = shallowReactive<UseExchangeRatesState>({
  exchangeRates: null,
});

export function useExchangeRates() {
  async function fetchAndSetState(): Promise<void> {
    state.exchangeRates = await useAsyncDataWithNotification({
      request: getExchangeRates,
      errMessage: 'Не удалось загрузить курсы валют',
    });
  }

  return {
    state,
    fetchAndSetState,
  };
}
