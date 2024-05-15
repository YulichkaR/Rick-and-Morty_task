import React, { useState } from "react";
import { GeneralButton } from "../../common/GeneralButton";
import { Character } from "../Characters";

interface SortProps {
  characters: Character[];
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}

export const Sort: React.FC<SortProps> = ({ characters, setCharacters }) => {
  const [sortField, setSortField] = useState("");
  const [isAscending, setIsAscending] = useState(true);

  const handleSortChange = (field: string) => {
    const sortOrder = isAscending ? 1 : -1;
    const sortedCharacters = [...characters].sort((a: any, b: any) =>
      a[field] > b[field] ? sortOrder : -sortOrder
    );
    setCharacters(sortedCharacters);
    setSortField(field);
    setIsAscending(!isAscending);
  };

  return (
    <div className="filters">
      <h4 className="filters__title">Sort By</h4>
      <div>
        {["name", "gender", "status"].map((field) => (
          <GeneralButton
            key={field}
            value={field}
            onClick={() => handleSortChange(field)}
            isActive={sortField === field}
          />
        ))}
      </div>
    </div>
  );
};
