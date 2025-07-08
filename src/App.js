// import About from "./components/About";
import { Navbar } from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />

      <div className="container my3">
        <TextForm heading="Enter the text to analyze below" />
        {/* <About /> */}
      </div>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
