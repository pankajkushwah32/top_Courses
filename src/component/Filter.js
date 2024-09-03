import React from "react";

const Filter=(props)=>{ 
    let filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;

    function filterHandler(title){
        setCategory(title)
    } 
    return(
        <div className="w-11/12 flex flex-wrap space-4 gap-4 mx-auto py-4 justify-center">
            {filterData.map((data)=>{
               return( 
             <button className="text-lg px-2 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 ransition-all duration-300 "
             key={data.id}
             onClick={()=>filterHandler(data.title)}
             >        
             
                {data.title}
             </button>
               )
            })}
        </div>
    )
}
export default Filter;

