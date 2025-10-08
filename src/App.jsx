import { useState, createContext } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


export const InstallContext = createContext();


export const InstallProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  const installApp = (app) => {
   
    if (!installedApps.find(a => a.id === app.id)) {
      setInstalledApps(prev => [...prev, app]);
    }
  };
const uninstallApp = (app) => {
  setInstalledApps(prev => prev.filter(a => a.id !== app.id));
  
};
  return (
    <InstallContext.Provider value={{ installedApps, installApp,uninstallApp }}>
      {children}
    </InstallContext.Provider>
  );
};


function App() {
 
  return (
    <InstallProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </InstallProvider>
  );
}

export default App;