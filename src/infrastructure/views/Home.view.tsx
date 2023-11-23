import { TechnicalChallengeLayout } from "../layouts/TechnicalChallenge.layout.tsx";
import { Search } from "../components/Search.tsx";
import { Countries } from "../components/Countries.tsx";
import { MouseEvent, useMemo, useState } from "react";
import { NavigationItemModel } from "../../domain/models/NavigationItem.model.tsx";
import { CONTINENTS_WITH_IMAGES, NAVIGATION_ITEMS } from "../../constants.tsx";
import { useSearch } from "../hooks/useSearch.tsx";
import { useCountries } from "../hooks/useCountries.tsx";
import { useContinents } from "../hooks/useContinents.tsx";
import { ContinentModel } from "../../domain/models/continent.model.tsx";
import { ContinentWithImagesModel } from "../../domain/models/continentWithImages.model.tsx";
import "../styles/home-view.scss";
import { CountryModel } from "../../domain/models/country.model.tsx";
import { CountryDetails } from "../components/CountryDetails.tsx";

export interface HomeViewProps {}

export const HomeView = ({}: HomeViewProps): JSX.Element => {
  const [countrySelected, setContrySelected] = useState<
    CountryModel | undefined
  >(undefined);
  const [continentSelected, setContinentSelected] = useState<
    ContinentWithImagesModel | undefined
  >(undefined);

  const { data: countries, loading: loadingCountries } = useCountries();

  const { data: continents, loading: loadingContinents } = useContinents();

  const countriesFilteredByContinent: CountryModel[] = useMemo<CountryModel[]>(
    () =>
      !continentSelected
        ? countries
        : countries.filter((country: CountryModel) =>
            new RegExp(continentSelected!.code, "gi").test(
              country.continent.code,
            ),
          ),
    [countries, continentSelected],
  );

  const {
    query,
    onSearch,
    onChangeQuery,
    results: countriesFiltered,
  } = useSearch({ data: countriesFilteredByContinent, continentSelected });

  const navigationItems: NavigationItemModel[] = useMemo<NavigationItemModel[]>(
    () => NAVIGATION_ITEMS,
    [],
  );

  const continentsWithImages: ContinentWithImagesModel[] = useMemo(
    () =>
      loadingContinents
        ? []
        : continents.map<ContinentWithImagesModel>(
            (continent: ContinentModel) => {
              const withImage = CONTINENTS_WITH_IMAGES.find(({ code }) =>
                new RegExp(code, "gi").test(continent.code),
              );

              return {
                ...continent,
                image: withImage?.image,
              };
            },
          ),
    [loadingContinents, continents],
  );

  const onClickContinent = (
    _event: MouseEvent<HTMLDivElement>,
    continent: ContinentWithImagesModel,
  ): void => {
    setContinentSelected(continent);
  };

  const onCleanContinentFilter = (
    _event: MouseEvent<HTMLButtonElement>,
  ): void => {
    setContinentSelected(undefined);
    onSearch();
  };

  return (
    <TechnicalChallengeLayout navigationItems={navigationItems}>
      <div
        className={`${
          !!countrySelected ? "with-country-selected" : ""
        } home-content`}
      >
        <Search
          placeholder="Type the country you want to see"
          onSearch={onSearch}
          onChangeValue={onChangeQuery}
          value={query}
          continents={continentsWithImages}
          isLoadingContinents={loadingContinents}
          onClickContinent={onClickContinent}
          onCleanContinentFilter={onCleanContinentFilter}
          continentSelected={continentSelected}
        />

        {loadingCountries ? (
          <p className="loading">...loading countries</p>
        ) : (
          <Countries
            selected={countrySelected}
            onSelect={(country: CountryModel) => setContrySelected(country)}
            data={countriesFiltered}
          />
        )}

        {!!countrySelected ? (
          <CountryDetails {...countrySelected} />
        ) : undefined}
      </div>
    </TechnicalChallengeLayout>
  );
};
