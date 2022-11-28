import Link from "next/link";
import icons from "../../../utils/icons";

function SmallItemMenu({ icon, title, showArrow = false }) {
  return (
    <Link className="flex items-center w-full group" href="#">
      <div className="w-8 h-8 bg-white bg-opacity-[0.15] flex items-center justify-center rounded-full mr-3 group-hover:bg-opacity-30">
        {icons[icon]}
      </div>
      <span>{title}</span>
      <div className="inline-block w-3 h-3 ml-1 opacity-50 -rotate-45 group-hover:opacity-100">
        {showArrow && icons.up45arrow}
      </div>
    </Link>
  );
}
export default SmallItemMenu;
