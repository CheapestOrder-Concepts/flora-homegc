import React from "react";

export const Feedback = ({ data }) => {
  if (data?.success === true) {
    return (
      <h4 className="font-weight-bold text-center text-success">
        {`${data?.data?.message}. Our team will contact you soon.`}
      </h4>
    );
  } else if (data?.success === false) {
    return (
      <h4 className="font-weight-bold text-center text-danger">
        {data?.data?.message}
      </h4>
    );
  }
};
