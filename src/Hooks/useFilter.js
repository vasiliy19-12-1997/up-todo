import { useMemo } from "react";
function useSorted(sort, todos) {
  const sortedTodos = useMemo(() => {
    if (sort) {
      return [...todos].sort((a, b) => a[sort]?.localeCompare(b[sort]));
    } else {
      return todos;
    }
  }, [sort, todos]);
  return sortedTodos;
}
export function useFilter(sort, todos, query) {
  const sortedTodos = useSorted(sort, todos);
  const sortedAndSearchTodos = useMemo(() => {
    if (query) {
      return sortedTodos.filter((post) =>
        post.title?.toLowerCase().includes(query?.toLowerCase())
      );
    } else {
      return sortedTodos;
    }
  }, [query, sortedTodos]);
  return sortedAndSearchTodos;
}
