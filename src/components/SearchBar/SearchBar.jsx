import "./Searchbar.css";

function SearchBar() {
  return (
    <section className="search-section">
      <div className="search-card">

        <div className="input-group">
          <label>Location</label>
          <select>
            <option>Select City</option>
            <option>Pune</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
          </select>
        </div>

        <div className="input-group">
          <label>Sport Type</label>
          <select>
            <option>Football</option>
            <option>Cricket</option>
            <option>Badminton</option>
          </select>
        </div>

        <div className="input-group">
          <label>Date</label>
          <input type="date" />
        </div>

        <button className="search-btn">
          Search Available Slots
        </button>

      </div>
    </section>
  );
}

export default SearchBar;