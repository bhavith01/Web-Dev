import shoe from "../assets/shoe_image.png";
import amazon from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";

const MainBox = () => {
  return (
    <main className="main-box">
      <div className="written">
        <div className="heading">YOU DESERVE THE BEST</div>
        <div className="subhead">
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </div>
        <div className="button_sec">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <br></br>
        Also Avalaible on
        <div className="button_sec_2">
          <div>
            <img src={amazon}></img>
          </div>
          <div>
            <img src={flipkart}></img>
          </div>
        </div>
      </div>
      <div className="main-box-image">
        <img src={shoe} alt="shoe" />
      </div>
    </main>
  );
};
export default MainBox;
