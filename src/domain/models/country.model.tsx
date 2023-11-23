import { CountryLanguageModel } from "./countryLanguage.model.tsx";
import { CountryContinentModel } from "./countryContinent.model.tsx";
import { CountryStatesModel } from "./countryStates.model.tsx";

export interface CountryModel {
  awsRegion: string;
  capital: string;
  code: string;
  continent: CountryContinentModel;
  currencies: string[];
  currency: string;
  emoji: string;
  emojiU: string;
  languages: CountryLanguageModel[];
  name: string;
  native: string;
  phone: string;
  phones: string[];
  states: CountryStatesModel[];
}
