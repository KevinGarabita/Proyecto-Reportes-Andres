type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="row text-white">
      <div className="col">
        <div className="input-group">
          <span className="input-group-text rounded-start-pill px-4">
            <i className="bi bi-search">🔍</i>
          </span>
          <input
            type="text"
            className="form-control rounded-end-pill py-3 px-4"
            placeholder="Buscar folio pisa"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
