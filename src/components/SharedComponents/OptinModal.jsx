import React from "react";
import ReactDOM from "react-dom";
import ErrorMessage from "./Error";
import { Feedback } from "./Feedback";
import "./optinmodal.css";
import { Modal } from "react-bootstrap";

export default function OptinModal({
  handleClose,
  show,
  setbookingDetail,
  componentId,
  component,
  error_msg,
  data,
  header,
  own,
  exec,
  client_eng,
}) {
  // const isSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });

  return ReactDOM.createPortal(
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            {data === null || !data ? (
              error_msg ? (
                <ErrorMessage errorMessage={error_msg} />
              ) : (
                <h4 className="font-weight-bold text-success text-center mt-5">
                  {header}
                </h4>
              )
            ) : (
              <Feedback data={data} />
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{component}</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>,
    document.getElementById("root")
  );
}
