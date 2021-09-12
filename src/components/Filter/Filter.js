import React from "react";
import "./Filter.scss";

const Filter = ({ filter }) => {
  const handleFilterChange = (e) => {
    const filterOption = e.target.value;

    filter((prevState) => {
      if (!prevState.includes(filterOption)) {
        return [...prevState, filterOption];
      } else {
        const removeFilterOption = prevState.filter(
          (option) => option !== filterOption
        );

        return removeFilterOption;
      }
    });
  };

  return (
    <form className="filter-form" onChange={handleFilterChange}>
      <input type="checkbox" name="oneworld" value="OW" />
      <label htmlFor="oneworld">OneWorld</label>
      <input type="checkbox" name="skyteam" value="ST" />
      <label htmlFor="skyteam">Sky team</label>
      <input type="checkbox" name="staralliance" value="SA" />
      <label htmlFor="staralliance">Star Alliance</label>
    </form>
  );
};

export default Filter;
