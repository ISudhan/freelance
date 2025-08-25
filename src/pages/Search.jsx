import SearchBox from "../components/SearchBox";

export default function SearchPage() {
  return (
    <section className="section">
      <h1 className="section-title text-gray-900 dark:text-gray-100">Search</h1>
      <SearchBox onSearch={(val) => console.log("Search:", val)} />

      <div className="mt-6 text-gray-600 dark:text-gray-400">Recent searches will appear here.</div>
    </section>
  );
}
