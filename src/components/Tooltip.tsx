import React, { ReactNode, useState } from "react";

type TooltipProps = {
  text: string;
  children: ReactNode;
};

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
        <div className="absolute bottom-8 flex items-center justify-center whitespace-nowrap bg-black text-white text-sm rounded-md px-2 py-1">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
