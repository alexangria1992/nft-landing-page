import Collections from "./Components/Collections";
import Creators from "./Components/Creators";
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
      <Creators />
    </>
  );
}

export default App;
