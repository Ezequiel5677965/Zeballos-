import React from 'react';
import Inicio from './pages/Inicio';
import GCS from './pages/GCS';
import PDesarrollo from './pages/PDesarrollo';
import SCRUM from './pages/SCRUM';
import KANBAN from './pages/Kanban';
import Glosario from './pages/Glosario';
import Preguntas from './pages/Preguntas';
import About from './pages/about';
import Buscador from './components/Buscador';
import ComAnaliza from './pages/ComAnaliza';
import Contactos from './pages/contactos';
// import Compara from './pages/Compara';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<About />} />
        <Route path="/comAnaliza" element={<ComAnaliza />} />
        <Route path="/GCS" element={<GCS />} />
        <Route path="/PDesarrollo" element={<PDesarrollo />} />
        <Route path="/SCRUM" element={<SCRUM />} />
        <Route path="/Kanban" element={<KANBAN />} />
        <Route path="/Glosario" element={<Glosario />} />
        <Route path="/Preguntas" element={<Preguntas />} />
        <Route path="/Contact" element={<Contactos/>}/>
      </Routes>
    </Router>
  );
}

export default App;