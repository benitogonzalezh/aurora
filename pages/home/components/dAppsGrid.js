import Image from "next/image";
import GrantCheck from "./grantCheck";

export default function DAppsGrid({ dApps }) {
  function getStyle(status) {
    if (status === "Coming soon") {
      return "relative rounded-md p-4 justify-center flex flex-col items-center text-center md:py-8 border border-dashed border-gray-300 dark:border-gray-700 dark:hover:border-gray-600 hover:border-solid";
    }
    return "group rounded-md p-4 md:py-8 md:px-4 flex flex-col justify-center items-center relative text-center hover:backdrop-brightness-[2.8] backdrop-blur-2xl backdrop-brightness-[2.3]";
  }
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-4 gap-2">
      {(dApps = []).map((dApp, index) => {
        return (
          <div className={getStyle(dApp["status"])} key={index}>
            <div className="w-14 h-14">
              <Image
                className="w-14"
                src={dApp.logo.url}
                alt=""
                width={56}
                height={56}
              ></Image>
            </div>
            <div className="mt-6 text-lg font-semibold leading-tight">
              {dApp.name}
            </div>
            <div className="mt-2 text-sm text-white/[.6] line-clamp-3">
              {dApp.description}
            </div>
            {dApp.grant && <GrantCheck />}
            {dApp.status === "Coming soon" && (
              <div class="mt-3 text-xs font-medium leading-none text-[#a42bc9]">
                Coming soon
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
