import Books from "/books.png";
export default function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        {/* Left Text */}
        <div className="order-2 md:order-1 w-full md:w-1/2 md:mt-32 mt-12">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold mt-7">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday</span>
            </h1>
            <p className="text-xl">
              This is a description about the product that we are listing here,
              you should look into it too and you might find it intersting
            </p>
            <label className="input input-bordered flex w-2/3 md:w-3/4 sm:w-full items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow w-3" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-4">Subscribe</button>
        </div>
        {/* Right Image */}
        <div className="order-1 md:order-2 w-full md:w-1/2 flex items-center">
          <div className="">
            <img src={Books} alt="books" className="w-100 h-100" />
          </div>
        </div>
      </div>
    </>
  );
}
