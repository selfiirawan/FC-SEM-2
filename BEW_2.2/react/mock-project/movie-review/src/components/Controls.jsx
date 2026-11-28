import { useState } from "react";

export default function Controls() {
  const [sort, setSort] = useState("created-new-first");
  const [watched, setWatched] = useState("all");

  return (
    <div className="controls-section border shadow-sm p-5">
      <h2>Controls</h2>

      {/* sort */}
      <div className="form-floating" style={{ maxWidth: 300 }}>
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
      <div>
        <div className="text-muted mb-1">Watched</div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="watched"
            id="watched-all"
            value="all"
            checked={watched === "all"}
            onChange={(e) => setWatched(e.target.value)}
          />
          <label className="form-check-label" htmlFor="watched-all">
            All
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="watched"
            id="watched-yes"
            value="watched"
            checked={watched === "watched"}
            onChange={(e) => setWatched(e.target.value)}
          />
          <label className="form-check-label" htmlFor="watched-yes">
            Watched
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="watched"
            id="watched-no"
            value="unwatched"
            checked={watched === "unwatched"}
            onChange={(e) => setWatched(e.target.value)}
          />
          <label className="form-check-label" htmlFor="watched-no">
            Unwatched
          </label>
        </div>
      </div>
    </div>
  );
}
