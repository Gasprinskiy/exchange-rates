import { ExchangeRateTitles } from '@/shared/constants/exchange-rates';
import type { ExchangeRateOption } from '@/shared/types/exchange-rates';

export const MainCurrency: ExchangeRateOption = {
  title: ExchangeRateTitles.rub,
  cur: 'rub',
};
export const DefaultExchangeOption: ExchangeRateOption = {
  title: ExchangeRateTitles.usd,
  cur: 'usd',
};
