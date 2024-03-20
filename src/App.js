import "./App.css";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "./route/router";

function App() {
  return (
    <>
      <ToastContainer theme="colored" position="top-center"></ToastContainer>
      <AppRouter />
    </>
  );
}

export default App;
