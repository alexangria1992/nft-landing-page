import Collections from "./Components/Collections";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Steps from "./Components/Steps";

function App() {
  return (
    <>
      {/* <h1 className="text-secondary">Hello world</h1> */}
      <Navbar />
      <Hero />
      <Collections />
      <Steps />
    </>
  );
}

export default App;
