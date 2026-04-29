import comics from "../data/comics.js";
import styles from "./ComixBar.module.css";

function ComixBar() {
    return (
        <div className="container-fluid bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    {creaFumetto()}
                </div>
                <div className="text-center mt-4">
                    <button className="btn btn-primary">Load More</button>
                </div>
            </div>
        </div>
    )
};

function creaFumetto() {
    return comics.map(comic => {
        return (
            <div key={comic.id} className="col-2">
                <img className={styles.imgStyle} src={comic.thumb}></img>
                <p>{comic.series}</p>
            </div>
        )
    })
};

export default ComixBar;
