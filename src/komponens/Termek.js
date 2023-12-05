import React from "react";
import Tartalom from "./Tartalom.js";


function Termek() {
    return (
        <div className="App">
            <h1>Helllo világ!</h1>
            <article>
                <h2>Könyvárúház!</h2>
                <Tartalom />
            </article>
            <footer> @saját név</footer>
        </div>
    );


}

export default Termek;