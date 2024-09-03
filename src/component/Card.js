import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc"
import { toast } from "react-toastify";


const Card = (props) => {
    let course=props.course
    let likedCourses=props.likedCourses;
    let setLikeCourse=props.setLikeCourse;


     function clickHandler(){
        if(likedCourses.includes(course.id)){
            //phale se likeed hua pada h
            setLikeCourse( (prev)=>prev.filter((cid)=>(cid !==course.id)));
            toast.warning("Like removed")
        }
        else{
            //pehle se like nahi hai ye course
            //insert karna h ye course liked course se
            if(likedCourses.length===0){
                setLikeCourse([course.id]);
            }
            else{
                //non empty pehle se
                setLikeCourse((prev)=>[...prev,course.id]);
            }
            toast.success("Liked Succesfully")
        }
     }

    return (
        <div className="w-[300px] bg-bgDark rounded-md overflow-hidden   bg-opacity-80 border-slate-400 border-2">
            <div className="relative">
                <img src={course.image.url}></img>
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-1 grid place-items-center">
                    <button onClick={clickHandler} >
                    {
                        likedCourses.includes(course.id)?
                        (<FcLike fontSize="1.75rem"></FcLike>):
                        (<FcLikePlaceholder fontSize="1.75rem" />)
                      
                    }
                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                    course.description.length>100?
                    (course.description.substr(0,100))+"...":
                    (course.description)
                    }
                    </p>
            </div>
        </div>
    )
}
export default Card;