import Image from "next/image";

type PropsType = {
  img: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};
export default function Country({
  img,
  name,
  population,
  region,
  capital,
}: PropsType) {
  return (
    <li className="rounded-lg h-full justify-between shadow-xl bg-white dark:bg-stone-700 pb-4 flex flex-col gap-4">
      <img
        className="object-cover rounded-t-xl"
        src={img}
        alt={`flag of ${name}`}
      />

      <div className="px-8 pt-4">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p>
          <b>Population: </b> <span>{population}</span>
        </p>
        <p>
          <b>Region: </b> <span>{region}</span>
        </p>
        <p>
          <b>Capital: </b> <span>{capital || "unknown"}</span>
        </p>
      </div>
    </li>
  );
}
