import React from 'react'
import Pic1 from "../assets/pic1";

type Props = {}

export default function About({}: Props) {
  return (
    <article id="about" className="pt-5 px-4 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 me-md-5">
              <h1>
                <p>meComerse</p>
                <span>Tiendas virtuales para todos!</span>
              </h1>
            </div>
            <div className="col-12 col-md-8 mt-2 mt-md-0 text-center">
              <h2>Sin importar que tipo de producto vendes</h2>
              <p>
                Sube una foto de cada producto con una breve descripcion, dale
                el mejor precio a tus clientes y listo, tu{" "}
                <strong>ecomerse</strong> rapido y fácil a un muy bajo costo de
                subscripción!!
              </p>
              <button className="button-17 mb-3 ">Crear mi tienda ahora</button>
            </div>
            <div className="d-flex justify-content-center pt-3">
              <div className="col-10 col-sm-6 col-md-5">
                <Pic1 />
              </div>
            </div>
          </div>
        </div>
      </article>
  )
}