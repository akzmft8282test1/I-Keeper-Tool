import { Toaster } from "react-hot-toast";
import Router from "./Router"; // 기존 라우터

function App() {
  return (
    <>
      <Router />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: "14px"
          }
        }}
      />
    </>
  );
}

export default App;
