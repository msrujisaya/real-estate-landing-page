import building from "./images/building.png";

function ForthPage() {
  return (
    <div className="w-[1300px] h-[482px] rounded-3xl flex flex-row mt-[80px]">
      <div className=" bg-gradient-to-t from-[#c5e0ee] to-[#c5e0ee] w-[60%] rounded-l-3xl pl-[80px] text-left pt-[80px]">
        <div className=" text-4xl font-bold mb-[30px]">
          <h1 className=" text-left">Find your best</h1>
          <h1 className=" text-left">Real Estate</h1>
        </div>
        <div className=" text-[#585981] text-xl">
          <p className="text-left">
            We provide a complete service for the sale,
          </p>
          <p className=" text-left">purchase or rental of real estate.</p>
        </div>
        <button className=" bg-[#1DAEFF] w-[213px] h-[50px] rounded-[14px] text-white font-bold mt-10">
          <div>CONTACT US</div>
        </button>
      </div>

      <img src={building} className="rounded-r-3xl w-[50%]" />
      <div className=""></div>
    </div>
  );
}

export default ForthPage;
