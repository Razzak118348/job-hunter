import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";



const AppliedJobs = () => {

    const jobs = useLoaderData();
const [appliedjobs,setAppliedjobs]=useState([])
const [displayJobs,setDisplayJobs] =useState([]);



    useEffect(() => {
        const storedJobsIds = getStoredJobApplication();
        if (storedJobsIds && jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobsIds.includes(job.id))
            const JobsApplied = [];
            for (const id of storedJobsIds) {
                const job = jobs.find(item=> item.id === id)
                if (job) {
                    JobsApplied.push(job);
                }
            }
        
        setAppliedjobs(JobsApplied)
        setDisplayJobs(JobsApplied)
        }
    }, [jobs])
//   console.log(appliedjobs)

const handleJobsFilter = filter =>{
    if(filter ==='all'){
        setDisplayJobs(appliedjobs)
    }
    else if(filter==='remote'){
        const remoteJobs = appliedjobs.filter(job => job.remote_or_onsite==='Remote')
        setDisplayJobs(remoteJobs);
    }
    else if(filter === 'onsite'){
        const onsiteJobs = appliedjobs.filter(job=> job.remote_or_onsite==='Onsite')
        setDisplayJobs(onsiteJobs)
    }
}


    return (
        <div className="my-8 mx-8">
            <h3  className="text-2xl font-bold">Applied Total jobs : {appliedjobs.length}</h3>

            <details className="dropdown mt-8">
  <summary className="btn m-1">Select One</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>handleJobsFilter('all')}><a>All Category</a></li>
    <li onClick={()=>handleJobsFilter('remote')}><a>Remote</a></li>
    <li onClick={()=>handleJobsFilter('onsite')}><a >Onsite</a></li>
  </ul>
</details>

            <ul className="my-8">
                {//suru te sob jobs dekhabe 
                    displayJobs.map(singlejob => <li key={singlejob.id}>
                       <span > {singlejob.job_title} {singlejob.company_name} : {singlejob.remote_or_onsite}</span>
                    </li>)
                }
                </ul>
            
        </div>
    );
};

export default AppliedJobs;