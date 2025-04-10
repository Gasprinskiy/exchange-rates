import $api from '../client';
import type { ExchangeRates } from '../types/exchange-rates';

export function getExchangeRates(): Promise<ExchangeRates> {
  return $api('/currency', {
    method: 'GET',
  });
}
