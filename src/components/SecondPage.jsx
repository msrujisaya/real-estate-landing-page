import america from "./images/america.png";
import spain from "./images/spain.png";
import london from "./images/london.png";
import france from "./images/france.png";

const arrData = [
  { country: "A M E R I C A", picture: america },
  { country: "S P A I N", picture: spain },
  { country: "L O N D O N", picture: london },
  { country: "F R A N C E", picture: france },
];

function Pic(props) {
  return (
    <div className="page2_box">
      <img className="page2_pic" src={props.picture} />
      <h2 className=" font-semibold text-2xl">{props.country}</h2>
    </div>
  );
}

const mapData = arrData.map((el, index) => {
  //   console.log(el);
  return <Pic key={index} picture={el.picture} country={el.country} />;
});

function SecondPage() {
  return (
    <div className="page2">
      <div>
        <h1 className=" text-3xl font-bold">We are available in many</h1>
        <h1 className=" text-3xl font-bold">well-known countries</h1>
      </div>
      <div className="page2_box">{mapData}</div>
    </div>
  );
}

export default SecondPage;
