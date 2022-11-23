export default function TopMenuBanner() {
  return (
    <div className="above-menu-banner">
      <a href="https://aurora.plus" className="flex items-center justify-center flex-1 px-3 font-medium text-black group">
        <svg
          viewBox="0 0 140 25"
          className="h-4 -mt-0.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M37.427 5.48c.143 0 .259.115.259.258v10.949c0 5.191-3.252 7.747-7.543 7.747-4.29 0-7.542-2.556-7.542-7.747V5.737c0-.142.116-.258.259-.258h2.547c.143 0 .259.116.259.259V16.5c0 3.62 1.892 5.058 4.477 5.058 2.585 0 4.478-1.438 4.478-5.058V5.738c0-.143.116-.259.258-.259h2.548zm28.346 9.317c0 3.887 2.851 6.762 6.636 6.762 3.758 0 6.61-2.875 6.61-6.762 0-3.887-2.852-6.762-6.61-6.762-3.785 0-6.636 2.875-6.636 6.762m16.31 0c-.026 5.484-4.21 9.637-9.674 9.637-5.464 0-9.675-4.153-9.675-9.637 0-5.484 4.211-9.637 9.675-9.637s9.648 4.153 9.674 9.637m27.477 9.318h-2.637a.258.258 0 01-.241-.352l6.98-18.01a.388.388 0 01.362-.248h3.3c.161 0 .305.098.363.247l6.98 18.01a.259.259 0 01-.24.353h-2.638a.259.259 0 01-.242-.167l-5.63-14.829a.259.259 0 00-.484 0l-5.63 14.829a.259.259 0 01-.243.167m-106.663 0H.259a.258.258 0 01-.241-.352l6.98-18.01a.388.388 0 01.362-.248h3.3c.161 0 .305.098.363.247l6.98 18.01a.259.259 0 01-.24.353h-2.638a.259.259 0 01-.242-.167L9.253 9.119a.259.259 0 00-.484 0l-5.63 14.829a.259.259 0 01-.242.167m98.906-.418l-5.236-6.68c2.955-.56 4.685-2.553 4.685-5.61 0-3.51-2.29-5.902-6.335-5.902h-7.304a.388.388 0 00-.388.387 2.485 2.485 0 002.486 2.484h4.887c2.449 0 3.62 1.25 3.62 3.057 0 1.808-1.145 3.084-3.62 3.084h-6.985a.388.388 0 00-.388.388v8.951c0 .143.116.259.259.259h2.49a.259.259 0 00.259-.259v-6.68h2.875l4.545 5.926a2.59 2.59 0 002.054 1.013h1.892a.259.259 0 00.204-.418m-43.266 0l-5.235-6.68c2.954-.56 4.684-2.553 4.684-5.61 0-3.51-2.29-5.902-6.334-5.902h-7.304a.388.388 0 00-.388.387 2.485 2.485 0 002.486 2.484h4.886c2.449 0 3.62 1.25 3.62 3.057 0 1.808-1.145 3.084-3.62 3.084h-6.984a.388.388 0 00-.388.388v8.951c0 .143.115.259.258.259h2.49a.259.259 0 00.26-.259v-6.68h2.874l4.546 5.926a2.59 2.59 0 002.054 1.013h1.891a.259.259 0 00.204-.418"
              fill="#000"
            ></path>
            <path
              d="M133.927 0l.028.002a.264.264 0 01.217.21l.008.069v13.443l-.001.03a.274.274 0 01-.189.242l-.063.009h-2.493l-.028-.002a.264.264 0 01-.218-.21l-.008-.07V8.5h-5.258l-.026-.002c-.099-.012-.18-.093-.204-.2l-.007-.067V5.769l.001-.03a.26.26 0 01.177-.23l.06-.009h5.257V.281l.002-.03a.274.274 0 01.189-.242l.063-.009h2.493zm5.492 5.5l.028.002c.131.014.233.128.233.267v2.462l-.001.03a.265.265 0 01-.26.239l-1.735-.007-.07-.001c-1.35-.038-2.434-1.18-2.434-2.585l.002-.037a.396.396 0 01.39-.367l3.847-.003z"
              fill="#000"
            ></path>
          </g>
        </svg>
        <div className="w-0.5 h-4 mx-4 bg-black"></div>
        <span>Claim your free transactions</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}
