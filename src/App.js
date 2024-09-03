import React from "react";
import { filterData, apiUrl } from "./data"
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./component/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory]=useState(filterData[0].title)


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();

        console.log(output)
        setCourses(output.data)
      }
      catch {
        toast.error("something went wrong")
      }
      setLoading(false)
    }
    fetchData();
  }, [])

  return (
    <div  className="min-h-screen flex flex-col bg-bgDark2 bg-slate-800"  >  

      <div> <Navbar /></div>

      <div className="">
      <div >
        < Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>


      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
        {
          loading ? (<Spinner />) : (<Cards courses={courses}  category={category}/>)
        }
      </div>
      </div>

    </div>

  )
}
export default App;
