import ErrorModal from '@/components/ErrorModal';
import React, { createContext, useMemo, useState } from 'react';

export const ErrorModalContext = createContext();

export default function ErrorModalProvider({ children }) {
  const [errors, setErrors] = useState([]);

  const hasError = useMemo(() => errors.length > 0, [errors]);

  const addError = (err) => {
    // push error to state
    setErrors((prev) => [...prev, err]);
  };

  const clearErrors = () => {
    setErrors([]);
  };

  return (
    <ErrorModalContext.Provider
      value={{
        addError,
        clearErrors,
      }}
    >
      {children}
      <ErrorModal onClose={clearErrors} isOpen={hasError} errors={errors} />
    </ErrorModalContext.Provider>
  );
}
