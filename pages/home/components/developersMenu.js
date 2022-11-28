import Link from "next/link";
import icons from "../../../utils/icons";
import BaseMenu from "./baseMenu";
import BigItemMenu from "./bigItemMenu";

function DevelopersMenu() {
  return (
    <BaseMenu>
      <div>
        <div className="p-4 space-y-3">
          <div className="leading-tight text-left">
            <div className="space-y-4">
              <BigItemMenu
                icon="documentation"
                title="Documentation"
                subtitle="Start developing on Aurora."
              />
              <BigItemMenu
                icon="searchFill"
                title="Block Explorer"
                subtitle="Find and explore your Aurora transactions."
              />
              <BigItemMenu
                icon="ether"
                title="Faucet"
                subtitle="Use our faucet to get Aurora ETH."
              />
              <BigItemMenu
                icon="thunder"
                title="Testnet Bridge"
                subtitle="Move tokens between Aurora & Ethereum testnets."
              />
              <BigItemMenu
                icon="security"
                title="Audits"
                subtitle="Audit reports of our smart contracts."
              />
              <BigItemMenu
                icon="discord"
                title="Aurora Discord"
                subtitle="Chat with us and get support."
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Link
                href="#"
                className="flex items-center justify-center h-9 px-3 bg-white bg-opacity-[0.15] hover:bg-opacity-30 font-medium text-sm rounded-md group"
              >
                <span className="mr-2">{icons.github}</span>
                GitHub
              </Link>
              <a
                href="#"
                className="flex items-center justify-center h-9 px-3 bg-white bg-opacity-[0.15] hover:bg-opacity-30 font-medium text-sm rounded-md group"
              >
                <span className="mr-2">{icons.twitter}</span>
                Twitter
              </a>
              <a
                href="#"
                className="col-span-2 flex items-center justify-center h-9 px-3 bg-white bg-opacity-[0.15] hover:bg-opacity-30 font-medium text-sm rounded-md group"
              >
                <span>{icons.securityIssues}</span>
                Bug Bounty Program
              </a>
            </div>
          </div>
        </div>
      </div>
    </BaseMenu>
  );
}

export default DevelopersMenu;
