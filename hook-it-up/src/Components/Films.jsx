import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Films() {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films`)
            .then(response => response.json())
            .then(json => setFilms(json));
    }, []);

    return (
        <div className="row">
            {films.map((films, id) => {
                return (
                    <div className="card mx-5 my-2" style={{ width: "18rem" }} key={id}>
                        <div className="card-body">
                            <h5 className="card-title">{films.title}</h5>
                            <p className="card-text">{films.release_date}</p>

                            <Link to={`/films/${films.id}`}>
                                <button className="btn btn-primary">Show more</button>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
