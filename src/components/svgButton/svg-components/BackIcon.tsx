import React from "react";

type BackIconProps = {
  color: string;
};

const BackIcon: React.FC<BackIconProps> = ({ color }: BackIconProps) => {
  return (
    <svg
      width="10"
      height="15"
      viewBox="0 0 10 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.03711 8.18896C0.738281 7.89014 0.738281 7.39209 1.03711 7.09326L7.47852 0.618652C7.81055 0.319824 8.30859 0.319824 8.60742 0.618652L9.37109 1.38232C9.66992 1.68115 9.66992 2.1792 9.37109 2.51123L4.25781 7.62451L9.37109 12.771C9.66992 13.103 9.66992 13.6011 9.37109 13.8999L8.60742 14.6636C8.30859 14.9624 7.81055 14.9624 7.47852 14.6636L1.03711 8.18896Z"
        fill={color}
      />
    </svg>
  );
};

export default BackIcon;
