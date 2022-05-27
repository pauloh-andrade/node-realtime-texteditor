import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export { App };
