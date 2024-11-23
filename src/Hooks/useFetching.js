import { useState } from "react";

export function useFetching(callback) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  async function fetching() {
    try {
      setIsLoading(true);
      await callback();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return [fetching, isLoading, error];
}
