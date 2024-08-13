import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import GitHubIcon from '@mui/icons-material/GitHub';
  import LanguageIcon from '@mui/icons-material/Language';
  import KonceptAgency from '../Assets/images/facilitators.png'
  import PortfolioImage from '../Assets/images/portfolio.png'
  import BellabhekaWebsite from '../Assets/images/connecthire.png'; 
  export default function Projects() {
    return (
      <section id="Projects">
      <div className="md:container md:mx-auto my-6 mb-10 gap-2 space-x-4">
      <Typography variant="h3" color="blue-gray" className="mb-4 mt-6 text-center font-serif">
        Projects
      </Typography>
      <div data-aos="fade-up" data-aos-duration="2000"> 
      <div className="lg: grid grid-cols-1 md:grid-cols-3 gap-2 ">
        <div className="md:w-96 border-black">
          <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-46">
            <img src={BellabhekaWebsite} alt="Bellabheka Website" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="name-tag mb-2  font-semibold ">
                ConnectHire 
              </Typography>
              <Typography color="blue-gray">
              Connecthire is a job portal platform built with React.js that simplifies the job search and recruitment process.. It offers easy job searches, application management, and real-time notifications,designed to streamline the connection between employers and potential employees, making the job market more accessible and efficient.
              </Typography>
            </CardBody>
            <CardFooter className="pt-2">
            <div className="icons text-center name-tag">
              <a href="https://github.com/HlobisileLukhele/ConnectHire" target="_blank" rel="noreferrer">
              <GitHubIcon />
              </a>
              <a href="https://connecthire.vercel.app/" target="_blank" rel="noreferrer">
              <LanguageIcon />
              </a>
            </div>
            </CardFooter>
          </Card>
        </div>
        <div className=" md:w-96 border-black">
          <Card className="mt-6 space-x-4">
            <CardHeader color="blue-gray" className="relative h-46">
              <img src={PortfolioImage} alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="name-tag mb-2 font-semibold">
                Personal Portfolio
              </Typography>
              <Typography color="blue-gray">
              Personal portfolio, developed with React.js, features an interactive layout showcasing projects and skills. It includes a contact form for inquiries, smooth navigation, and a modern design to effectively present work and expertise. However, it focuses on simplicity, ensuring that content is easily accessible without overwhelming the user
              </Typography>
            </CardBody>
            <CardFooter className="pt-2">
            <div className="icons text-center ">
              <a href="https://github.com/HlobisileLukhele/Portfolio" target="_blank" rel="noreferrer">
              <GitHubIcon />
              </a>
              <a href="https://portfolio-ecru-five-97.vercel.app/" target="_blank" rel="noreferrer">
              <LanguageIcon />
              </a>
            </div>
            </CardFooter>
          </Card>
        </div>

        <div className="w-full md:w-96">
          <Card className="mt-6 border-black">
            <CardHeader color="blue-gray" className="relative h-38">
            <img src= {KonceptAgency} alt="card-image" className="h-30 w-full" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="name-tag mb-2 font-semibold">
             Bconsult Operational System
              </Typography>
              <Typography color="blue-gray">
              Bconsult LMS system, built with PHP, JavaScript, HTML, CSS, and Tailwind provides a streamlined platform for online learning. It features course management, student tracking, and interactive learning tools, offering an efficient and user-friendly experience for both educators and learners.
              </Typography>
            </CardBody>
            <CardFooter className="mb-0">
            <div className="icons text-center ">
              <a href="https://github.com/Bconsult-operation-system/Operational-system" target="_blank" rel="noreferrer">
              <GitHubIcon />
              </a>
            </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>


    

    </div>
    </section>
    );
  }
