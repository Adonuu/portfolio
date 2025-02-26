import PropTypes from "prop-types";

import "./link.css";

export function Link({label, url}) {
    return (
        <>
        <a
            href={url}
            target="_blank" 
            rel="noopener noreferrer"
        >
            {label}
        </a>
        </>
    );
}



Link.propTypes = {
    label: PropTypes.string,
    url: PropTypes.href
}