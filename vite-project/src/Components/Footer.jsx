import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="w-full bg-white p-4">
      <hr className="my-4 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Hlobisile Lukhele
      </Typography>
    </footer>
  );
}