export default function Cards({ book }) {
  return (
    <>
      <div>
        <div className="card w-96 dark:bg-slate-900 dark:border dark:text-white bg-base-100 shadow-xl hover:scale-105 cursor-pointer duration-200">
          <figure>
            <img src={book.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {book.name}
              <div className="badge badge-secondary">{book.category}</div>
            </h2>
            <p>{book.title}</p>
            <div className="card-actions flex my-2 justify-between">
              <div className="badge badge-outline">${book.price}</div>
              <div className="badge badge-outline cursor-pointer px-4 py-3 text-md hover:text-white hover:bg-pink-500">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
