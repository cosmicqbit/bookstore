import { Link, Navigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:3000/api/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successful");
          <Navigate to="/" />;
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.msg);
        }
      });
  };

  return (
    <div className="flex h-screen justify-center items-center ">
      <div id="my_modal_3" className="rounded">
        <div className=" dark:bg-slate-900 dark:text-white modal-box w-[450px] py-10">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold my-2 text-xl">Signup</h3>
            <div className="space-y-2 my-4">
              <div>
                <span>Name</span>
                <br></br>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-80 px-3 border rounded-md py-2 outline-none my-3"
                  {...register("name", { required: true })}
                />
                <br></br>
                {errors.name && (
                  <span className="text-xs text-red-400">
                    * This field is required
                  </span>
                )}
              </div>
              <div>
                <span>Email</span>
                <br></br>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 border rounded-md py-2 outline-none my-3"
                  {...register("email", { required: true })}
                />
                <br></br>
                {errors.email && (
                  <span className="text-xs text-red-400">
                    * This field is required
                  </span>
                )}
              </div>

              <div>
                <span className="">Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 border rounded-md py-2 outline-none my-3"
                  {...register("password", { required: true })}
                />
                <br></br>
                {errors.password && (
                  <span className="text-xs text-red-400">
                    * This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-pink-500 px-4 py-2 rounded text-white hover:bg-pink-600">
                  Signup
                </button>
                <p>
                  Existing user?{" "}
                  <Link
                    to="/"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal();
                    }}
                  >
                    Login
                  </Link>{" "}
                  <Login />
                </p>
                <Login className="z-10" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
