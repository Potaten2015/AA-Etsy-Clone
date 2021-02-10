import './Footer.css'

const Footer = () => {
return (
    <div className="footer">
        <div>
            <a id="footer-content" href="https://github.com/Potaten2015"><i id="footer-icon" className="fab fa-github-square"></i>Github</a>
        </div>
        <div>
            <a id="footer-content" href="https://www.linkedin.com/in/taten-knight/">
                <i id="footer-icon" className="fab fa-linkedin"></i>LinkedIn</a>
        </div>
        {/* <div>
            <a id="footer-content" href=""></a>
        </div> */}
    </div>
)
}

export default Footer;
