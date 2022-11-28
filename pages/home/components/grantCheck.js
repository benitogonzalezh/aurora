import icons from "../../../utils/icons";

export default function GrantCheck() {
  return (
    <div className="absolute top-2 right-2">
      <div className="relative">
        <div className="w-6 h-6 text-white opacity-50 fill-current peer hover:opacity-100 transition-opacity">
          {icons.grantCheck}
        </div>
        <div className="absolute right-0 text-sm bg-white text-gray-600 mt-1 py-0.5 px-2 rounded opacity-0 peer-hover:opacity-100 transition-opacity whitespace-nowrap shadow-strong font-medium">
          Received a grant
        </div>
      </div>
    </div>
  );
}
