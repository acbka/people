import React from "react";

type ForwardIconProps = {
  color: string;
};

const ForwardIcon: React.FC<ForwardIconProps> = ({
  color,
}: ForwardIconProps) => {
  return (
    <svg
      width="7"
      height="11"
      viewBox="0 0 7 11"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.17969 5.89844C6.39062 5.6875 6.39062 5.33594 6.17969 5.125L1.63281 0.554688C1.39844 0.34375 1.04688 0.34375 0.835938 0.554688L0.296875 1.09375C0.0859375 1.30469 0.0859375 1.65625 0.296875 1.89062L3.90625 5.5L0.296875 9.13281C0.0859375 9.36719 0.0859375 9.71875 0.296875 9.92969L0.835938 10.4688C1.04688 10.6797 1.39844 10.6797 1.63281 10.4688L6.17969 5.89844Z"
        fill="#47505A"
      />
    </svg>
  );
};

export default ForwardIcon;
