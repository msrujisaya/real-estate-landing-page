import small_1 from "./images/small-1.png";
import small_2 from "./images/small-2.png";
import small_3 from "./images/small-3.png";
import small_4 from "./images/small-4.png";
import small_5 from "./images/small-5.png";
import small_6 from "./images/small-6.png";

const arrPic = [
  { image: small_1 },
  { image: small_2 },
  { image: small_3 },
  { image: small_4 },
  { image: small_5 },
  { image: small_6 },
];

console.log(arrPic, "********");

function BoxOf1Content(props) {
  console.log(props.image);
  return (
    <div className="boxof1content">
      <div className="content_left">
        <img src={props.image} />
      </div>
      <div className="content_right">
        <div className="content_right_top">
          <h1 className=" font-bold text-2xl">103/143 West Street,</h1>
          <h1 className=" font-bold text-2xl">Crows Nest</h1>
        </div>

        <div className="content_right_middle">
          <p>10 Bedroom</p>
          <p>150 M</p>
          <p>2 Garage</p>
        </div>
        <div className="content_right_bottom">
          <p className=" font-bold">Posted by X Builder</p>
          <button className=" bg-slate-400 w-[108px] h-[41px] rounded-[10px] font-medium">
            <p>$45,545</p>
          </button>
        </div>
      </div>
    </div>
  );
}

const mapPic = arrPic.map((el, index) => {
  return <BoxOf1Content key={index} image={el.image} />;
});

function ThirdPage() {
  return (
    <>
      <div className="boxpage3">
        <div className="page3_header">
          <h1>Recently Added</h1>
          <a href="#">See all</a>
        </div>
        <div className="test">{mapPic}</div>
      </div>
    </>
  );
}

export default ThirdPage;
