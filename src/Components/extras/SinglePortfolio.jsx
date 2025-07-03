import PortfolioModel from "./PortfolioModel";

export default function SinglePortfolio({title, image, id }) {
  return (
    <>
      <div
        className="portfolio-item mx-auto"
        data-bs-toggle="modal"
        data-bs-target= {`#portfolioModal${id}`}
      >
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={image} alt="..." />
      </div>

      <PortfolioModel title={title} image={image} id={id} />
    </>
  );
}
