import { ImageGrid } from "./components/ImageGrid";
import { Modal } from "./components/Modal";
import { Title } from "./components/Title";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
      <Modal />
    </div>
  );
}

export default App;
