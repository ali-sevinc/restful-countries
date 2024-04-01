import Countries from "@/components/Countries";
import React from "react";

export default async function Home() {
  const data = await getAllCountries();

  return <Countries countries={data} />;
}

async function getAllCountries() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,currencies"
  );
  if (!res.ok) throw new Error("An error occured.");
  const data = await res.json();
  return data;
}
