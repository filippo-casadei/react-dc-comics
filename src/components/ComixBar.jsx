import comics from "../data/comics.js";

function ComixBar() {
    return (
        <div className="container">
            <div className="row">
                {creaFumetto()}
            </div>
        </div>
    )
};

function creaFumetto() {
    return comics.map(comic => {
        return (
            <div key={comic.id} className="col-2">
                <img src={comic.thumb}></img>
                <p>{comic.series}</p>
            </div>
        )
    })
};

export default ComixBar;
