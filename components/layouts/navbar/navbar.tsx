import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand" href="#"> <img  className="logo m-0 p-0" src="/logo.svg" alt="mecommerce" /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-end" id="navbarText">
      <ul className="navbar-nav me-auto my-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span className="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
  )
}