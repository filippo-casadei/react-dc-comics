import elementiNavbar from "../data/elementiNavbar";

function Header() {
    return (
        <header>
            <div className="contenitore-logo">
                <img src="/dc-logo.png" />
            </div>
            <nav className="contenitore-navbar">
                <ul>
                    {creaNavbar()}
                </ul>
            </nav>
        </header>
    )
};

function creaNavbar() {
    return elementiNavbar.map(elemento => {
        return (
            <li key={elemento.id}><a href="#">{elemento.title}</a></li>
        )
    })
};

export default Header;
