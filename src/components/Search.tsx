"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

export default function Search() {
  const [search, setSearch] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  const router = useRouter();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (search.trim().length < 2) return;
    router.push(`/search/${search}`);
    setSearch("");
  }

  function handleFilter(event: ChangeEvent<HTMLSelectElement>) {
    const filterValue = event.target.value;
    setFilterRegion(filterValue);
    if (filterValue === "") {
      router.push("/");
    } else {
      router.push(`/filter/${filterValue}`);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 w-full flex-col md:flex-row flex items-center justify-between gap-4">
      <form
        onSubmit={handleSubmit}
        className="flex bg-white dark:bg-stone-700 items-center h-14 max-w-2xl md:max-w-lg w-full text-lg font-semibold tracking-widest gap-4 border p-3  rounded-md focus-within:shadow-xl"
      >
        <label htmlFor="search">
          <HiOutlineSearch />
        </label>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="search"
          name="search"
          type="search"
          placeholder="Search for a country"
          className="focus:outline-none flex-1 p-1 bg-white dark:bg-stone-700"
        />
      </form>
      <div className="relative">
        <select
          value={filterRegion}
          onChange={handleFilter}
          className="bg-white p-4 w-48 rounded-md text-lg border h-14 dark:bg-stone-700"
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
