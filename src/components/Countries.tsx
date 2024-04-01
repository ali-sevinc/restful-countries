"use client";

import Country from "./Country";

type Country = {
  flags: { png: string };
  name: { common: string };
  population: number;
  region: string;
  capital: string[];
  currencies: string;
  language: string;
};
type PropsType = {
  countries: Country[];
};
export default function Countries({ countries }: PropsType) {
  // console.log(countries);
  return (
    <ul className="grid pb-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center gap-8  max-w-7xl mx-4 lg:mx-auto ">
      {countries &&
        countries.map((country) => (
          <Country
            key={country.name.common}
            img={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        ))}
    </ul>
  );
}
