import React, { useCallback } from "react";
import "./Filters.css";
import { GeneralButton } from "../../common/GeneralButton";

interface FiltersProps {
  filters: {
    status: string;
    gender: string;
    species: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      status: string;
      gender: string;
      species: string;
    }>
  >;
}

export const Filters: React.FC<FiltersProps> = ({ filters, setFilters }) => {
  const handleFilterChange = useCallback(
    (filterType: string, value: string | null) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [filterType]: value,
      }));
    },
    [setFilters]
  );

  return (
    <div className="filters">
      <h4 className="filters__title">Status</h4>
      <div>
        {["Alive", "Dead", "Unknown"].map((status) => (
          <GeneralButton
            key={status}
            value={status}
            onClick={() =>
              handleFilterChange(
                "status",
                filters.status === status ? null : status
              )
            }
            isActive={filters.status === status}
          />
        ))}
      </div>
      <h4 className="filters__title">Gender</h4>
      <div>
        {["Male", "Female", "Genderless", "Unknown"].map((gender) => (
          <GeneralButton
            key={gender}
            value={gender}
            onClick={() =>
              handleFilterChange(
                "gender",
                filters.gender === gender ? null : gender
              )
            }
            isActive={filters.gender === gender}
          />
        ))}
      </div>
      <h4 className="filters__title">Species</h4>
      <div>
        {[
          "Human",
          "Alien",
          "Humanoid",
          "Poopybutthole",
          "Mythological",
          "Animal",
          "Robot",
          "Cronenberg",
          "Planet",
          "Disease",
          "Unknown",
        ].map((species) => (
          <GeneralButton
            key={species}
            value={species}
            onClick={() =>
              handleFilterChange(
                "species",
                filters.species === species ? null : species
              )
            }
            isActive={filters.species === species}
          />
        ))}
      </div>
    </div>
  );
};
