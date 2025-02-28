import { Link } from "./link";

import './footer.css';

export function Footer() {
    return (
        <footer>
            <h2>Contact Me</h2>
            <Link 
                label={"Email"}
                url={"mailto:adamyoung1414@gmail.com"}
            />
            <Link 
                label={"Github"}
                url={"https://github.com/Adonuu"}
            />
            <Link 
                label={"LinkedIn"}
                url={"https://www.linkedin.com/in/adam-young-0a21a6119/"}
            />
        </footer>
    );
}