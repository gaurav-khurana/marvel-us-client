import "./Disney.scss";
import NetflixIcon from "../../assets/icons/logo-Disney+.jpeg";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios"
import Card from "../Card/Card"

function Disney() {
  const [disneyData, setDisneyData] = useState('')
  useEffect(() =>{
    const fetchDisneydata = async() =>{
      const response = await axios.get(
        "http://localhost:8080/disney"
      )
      setDisneyData(response.data);
      console.log(disneyData);
    }
    fetchDisneydata()
  },[])

  return (
    <>
      <div className="disney-container">
        {/* <Link to={"https://www.disneyplus.com/en-ca"}>
        <Link to={"https://www.disneyplus.com/en-ca"}>
         {disneyData.map((show) => (
          <Card
            key={show.id}
            id={show.id}
            title={show.title}
            year={show.year}
            platform={show.platform}
            discription={show.discription}
            />
         ))
         }
         
         
         
{/*         
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
        </Link> */}

        <Card website={website} />

        {/* <Link to={"https://www.disneyplus.com/en-ca"}>
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
        </Link> */}
      </div>
      ;
    </>
  );
}

export default Disney;
