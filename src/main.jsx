import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Layout from '../Routes/Layout.jsx'
import Create from '../pages/Create.jsx'
import Read from '../pages/Read.jsx'
import NotFound from '../pages/NotFound.jsx'
import Edit from '../pages/Edit.jsx'
import View from '../pages/View.jsx'

function AppRoutes() {
  const location = useLocation();
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="Create" element={<Create/>}/>
        <Route path="Gallery" element={<Read key={location.key} />}/>
        <Route path="Edit/:id" element={<Edit/>}/>
        <Route path="View/:id" element={<View/>}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/CrewMate">
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
