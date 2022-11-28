import Link from "next/link";
import icons from "../../../utils/icons";
import BaseMenu from "./baseMenu";
import SmallItemMenu from "./smallItemMenu";

function AboutMenu() {
  return (
    <BaseMenu>
      <div>
        <div className="p-4 space-y-3">
          <SmallItemMenu icon="triangle" title="About Aurora" />
          <SmallItemMenu icon="news" title="News & Updates" />
          <SmallItemMenu icon="play" title="Videos" />
          <Link
            href="#"
            className="flex items-center justify-center h-9 px-3 bg-white bg-opacity-[0.15] hover:bg-opacity-30 font-medium text-sm rounded-md group"
          >
            {icons.download}
            <span>Press Kit</span>
          </Link>
        </div>
      </div>
    </BaseMenu>
  );
}

export default AboutMenu;
