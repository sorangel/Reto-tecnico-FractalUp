import { IoCloseCircleOutline } from "react-icons/io5";
import { MouseEvent, MouseEventHandler } from "react";
import { Continents } from "./Continents.tsx";
import { ContinentWithImagesModel } from "../../domain/models/continentWithImages.model.tsx";
import "../styles/suggestions.scss";

export interface SuggestionsProps {
  isFocused: boolean;
  isLoadingContinents: boolean;
  continents: ContinentWithImagesModel[];
  continentSelected?: ContinentWithImagesModel;
  onClose: MouseEventHandler<HTMLButtonElement>;
  onCleanContinentFilter: MouseEventHandler<HTMLButtonElement>;
  onClickContinent: (
    event: MouseEvent<HTMLDivElement>,
    continent: ContinentWithImagesModel,
  ) => void;
}

export const Suggestions = ({
  isFocused,
  onClose,
  onCleanContinentFilter,
  isLoadingContinents,
  continents,
  continentSelected,
  onClickContinent,
}: SuggestionsProps): JSX.Element => {
  return (
    <div
      className="suggestions"
      style={{ visibility: isFocused ? "visible" : "hidden" }}
    >
      <button type="button" className="close-button" onClick={onClose}>
        <IoCloseCircleOutline />
      </button>

      <div className="header">
        <h5>filter by continents</h5>

        <button
          type="button"
          className="continents-clean-button"
          onClick={(event: MouseEvent<HTMLButtonElement>): void => {
            onCleanContinentFilter(event);
          }}
        >
          Clean
        </button>
      </div>

      <Continents
        continents={continents}
        onClickContinent={onClickContinent}
        isLoadingContinents={isLoadingContinents}
        continentSelected={continentSelected}
      />
    </div>
  );
};
