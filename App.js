import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const App = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>show isl sign to capture it!!!</h2>
      <Webcam 
        audio={false} 
        ref={webcamRef} 
        screenshotFormat="image/png" 
        style={{ width: "400px", borderRadius: "10px" }}
      />
      <br />
      <button onClick={capture} style={{ marginTop: "10px", padding: "10px", cursor: "pointer" }}>
        Capture Image
      </button>
      {image && (
        <div>
          <h3>Captured Image:</h3>
          <img src={image} alt="Captured" style={{ width: "200px", borderRadius: "10px" }} />
        </div>
      )}
    </div>
  );
};

export default App;
