import { CountryModel } from "../../domain/models/country.model.tsx";
import { useUnsplash } from "../hooks/useUnsplash.tsx";
import "../styles/country-details.scss";

export interface CountryDetailsProps extends CountryModel {}

export const CountryDetails = ({
  name,
  continent,
  code,
  states,
  capital,
  languages,
  currencies,
}: CountryDetailsProps): JSX.Element => {
  const { pictures } = useUnsplash({
    lang: "es",
    query: `country city ${name}${
      !!states.length ? ` ${states[0]?.name}` : ""
    }`,
  });

  return (
    <div className="country-details">
      <div className="cover">
        <img src={pictures[0]?.urls[0]?.full || "#"} alt="cover" />
      </div>

      <div className="country-information">
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

      <div className="extra-info">
        {!!capital ? (
          <p className="capital">
            <strong>Capital:</strong>
            {capital}
          </p>
        ) : undefined}

        {!!languages.length ? (
          <p className="languages">
            <strong>Languages:</strong>
            {languages.map(({ name }) => name).join(", ")}
          </p>
        ) : undefined}

        {!!currencies.filter((currency) => !!currency).length ? (
          <p className="currencies">
            <strong>Currencies:</strong>
            {currencies.filter((currency) => !!currency).join(", ")}
          </p>
        ) : undefined}

        {!!states.length ? (
          <p className="states">
            <strong>States:</strong>
            {states.map(({ name }) => name).join(", ")}
          </p>
        ) : undefined}
      </div>
    </div>
  );
};
