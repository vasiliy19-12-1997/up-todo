import { Input } from "../UI/Input/Input";

export const Filter = ({ sort, query, setQuery, setSort }) => {
  const sortTodos = (sort) => {
    setSort(sort);
  };
  return (
    <div style={{ marginBottom: "20px" }} className="select">
      <select value={sort} onChange={(e) => sortTodos(e.target.value)}>
        <option defaultValue="Сортировка по"></option>
        <option value="title">title</option>
        <option value="description">description</option>
      </select>
      <Input value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>
  );
};
