import Link from "next/link";
import icons from "../../../utils/icons";

function BigItemMenu({ icon, title, subtitle }) {
  return (
    <Link href="https://doc.aurora.dev" className="flex items-start group">
      <div className="w-10 h-10 -mt-px rounded-full bg-white bg-opacity-[0.15] flex items-center justify-center mr-3 group-hover:bg-opacity-30">
        <span>{icons[icon]}</span>
      </div>
      <div>
        <div className="flex items-center text-white">
          {title}
          <div className="w-4 h-4 opacity-0 group-hover:opacity-100">
            {icons.toRightArrow}
          </div>
        </div>
        <span className="text-sm font-light opacity-50">{subtitle}</span>
      </div>
    </Link>
  );
}
export default BigItemMenu;
