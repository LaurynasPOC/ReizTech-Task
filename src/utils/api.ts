import { Country } from "../components/types";

export const getCountries = async (): Promise<Country[]> => {
    const resp = await fetch('https://restcountries.com/v2/all?fields=name,region,area').then((resp) => resp.json());
    return resp;
}
