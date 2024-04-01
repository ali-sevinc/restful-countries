import Countries from "@/components/Countries";

export default async function Search({
  params,
}: {
  params: { searchQuery: string };
}) {
  const data = await fetchCountriesByName(params.searchQuery);

  return <Countries countries={data} />;
}

async function fetchCountriesByName(name: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=false`
  );
  const data = await res.json();

  if (!res.ok) throw new Error("Failed to fetch countries.");
  return data;
}
