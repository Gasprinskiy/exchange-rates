import type { ExchangeRates } from '@/api/types/exchange-rates';

export interface UseExchangeRatesState {
  exchangeRates: ExchangeRates | null;
}
