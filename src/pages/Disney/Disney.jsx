import "./Disney.scss";
import { Card } from "react-bootstrap";

function Disney() {
  const website = '"https://www.disneyplus.com/en-ca"';
  return (
    <>
      <div className="disney-container">
        <Card website={website} />
      </div>
      ;
    </>
  );
}

export default Disney;
