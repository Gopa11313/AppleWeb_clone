import React from "react";
function DisplaySection({ triggerPreview }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brillent.</p>
      <span className="description">
        From $41,62/mo. for 24 mo. or $999 before trade-in
      </span>
      <button className="button" onClick={triggerPreview}>
        Try me!
      </button>
      <button className="back-button" onClick={handleScrollToTop}>
        Top
      </button>
    </div>
  );
}
export default DisplaySection;
