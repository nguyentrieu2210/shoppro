const Silder = ()=>{
    return(
        <div id="slide">
        <div className="bd-example">
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleCaptions" data-slide-to={1} />
              <li data-target="#carouselExampleCaptions" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/slide-1.jpg" className="d-block w-100" alt="Vietpro Slide 01" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Lorem Ipsum</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/slide-2.jpg" className="d-block w-100" alt="Vietpro Slide 01" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Lorem Ipsum</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/slide-3.jpg" className="d-block w-100" alt="Vietpro Slide 01" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Lorem Ipsum</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    )
}
export default Silder;