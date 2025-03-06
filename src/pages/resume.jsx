export function Resume() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Resume</h1>
      <div className="flex flex-col items-center p-6 rounded-xl">
        <img
          src="/resume.png"
          alt="Resume"
          className="w-full rounded-lg shadow-lg"
        />
        <a
          href="/resume.pdf"
          download="Adam_Young_Resume.pdf"
          target="_blank"
          className="relative mt-4 text-white underline hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left hover:no-underline"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
