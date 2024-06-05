import Book from "../models/book.model.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
    // console.log(books);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Something went wrong" });
  }
};
