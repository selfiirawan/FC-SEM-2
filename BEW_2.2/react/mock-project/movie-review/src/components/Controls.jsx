import { useState } from "react";

export default function Controls() {
  const [sort, setSort] = useState("created-new-first");
  const [watched, setWatched] = useState("all");

  return (
    <div className="controls-section border shadow-sm p-7">
      <h2 className="ms-2">Controls</h2>

      <div className="d-flex mb-7">
        {/* sort */}
        <div className="form-floating me-5" style={{ width: 300 }}>
          <label htmlFor="sort">Sort</label>
          <select
            id="sort"
            className="form-control"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="created-new-first">Created (newest first)</option>
            <option value="created-old-first">Created (oldest first)</option>
            <option value="rating-desc">Rating (high to low)</option>
            <option value="title-asc">Title (A-Z)</option>
          </select>
        </div>

        {/* watched */}
        <div className="form-field">
          <span className="form-label">Watched</span>

          <div className="d-flex gap-3">
            <div className="form-field">
              <input
                className="radio"
                type="radio"
                name="watched"
                id="watched-all"
                value="all"
                onChange={(e) => setWatched(e.target.value)}
                defaultChecked
              />
              <label htmlFor="watched-all">All</label>
            </div>

            <div className="form-field">
              <input
                className="radio"
                type="radio"
                name="watched"
                id="watched"
                value="watched"
                onChange={(e) => setWatched(e.target.value)}
              />
              <label htmlFor="watched">Watched</label>
            </div>

            <div className="form-field">
              <input
                className="radio"
                type="radio"
                name="watched"
                id="unwatched"
                value="unwatched"
                onChange={(e) => setWatched(e.target.value)}
              />
              <label htmlFor="unwatched">Unwatched</label>
            </div>
          </div>
        </div>
      </div>

      {/* rating */}
      <div className="form-field ms-3" style={{ width: 300 }}>
        <label htmlFor="rating" className="form-label">
          Minimum Rating: All
        </label>
        <div className="form-range">
          <input
            type="range"
            className="form-range-input"
            id="rating"
            min="0"
            max="5"
            step="1"
            defaultValue="0"
          />
        </div>
      </div>

      {/* buttons */}
      <div className="d-flex gap-2 mt-7 ms-3">
        <button type="button" className="btn-outline theme-primary">
          <i className="bi bi-download me-2"></i>
          Export JSON
        </button>
        <button type="button" className="btn-outline theme-primary">
          <i className="bi bi-upload me-2"></i>
          Import JSON
        </button>
      </div>
    </div>
  );
}
