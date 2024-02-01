import { selectCurrentUser } from "../../redux/fetchurs/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  const user = useAppSelector(selectCurrentUser);
  return (
    <div className="mx-4">
      <div className=" text-center">
        <h1 className=" text-2xl font-semibold secondaryyFont pt-4 pb-2 text-textColor">
          Hello, {user?.name} !
        </h1>
        <p className=" text-base text-textColor  primaryyFont">
          Here your Store Seeling performance
        </p>
      </div>
      {/* <h1 className=" text-2xl font-semibold secondaryyFont pt-4 pb-2 text-textColor">
        Welcome Back !
      </h1>
      <p className=" text-base text-textColor  primaryyFont">
        Hello Jobayar, shop some our newest flower{" "}
      </p> */}
      <DashboardCard />
    </div>
  );
};

export default Dashboard;
