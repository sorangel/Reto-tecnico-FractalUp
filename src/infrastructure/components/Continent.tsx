import { MouseEvent } from "react";
import { ContinentWithImagesModel } from "../../domain/models/continentWithImages.model.tsx";
import "../styles/continent.scss";

export interface ContinentProps {
  isActive: boolean;
  continent: ContinentWithImagesModel;
  onClickContinent: (
    event: MouseEvent<HTMLDivElement>,
    continent: ContinentWithImagesModel,
  ) => void;
}

export const Continent = ({
  isActive,
  continent,
  onClickContinent,
}: ContinentProps): JSX.Element => {
  return (
    <div
      className={`${isActive ? "active" : ""} continent`}
      onClick={(event: MouseEvent<HTMLDivElement>): void => {
        onClickContinent(event, continent);
      }}
    >
      <div className="cover">
        <img src={continent?.image || "#"} alt={`${continent.name} image`} />
      </div>

      <div className="details">
        <span>{continent.name}</span>
      </div>
    </div>
  );
};
