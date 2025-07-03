import SinglePortfolio from "./extras/SinglePortfolio";

export default function Portfolio() {
  const portfolio_images = [
    {
      title: "cabin",
      image_path: require("../assets/img/portfolio/cabin.png"),
    },
    { title: "cake", image_path: require("../assets/img/portfolio/cake.png") },
    {
      title: "circus",
      image_path: require("../assets/img/portfolio/circus.png"),
    },
    { title: "game", image_path: require("../assets/img/portfolio/game.png") },
    { title: "safe", image_path: require("../assets/img/portfolio/safe.png") },
    {
      title: "submarine",
      image_path: require("../assets/img/portfolio/submarine.png"),
    },
  ];

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          {portfolio_images.map((image, index) => (
            <div className="col-md-6 col-lg-4 mb-5" key={image.title}>
              <SinglePortfolio
                title={image.title}
                image={image.image_path}
                id={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
