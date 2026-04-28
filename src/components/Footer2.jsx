import footerElements from "../data/footerElements";

function Footer2() {
    return (
        <div className="contenitore-footer2">
            <div className="bottone-signup">
                <button>SIGN-UP NOW!</button>
            </div>

            <div className="socials">
                <p>FOLLOW US</p>
                {createFooterElements()}
            </div>
        </div>
    )
};

function createFooterElements() {
    return footerElements.map(element => {
        return <img key={element.id} src={element.img} />
    }
)};

export default Footer2;