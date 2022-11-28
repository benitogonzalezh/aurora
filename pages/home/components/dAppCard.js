import Image from "next/image";
import GrantCheck from "./grantCheck";

function DAppCard({ name, description, grant, status, logo }) {
  function getStyle(status) {
    if (status === "Coming soon") {
      return "relative rounded-md p-4 justify-center flex flex-col items-center text-center md:py-8 border border-dashed border-gray-300 dark:border-gray-700 dark:hover:border-gray-600 hover:border-solid";
    }
    return "group rounded-md p-4 md:py-8 md:px-4 flex flex-col justify-center items-center relative text-center hover:backdrop-brightness-[2.8] backdrop-blur-2xl backdrop-brightness-[2.3]";
  }

  return (
    <div className={getStyle(status)}>
      <div className="w-14 h-14">
        <Image
          src={logo}
          alt={name}
          width={56}
          height={56}
        ></Image>
      </div>
      <div className="mt-6 text-lg font-semibold leading-tight">{name}</div>
      <div className="mt-2 text-sm text-white/[.6] line-clamp-3">
        {description}
      </div>
      {grant && <GrantCheck />}
      {status === "Coming soon" && (
        <div className="mt-3 text-xs font-medium leading-none text-[#a42bc9]">
          Coming soon
        </div>
      )}
    </div>
  );
}

export default DAppCard;
