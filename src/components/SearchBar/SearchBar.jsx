import "./Searchbar.css";
import {
  FiMapPin,
  FiCalendar,
  FiActivity
} from "react-icons/fi";

function SearchBar() {
  return (
    <section className="search-section">
      <div className="search-card">

        <div className="input-group">
  <label>
    <FiMapPin /> Location
  </label>

  <select>
    <option>Select City</option>
    <option>Pune</option>
    <option>Mumbai</option>
  </select>
</div>

        <div className="input-group">
  <label>
    <FiActivity /> Sport
  </label>

  <select>
    <option>Football</option>
    <option>Cricket</option>
    <option>Badminton</option>
  </select>
</div>

        <div className="input-group">
  <label>
    <FiCalendar /> Date
  </label>
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