export function Resume() {
    return (
      <>
        <h1>Resume</h1>
        <iframe
          style={iframeStyles}
          src="https://drive.google.com/file/d/1raMUouFI70fKx7q-LFen9MsjVBo3CVMT/preview"
        />
      </>
    );
  }

  const iframeStyles = {
    width: "1200px",
    height: "600px",
    borderRadius: "2rem"
  }
  