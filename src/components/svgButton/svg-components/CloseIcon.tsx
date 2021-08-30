import React from "react";

type CloseIconProps = {
  color: string;
};

const CloseIcon: React.FC<CloseIconProps> = ({ color }: CloseIconProps) => {
  return (
    <svg
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="1.98625"
        height="17.8763"
        rx="0.993127"
        transform="matrix(0.727062 0.686572 -0.727062 0.686572 18.7739 5.45512)"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.4952 17.0467C19.894 17.4233 19.894 18.0338 19.4952 18.4104C19.0964 18.787 18.4499 18.787 18.0511 18.4104L6.49805 7.50076C6.09927 7.12418 6.09927 6.51363 6.49805 6.13705C6.89684 5.76048 7.5434 5.76048 7.94218 6.13705L19.4952 17.0467Z"
        fill={color}
      />
    </svg>
  );
};

export default CloseIcon;
