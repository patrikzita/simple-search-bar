import { IEscalation } from "../types";
import SearchResult from "./SearchResult";

type SearchResultListProps = {
  results: IEscalation[];
};

const SearchResultList = ({ results }: SearchResultListProps) => {
  return (
    <div className="results-list">
      {results.map((result: IEscalation) => {
        return <SearchResult result={result} key={result.id} />;
      })}
    </div>
  );
};

export default SearchResultList;
