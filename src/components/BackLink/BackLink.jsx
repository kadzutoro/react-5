import { TbArrowBackUp } from "react-icons/tb";
import css from "./BackLink.module.css";
import { Link } from "react-router-dom";

export default function BackLink ({ to }) {
    return (
        <div className={css.wrapper}>
      <Link to={to}>
        <div className={css.backLink}>
          <TbArrowBackUp size={32} color="white" />
        </div>
      </Link>
      <span>Back</span>
    </div>
    )
}