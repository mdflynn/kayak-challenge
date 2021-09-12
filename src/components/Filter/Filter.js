import React from "react";

const Filter = ({ filter }) => {
  return (
    <form className="filter-form" onChange={filter}>
      <input type="checkbox" name="oneworld" value="sa" />
      <label for="oneworld">OneWorld</label>
      <input type="checkbox" name="skyteam" value="sa" />
      <label for="skyteam">Sky team</label>
      <input type="checkbox" name="staralliance" value="sa" />
      <label for="staralliance">Star Alliance</label>
    </form>
  );
};

export default Filter;
