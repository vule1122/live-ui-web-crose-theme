import React from 'react';

//Work in Progress

const Volunteers = ({list}) => (
    <>
    <div class="container">
    <div class="row about-content justify-content-center">
    {list.map((Volunteers) => (
        <div class="col-10 col-md-6 col-lg-3">
            <div class="about-us-content mb-100">
                <img height="auto" src={Volunteers.image} alt=""/>
                <div class="about-text">
                    <h4>{Volunteers.name}</h4>
                    <h4>{Volunteers.title}{Volunteers.deptName}</h4>
                    <h4 style={{fontSize: '16px'}}>{Volunteers.email}</h4>
                    <h4 style={{fontSize: '16px'}}>{Volunteers.phone}</h4>
                </div>
            </div>
        </div>
    ))}
    </div>
    </div>
    </>
);

export default Volunteers;