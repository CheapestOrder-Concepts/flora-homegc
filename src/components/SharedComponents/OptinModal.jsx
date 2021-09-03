import React from "react";
import ReactDOM from "react-dom";
import "./optinmodal.css";
export default function OptinModal({ title, componentId, component }) {
  //   const handleMediaQuery = (media) => {
  //     if (media.matches) {
  //       if (componentId === "optinForm") {
  //         console.log(modalContent);
  //         modalContent.style.marginTop = "120px";
  //       } else if (componentId === "bookOptin") {
  //         modalContent.style.color = "blue";
  //       }
  //     }

  //     return;
  //   };

  return ReactDOM.createPortal(
    <>
      <div
        class="modal fade"
        id={componentId}
        tabindex="-1"
        aria-labelledby={`${componentId}Label`}
        aria-hidden="true"
        style={{ marginTop: "15px" }}
      >
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content" style={{ background: "white" }}>
            <div
              class="modal-header"
              style={{
                borderBottom: "0px solid #dee2e6",
                background: "#541484",
                color: "#fff",
              }}
            >
              <h4 className="font-weight-bold text-white text-center">
                {title}
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{component}</div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
