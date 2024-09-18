import { useEffect, useMemo, useState } from "react";
import "./styles.css";

function useMediaQuery(query) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return match;
}

function useMediaQueries() {
  const md = useMediaQuery("(min-width: 800px)");
  const lg = useMediaQuery("(min-width: 1200px)");

  return { md, lg };
}

function ResponsiveComponent() {
  const { md, lg } = useMediaQueries();

  if (lg) {
    return <p>Desktop device</p>;
  }
  if (md) {
    return <p>Tablet device</p>;
  }

  return <p>Mobile device</p>;
}

export default function App() {
  return (
    <>
      <ResponsiveComponent />
      <div className="responsive-box"></div>
    </>
  );
}
