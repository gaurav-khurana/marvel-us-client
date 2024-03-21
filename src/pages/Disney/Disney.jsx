import "./Disney.scss";
import NetflixIcon from "../../assets/icons/logo-Disney+.jpeg";
import { Link } from "react-router-dom";

function Disney() {
  return (
    <>
      <div className="disney-container">
        <Link to={"https://www.disneyplus.com/en-ca"}>
          <article className="shows__card">
            <img className="shows__img" src={NetflixIcon} alt="NetflixIcon" />
            <h2 className="shows__title">Title</h2>
            <h3 className="shows__year">Year</h3>
            <h3 className="shows__platform">Platform</h3>
            <p className="shows__description">
              description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptas, ab.
            </p>
          </article>
        </Link>
        <Link to={"https://www.disneyplus.com/en-ca"}>
          <article className="shows__card">
            <img className="shows__img" src={NetflixIcon} alt="NetflixIcon" />
            <h2 className="shows__title">Title</h2>
            <h3 className="shows__year">Year</h3>
            <h3 className="shows__platform">Platform</h3>
            <p className="shows__description">
              description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptas, ab.
            </p>
          </article>
        </Link>
        <Link to={"https://www.disneyplus.com/en-ca"}>
          <article className="shows__card">
            <img className="shows__img" src={NetflixIcon} alt="NetflixIcon" />
            <h2 className="shows__title">Title</h2>
            <h3 className="shows__year">Year</h3>
            <h3 className="shows__platform">Platform</h3>
            <p className="shows__description">
              description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptas, ab.
            </p>
          </article>
        </Link>
        <Link to={"https://www.disneyplus.com/en-ca"}>
          <article className="shows__card">
            <img className="shows__img" src={NetflixIcon} alt="NetflixIcon" />
            <h2 className="shows__title">Title</h2>
            <h3 className="shows__year">Year</h3>
            <h3 className="shows__platform">Platform</h3>
            <p className="shows__description">
              description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptas, ab.
            </p>
          </article>
        </Link>
        <Link to={"https://www.disneyplus.com/en-ca"}>
          <article className="shows__card">
            <img className="shows__img" src={NetflixIcon} alt="NetflixIcon" />
            <h2 className="shows__title">Title</h2>
            <h3 className="shows__year">Year</h3>
            <h3 className="shows__platform">Platform</h3>
            <p className="shows__description">
              description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptas, ab.
            </p>
          </article>
        </Link>
        <Link to={"https://www.disneyplus.com/en-ca"}>
          <article className="shows__card">
            <img className="shows__img" src={NetflixIcon} alt="NetflixIcon" />
            <h2 className="shows__title">Title</h2>
            <h3 className="shows__year">Year</h3>
            <h3 className="shows__platform">Platform</h3>
            <p className="shows__description">
              description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptas, ab.
            </p>
          </article>
        </Link>
      </div>
      ;
    </>
  );
}

export default Disney;
