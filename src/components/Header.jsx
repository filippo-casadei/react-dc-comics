function Header() {
    return (
        <header>
            <div className="contenitore-logo">
                <img src="/dc-logo.png" />
            </div>
            <nav className="contenitore-navbar">
                <ul>
                    <li><a href="#">Characters</a></li>
                    <li><a href="#">Comix</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Collectibles</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Fans</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;