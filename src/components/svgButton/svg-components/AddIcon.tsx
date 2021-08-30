import React from "react";

type IconProps = {
  color: string;
};

const AddIcon: React.FC<IconProps> = ({ color }: IconProps) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.96739 1.04524C8.96813 0.477663 9.44795 5.43049e-09 10.0173 1.18832e-08C10.5435 1.78454e-08 10.9545 0.410225 10.9538 0.934659L10.9332 16.8017C10.9324 17.3693 10.4526 17.847 9.8832 17.847C9.35708 17.847 8.94608 17.4368 8.94676 16.9123L8.96739 1.04524Z"
        fill={color}
      />
      <path
        d="M17.4522 7.93237C18.0007 7.93237 18.4199 8.37628 18.3885 8.92387C18.3571 9.47146 17.887 9.91537 17.3385 9.91537L1.44847 9.91537C0.899978 9.91537 0.480788 9.47146 0.512182 8.92387C0.543577 8.37628 1.01367 7.93237 1.56215 7.93237L17.4522 7.93237Z"
        fill={color}
      />
    </svg>
  );
};
export default AddIcon;
