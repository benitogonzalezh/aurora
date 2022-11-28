const icons = {
  triangle: (
    <svg
      viewBox="0 0 35 35"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 w-4 h-4"
    >
      <path
        d="M17.5 2a5.813 5.813 0 0 0-5.199 3.212L2.614 24.587A5.813 5.813 0 0 0 7.813 33h19.374a5.813 5.813 0 0 0 5.199-8.413L22.699 5.212A5.813 5.813 0 0 0 17.5 2z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  ),
  news: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="flex-shrink-0 w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
        clipRule="evenodd"
      ></path>
      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
    </svg>
  ),
  play: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="flex-shrink-0 w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  download: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 mr-2 fill-current text-opacity-50"
    >
      <path
        fillRule="evenodd"
        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  stars: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="flex-shrink-0 w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  database: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="flex-shrink-0 w-4 h-4"
    >
      <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path>
      <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path>
      <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path>
    </svg>
  ),
  stack: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="flex-shrink-0 w-4 h-4"
    >
      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
    </svg>
  ),
  check: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="flex-shrink-0 w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  pieChart: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="flex-shrink-0 w-4 h-4"
    >
      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
    </svg>
  ),
  ether: (
    <svg
      viewBox="0 0 20 32"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 w-4 h-4"
    >
      <g fill="currentColor">
        <path fillOpacity="0.602" d="M9.997 0v11.615l9.996 4.387z"></path>
        <path d="M9.997 0 0 16.002l9.997-4.387z"></path>
        <path fillOpacity="0.602" d="M9.997 23.53v7.892L20 17.83z"></path>
        <path d="M9.997 31.422v-7.894L0 17.83z"></path>
        <path
          fillOpacity="0.2"
          d="m9.997 21.703 9.996-5.701-9.996-4.384z"
        ></path>
        <path fillOpacity="0.602" d="m0 16.002 9.997 5.701V11.618z"></path>
      </g>
    </svg>
  ),
  rainbow: (
    <svg
      viewBox="0 0 16 10"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 mr-2 fill-current text-opacity-50"
    >
      <path
        d="M6 0c5.523 0 10 4.477 10 10h-5.671A4.328 4.328 0 0 0 6 5.672zM2 6v2H0V6h2zm0-2.854v2H0v-2h2zM5 3v2H3V3h2zm0-3v2H3V0h2z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  discord: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="flex-shrink-0 w-4 h-4"
    >
      <path
        d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  forum: (
    <svg
      viewBox="0 0 34 35"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 w-4 h-4"
    >
      <path
        fill="currentColor"
        d="M0 25.1v-7.8c0-4.7 1.8-8.8 5.2-12.1 2.6-2.5 5.8-4 9.4-4.5C21.5-.4 28.3 3 31.8 9.1c1.6 3 2.4 6.2 2.2 9.5-.4 4.6-2.3 8.5-5.7 11.6-2.5 2.2-5.4 3.6-8.6 4.1-.6.1-1.3.2-2 .2H.6c-.4 0-.5-.1-.5-.5-.1-3-.1-6-.1-8.9zM16.9 7.8c-.6 0-1.2.1-1.8.2-6.2 1.3-9.6 8.1-6.7 13.7.1.3.1.5.1.7-.5 1.6-1 3.2-1.4 4.7-.1.1-.1.3-.1.4.1.1.3 0 .4-.1 1.7-.4 3.4-.9 5.1-1.3.3-.1.6-.1.9.1 1.6.7 3.4.9 5.1.6 5.2-.8 8.9-5.7 8.1-11-.8-4.5-4.8-8-9.7-8z"
      ></path>
    </svg>
  ),
  telegram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      className="flex-shrink-0 w-4 h-4"
    >
      <path
        fill="currentColor"
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
      ></path>
    </svg>
  ),
  twitter: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 512 512"
      className="flex-shrink-0 w-4 h-4"
    >
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
    </svg>
  ),
  youtube: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className="flex-shrink-0 w-4 h-4"
    >
      <path
        fill="currentColor"
        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
      ></path>
    </svg>
  ),
  github: (
    <svg
      viewBox="0 0 36 36"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 w-4 h-4"
    >
      <path d="M18 0C8.06 0 0 8.058 0 18c0 7.953 5.157 14.7 12.31 17.08.9.165 1.23-.39 1.23-.868 0-.427-.017-1.56-.025-3.06-5.007 1.086-6.064-2.415-6.064-2.415-.818-2.078-1.999-2.632-1.999-2.632-1.633-1.118.125-1.094.125-1.094 1.806.127 2.757 1.855 2.757 1.855 1.605 2.75 4.213 1.956 5.238 1.495.163-1.163.628-1.956 1.143-2.406-3.997-.454-8.199-1.999-8.199-8.896 0-1.966.701-3.572 1.852-4.83-.185-.456-.803-2.285.177-4.764 0 0 1.511-.484 4.95 1.845 1.436-.4 2.975-.599 4.506-.606 1.528.007 3.068.207 4.507.606 3.436-2.329 4.944-1.845 4.944-1.845.983 2.479.365 4.308.179 4.764 1.154 1.258 1.85 2.864 1.85 4.83 0 6.915-4.208 8.436-8.218 8.882.646.556 1.222 1.654 1.222 3.333 0 2.407-.022 4.348-.022 4.938 0 .482.324 1.041 1.238.866C30.847 32.693 36 25.95 36 18c0-9.942-8.06-18-18-18"></path>
    </svg>
  ),
  instagram: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 w-4 h-4"
    >
      <path
        d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"
        stroke="none"
      ></path>
    </svg>
  ),
  medium: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 w-4 h-4"
    >
      <path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm256 253.7-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 0 0 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5 100.9-251.3H768v8.5z"
        stroke="none"
      ></path>
    </svg>
  ),
  facebook: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 w-4 h-4"
    >
      <path
        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
        stroke="none"
      ></path>
    </svg>
  ),
  up45arrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  www: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="flex-shrink-0 w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  help: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="flex-shrink-0 w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  message: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 mr-2 fill-current text-opacity-50"
    >
      <path
        fillRule="evenodd"
        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  documentation: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="flex-shrink-0 w-5 h-5 mt-px text-white"
    >
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
    </svg>
  ),
  searchFill: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="flex-shrink-0 w-5 h-5 mt-px text-white"
    >
      <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z"></path>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  thunder: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="flex-shrink-0 w-5 h-5 mt-px text-white"
    >
      <path
        fillRule="evenodd"
        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  security: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="flex-shrink-0 w-5 h-5 mt-px text-white"
    >
      <path
        fillRule="evenodd"
        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  securityIssues: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-5 h-5 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
      ></path>
    </svg>
  ),
  toRightArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  grantCheck: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-6 h-6 text-white opacity-50 fill-current peer hover:opacity-100 transition-opacity"
    >
      <path
        fillRule="evenodd"
        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  logo: (
    <svg viewBox="0 0 135 30" className="h-[inherit]">
      <path
        d="M96.766 7.471c1.506.385 2.147.74 3.296 1.79 2.012 1.878 2.758 4.614 2.027 7.454-.835 3.283-3.787 5.457-7.306 5.398a18.454 18.454 0 01-1.49-.089c-.731-.118-1.999-.65-2.774-1.168-3.802-2.514-4.31-8.253-1.014-11.477a7.308 7.308 0 013.683-1.982c1.372-.28 2.221-.266 3.578.074zm-31.341 0l1.223.044 1.222.045.045 4.141c.06 6.05-.194 7.395-1.685 8.874-1.088 1.065-2.058 1.435-4.026 1.494-.82.03-1.7-.015-1.968-.074-2.207-.562-3.713-2.278-4.085-4.63-.075-.517-.12-2.928-.105-5.368l.045-4.437h2.386l.074 4.954c.075 4.925.075 4.955.448 5.695 1.133 2.248 4.741 2.262 5.934.03l.402-.77.09-9.998zm-18.37.015l.299.784c.164.414.835 2.16 1.506 3.875.67 1.715 1.401 3.608 1.64 4.215.223.606.79 2.056 1.252 3.21.462 1.153.835 2.144.835 2.188 0 .045-.566.074-1.252.074-1.223 0-1.253-.015-1.402-.4-.09-.236-.984-2.543-1.968-5.146-2.296-6.034-2.281-5.99-2.475-5.99-.09 0-.224.222-.313.488-.09.251-.716 1.908-1.387 3.653-.67 1.745-1.58 4.112-2.013 5.25l-.775 2.071-1.208.045c-1.029.03-1.223 0-1.223-.193 0-.266 5.204-13.666 5.413-13.932.09-.133.611-.192 1.61-.192h1.461zm29.046 0c3.861 0 4.726.133 5.83.932.387.28.85.813 1.118 1.272.388.695.477 1.005.522 2.07.044 1.035 0 1.42-.254 2.115-.402 1.02-1.312 1.908-2.385 2.293-.418.147-.76.295-.76.34 0 .044.879 1.183 1.938 2.544 1.073 1.36 1.938 2.529 1.938 2.617 0 .222-2.117.207-2.58 0-.208-.088-1.237-1.286-2.28-2.662l-1.924-2.484-1.074-.015h-1.088v5.324h-2.386l.03-3.653.045-3.668 3.429-.074c2.475-.059 3.534-.133 3.817-.28 1.088-.548 1.536-2.264.85-3.255-.686-1.02-1.044-1.109-4.25-1.198L73.76 9.63l-.462-.458a1.788 1.788 0 01-.537-1.065l-.09-.621h3.43zm33.34.03c3.548.044 3.801.059 4.502.384 1.58.725 2.43 2.011 2.535 3.816.119 2.277-.85 3.845-2.788 4.481-.314.104-.567.252-.567.326 0 .073.85 1.212 1.879 2.529 1.028 1.316 1.908 2.484 1.953 2.603.12.295-2.475.192-2.863-.119-.149-.118-1.103-1.301-2.132-2.618l-1.849-2.41h-1.014c-.79 0-1.029.059-1.103.236-.045.133-.09 1.331-.09 2.663v2.425h-2.385v-3.46c0-1.909.044-3.565.09-3.698.074-.207.521-.237 3.324-.237 3.623 0 4.13-.118 4.801-1.05.477-.665.477-1.952.015-2.603-.611-.843-1.148-.99-4.205-1.08-2.251-.059-2.847-.118-3.16-.325-.478-.31-.91-1.213-.79-1.612.104-.296.178-.296 3.846-.252zm19.815.044l.85 2.144a400.5 400.5 0 011.327 3.328c.253.65 1.103 2.84 1.878 4.851.79 2.012 1.432 3.727 1.432 3.801 0 .089-.537.148-1.238.148h-1.222l-1.104-2.914c-2.34-6.167-3.28-8.548-3.414-8.592-.134-.045-.462.724-2.028 4.777-.268.74-.954 2.484-1.491 3.89-.537 1.39-.984 2.617-.984 2.691 0 .089-.522.148-1.267.148-.731 0-1.268-.06-1.268-.148 0-.103 3.862-10.101 5.204-13.459l.253-.665h3.072zM94.768 9.556c-3.533 0-5.844 3.299-4.756 6.819.283.931.447 1.198 1.252 1.996.76.755 1.104.976 1.894 1.228a5.17 5.17 0 003.951-.281c2.803-1.36 3.698-4.97 1.924-7.647-.925-1.39-2.386-2.115-4.265-2.115z"
        fill="currentColor"
        style={{ color: "white" }}
      ></path>
      <path
        d="M15 2.292a3.317 3.317 0 012.981 1.841l9.375 18.75a3.333 3.333 0 01-2.981 4.825H5.625a3.333 3.333 0 01-2.98-4.825l9.374-18.75A3.317 3.317 0 0115 2.292M15 0a5.625 5.625 0 00-5.031 3.108L.594 21.858A5.625 5.625 0 005.625 30h18.75a5.625 5.625 0 005.03-8.142l-9.374-18.75A5.625 5.625 0 0015 0z"
        fill="currentColor"
        className="text-[#78d64b]"
      ></path>
    </svg>
  ),
  hamburgerMenu: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  search: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-white"
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  close: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
};

export default icons;
