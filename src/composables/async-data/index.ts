import { useMessage, useNotification } from 'naive-ui';

import type { UseApiRequestOptions } from './types';

export async function useAsyncDataWithNotification<T>(options: UseApiRequestOptions<T>): Promise<T | null> {
  const message = useMessage();

  const { request, errMessage } = options;

  try {
    return request();
  } catch (e) {
    message.error(errMessage, {
      duration: 4000,
    });
    console.error(`${errMessage}: ${e}`);
    return null;
  }
}
