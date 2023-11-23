import { ApolloError, useQuery } from "@apollo/client";
import { CONTINENTS_QUERY } from "../gql/continents.query.tsx";
import { ContinentModel } from "../../domain/models/continent.model.tsx";

export interface UseCountriesOptions {}

export interface UseCountriesReturn {
  loading: boolean;
  error: ApolloError | undefined;
  data: ContinentModel[];
}

export const useContinents =
  ({}: UseCountriesOptions = {}): UseCountriesReturn => {
    const { loading, error, data } = useQuery<{ continents: ContinentModel[] }>(
      CONTINENTS_QUERY,
    );

    return { loading, error, data: data?.continents || [] };
  };
