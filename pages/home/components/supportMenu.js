import Link from "next/link";
import icons from "../../../utils/icons";
import BaseMenu from "./baseMenu";
import SmallItemMenu from "./smallItemMenu";

function SupportMenu() {
  return (
    <BaseMenu>
      <div>
        <div className="p-4 space-y-3">
          <SmallItemMenu icon="help" title="Get Help" />
          <SmallItemMenu icon="www" title="Knowledge Base" showArrow />
          <SmallItemMenu icon="telegram" title="Telegram" showArrow />
          <SmallItemMenu icon="discord" title="Discord" showArrow />
          <Link
            href="#"
            className="flex items-center justify-center h-9 px-3 bg-white bg-opacity-[0.15] hover:bg-opacity-30 font-medium text-sm rounded-md group"
          >
            {icons.message}
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </BaseMenu>
  );
}

export default SupportMenu;
