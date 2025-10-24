// src/components/Buscador.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Buscador = () => {
    const [busqueda, setBusqueda] = useState("");
    const [sugerencias, setSugerencias] = useState([]);
    const navigate = useNavigate();

  // Lista de páginas disponibles
    const paginas = [
    { nombre: "Inicio", ruta: "/" },
    { nombre: "G.C.S", ruta: "/GCS" },
    { nombre: "PDesarrollo", ruta: "/PDesarrollo" },
    { nombre: "SCRUM", ruta: "/SCRUM" },
    { nombre: "Kanban", ruta: "/Kanban" },
    { nombre: "Glosario", ruta: "/Glosario" },
    { nombre: "Preguntas", ruta: "/Preguntas" },
    { nombre: "About", ruta: "/about" },
    ];

  // Maneja lo que el usuario escribe
    const manejarCambio = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);

    if (valor.trim() === "") {
        setSugerencias([]);
        return;
    }

    // Filtra las páginas que coinciden con lo escrito
    const filtradas = paginas.filter((p) =>
        p.nombre.toLowerCase().includes(valor.toLowerCase())
    );
    setSugerencias(filtradas);
    };

  // Redirigir cuando selecciona una sugerencia o presiona Enter
    const manejarSeleccion = (ruta) => {
    setBusqueda("");
    setSugerencias([]);
    navigate(ruta);
    };

    const manejarEnter = (e) => {
    if (e.key === "Enter" && sugerencias.length > 0) {
      manejarSeleccion(sugerencias[0].ruta); // Va a la primera sugerencia
    }
    };

    return (
    <div style={{ position: "relative", display: "inline-block" }}>
        <input
        type="text"
        placeholder="Buscar página..."
        value={busqueda}
        onChange={manejarCambio}
        onKeyDown={manejarEnter}
        style={{
            width: "240px",
            padding: "8px 14px",
            borderRadius: "20px",
            border: "1px solid #b07f5e",
            backgroundColor: "#f0c6a0",
            outline: "none",
            color: "#3a2a1a",
            fontWeight: "500",
        }}
        />

      {/* Lista de sugerencias */}
        {sugerencias.length > 0 && (
        <ul
            style={{
            position: "absolute",
            top: "40px",
            left: 0,
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            listStyle: "none",
            padding: "5px 0",
            margin: 0,
            zIndex: 10,
            }}
        >
            {sugerencias.map((s, i) => (
            <li
                key={i}
                onClick={() => manejarSeleccion(s.ruta)}
                style={{
                padding: "8px 12px",
                cursor: "pointer",
                color: "#3a2a1a",
                }}
                onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffe5ca")
                }
                onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
                }
            >
                {s.nombre}
            </li>
            ))}
        </ul>
        )}
    </div>
    );
};

export default Buscador;
