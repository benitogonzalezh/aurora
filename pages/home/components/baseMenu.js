function BaseMenu({ children }) {
  return (
    <div className="transition-all scale-0 group-hover/item:scale-100 duration-75 absolute z-40 -mt-0 overflow-hidden origin-top transform cursor-auto min-w-56 whitespace-nowrap -translate-x-1/2 left-1/2 top-full bg-[#04131680] backdrop-blur-2xl backdrop-brightness-200 min-w-[14rem] rounded-xl">
      {children}
    </div>
  );
}
export default BaseMenu;