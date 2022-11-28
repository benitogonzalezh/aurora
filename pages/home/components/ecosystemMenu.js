import Link from "next/link";
import icons from "../../../utils/icons";
import BaseMenu from "./baseMenu";
import SmallItemMenu from "./smallItemMenu";

function EcosystemMenu() {
  return (
    <BaseMenu>
      <div>
        <div className="p-4 space-y-3">
          <SmallItemMenu icon="stars" title="Ecosystem Apps" />
          <SmallItemMenu icon="database" title="Tokens" />
          <SmallItemMenu icon="stack" title="Grants" />
          <SmallItemMenu icon="check" title="Aurora DAO" />
          <SmallItemMenu icon="pieChart" title="AURORA Token" />
          <SmallItemMenu icon="triangle" title="AURORA Futures Token" />
          <SmallItemMenu icon="ether" title="Faucet" />
          <Link
            href="#"
            className="flex items-center justify-center h-9 px-3 bg-white bg-opacity-[0.15] hover:bg-opacity-30 font-medium text-sm rounded-md group"
          >
            {icons.rainbow}
            <span>Rainbow Bridge</span>
          </Link>
        </div>
      </div>
    </BaseMenu>
  );
}

export default EcosystemMenu;
