import React, { ReactElement } from "react";

type DonePropsType = {
  width?: string;
  height?: string;
  color?: string;
};

const Success: React.FC<DonePropsType> = ({
  width = "20px",
  height = "14px",
  color = "#00B167",
}: DonePropsType): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 197 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path
          d="M72.1372 116.411L24 68.2695L46.958 45.3115L72.1372 70.4907L130.042 12.5898L153 35.5478L72.1372 116.411Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="-10"
          width="197"
          height="197"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="10" dy="24" />
          <feGaussianBlur stdDeviation="17" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.137361 0 0 0 0 0.766667 0 0 0 0 0.50056 0 0 0 0.14 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Success;
