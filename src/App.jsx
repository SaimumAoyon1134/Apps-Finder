
import { useState, createContext, useEffect } from "react";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";


export const InstallContext = createContext();

export const InstallProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState(() => {
    const saved = localStorage.getItem("installedApps");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }, [installedApps]);

  const installApp = (app) => {
    if (!installedApps.find((a) => a.id === app.id)) {
      setInstalledApps((prev) => [...prev, app]);
      toast.success(`Installation Completed!`);
    }
  };

  const uninstallApp = (app) => {
    setInstalledApps((prev) => prev.filter((a) => a.id !== app.id));
    toast.success(`Uninstalled!`);
  };

  return (
    <InstallContext.Provider value={{ installedApps, installApp, uninstallApp }}>
      {children}
    </InstallContext.Provider>
  );
};


function App() {
  const location = useLocation(); 
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
  
    setShowSpinner(true);
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <InstallProvider>
      <ToastContainer position="top-right" autoClose={1000} />
      <Navbar />

      {showSpinner ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
    </InstallProvider>
  );
}

export default App;