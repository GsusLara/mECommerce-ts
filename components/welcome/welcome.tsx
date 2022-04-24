import React from 'react'

type Props = {}

export default function Welcome({}: Props) {
  return (
    <article className="container-fluid top d-flex align-items-center">
        <div className="row justify-content-center ">
          <div className="col-12 col-md-6 col-lg-6 mb-3 d-flex flex-column  justify-content-center text-center">
            <h1 className="fw-bold">¡Crea tu tienda en linea ahora!</h1>
            <p className="mb-0">
              <span className="fs-4 fw-bold">
                Tan fácil como el registro en una red social
              </span>
              <br />
              <span className="fs-6 fw-bold ">
                meCommerse te ofrece la posibilidad de crear tu tienda en linea
                de forma rapida y fácil, no requiere programación ni
                conocimientos elevados en informática
              </span>
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 ">
            <img className="img-fluid phone" src="/preset.gif" alt="phones" />
          </div>
        </div>
      </article>
  )
}