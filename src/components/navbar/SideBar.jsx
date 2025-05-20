import React, { useState } from "react";
import { AlignCenter, X, House, Wrench, FileText, BriefcaseBusiness, Contact } from "lucide-react";
import {Link} from 'react-router-dom'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar-container d-flex justify-content-end">
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} color="#ffffff" /> : <AlignCenter size={30} color="#ffffff" />}
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className='sidebar-logo-name'>
          <h3>RollyDev.</h3>
        </div>
        <ul className="sidebar-links">
          <Link to="/"><li> <House size={15} color="#ffffff" className="me-3" /> Home</li></Link>
          <Link to="services"><li> <Wrench size={20} color="#ffffff" className="me-3" /> Services</li></Link>
          <Link to="resume"><li> <FileText size={20} color="#ffffff" className="me-3" /> Resume</li></Link>
          <Link to="work"><li> <BriefcaseBusiness size={20} color="#ffffff" className="me-3"/> Work</li></Link>
          <Link to="contact"><li> <Contact size={20} color="#ffffff" className="me-3"/> Contact</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
