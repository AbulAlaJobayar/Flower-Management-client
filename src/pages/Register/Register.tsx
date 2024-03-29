import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { imageHosting } from "../../utils/imageHosting";
import { useSignupMutation } from "../../redux/fetchurs/signupApi";
import { toast } from "sonner";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data] = useSignupMutation();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const toastId = toast.loading("login User", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration: 2000,
    });
    // Image Upload
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const image = event.target.image.files[0];

    try {
      const imageUrl = await imageHosting(image);
      console.log(name, email, password, imageUrl);
      const userInfo = {
        name: name,
        image: imageUrl,
        email: email,
        password: password,
      };

      data(userInfo);
      toast.success("registration success", {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
      setLoading(false);
      navigate("/login");
    } catch (error) {
      toast.error("something went wrong. please change your email", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold text-textColor">Sign Up</h1>
          <p className="text-sm text-gray-400 text-textColor">
            Welcome to Florist
          </p>
        </div>
        <form onSubmit={handleSubmit} action="" className="space-y-6 ">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-textColor"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-secondaryy focus:outline-accent bg-gray-200 text-textColor"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                className=" rounded-md border-secondaryy focus:outline-accent bg-gray-200 text-textColor"
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-secondaryy focus:outline-accent bg-gray-200 text-textColor"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-secondaryy focus:outline-accent bg-gray-200 text-textColor"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-primaryy w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="m-auto animate-spin" size={24} />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>

        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
