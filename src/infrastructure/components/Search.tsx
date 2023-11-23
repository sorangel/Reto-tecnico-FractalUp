import { FaSearch } from "react-icons/fa";
import { ChangeEvent, FormEvent, MouseEvent, useState, useRef } from "react";
import { Suggestions } from "./Suggestions.tsx";
import { ContinentWithImagesModel } from "../../domain/models/continentWithImages.model.tsx";
import "../styles/search.scss";

export interface SearchProps {
  label?: string;
  placeholder?: string;
  value: string;
  continents: ContinentWithImagesModel[];
  continentSelected?: ContinentWithImagesModel;
  isLoadingContinents: boolean;
  onSearch: (event?: FormEvent<HTMLFormElement>) => void;
  onChangeValue: (value: ChangeEvent<HTMLInputElement>) => void;
  onClickContinent: (
    event: MouseEvent<HTMLDivElement>,
    continent: ContinentWithImagesModel,
  ) => void;
  onCleanContinentFilter: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Search = ({
  label,
  placeholder,
  onSearch,
  value,
  onChangeValue,
  continents,
  isLoadingContinents,
  onClickContinent,
  onCleanContinentFilter,
  continentSelected,
}: SearchProps): JSX.Element => {
  const inputReference = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onClose = () => {
    setIsFocused(false);
    if (inputReference.current) {
      inputReference.current.blur();
    }
  };

  return (
    <form className="search" onSubmit={onSearch}>
      <label>
        {label}

        <input
          ref={inputReference}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          name="search"
          type="search"
          value={value}
          onChange={onChangeValue}
          className={isFocused ? "active" : ""}
        />

        <button type="submit" className="search-button">
          <FaSearch className="icon" /> Search
        </button>

        <Suggestions
          onClose={onClose}
          continents={continents}
          continentSelected={continentSelected}
          isFocused={isFocused}
          isLoadingContinents={isLoadingContinents}
          onCleanContinentFilter={onCleanContinentFilter}
          onClickContinent={onClickContinent}
        />
      </label>
    </form>
  );
};
