
import { useGetAllProductQuery } from "../../redux/fetchurs/getAllproductApi";
import Card from "./Card";



const Home = () => {
  const { data, isLoading } = useGetAllProductQuery("");
  if (isLoading) {
    return <div>looding...</div>;
  }
  return (
    <div className="container mx-auto">
      <div className="bg-[#fff9f4]">
       
        <div className=" mx-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
          {data?.data?.map((item:any, i: any):any => (
            <Card key={i} item={item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
