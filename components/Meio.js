import Link from "next/link";

const Meio = () => (
    <div>
        <nav className="navbar">
            <div className="max-width">
                <div className="logo">
                    <a href="/">Eletry</a>
                </div>
                <ul className="menu">
                    <li><a href="/" className="menu-btn">Home</a></li>
                   
                </ul>
                
                <div className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    </div>
);

export default Meio;