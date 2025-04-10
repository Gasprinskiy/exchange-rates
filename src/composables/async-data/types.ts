export interface UseApiRequestOptions<T> {
  request: () => Promise<T>;
  errMessage: string;
}
