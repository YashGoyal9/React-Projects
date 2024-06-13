import React from 'react';
import './Filter.css';
const Filter = (props) =>{
    let filterData=props.filterData;
    let setCategory=props.setCategory;
    let category=props.category;

    function filterHandler(title){
        setCategory(title);
        // category.classlist.add("active"); glt h ye 
    }
    return(
        <div className='filter'>   
        {
            filterData.map( (data) =>{
                return (<button className={`button border-2  ${category === data.title ? "bg-opacity-60 border-white": "bg-opacity-40 border-transparent"}`}
                    onClick={() =>filterHandler(data.title)} key={data.id} > {data.title}</button>)
            })
        }
        </div>
    )
};

export default Filter;