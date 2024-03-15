import banner from "./images/Banner.png";
function FirstPage() {
  return (
    <div className="house">
      <img src={banner} />
      <div className="house-text">
        <div className="house-text-h1">
          <h1>Easy way to find a</h1>
          <h1>perfect property</h1>
        </div>
        <div className="house-text-p">
          <p>We provide a complete service for the sale,</p>
          <p>purchase rental of real estate.</p>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
