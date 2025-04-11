import type { ExchangeRates } from '@/shared/types/exchange-rates';

export interface UseExchangeRatesState {
  exchangeRates: ExchangeRates | null;
  fetchPending: boolean;
}
