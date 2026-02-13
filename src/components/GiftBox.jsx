import { useState } from "react";

export default function GiftBox() {
  const [open, setOpen] = useState(false);

  return (
    <div className="gift-wrapper">
      
      {!open && (
        <>
          <p className="gift-instruction">🎁 Open the gift box</p>

          <div 
            className="gift-box closed"
            onClick={() => setOpen(true)}
          >
            🎁
          </div>
        </>
      )}

      {open && (
        <div className="gift-open-container fade-in-big">
          <div className="gift-box opened">🎉</div>
          <p className="gift-message">
            Sneha, you are the most precious gift in Ajay's life ❤️
          </p>
        </div>
      )}
    </div>
  );
}
