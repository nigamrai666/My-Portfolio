import '../App.css';

function Navbar() {
    return (
        <div className="nav">
            <ul className="list flex flex-col md:flex-row lg:flex-row py-3 font-bold">
                <li className="px-10"><a href="#home" className="nav-link">Home</a></li>
                <li className="px-10"><a href="#about" className="nav-link">About</a></li>
                <li className="px-10"><a href="#projects" className="nav-link">Projects</a></li>
                <li className="px-10"><a href="#skills" className="nav-link">Skills</a></li>
                <li className="px-10"><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
