import Image from "next/image";
import bg from "../../../public/bg.webp";

export default function SpaceBackground() {
  return (
    <div className="absolute inset-0 -mt-96 h-[1800px] w-full overflow-hidden z-0 pointer-events-none opacity-50 max-h-[125vh]">
      <span>
        <Image
          src={bg}
          className="absolute w-full object-cover object-[top_center] max-h-[125vh] m-auto p-0 top-0 bottom-0 w-0 h-0 min-w-full min-h-full max-w-full min-w-full"
          alt=""
        ></Image>
      </span>
      <div className="absolute left-0 right-0 bottom-0 h-[600px] bg-gradient-to-t from-[#041417] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#041417] pointer-events-none"></div>
      <div
        className="meteor opacity-0 top-[600px] left-[30%] animate-[meteor_9s_linear_infinite]"
        style={{ animationDelay: "9s" }}
      ></div>
      <div
        className="meteor opacity-0 top-[500px] left-[50%] animate-[meteor_7s_linear_infinite]"
        style={{ animationDelay: "5s" }}
      ></div>
      <div
        className="meteor opacity-0 top-[720px] left-[60%] animate-[meteor_8s_linear_infinite]"
        style={{ animationDelay: "12s" }}
      ></div>
      <div
        className="meteor opacity-0 top-[1000px] left-[80%] animate-[meteor_6s_linear_infinite]"
        style={{ animationDelay: "20s" }}
      ></div>
    </div>
  );
}
