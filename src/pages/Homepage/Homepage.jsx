import { Link } from "react-router-dom";
import DisneyIcon from "../../assets/icons/logo-Disney+.jpeg";
import NetflixIcon from "../../assets/icons/logo-Netflix.jpeg";
import PrimeIcon from "../../assets/icons/logo-primevideo.jpeg";
import Header from "../../components/Header/Header";
import "./Homepage.scss";
import Disney from "../Disney/Disney";

function Homepage() {
  return (
    <>
      <div className="homepage">
        {/* Homepage */}
        {/* <Header /> */}
        {/* <Link to={<Disney />}> */}
        <div className="homepage-container">
          <Link to={"/disney"}>
            <article className="homepage__card">
              <img
                className="homepage__img"
                src={DisneyIcon}
                alt="DisneyIcon"
              />
              <h2 className="homepage__title">Marvel @ Disney+</h2>
            </article>
          </Link>
          {/* </Link> */}
          {/* <div class="card">
            <img src={DisneyIcon} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div> */}
          <Link to={"/netflix"}>
            <article className="homepage__card">
              <img
                className="homepage__img"
                src={NetflixIcon}
                alt="NetflixIcon"
              />
              <h2 className="homepage__title">Marvel @ Netflix</h2>
            </article>
          </Link>
          <Link to={"/primevideo"}>
            <article className="homepage__card">
              <img className="homepage__img" src={PrimeIcon} alt="PrimeIcon" />
              <h2 className="homepage__title">Marvel @ PrimeVideo</h2>
            </article>
          </Link>
        </div>
      </div>
      ;
    </>
  );
}

export default Homepage;
