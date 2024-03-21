import "./Disney.scss";
import NetflixIcon from "../../assets/icons/logo-Disney+.jpeg";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios"
import MarvelCard from "../../components/Card/Card";


function Disney() {
  const [disneyData, setDisneyData] = useState('')

  const website = "https://www.disneyplus.com/en-ca"

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
console.log(disneyData);
  return (
    <>
      <div className="disney-container">
        {/* {/* <Link to={"https://www.disneyplus.com/en-ca"}> */}
        
         {disneyData && disneyData.map((show) => (
           <MarvelCard
           key={show.id}
           id={show.id}
           website={website}
           title={show.title}
           year={show.year}
           img={show.image}
            platform={show.platform}
            discription={show.discription}
            />
            ))
          }

        {/* <Card  /> */}

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
