import React from "react";
import '../sass/components/Footer.sass';

/**
 * Pie de página de la pagina web
 *
 * @component
 * return (
 * 
 *   <Footer />
 * )
 */
function Footer(){
    return (
        <footer className="pie">
            <p className="pie__copyright">Data provided by Marvel. © 2022 Marvel</p>
        </footer>
    );
}

export default Footer;