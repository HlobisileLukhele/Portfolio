import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import GitHubIcon from '@mui/icons-material/GitHub';
  import LanguageIcon from '@mui/icons-material/Language';
   
  export default function Projects() {
    return (
      <div className="md:container md:mx-auto my-6 mb-10 gap-2 space-x-4">
      <Typography variant="h3" color="blue-gray" className="mb-4 mt-6 text-center font-serif">
        Projects
      </Typography>
      <div className="lg: grid grid-cols-1 md:grid-cols-3 gap-14 ">
        <div className="md:w-96 border-black">
          <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-46">
              <img src="public/images/Bellabheka website.png" alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-indigo-500 font-semibold ">
                Bellabheka Website
              </Typography>
              <Typography color="blue-gray">
                Bellabheka is a catering and decor company that provides services to all kinds of events around Durban.
              </Typography>
            </CardBody>
            <CardFooter className="pt-2">
            <div className="icons text-center">
              <a href="https://github.com/HlobisileLukhele/BellaBheka-Website-" target="_blank">
              <GitHubIcon />
              </a>
              <a href="https://bellabheksa-website.netlify.app/" target="_blank">
              <LanguageIcon />
              </a>
            </div>
            </CardFooter>
          </Card>
        </div>
    
        <div className=" md:w-96 border-black">
          <Card className="mt-6 space-x-4">
            <CardHeader color="blue-gray" className="relative h-46">
              <img src="public/images/Portfolio Website.jpeg" alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-indigo-500 font-semibold ">
                Personal Portfolio
              </Typography>
              <Typography color="blue-gray">
                Personal portfolio website to showcase skills acquired and projects built along with the impacts it derives.
              </Typography>
            </CardBody>
            <CardFooter className="pt-2">
            <div className="icons text-center ">
              <a href="https://github.com/HlobisileLukhele/Portfolio" target="_blank">
              <GitHubIcon />
              </a>
              <LanguageIcon />
            </div>
            </CardFooter>
          </Card>
        </div>

        <div className="w-full md:w-96">
          <Card className="mt-6 border-black">
            <CardHeader color="blue-gray" className="relative h-46">
            <img src="public/images/Fruad Detector.jpeg" alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-indigo-500 font-semibold">
                Fruad Detector
              </Typography>
              <Typography color="blue-gray">
              A application that checks for fraudulent activities by analyzing card transactions.
              </Typography>
            </CardBody>
            <CardFooter className="pt-5">
            <div className="icons text-center">
              <LanguageIcon />
            </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
    );
  }