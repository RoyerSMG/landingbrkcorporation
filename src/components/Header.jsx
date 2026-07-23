import { useEffect, useState } from "react";
import logo from '../assets/images/default2.png';

export const Header = () => {
    const [activeSection, setActiveSection] = useState("inicio");
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { id: "inicio", label: "Inicio" },
        { id: "operaciones", label: "Operaciones" },
        { id: "empresa", label: "Nuestra Empresa" },
        { id: "cobertura", label: "Cobertura" },
        { id: "contacto", label: "Contacto" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            const scrollPosition = window.scrollY + 120;
            sections.forEach((section) => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (
                    scrollPosition >= top &&
                    scrollPosition < top + height
                ) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // const linkStyle = {
    //     textDecoration: 'none',
    //     color: 'var(--text-primary)',
    //     fontSize: '1rem',
    //     fontWeight: '500'
    // };

    // const activeLinkStyle = {
    //     color: "#C8102E",
    //     fontWeight: "700",
    //     borderBottom: "2px solid #C8102E",
    //     paddingBottom: "4px",
    //     transition: "0.3s"
    // };

    return (
        <header>
            <a href="#inicio" style={{ textDecoration: 'none' }}>
                <h1 style={{ color: 'var(--text-primary)' }}>
                    <img src={logo} alt="Logo" />
                    Central de Monitoreo
                </h1>
            </a>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            <nav className={menuOpen ? "nav open" : "nav"}>
                <ul>
                    {links.map(link => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={
                                    activeSection === link.id
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}