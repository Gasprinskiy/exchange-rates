export type Currency = 'usd' | 'eur' | 'brl' | 'kzt' | 'idr' | 'rub';

type ExchangeRateKey = `${Currency}-${Exclude<Currency, Currency>}`;

export type ExchangeRates = {
  [K in ExchangeRateKey]: number;
};
