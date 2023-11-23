import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { CountryModel } from "../../domain/models/country.model.tsx";
import { ContinentWithImagesModel } from "../../domain/models/continentWithImages.model.tsx";

export interface UseSearchOptions {
  data: CountryModel[];
  continentSelected?: ContinentWithImagesModel;
}

export interface UseSearchReturn {
  query: string;
  onSearch: (event?: FormEvent<HTMLFormElement>) => void;
  onChangeQuery: (value: ChangeEvent<HTMLInputElement>) => void;
  results: CountryModel[];
}

export const useSearch = ({
  data,
  continentSelected,
}: UseSearchOptions): UseSearchReturn => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<CountryModel[]>(data);

  const isContinentSelected: boolean = useMemo<boolean>(
    () => !!continentSelected,
    [continentSelected],
  );

  const onFilter = ({ _query }: { _query?: string } = {}): void => {
    const currentQuery: string = _query || query;
    const hasQuery: boolean = !!currentQuery;

    const filter: CountryModel[] = data.filter(({ name }) =>
      new RegExp(currentQuery, "gi").test(name),
    );

    const filteredByContinent: CountryModel[] = !isContinentSelected
      ? filter
      : filter.filter((country) =>
          new RegExp(continentSelected!.code, "gi").test(
            country.continent.code,
          ),
        );

    if (!hasQuery) {
      setResults(data);
      return;
    }

    setResults(filteredByContinent);
  };

  const onSearch = (event?: FormEvent<HTMLFormElement>): void => {
    if (!!event) event.preventDefault();
    onFilter();
  };

  const onChangeQuery = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;

    setQuery(value);
    onFilter({ _query: value });
  };

  useEffect(() => {
    const _results: CountryModel[] = isContinentSelected
      ? data.filter((item: CountryModel) =>
          new RegExp(item.continent.code, "gi").test(continentSelected!.code),
        )
      : data;

    setResults(_results);
  }, [continentSelected, data]);

  return { onSearch, onChangeQuery, query, results };
};
