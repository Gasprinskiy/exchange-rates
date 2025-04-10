import $api from '../client';
import type { ExchangeRates } from '../types/exchange-rates';

export function getExchangeRates(): Promise<ExchangeRates> {
  console.log('FUCK');

  return $api('/currency', {
    method: 'GET',
  });
}
