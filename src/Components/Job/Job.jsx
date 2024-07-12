import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Job = ({singleJob}) => {
    const{id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=singleJob;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl  border-4 border-gray-500 p-4">
        <figure>
          <img
            src={logo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="my-2">
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-2 text-[#7E90FE]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-2 text-[#7E90FE]">{job_type}</button>
          </div> 

          <div className="flex">
          <h2 className="flex my-4 "> <CiLocationOn className="text-2xl mr-2"></CiLocationOn> {location}</h2>
<h2 className="flex my-4 ml-4 "><CiDollar className="text-2xl mr-2"></CiDollar>{salary}</h2>
          </div>

          <div className="card-actions ">
          <Link to={`/job/${id}`}>  <button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};
Job.propTypes ={
singleJob:PropTypes.object
}
export default Job;