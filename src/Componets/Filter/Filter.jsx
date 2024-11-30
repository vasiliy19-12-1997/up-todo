import { Input } from "../UI/Input/Input";
import { MySelect } from "../UI/MySelect/MySelect";
export const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        options={[
          { value: "title", name: "По заголовку" },
          { value: "description", name: "По описанию" },
        ]}
        value={filter.sort}
        defaultValue={"Сортировка по"}
        onChange={(selectSort) => setFilter({ ...filter, sort: selectSort })}
      />
    </div>
  );
};
