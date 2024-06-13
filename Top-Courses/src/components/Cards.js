import React, { useState } from 'react';
import Card1 from './Card1';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    const [likedcourses, setLikedcourses] = useState([]);

    function getCourses() {
        if (category === "All") {
            let allCourses = [];
            if (courses == null) {
                return null;
            } else {
                Object.values(courses).forEach(courseCategoryArr => {
                    courseCategoryArr.forEach(element => {
                        allCourses.push(element);
                    });
                });
                return allCourses;
            }
        } else {
            // Return only specific category data
            return courses ? courses[category] || [] : [];
        }
    }

    const renderContent = () => {
        const coursesData = getCourses();

        if (coursesData === null) {
            // Render an alternative UI when courses data is null
            return <p className='text-white text-2xl'>No courses available.</p>;
        }

        return (
            <div className='flex flex-wrap justify-center gap-4 mb-4'>
                {coursesData.map((data) => (
                    <Card1 key={data.id} data={data} likedcourses={likedcourses} setLikedcourses={setLikedcourses} />
                ))}
            </div>
        );
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
}

export default Cards;
