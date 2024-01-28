import Carousel from "./Carousel";

const Dashboard = () => {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  return (
    <div className=" bg-black">
      <div className="max-w-full max-h-[50%]">
        <Carousel autoSlide={true}>
          {[...slides.map((s) => <img className="" src={s} />)]}
        </Carousel>
      </div>
    </div>
  );
};
export default Dashboard;
