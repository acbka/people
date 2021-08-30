import React from "react";

type InvoiceIconPropsType = {
  size: string;
  color: string;
};

const InvoiceIcon: React.FC<InvoiceIconPropsType> = ({
  size,
  color,
}: InvoiceIconPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1395 19.3916H3.55127V20.9357H17.1395V19.3916Z"
        fill={color}
      />
      <path
        d="M12.7909 6.96133H8.02989C7.60345 6.96133 7.25781 7.30697 7.25781 7.73341C7.25781 8.15985 7.60345 8.50549 8.02989 8.50549H12.7909C13.2173 8.50549 13.563 8.15985 13.563 7.73341C13.563 7.30697 13.2173 6.96133 12.7909 6.96133Z"
        fill={color}
      />
      <path
        d="M16.3938 10.5646H8.02989C7.60345 10.5646 7.25781 10.9102 7.25781 11.3367C7.25781 11.7631 7.60345 12.1088 8.02989 12.1088H16.3939C16.8203 12.1088 17.1659 11.7631 17.1659 11.3367C17.1659 10.9102 16.8203 10.5646 16.3938 10.5646Z"
        fill={color}
      />
      <path
        d="M20.545 0.158436C20.2678 0.0338712 19.9438 0.0830489 19.7163 0.284026L17.5543 2.19667L15.3897 0.261098C15.0966 -0.00115614 14.6534 -0.00115614 14.3603 0.261098L12.1985 2.19433L10.0365 0.261098C9.74338 -0.00115614 9.3005 -0.00115614 9.00736 0.261098L6.84276 2.19667L4.68074 0.284026C4.45352 0.083295 4.12925 0.0341173 3.85206 0.158436C3.57517 0.283246 3.39708 0.558625 3.39708 0.862305V14.605H0.772078C0.345639 14.6049 0 14.9506 0 15.377V17.2557C0 19.2849 1.65092 20.9358 3.68013 20.9358V19.3917C2.50224 19.3917 1.54412 18.4333 1.54412 17.2557V16.1491H13.6397V17.2557C13.6397 19.2849 15.2906 20.9358 17.3198 20.9358C19.349 20.9358 21 19.2849 21 17.2557V0.862264C21 0.558584 20.8219 0.283246 20.545 0.158436ZM19.4559 17.2557C19.4559 18.4333 18.4975 19.3917 17.3199 19.3917C16.1422 19.3917 15.1839 18.4333 15.1839 17.2557V15.377C15.1839 14.9506 14.8382 14.6049 14.4118 14.6049H4.94119V2.57598L6.33425 3.80846C6.62763 4.06788 7.06872 4.06657 7.3603 3.80563L9.52206 1.8724L11.6838 3.80538C11.977 4.06764 12.4201 4.06764 12.7132 3.80538L14.8753 1.87215L17.037 3.80538C17.3289 4.06632 17.77 4.06735 18.0631 3.80821L19.4559 2.57602V17.2557Z"
        fill={color}
      />
    </svg>
  );
};

export default InvoiceIcon;
