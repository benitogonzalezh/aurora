import Image from "next/image";
import bg from "../../../public/bg.webp";

export default function SpaceBackground() {
  return (
    <div className="absolute w-full opacity-50 max-h-[125vh] mt-[-24rem] h-[1800px]">
      <Image
        src={bg}
        className="absolute w-full object-cover object-top max-h-[125vh]"
        alt=""
      ></Image>
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
