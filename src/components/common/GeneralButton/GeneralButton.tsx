import React from "react";
import "./GeneralButton.css";

interface GeneralButtonProps {
  value: string;
  onClick: () => void;
  isActive?: boolean;
}

export const GeneralButton: React.FC<GeneralButtonProps> = ({
  value,
  onClick,
  isActive,
}) => {
  const buttonClass = isActive ? "active" : "";

  return (
    <button className={`Button ${buttonClass}`} onClick={onClick}>
      {value}
    </button>
  );
};
