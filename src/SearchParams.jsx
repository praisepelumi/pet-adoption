const SearchParams = () => {
  const location = "New York, NY";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input type="text" id='location' value={location} placeholder="Location" />
        </label>
      </form>
    </div>
  )
}

export default SearchParams;