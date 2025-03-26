import React from "react";

const Promo = ({ color = "#6B7271" }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1744 8.63937C19.8209 8.27 19.4553 7.88938 19.3175 7.55469C19.19 7.24813 19.1825 6.74 19.175 6.24781C19.1609 5.33281 19.1459 4.29594 18.425 3.575C17.7041 2.85406 16.6672 2.83906 15.7522 2.825C15.26 2.8175 14.7519 2.81 14.4453 2.6825C14.1116 2.54469 13.73 2.17906 13.3606 1.82562C12.7137 1.20406 11.9788 0.5 11 0.5C10.0212 0.5 9.28719 1.20406 8.63937 1.82562C8.27 2.17906 7.88938 2.54469 7.55469 2.6825C7.25 2.81 6.74 2.8175 6.24781 2.825C5.33281 2.83906 4.29594 2.85406 3.575 3.575C2.85406 4.29594 2.84375 5.33281 2.825 6.24781C2.8175 6.74 2.81 7.24813 2.6825 7.55469C2.54469 7.88844 2.17906 8.27 1.82562 8.63937C1.20406 9.28719 0.5 10.0212 0.5 11C0.5 11.9788 1.20406 12.7128 1.82562 13.3606C2.17906 13.73 2.54469 14.1106 2.6825 14.4453C2.81 14.7519 2.8175 15.26 2.825 15.7522C2.83906 16.6672 2.85406 17.7041 3.575 18.425C4.29594 19.1459 5.33281 19.1609 6.24781 19.175C6.74 19.1825 7.24813 19.19 7.55469 19.3175C7.88844 19.4553 8.27 19.8209 8.63937 20.1744C9.28625 20.7959 10.0212 21.5 11 21.5C11.9788 21.5 12.7128 20.7959 13.3606 20.1744C13.73 19.8209 14.1106 19.4553 14.4453 19.3175C14.7519 19.19 15.26 19.1825 15.7522 19.175C16.6672 19.1609 17.7041 19.1459 18.425 18.425C19.1459 17.7041 19.1609 16.6672 19.175 15.7522C19.1825 15.26 19.19 14.7519 19.3175 14.4453C19.4553 14.1116 19.8209 13.73 20.1744 13.3606C20.7959 12.7128 21.5 11.9788 21.5 11C21.5 10.0212 20.7959 9.28719 20.1744 8.63937ZM19.0916 12.3228C18.6425 12.7916 18.1775 13.2763 17.9309 13.8716C17.6947 14.4434 17.6844 15.0969 17.675 15.7297C17.6656 16.3859 17.6553 17.0731 17.3638 17.3638C17.0722 17.6544 16.3897 17.6656 15.7297 17.675C15.0969 17.6844 14.4434 17.6947 13.8716 17.9309C13.2763 18.1775 12.7916 18.6425 12.3228 19.0916C11.8541 19.5406 11.375 20 11 20C10.625 20 10.1422 19.5387 9.67719 19.0916C9.21219 18.6444 8.72375 18.1775 8.12844 17.9309C7.55656 17.6947 6.90313 17.6844 6.27031 17.675C5.61406 17.6656 4.92688 17.6553 4.63625 17.3638C4.34562 17.0722 4.33437 16.3897 4.325 15.7297C4.31562 15.0969 4.30531 14.4434 4.06906 13.8716C3.8225 13.2763 3.3575 12.7916 2.90844 12.3228C2.45937 11.8541 2 11.375 2 11C2 10.625 2.46125 10.1431 2.90844 9.67719C3.35562 9.21125 3.8225 8.72375 4.06906 8.12844C4.30531 7.55656 4.31562 6.90313 4.325 6.27031C4.33437 5.61406 4.34469 4.92688 4.63625 4.63625C4.92781 4.34562 5.61031 4.33437 6.27031 4.325C6.90313 4.31562 7.55656 4.30531 8.12844 4.06906C8.72375 3.8225 9.20844 3.3575 9.67719 2.90844C10.1459 2.45937 10.625 2 11 2C11.375 2 11.8578 2.46125 12.3228 2.90844C12.7878 3.35562 13.2763 3.8225 13.8716 4.06906C14.4434 4.30531 15.0969 4.31562 15.7297 4.325C16.3859 4.33437 17.0731 4.34469 17.3638 4.63625C17.6544 4.92781 17.6656 5.61031 17.675 6.27031C17.6844 6.90313 17.6947 7.55656 17.9309 8.12844C18.1775 8.72375 18.6425 9.20844 19.0916 9.67719C19.5406 10.1459 20 10.625 20 11C20 11.375 19.5387 11.8569 19.0916 12.3228ZM10.25 8C10.25 7.55499 10.118 7.11998 9.87081 6.74997C9.62357 6.37996 9.27217 6.09157 8.86104 5.92127C8.4499 5.75097 7.9975 5.70642 7.56105 5.79323C7.12459 5.88005 6.72368 6.09434 6.40901 6.40901C6.09434 6.72368 5.88005 7.12459 5.79323 7.56105C5.70642 7.9975 5.75097 8.4499 5.92127 8.86104C6.09157 9.27217 6.37996 9.62357 6.74997 9.87081C7.11998 10.118 7.55499 10.25 8 10.25C8.59674 10.25 9.16903 10.0129 9.59099 9.59099C10.0129 9.16903 10.25 8.59674 10.25 8ZM7.25 8C7.25 7.85166 7.29399 7.70666 7.3764 7.58332C7.45881 7.45999 7.57594 7.36386 7.71299 7.30709C7.85003 7.25032 8.00083 7.23547 8.14632 7.26441C8.2918 7.29335 8.42544 7.36478 8.53033 7.46967C8.63522 7.57456 8.70665 7.7082 8.73559 7.85368C8.76453 7.99917 8.74968 8.14997 8.69291 8.28701C8.63614 8.42406 8.54002 8.54119 8.41668 8.6236C8.29334 8.70601 8.14834 8.75 8 8.75C7.80109 8.75 7.61032 8.67098 7.46967 8.53033C7.32902 8.38968 7.25 8.19891 7.25 8ZM14 11.75C13.555 11.75 13.12 11.882 12.75 12.1292C12.38 12.3764 12.0916 12.7278 11.9213 13.139C11.751 13.5501 11.7064 14.0025 11.7932 14.439C11.88 14.8754 12.0943 15.2763 12.409 15.591C12.7237 15.9057 13.1246 16.12 13.561 16.2068C13.9975 16.2936 14.4499 16.249 14.861 16.0787C15.2722 15.9084 15.6236 15.62 15.8708 15.25C16.118 14.88 16.25 14.445 16.25 14C16.25 13.4033 16.0129 12.831 15.591 12.409C15.169 11.9871 14.5967 11.75 14 11.75ZM14 14.75C13.8517 14.75 13.7067 14.706 13.5833 14.6236C13.46 14.5412 13.3639 14.4241 13.3071 14.287C13.2503 14.15 13.2355 13.9992 13.2644 13.8537C13.2934 13.7082 13.3648 13.5746 13.4697 13.4697C13.5746 13.3648 13.7082 13.2934 13.8537 13.2644C13.9992 13.2355 14.15 13.2503 14.287 13.3071C14.4241 13.3639 14.5412 13.46 14.6236 13.5833C14.706 13.7067 14.75 13.8517 14.75 14C14.75 14.1989 14.671 14.3897 14.5303 14.5303C14.3897 14.671 14.1989 14.75 14 14.75ZM15.2806 7.78063L7.78063 15.2806C7.71094 15.3503 7.62822 15.4056 7.53717 15.4433C7.44613 15.481 7.34855 15.5004 7.25 15.5004C7.15145 15.5004 7.05387 15.481 6.96283 15.4433C6.87178 15.4056 6.78906 15.3503 6.71937 15.2806C6.64969 15.2109 6.59442 15.1282 6.5567 15.0372C6.51899 14.9461 6.49958 14.8485 6.49958 14.75C6.49958 14.6515 6.51899 14.5539 6.5567 14.4628C6.59442 14.3718 6.64969 14.2891 6.71937 14.2194L14.2194 6.71937C14.2891 6.64969 14.3718 6.59442 14.4628 6.5567C14.5539 6.51899 14.6515 6.49958 14.75 6.49958C14.8485 6.49958 14.9461 6.51899 15.0372 6.5567C15.1282 6.59442 15.2109 6.64969 15.2806 6.71937C15.3503 6.78906 15.4056 6.87178 15.4433 6.96283C15.481 7.05387 15.5004 7.15145 15.5004 7.25C15.5004 7.34855 15.481 7.44613 15.4433 7.53717C15.4056 7.62822 15.3503 7.71094 15.2806 7.78063Z"
        fill={color}
      />
    </svg>
  );
};

export default Promo;
