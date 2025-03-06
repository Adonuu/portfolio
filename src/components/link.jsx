import PropTypes from "prop-types";

export function Link({ label, url }) {
  return (
    <>
      <a
        className="relative text-lg text-white underline hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left hover:no-underline"
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
  url: PropTypes.string.isRequired, // Corrected to PropTypes.string for URL validation
};
