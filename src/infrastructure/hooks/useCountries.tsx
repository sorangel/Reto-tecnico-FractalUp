import { ApolloError, useQuery } from "@apollo/client";
import { COUNTRIES_QUERY } from "../gql/countries.query.tsx";
import { CountryModel } from "../../domain/models/country.model.tsx";

export interface UseCountriesOptions {}

export interface UseCountriesReturn {
  loading: boolean;
  error: ApolloError | undefined;
  data: CountryModel[];
}

export const useCountries =
  ({}: UseCountriesOptions = {}): UseCountriesReturn => {
    const { loading, error, data } = useQuery<{ countries: CountryModel[] }>(
      COUNTRIES_QUERY,
    );

    return { loading, error, data: data?.countries || [] };
  };
