import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'



export default function FilmDetails() {

    const [oneFilm, setFilms] = useState({});
    const {id} = useParams () 

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
            .then(response => response.json())
            .then(json => setFilms(json));
    }, [id]);

    return (
        <div className="card mx-5 my-2" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{oneFilm.setFilms}</h5>
                <p className="card-text">
                    {oneFilm.director} || {oneFilm.release_date}
                </p>
                <p className="card-text">{oneFilm.description}</p>
            </div>
        </div>
    );
}        