import React, { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    document.title = "404 page not found";
  }, []);

  return <h2 className="nav-margin">404 Page not found</h2>;
};

export default Error;
