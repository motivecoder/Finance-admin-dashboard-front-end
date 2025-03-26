import React from "react";

const Clock = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.625 3.75C8.06865 3.75 4.375 7.44365 4.375 12C4.375 16.5563 8.06865 20.25 12.625 20.25C17.1813 20.25 20.875 16.5563 20.875 12C20.875 7.44365 17.1813 3.75 12.625 3.75ZM2.875 12C2.875 6.61522 7.24022 2.25 12.625 2.25C18.0098 2.25 22.375 6.61522 22.375 12C22.375 17.3848 18.0098 21.75 12.625 21.75C7.24022 21.75 2.875 17.3848 2.875 12Z"
        fill="#1E4841"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.625 6C13.0392 6 13.375 6.33579 13.375 6.75V11.25H17.875C18.2892 11.25 18.625 11.5858 18.625 12C18.625 12.4142 18.2892 12.75 17.875 12.75H12.625C12.2108 12.75 11.875 12.4142 11.875 12V6.75C11.875 6.33579 12.2108 6 12.625 6Z"
        fill="#1E4841"
      />
    </svg>
  );
};

export default Clock;
