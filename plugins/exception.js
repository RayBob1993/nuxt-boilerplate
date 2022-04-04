import { isDevelopment, isProduction } from '@/utils/env';
import { Exception } from '@/services/error';

export default (context, inject) => {
  const exception = (error = {}) => {
    const { response, stack } = error;
    const { status, data } = response || {};
    const { message } = data || {};

    if (isDevelopment) {
      console.error(new Exception(error));

      return;
    }

    if (isProduction) {
      return context.error({
        statusCode: status,
        message,
        stack
      });
    }
  };

  context.$exception = exception;
  inject('exception', exception);
};
