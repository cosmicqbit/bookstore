import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:3000/api/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successful");
          document.getElementById("my_modal_3").close();
          window.location.reload();
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.msg);
        }
      });
  };

  const handleCloseModal = (event) => {
    event.preventDefault();
    document.getElementById("my_modal_3").close();
  };

  return (
    <div className="">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleCloseModal}
            >
              ✕
            </Link>
            <h3 className="font-bold my-2 text-lg">Login</h3>
            <div className="space-y-2 my-4">
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
                <button
                  type="submit"
                  className="bg-pink-500 px-4 py-2 rounded text-white hover:bg-pink-600"
                >
                  Login
                </button>
                <p>
                  Not registered?{" "}
                  <Link to="/signup" className="underline text-blue-500">
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
