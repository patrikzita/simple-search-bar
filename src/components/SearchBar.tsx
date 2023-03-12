import { FaSearch } from "react-icons/fa";
import { InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { IEscalation } from "../types";

type SearchBarProps = {
  setSearchResults: React.Dispatch<React.SetStateAction<IEscalation[]>>;
};

const getEscalations = () => {
  return axios.get("http://localhost:3500/escalations").then((res) => res.data);
};

const SearchBar = ({ setSearchResults }: SearchBarProps) => {
  const [input, setInput] = useState("");

  const { data, status } = useQuery({
    queryKey: ["escalations"],
    queryFn: getEscalations,
  });

  const handleChange = (value: string) => {
    setInput(value);
    if (value.length == 0) {
      setSearchResults([]);
    } else {
      const filteredData = data.filter((escalation: any) => {
        return escalation.title.toLowerCase().includes(value.toLowerCase());
      });
      setSearchResults(filteredData);
    }
  };

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="search" className="bg-white border-0">
        <FaSearch />
      </InputGroup.Text>
      <Form.Control
        placeholder="Search escalation"
        aria-label="Search escalation"
        aria-describedby="search"
        className="border-0"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchBar;
