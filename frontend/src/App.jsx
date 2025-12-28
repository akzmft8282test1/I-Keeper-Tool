import { Toaster } from "react-hot-toast";
import Router from "./Router";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Router />
    </>
  );
}

export default App;
