import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="container-fluid d-flex align-items-end">
      <div className="container p-0">
        <div className="col-12 col-md-6 ps-2 pb-2 d-flex justify-content-end justify-content-md-center">
          <div className="pt-5 pb-2">
            <span>
              <strong> CC meCommerse </strong>
            </span>{" "}
            <br />
            <span>contacto@mecommerse.com</span>
          </div>
          <div className="d-flex align-items-end pb-2">
            <img src="/logoMono.svg" alt="mecommerse" height={"80"} />
          </div>
        </div>
      </div>
    </footer>
  );
}
