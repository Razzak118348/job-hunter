import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

//react tost 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    // console.log(id,jobs)
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id == idInt)
    console.log(job)
    const { educational_requirements, experiences, job_description, job_responsibility,
        salary,
        job_title,

        contact_information
    } = job;

    const handleTost =()=>{
        saveJobApplication(idInt)
        toast('You successfully Applied');
    }

    return (
        <div>
            <h2>Job Details of: {idInt} </h2>
            <div className="m-8 grid grid-cols-1 md:grid-cols-2 space-y-5 md:space-y-0 gap-6">
                <div className="space-y-4">

                    <p> <span className='font-bold'>Job Description:</span> {job_description}</p>
                    <p>
                        <span className="font-bold">Job Responsibility: </span>{job_responsibility}
                    </p>

                    <p className="font-bold">Educational Requirements :</p>
                    <p>{educational_requirements}</p>

                    <p className="font-bold">Experience :</p>
                    <p>{experiences}</p>
                </div>

                <div>
                    <div className="p-4 bg-gradient-to-r from-[#afb5e2] to-[#9888c4] text-black">

                        <h4 className="text-xl font-bold mb-2">Job Details </h4>
                        <hr className="w-3/3 my-2 " />

                        <div className="my-6 ">
                            <h2 className="flex space-x-2 my-3"> <CiDollar className="text-2xl"></CiDollar> <p><span className="font-bold">Salary</span> :{salary} (Per Month)</p>
                            </h2>
                            <h2 className="flex space-x-2 "> <CiCalendarDate className="text-2xl"></CiCalendarDate>
                                <p><span className="font-bold">Job Title :</span>{job_title}</p>
                            </h2>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-2">Contact Information</h2>

                            <hr className="w-3/3 my-2 " />
                            <div>
                                <h2 className="flex space-x-2 my-3"><FaPhoneAlt className="font-2xl"></FaPhoneAlt>
                                    <p><span className="font-bold">Phone : </span>{contact_information.phone}</p>
                                </h2>

                                <h2 className="flex space-x-2 my-3"><MdMarkEmailUnread className="font-2xl"></MdMarkEmailUnread>
                                    <p><span className="font-bold">Email : </span>{contact_information.email}</p>
                                </h2>

                                <h2 className="flex space-x-2 my-3"><CiLocationOn className="font-extrabold"></CiLocationOn>
                                    <p><span className="font-bold">Address : </span>{contact_information.address}</p>
                                </h2>
                            </div>

                        </div>

                    </div>

                    <div className=" flex justify-end mt-5  max-w-full"><button onClick={handleTost} className="btn btn-primary w-full
            ">Apply Now</button>
            <ToastContainer></ToastContainer></div>
                </div>
            </div>


        </div>
    );
};

export default JobDetails;