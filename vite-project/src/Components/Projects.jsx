import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import GitHubIcon from '@mui/icons-material/GitHub';
  import LanguageIcon from '@mui/icons-material/Language';
  import KonceptAgency from '../Assets/images/Koncept-agency-homepage.png'
  import PortfolioImage from '../Assets/images/portfolio.png'
  import BellabhekaWebsite from '../Assets/images/Bellabheka website.png'; 
  export default function Projects() {
    return (
      <section id="Projects">
      <div className="md:container md:mx-auto my-6 mb-10 gap-2 space-x-4">
      <Typography variant="h3" color="blue-gray" className="mb-4 mt-6 text-center font-serif">
        Projects
      </Typography>
      <div data-aos="fade-up" data-aos-duration="2000"> 
      <div className="lg: grid grid-cols-1 md:grid-cols-3 gap-14 ">
        <div className="md:w-96 border-black">
          <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-46">
            <img src={BellabhekaWebsite} alt="Bellabheka Website" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="name-tag mb-2  font-semibold ">
                Bellabheka Website
              </Typography>
              <Typography color="blue-gray">
                Bellabheka is a catering and decor company that provides services to all kinds of events around Durban.
              </Typography>
            </CardBody>
            <CardFooter className="pt-2">
            <div className="icons text-center name-tag">
              <a href="https://github.com/HlobisileLukhele/BellaBheka-Website-" target="_blank" rel="noreferrer">
              <GitHubIcon />
              </a>
              <a href="https://bella-bheka-website.vercel.app/" target="_blank" rel="noreferrer">
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
              <Typography variant="h5" color="blue-gray" className="name-tag mb-2 font-semibold ">
                Personal Portfolio
              </Typography>
              <Typography color="blue-gray">
                Personal portfolio website to showcase skills acquired and projects built along with the impacts it derives.
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
            <CardHeader color="blue-gray" className="relative h-42">
            <img src= {KonceptAgency} alt="card-image" className="h-32" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="name-tag mb-2 font-semibold">
             Koncept Agency
              </Typography>
              <Typography color="blue-gray">
              Developed a website for a branding and illustration agency,assisted  them scale  their web presents and convert visitors to clients.
              </Typography>
            </CardBody>
            <CardFooter className="">
            <div className="icons text-center ">
              <a href="https://github.com/HlobisileLukhele/Koncept-Agency" target="_blank" rel="noreferrer">
              <GitHubIcon />
              </a>
              <a href="https://koncept-agency.vercel.app/" target="_blank" rel="noreferrer">
              <LanguageIcon />
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
