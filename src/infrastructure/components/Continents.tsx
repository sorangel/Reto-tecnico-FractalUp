import { MouseEvent } from "react";
import { Continent } from "./Continent.tsx";
import { ContinentWithImagesModel } from "../../domain/models/continentWithImages.model.tsx";
import "../styles/continents.scss";

export interface ContinentsProps {
  isLoadingContinents: boolean;
  continents: ContinentWithImagesModel[];
  continentSelected?: ContinentWithImagesModel;
  onClickContinent: (
    event: MouseEvent<HTMLDivElement>,
    continent: ContinentWithImagesModel,
  ) => void;
}

export const Continents = ({
  continents,
  isLoadingContinents,
  continentSelected,
  onClickContinent,
}: ContinentsProps): JSX.Element => {
  return (
    <div className="continents">
      {isLoadingContinents ? (
        <span className="is-loading">...is loading continents</span>
      ) : (
        continents.map((continent: ContinentWithImagesModel) => {
          const isActive: boolean =
            !!continentSelected &&
            new RegExp(continentSelected.code, "gi").test(continent.code);

          return (
            <Continent
              key={continent.code}
              continent={continent}
              onClickContinent={onClickContinent}
              isActive={isActive}
            />
          );
        })
      )}
    </div>
  );
};
