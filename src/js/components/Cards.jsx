import React from "react";

const Cards = () => {
    return (
<div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://picsum.photos/200" class="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Card example 1 with something random, always</p>
        <a href="#" class="btn btn-primary mt-auto">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://picsum.photos/200" class="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Card example 2 with something random, always, and some more text with testing</p>
        <a href="#" class="btn btn-primary mt-auto">Go somewhere</a>
        </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://picsum.photos/200" class="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary mt-auto">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://picsum.photos/200" class="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" class="btn btn-primary mt-auto">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
    );
};

export default Cards;