import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs , setJobs]=useState([])

//this is not the best way to show all data 

const [dataLength,setDatalength]=useState(4)

    useEffect(()=>{
fetch('job.json')
.then(res => res.json())
.then(data=> setJobs(data))
    },[])

    return (
        <div className="my-16">
            <h2 className="text-5xl text-center">Featured Jobs :{jobs.length}</h2>
            <p className="text-center mt-8 max-w-96 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat </p>

<div className=" mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 ">
    {
        jobs.slice(0,dataLength).map(job=> <Job key={job.id} singleJob={job}></Job>)
    }
</div>

<div className="text-center mt-4">
<div className={  dataLength === jobs.length && 'hidden'} >
<button onClick={()=>{setDatalength(jobs.length)}}  className="btn btn-primary text-lg font-bold text-center ">Show All Jobs</button>

</div>
</div>
        </div>
        
    );
};

export default FeaturedJobs;