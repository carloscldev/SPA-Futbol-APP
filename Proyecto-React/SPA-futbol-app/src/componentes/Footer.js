import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="row bg-light fixed-bottom px-4 py-2">
          <div class="col-md-12 text-center py-3">
            <span className="ms-1"> Created with ♥ for Lumetrio </span>
            <span>&copy; Copyright 2022</span>
          </div>
        </div>
      </>
    );
  }
}
