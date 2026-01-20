import React from "react";

const Jumbotron = () => {
    return (
        <div className="m-2 p-1 rounded-3 bg-secondary-subtle"> 
            <svg className="bi mt-1 mb-1" style={{ color: "var(--bs-indigo)" }} width="100" height="100" aria-hidden="true">
                <use xlinkHref="#bootstrap">
                </use>
            </svg> 
            <h1 className="text-body-emphasis">
                A Warm Welcome!
            </h1> 
            <p className="col-lg-8 mx-auto fs-5">
                Here it goes an example text, about whatever you want it to be, 
                but please think about something nice!
            </p> 
            <div className="gap-2 mb-5"> 
                <button className="btn btn-primary" type="button">
                    Call to action!
                </button> 
            </div> 
        </div>
    );
};

export default Jumbotron;