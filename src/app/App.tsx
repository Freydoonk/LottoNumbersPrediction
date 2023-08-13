import { RouterProvider } from "react-router-dom";
import { router } from "../router/router";

// Bootstrap CSS
import "../scss/customBootstrap.scss";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
