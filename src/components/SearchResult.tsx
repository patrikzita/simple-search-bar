import { IEscalation } from "../types";

type SearchResultProps = {
  result: IEscalation;
};

const SearchResult = ({ result }: SearchResultProps) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result.title}!`)}
    >
      {result.title}
    </div>
  );
};

export default SearchResult;
