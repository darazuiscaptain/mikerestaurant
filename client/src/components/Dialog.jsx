import { useState } from 'react';

function Dialog({ open, handler, children, style }) {
  const [preventClose, setPreventClose] = useState(false);

  const handleDialogClick = () => {
    setPreventClose(true);
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    if (!preventClose) {
      handler();
    }
    setPreventClose(false);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 shadow-2xl   ${
        open ? 'visible' : 'invisible'
      }`}
      onClick={handleClose}
    >
      <div
        className="bg-white min-w-[350px] min-h-[300px] rounded-lg shadow-2xl p-8 overflow-hidden"
        style={style}
        onClick={handleDialogClick}
      >
        <div onClick={handleContentClick}>{children}</div>
      </div>
    </div>
  );
}

export default Dialog;