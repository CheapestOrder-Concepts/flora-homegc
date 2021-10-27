import React from "react";
import ReactDOM from "react-dom";
import ErrorMessage from "./Error";
import { Feedback } from "./Feedback";
import "./optinmodal.css";
export default function OptinModal({setbookingDetail,componentId, component, error_msg, data }) {

 
  
  return ReactDOM.createPortal(
    <>
      <div
        class="modal fade pt-2"
        
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
                {data === null || !data ? (
error_msg ? (
      <ErrorMessage errorMessage={error_msg} />
    ) : (
      <h4 className="font-weight-bold text-white text-center mt-4">
      The Property Investment Checklist
    </h4>
    )
  ) : (
    <Feedback data={data} />
  )}
             
             
          
             
              <button
    
                type="button"
                className={`close mt-2 text-white`}
                data-dismiss="modal"
                aria-label="Close"
                onClick={()=>setbookingDetail({bookings_data:null, error_msg:null})}
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
