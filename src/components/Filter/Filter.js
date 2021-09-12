import React from "react";

const Filter = ({ filter }) => {

    const handleFilterChange = (e) => {
        console.log(e.target);

    }
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
