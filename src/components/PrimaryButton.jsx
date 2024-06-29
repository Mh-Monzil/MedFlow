import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const PrimaryButton = ({ title, path }) => {
  return (
    <div>
      <Link to={path} className="mx-auto">
        <Button className="text-lg bg-primaryTeal hover:bg-primaryDark focus:outline focus:outline-teal-400 transition-all ease-in">
          {title}
        </Button>
      </Link>
    </div>
  );
};

export default PrimaryButton;
