import { CountryModel } from "../../domain/models/country.model.tsx";
import { Country } from "./Country.tsx";
import "../styles/countries.scss";

export interface CountriesProps {
  selected?: CountryModel;
  data: CountryModel[];
  onSelect: (country: CountryModel) => void;
}

export const Countries = ({
  data,
  selected,
  onSelect,
}: CountriesProps): JSX.Element => {
  return (
    <article className="countries">
      {data.map((countryData: CountryModel) => {
        const isSelected: boolean =
          !!selected && new RegExp(countryData.code, "gi").test(selected.code);

        return (
          <Country
            isSelected={isSelected}
            onSelect={onSelect}
            key={countryData.code}
            {...countryData}
          />
        );
      })}
    </article>
  );
};
