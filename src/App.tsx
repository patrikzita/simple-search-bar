import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResultList from "./components/SearchResultList";
import "./styles.css";
import { IEscalation } from "./types";

function App() {
  const [searchResults, setSearchResults] = useState<IEscalation[]>([]);
  return (
    <div className="search-container">
      <div className="container">
        <SearchBar setSearchResults={setSearchResults} />
        {searchResults && searchResults.length > 0 && (
          <SearchResultList results={searchResults} />
        )}
      </div>
    </div>
  );
}

export default App;
