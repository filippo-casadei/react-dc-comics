import styles from "./ComixBar.module.css"

function ComicCard(props) {
    return (
        <div className="text-white text-center">
            <img className={`${styles.imgStyle} mb-2`} src={props.comic.thumb}></img>
            <p>{props.comic.series}</p>
        </div>
    )
};

export default ComicCard;