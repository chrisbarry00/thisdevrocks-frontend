import React, { ReactNode, useState } from "react";

type TooltipProps = {
  text: string;
  children: ReactNode;
};

const tooltipClasses = `
  absolute top-full mt-2 left-1/2 transform -translate-x-1/2 
  whitespace-nowrap bg-black text-white text-sm rounded-md 
  px-2 py-1 z-10
`;

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div role="tooltip" aria-label={text} className={tooltipClasses}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
