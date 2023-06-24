const Library = ()=>{
    return(
        <div id="library">
        <div className="container section">
          <h2 className="text-dark">library</h2>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="bg-white">
                <img className="img-fluid mb-4" src="images/slide-1.jpg" />
                <h4 className="border-bottom border-secondary pb-4"><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></h4>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies gravida nulla fermentum suscipit. Phasellus elementum ex a metus sodales consequat. Pellentesque pellentesque nulla sed lacinia accumsan. Curabitur sed erat vel ex rutrum pulvinar.
                </p>
                <button type="button" className="btn btn-outline-dark">More details</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="bg-white">
                <img className="img-fluid mb-4" src="images/slide-2.jpg" />
                <h4 className="border-bottom border-secondary pb-4"><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></h4>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies gravida nulla fermentum suscipit. Phasellus elementum ex a metus sodales consequat. Pellentesque pellentesque nulla sed lacinia accumsan. Curabitur sed erat vel ex rutrum pulvinar.
                </p>
                <button type="button" className="btn btn-outline-dark">More details</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="bg-white">
                <img className="img-fluid mb-4" src="images/slide-3.jpg" />
                <h4 className="border-bottom border-secondary pb-4"><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></h4>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies gravida nulla fermentum suscipit. Phasellus elementum ex a metus sodales consequat. Pellentesque pellentesque nulla sed lacinia accumsan. Curabitur sed erat vel ex rutrum pulvinar.
                </p>
                <button type="button" className="btn btn-outline-dark">More details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Library;