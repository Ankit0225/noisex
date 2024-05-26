import { useState } from 'react'
import './App.css';
import Upload from './components/soundLab/Upload';
import FileList from "./components/soundLab/FileList";



function App() {
  const [files, setFiles] = useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }


  return (
    <div className="App">
      <Upload files={files} setFiles={setFiles}
        removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} />
    </div>

  );
}

export default App;