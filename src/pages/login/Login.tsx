import { FormEvent, useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/fetchurs/auth/authApi";
import { toast } from "sonner";
import { verifyToken } from "../../utils/veryfyToken";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/fetchurs/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const loginInfo = {
    email: email,
    password: password,
  };
  const [data]: any = useLoginMutation();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("login User", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration:2000,
    });
    setLoading(true)
    try {
      const res: any = await data(loginInfo);
      console.log(res.data.data);
      const user = verifyToken(res.data.data);
      console.log(user);
      dispatch(setUser({ user: user, token: res.data.data }));
      toast.success("login success", {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
      setLoading(false);
      navigate("/");
    } catch (err) {
      toast.error("something went wrong. please check your Email and Password", { id: toastId, duration: 2000 })
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-backgroundColor text-textColor">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-textColor">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-accent focus:outline-primary bg-gray-200 text-textColor"
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
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-accent focus:outline-primary  text-textColor"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-primary text-textColor w-full rounded-md py-3 primaryFont "
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
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
