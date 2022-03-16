import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid header position-relative">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 mx-auto px-3 ms-md-5 text-center position-absolute bottom-50">
            <h1 className="fw-bold">¡Crea tu tienda en linea ahora!</h1>
            <p>
              <span className="fs-4 fw-normal">
                Tan fácil como el registro en una red social
              </span>
              <br />
              <span className="fs-6 fw-light">
                MeCommerse te ofrece la posibilidad de crear tu tienda en linea
                de forma rapida y fácil, no requiere programación ni
                conocimientos elevados en informática
              </span>
            </p>
          </div>
          <div className="pict1">
            <img src="/notif.png" alt="" className="notif d-block" />
            <img className="img-fluid" src="/phones.png" alt="phones" />
          </div>
        </div>
      </div>

      <section id="about" className="p-5 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 mt-5 mt-md-0 me-md-5">
              <h1>
                <p>MeComerse</p>
                <span>Tiendas virtuales para todos</span>
              </h1>
            </div>
            <div className="col-12 col-md-7 ">
              <h2>Start Bootstrap has everything you need to get your</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.Contrary to popular belief, Lorem
                Ipsum is not simply random text. It has roots in a piece of
                classical Latin literature from 45 BC, making it over 2000 years
                old. Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure Latin
                words, consectetur, from a Lorem Ipsum passage, and going
                through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from
                sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                This book is a treatise on the theory of ethics, very popular
                during the Renaissance. The first line of Lorem Ipsum, "Lorem
                ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit.
              </p>

              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
      <section id="how-it-works" className="parallax">
        <div className="container">
          <span className="angle2"></span>
          <span className="angle"></span>
          <div className="row">
            <div
              className="col-xs-12 col-sm-12 col-md-12 wow bounceIn animated headding"
              data-wow-delay=".5s"
            >
              <h2>
                How it <span>works</span>
              </h2>
              <p>
                Display your mobile apps awesome features with icon lists and an
                image carousel of each page. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam, quis nostrud exerci tation.
              </p>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="row">
                <div
                  className="col-xs-10 col-sm-10 col-md-10 wow fadeInLeft animated textright"
                  data-wow-delay=".5s"
                >
                  <h3>Lorem ipsum</h3>
                  <p>
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum.
                  </p>
                </div>
                <div
                  className="col-xs-2 col-sm-2 col-md-2 wow fadeInRight animated"
                  data-wow-delay=".5s"
                >
                  <i className="fa fa-apple iconfont"></i>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-xs-10 col-sm-10 col-md-10 wow fadeInLeft animated textright"
                  data-wow-delay=".6s"
                >
                  <h3>Lorem ipsum</h3>
                  <p>
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum.
                  </p>
                </div>
                <div
                  className="col-xs-2 col-sm-2 col-md-2 wow fadeInRight animated"
                  data-wow-delay=".6s"
                >
                  <i className="fa fa-rocket iconfont"></i>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-xs-10 col-sm-10 col-md-10 wow fadeInLeft animated textright"
                  data-wow-delay=".7s"
                >
                  <h3>Lorem ipsum</h3>
                  <p>
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum.
                  </p>
                </div>
                <div
                  className="col-xs-2 col-sm-2 col-md-2 wow fadeInRight animated"
                  data-wow-delay=".7s"
                >
                  <i className="fa fa-film iconfont"></i>
                </div>
              </div>
            </div>

            <div
              className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated textcenter"
              data-wow-delay=".4s"
            >
              <img src="/slide-bg.png" alt="slide-bg" />
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="row">
                <div
                  className="col-xs-2 col-sm-2 col-md-2 wow fadeInLeft animated"
                  data-wow-delay=".5s"
                >
                  <i className="fa fa-android iconfont2"></i>
                </div>
                <div
                  className="col-xs-10 col-sm-10 col-md-10 wow fadeInRight animated textleft"
                  data-wow-delay=".5s"
                >
                  <h3>Lorem ipsum</h3>
                  <p>
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum.
                  </p>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-xs-2 col-sm-2 col-md-2 wow fadeInLeft animated"
                  data-wow-delay=".6s"
                >
                  <i className="fa fa-css3 iconfont2"></i>
                </div>
                <div
                  className="col-xs-10 col-sm-10 col-md-10 wow fadeInRight animated textleft"
                  data-wow-delay=".6s"
                >
                  <h3>Lorem ipsum</h3>
                  <p>
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum.
                  </p>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-xs-2 col-sm-2 col-md-2 wow fadeInLeft animated"
                  data-wow-delay=".7s"
                >
                  <i className="fa fa-users iconfont2"></i>
                </div>
                <div
                  className="col-xs-10 col-sm-10 col-md-10 wow fadeInRight animated textleft"
                  data-wow-delay=".7s"
                >
                  <h3>Lorem ipsum</h3>
                  <p>
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Price" className="">
        <div className="container">
          <span className="angle2"></span>
          <span className="angle"></span>

          <div className="row">
            <div
              className="col-xs-12 col-sm-12 col-md-12 wow zoomIn animated headding"
              data-wow-delay=".1s"
            >
              <h2>
                Price <span>List</span>
              </h2>
              <p>
                Display your mobile apps awesome features with icon lists and an
                image carousel of each page. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam, quis nostrud exerci tation.
              </p>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4 wow fadeInLeft animated">
              <div className="price-wrapper ">
                <h3 className="price-title">Students</h3>
                <div className="price">
                  <div className="value-box">
                    <div className="value-box-content">
                      <span className="value">
                        <i></i>
                        <span className="number">FREE</span>
                      </span>
                      <span className="month invisible"></span>
                    </div>
                  </div>

                  <div className="content-box">
                    <ul>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                    </ul>
                  </div>
                  <div className="sign-box">
                    <a href="#">
                      <span>Sign Up</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 wow zoomIn animated">
              <div className="price-wrapper ">
                <h3 className="price-title">Small</h3>
                <div className="price">
                  <div className="value-box">
                    <div className="value-box-content">
                      <span className="value">
                        <i></i>
                        <span className="number"> $10 </span>
                      </span>
                      <span className="month">per month</span>
                    </div>
                  </div>

                  <div className="content-box">
                    <ul>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                    </ul>
                  </div>
                  <div className="sign-box">
                    <a href="#">
                      <span>Sign Up</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 wow zoomIn animated">
              <div className="price-wrapper ">
                <h3 className="price-title">Standard</h3>
                <div className="price standard">
                  <div className="value-box">
                    <div className="value-box-content">
                      <span className="value">
                        <span className="number">$50</span>
                      </span>
                      <span className="month">per month</span>
                    </div>
                  </div>

                  <div className="content-box">
                    <ul>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                      <li>list item</li>
                    </ul>
                  </div>
                  <div className="sign-box">
                    <a href="#">
                      <span>Sign Up</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container" />
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-12 wow bounceIn animated headding"
            data-wow-delay=".1s"
          >
            <h2>
              Contact <span>Us</span>
            </h2>
            <p>
              Display your mobile apps awesome features with icon lists and an
              image carousel of each page. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation.
            </p>
          </div>
        </div>

        <div className="row">
          <div
            className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated"
            data-wow-delay=".1s"
          >
            <form>
              <div className="ajax-hidden">
                <div className="form-group wow fadeInUp animated">
                  <label className="sr-only">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="c_name"
                    className="form-control"
                    id="c_name"
                  />
                </div>

                <div
                  data-wow-delay=".1s"
                  className="form-group wow fadeInUp animated"
                >
                  <label className="sr-only">Email</label>
                  <input
                    type="email"
                    placeholder="E-mail"
                    name="c_email"
                    className="form-control"
                    id="c_email"
                  />
                </div>

                <div
                  data-wow-delay=".2s"
                  className="form-group wow fadeInUp animated"
                >
                  <textarea
                    placeholder="Message"
                    name="c_message"
                    id="c_message"
                    className="form-control"
                  ></textarea>
                </div>

                <button
                  data-wow-delay=".3s"
                  className="btn btn-sm btn-block wow fadeInUp animated"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
              <div className="ajax-response"></div>
            </form>
          </div>
          <div
            className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated map"
            data-wow-delay=".5s"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6508922.473104964!2d-123.76275651635396!3d37.19583981824279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCalifornia%2C+United+States!5e0!3m2!1sen!2sin!4v1450994260631"
              width="100%"
              height="250"
              style={{ border: "0" }}
            ></iframe>
          </div>
          <div
            className="col-xs-12 col-sm-4 col-md-4 wow bounceIn animated"
            data-wow-delay=".6s"
          >
            <div id="text-15" className="widget widget_text">
              <h3 className="widget-title">California, United States</h3>
              <div className="textwidget">
                785, Firs Avenue, place Mall,
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <ul className="social-links">
                <li>
                  <a className="wow fadeInUp animated" href="index.html#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    data-wow-delay=".1s"
                    className="wow fadeInUp animated"
                    href="index.html#"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    data-wow-delay=".2s"
                    className="wow fadeInUp animated"
                    href="index.html#"
                  >
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a
                    data-wow-delay=".4s"
                    className="wow fadeInUp animated"
                    href="index.html#"
                  >
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a
                    data-wow-delay=".5s"
                    className="wow fadeInUp animated"
                    href="index.html#"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                </li>
              </ul>

              <p className="copyright">&copy; 2016 Canvas</p>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default Home;
