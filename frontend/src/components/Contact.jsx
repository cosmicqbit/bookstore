import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactBody = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto mb-20 md:px-20 px-4">
      <div className="flex justify-center items-center h-screen dark:bg-slate-900 dark:text-white">
        <form className="">
          <h3 className="font-bold my-2 text-3xl">Contact Us</h3>
          <div className="space-y-2 my-4">
            <div>
              <label type="text">Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 border rounded-md py-2 outline-none my-3"
              />
            </div>

            <div>
              <label type="email">Email</label>
              <br />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md py-2 outline-none my-3"
              />
            </div>

            <div>
              <textarea
                placeholder="Type your message here"
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactBody />
      <Footer />
    </>
  );
}
