import Countries from "@/components/Countries";

export default async function FilteredRegion({
  params,
}: {
  params: { region: string };
}) {
  const data = await getCountiresByRegion(params.region);

  return <Countries countries={data} />;
}

async function getCountiresByRegion(region: string) {
  const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  if (!res.ok) throw new Error("Failed to fetch countries.");
  const data = await res.json();
  return data;
}
