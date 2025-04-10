import type { Currency } from '@/api/types/exchange-rates';

export const MainCurrency: Currency = 'rub' as const;
export const MainCurrenies: Currency[] = ['eur', 'usd'];
