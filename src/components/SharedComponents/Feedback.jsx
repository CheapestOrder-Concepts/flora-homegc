import React from "react";

export const Feedback = ({ data, regFeedback }) => {
  if (data?.success ) {
    return(
      <h4 className="font-weight-bold text-center text-success">
        {`${data?.data?.message}. Our team will contact you soon.`}
      </h4>
    );
  } else if( regFeedback) {
    return(
      <h4 className="font-weight-bold text-center text-success">
        {`${regFeedback}, please login.`}
      </h4>
    );
  }else{
    return(
      <>
      </>
    )
  }
};
