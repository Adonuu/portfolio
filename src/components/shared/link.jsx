import PropTypes from "prop-types";

export function Link({label, url}) {
    return (
        <>
        <a
            className="underline text-lg"
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