import Link from "next/link";
import Nav from "../src/components/Nav/Nav";
import { useEffect, useState, useRef } from "react";
import { MountedContext, useMountedContext } from "../src/MountedContext";
import Footer from "../src/components/Footer/Footer";

export default function Search() {
  const { mounted, setMounted } = useMountedContext();
  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line
  }, []);

  const [search, setSearch] = useState("");

  const [searchSelected, setSearchSelected] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // focus the input field when the page loads
  useEffect(() => {
    inputRef.current?.focus();
  }, []);


  const handleSearch = async () => {
    try {
        console.log(search);
        const response = await fetch("/api/writeFile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ search }),
        });
        const data = await response.json();
        console.log(data.message);
        setSearch("");
    } catch (error) {
        console.error("Error writing to file:", error);
    }

  }

  // focus the input field when the enter key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSearch();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
        document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSearch]);


  return (
    <>
      <Nav mounted={mounted} />
      <div
        style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
        className="flex flex-col justify-center text-center"
      >
        <h1 className="text-5xl font-semibold text-center pt-8 mt-8">Search</h1>
        <p className="pb-8 mb-8 text-gray-500 dark:text-gray-400">
          Add <strong>new</strong> restaurants to our database!
        </p>
        <input
          style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
          className="bg-gray-200 dark:bg-gray-600 border-2 border-gray-300 dark:border-gray-500 rounded-lg py-2 px-4 text-gray-700 dark:text-gray-200 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
          type="text"
          name="name"
          ref={inputRef}
          value={search}
          placeholder="Press Enter to Search"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <div>
        </div>
        <Footer />
      </div>
    </>
  );
}