import { CountryModel } from "../../domain/models/country.model.tsx";
import { useUnsplash } from "../hooks/useUnsplash.tsx";
import "../styles/country.scss";

export interface CountryProps extends CountryModel {
  onSelect: (country: CountryModel) => void;
  isSelected: boolean;
}

export const Country = ({
  name,
  continent,
  code,
  states,
  capital,
  languages,
  currencies,
  currency,
  emoji,
  emojiU,
  native,
  phones,
  phone,
  awsRegion,
  onSelect,
  isSelected,
}: CountryProps): JSX.Element => {
  const { pictures } = useUnsplash({
    lang: "es",
    query: `country city ${name}${
      !!states.length ? ` ${states[0]?.name}` : ""
    }`,
  });

  return (
    <div
      className={`${isSelected ? "is-selected" : ""} country`}
      onClick={() =>
        onSelect({
          name,
          continent,
          code,
          states,
          capital,
          languages,
          currencies,
          currency,
          emoji,
          emojiU,
          native,
          phones,
          phone,
          awsRegion,
        })
      }
    >
      <div className="cover">
        <img src={pictures[0]?.urls[0]?.full || "#"} alt="cover" />
      </div>

      <div className="flag">
        <img
          src={`https://flagsapi.com/${code.toUpperCase()}/shiny/64.png`}
          alt="Country Flag"
        />
      </div>

      <div className="details">
        <h4 className="title">{name}</h4>
        <p className="sub-title">{continent.name}</p>
      </div>
    </div>
  );
};
