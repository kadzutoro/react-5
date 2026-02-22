import { TbArrowBackUp } from "react-icons/tb";
import css from "./BackLink.module.css";
import { Link } from "react-router-dom";

export default function BackLink ({ to }) {
    return (
        <div>
            <Link to={to}>
            <div>
                <TbArrowBackUp size={30} />
            </div>
            </Link>
            <span>Go back</span>
        </div>
    )
}