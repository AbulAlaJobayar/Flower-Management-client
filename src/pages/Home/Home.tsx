import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/navbar/NavBar";
import { useGetAllProductQuery } from "../../redux/fetchurs/getAllproductApi";

const Home = () => {
  const { data, error, isLoading }=useGetAllProductQuery('')
  if(isLoading){
    return <div>looding...</div>
  }
  console.log(data)
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="bg-[#fff9f4]">

      <h1>hello home</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
