import Card from "./Card";

const Home = () => {
  return (
    <div className="mx-4">
        <h1 className=" text-2xl font-semibold secondaryFont pt-4 pb-2 text-textColor">Welcome Back !</h1>
        <p className=" text-base text-textColor primaryFont">Hello Jobayar, shop some our newest flower </p>
      <Card/>
    </div>
  );
};

export default Home;