import React from "react";

const Header = () => {
  return (
    <div>
        <header>
            {/* Navber area start */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="home">E-commerce shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="All Shops">All Shops </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="Categories">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="Today's Offer">Today's Offer</a>
              </li>
            
            
            </ul>
            <form className="d-flex flex-fill mx-5">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-warning" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
            {/* Navber area end */}

            {/* Hero area start */}
            <section >
                <div className='container-fluid bg-primary text-white p-5'>
                    <h1>This is Hero area</h1>
                </div>
            </section>
        </header>
    </div>
  );
};

export default Header;
