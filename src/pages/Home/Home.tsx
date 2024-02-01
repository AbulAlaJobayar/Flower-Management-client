
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/navbar/NavBar";
import { useGetAllProductQuery } from "../../redux/fetchurs/getAllproductApi";
import Card from "./Card";
import HeroSection from "./HeroSection";


const Home = () => {
  const { data, isLoading } = useGetAllProductQuery("");
  if (isLoading) {
    return <div>looding...</div>;
  }
  console.log(data);
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="bg-[#fff9f4]">
        <HeroSection />
        <div className=" mx-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
          {data?.data.map((item:any, i: any):any => (
            <Card key={i} item={item}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
