import { selectCurrentUser } from "../../redux/fetchurs/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";

const Profile = () => {
    const user = useAppSelector(selectCurrentUser);
  return (
    <div>
      <div className="max-w-md mx-auto mt-20   bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <h1 className="text-2xl mt-4 py-10 md:text-4xl font-semibold text-center mx-auto flex justify-center items-center">
          Welcome Back{" "}
          <span className="text-primaryy ml-2 capitalize"> {user?.name}</span>
        </h1>

        <div className="flex flex-row gap-8 justify-center items-center">
          <img
            className=" object-center mb-10  rounded-full w-28 h-28"
            src={user?.image}
            alt="Profile"
            //   width={200}
            //   height={200}
          />
          <div className="py-4 px-6 mb-10 ">
            <h1 className="text-2xl font-bold capitalize text-gray-800">
              {user?.name}
            </h1>
            <p className="text-sm text-gray-600">Email: {user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
