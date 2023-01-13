import Header from "./components/Header";
import Intro from "./components/Intro";
import Specialities from "./components/Specialities";

export default function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Intro />
      <Specialities />
    </div>
  );
}
