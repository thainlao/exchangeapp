import Mainbody from "./components/Mainbody";
import Starfield from "./components/StarFiels";
import HomePage from "./pages";

export default function Home() {
  return (
    <main>
        <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <HomePage />
    </main>
  );
}
