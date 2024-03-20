import './resumebutton.css'
import Resume from '../Assets/Resume.pdf';
import { HiDownload } from "react-icons/hi";

const Resumebutton = () =>  {
    return (
      <>
      <button className="button resume-btn me-4 mr-4 " type="button text-white " >
        Resume
      <a href={Resume} download className='btn primary icon-link  text-white '>
       <HiDownload/>
      </a> 
      </button>
      </>
    );
    };

 export default Resumebutton;