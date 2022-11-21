import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "~/routes";
import "~/styles/index.scss";
import { AnimationLayout } from "./components/AnimationLayout";
import { CRoute } from "./components/CRoute";

function App() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route element={<AnimationLayout />}>
        {routes.map((route, i) => {
          return (
          <Route key={i} {...route} />
        )})}
      </Route>
    </Routes>
  );
}

export default App;
