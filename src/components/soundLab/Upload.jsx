import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Upload.css";

const Upload = ({ files, setFiles, removeFile }) => {
  const [filename, setFilename] = useState("");

  const uploadHandler = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    file.isUploading = true;
    setFiles([...files, file]);

    // Upload file
    const formData = new FormData();
    formData.append("song", file, file.name);
    axios
      .post("http://localhost:3000/upload", formData)
      .then((res) => {
        file.isUploading = false;
        setFiles([...files, file]);
        setFilename(file.name);
      })
      .catch((err) => {
        // Inform the user
        console.error(err);
        removeFile(file.name);
      });
  };

  const handleGetRequest = (endpoint) => {
    axios
      .get(`http://localhost:5000?filename=${filename}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" accept="audio/mpeg3" onChange={uploadHandler} />
          <button>
            <i>
              <FontAwesomeIcon icon={faPlus} />
            </i>
            Upload
          </button>
        </div>
        <p className="main">Supported files</p>
        <p className="info">M4A, MP3, WAV, FLAC</p>
      </div>

      <Carousel
        className="file-card1"
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={true}
        showArrows={true}
        showIndicators={true}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            marginLeft: 20,
            color: "white",
            cursor: "pointer",
          };
          const style = isSelected
            ? { ...defStyle, color: " " }
            : { ...defStyle };
          return (
            <span
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
              {"●"}
            </span>
          );
        }}
      >
        <div className="carousel">
          <button
            type="button"
            style={{ cursor: "pointer", fontWeight: "bold", background: "" }}
            onClick={() => handleGetRequest('genre')}
          >
            Audio/ Genre Classification
          </button>
        </div>
        <div className="carousel">
          <button
            type="button"
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              background: "#FBEAFF",
            }}
            onClick={() => handleGetRequest('instrument')}
          >
            Instrument Classification
          </button>
        </div>
      </Carousel>
    </>
  );
};

export default Upload;
