import { Button } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const BackMenu = () => {
    return (
        <div className="mt-3">
            <Link to="/">
                <Button variant="primary">
                    <IoIosArrowBack size={18} /> Back
                </Button>
            </Link>
        </div>
    );
};

export default BackMenu;