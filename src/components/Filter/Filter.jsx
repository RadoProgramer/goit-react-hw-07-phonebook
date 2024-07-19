import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.scss";

const Filter = ({ filter, onChange }) => {
  return (
    <div className={styles.filter}>
      <label htmlFor="filter">Find contact</label>
      <input
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
