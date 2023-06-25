import { ErrorModalContext } from '@/context/ErrorModalContext';
import { useContext } from 'react';

// makeRequest: make API requests
export default function useMakeRequest(sendToErrorContext = true) {
  const errorModalContext = useContext(ErrorModalContext);

  const makeRequest = (requestPromise) => {
    return new Promise((res, rej) => {
      requestPromise
        .then((data) => {
          // resolve the promise with the response data
          res(data);
        })
        .catch((err) => {
          // send an error to the app error context
          if (sendToErrorContext) {
            errorModalContext.addError(err);
          }

          rej(err);
        });
    });
  };

  return { request: makeRequest };
}
