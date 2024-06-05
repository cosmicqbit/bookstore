import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Course() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/allbooks");
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto mb-20 md:px-20 px-4">
        <div className="pt-28 justify-center items-center text-center">
          <h1 className="text-2xl font-bold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here!</span>
          </h1>
          <p className="py-3 text-lg">
            This is the list of all our courses you can enroll. You can enroll
            into both free and paid courses.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-3 py-2 rounded hover:bg-pink-400">
              Back
            </button>
          </Link>
        </div>
        <div className="grid mt-12 grid-cols-1 md:grid-cols-3 gap-y-6">
          {books.map((book) => (
            <Cards key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
