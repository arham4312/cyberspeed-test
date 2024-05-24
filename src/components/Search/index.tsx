import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./index.module.css";

const SearchInput: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialSearchText = searchParams.get("search") || "";
  const [searchText, setSearchText] = useState(initialSearchText);

  useEffect(() => {
    const currentSearch = searchParams.get("search");
    if (currentSearch !== searchText) {
      setSearchText(currentSearch || "");
    }
  }, [searchParams, searchText]);

  const updateQuery = (text: string) => {
    const params = new URLSearchParams();
    if (text) {
      params.set("search", text);
    }
    navigate({ search: params.toString() });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    updateQuery(value);
  };

  const handleReset = () => {
    setSearchText("");
    updateQuery("");
  };

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" className={styles.label}>
        <input
          className={styles.input}
          type="text"
          required
          placeholder="Search movies"
          id="search"
          value={searchText}
          onChange={handleChange}
          aria-label="Search Movies by title"
        />
        <div className={styles["fancy-bg"]}></div>
        <button className={styles.search} type="button" aria-label="Search">
          {/* Replace with actual SearchIcon component */}
          <span className={styles.icon}>🔍</span>
        </button>
        <button
          className={styles["close-btn"]}
          type="reset"
          onClick={handleReset}
          aria-label="Clear search"
        >
          {/* Replace with actual CloseIcon component */}
          <span className={styles["close-icon"]}>✖</span>
        </button>
      </label>
    </form>
  );
};

export default SearchInput;
