export type Currency = 'usd' | 'eur' | 'brl' | 'kzt' | 'idr' | 'rub';

export type ExchangeRateKey = `${Currency}-${Exclude<Currency, Currency>}`;

export type ExchangeRates = {
  [K in ExchangeRateKey]: number;
};

export interface ExchangeRateOption {
  title: string;
  cur: Currency;
}

export interface ExchangeRateValueOption {
  title: string;
  value: number;
}
