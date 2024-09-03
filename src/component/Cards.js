import React, { useState } from "react";
import Card from "./Card";


const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikeCourse] = useState([]);



    const getCourses = () => {

        if (category === "All") {
            let allCourses = [];

            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        } else {
            return courses[category]
        }
    }

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-4 mb-4">

                {

                    getCourses().map((course) => (

                        <Card course={course} key={course.id}
                            likedCourses={likedCourses}
                            setLikeCourse={setLikeCourse}
                        />

                    ))

                }

            </div>
        </div>
    )
}

export default Cards;