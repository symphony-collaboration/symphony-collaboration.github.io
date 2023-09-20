import React from 'react';

const HeaderLine = ({ center }: { center?: boolean }) => {
  if (center == true) {
    return (
      <div className="mx-auto mb-8 h-[2px] max-w-sm bg-gradient-to-r from-transparent via-[#65147c]"></div>
    );
  } else {
    return (
      <div className="h-[2px] mb-8 max-w-sm bg-gradient-to-r from-[#c15bde] via-[#65147c]"></div>
    );
  }
};

export default HeaderLine;
