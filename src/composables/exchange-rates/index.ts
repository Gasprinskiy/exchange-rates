import { computed, shallowReactive, toRefs } from 'vue';

import { getExchangeRates } from '@/api/methods/exchange-rates';
import type { Currency, ExchangeRateKey, ExchangeRateOption, ExchangeRateValueOption } from '@/shared/types/exchange-rates';
import { ExchangeRateTitles } from '@/shared/constants/exchange-rates';

import { useAsyncDataWithNotification } from '../async-data';
import type { UseExchangeRatesState } from './types';

const state = shallowReactive<UseExchangeRatesState>({
  exchangeRates: null,
  fetchPending: false,
});

export function useExchangeRates() {
  const allExchangeRateOptions = computed<ExchangeRateOption[]>(() => {
    if (!state.exchangeRates) {
      return [];
    }

    const keys = Object.keys(state.exchangeRates).reduce((acc, cur) => {
      const key = cur.split('-')[0] as Currency;
      acc.add(key);
      return acc;
    }, new Set<Currency>());

    return Array.from(keys).map((key) => {
      return {
        title: ExchangeRateTitles[key],
        cur: key,
      };
    });
  });

  const mainCurrencyExchangeRateOptions = computed<ExchangeRateValueOption[]>(() => {
    if (!state.exchangeRates) {
      return [];
    }

    return Object.keys(state.exchangeRates).reduce((acc, cur) => {
      const key = cur.split('-');
      if (key[1] === 'rub') {
        acc = [...acc, {
          title: ExchangeRateTitles[key[0] as Currency],
          value: state.exchangeRates![cur as ExchangeRateKey],
        }];
      }

      return acc;
    }, [] as ExchangeRateValueOption[]);
  });

  async function fetchAndSetState(): Promise<void> {
    state.fetchPending = true;

    state.exchangeRates = null;
    state.exchangeRates = await useAsyncDataWithNotification({
      request: getExchangeRates,
      errMessage: 'Не удалось загрузить курсы валют',
    });

    state.fetchPending = false;
  }

  return {
    ...toRefs(state),
    fetchAndSetState,
    allExchangeRateOptions,
    mainCurrencyExchangeRateOptions,
  };
}
