import React from 'react';
import Header from '../components/Header';
import Glass from '../components/Glass';
import Footer from '../components/Footer';
import "../css/Sections.css";

const PDesarrollo = () => {
    return (
        <div>
            <Header />
            <Glass title="Procesos de Desarrollo del Software">
                <div className="content">

                    <h2>Ciclo de Vida de Desarrollo del Software (SDLC)</h2>
                    <div className="card-info">
                        <p>
                            El Software Development Life Cycle (SDLC) es el conjunto de fases que guían la construcción de un software desde la idea inicial hasta su uso y mantenimiento.
                            Su objetivo principal es ordenar el proceso de desarrollo, reducir riesgos y asegurar que el producto cumpla con los requisitos de calidad, tiempo y costo.
                        </p>
                    </div>

                    <h2>Etapas principales del SDLC</h2>
                    <ol>
                        <li>
                            <h3>Planificación y análisis de requisitos</h3>
                            <ul>
                                <li>Se definen los objetivos, necesidades del cliente y alcance del proyecto.</li>
                                <li>Se analizan viabilidad técnica, económica y de tiempo.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Diseño</h3>
                            <ul>
                                <li>Se elabora la arquitectura del sistema: diagramas, bases de datos, interfaces y flujos.</li>
                                <li>Incluye diseño de alto nivel (arquitectura general) y de bajo nivel (detalle de módulos).</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Implementación o desarrollo</h3>
                            <ul>
                                <li>Los programadores escriben el código siguiendo los estándares acordados.</li>
                                <li>Se integran las diferentes partes del sistema.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Pruebas (Testing)</h3>
                            <ul>
                                <li>Validan que el software cumpla con los requisitos funcionales y de calidad.</li>
                                <li>Incluye pruebas unitarias, de integración, de sistema y de aceptación.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Despliegue (Deployment)</h3>
                            <ul>
                                <li>El software se libera para su uso en el entorno real (instalación, migración de datos, capacitación).</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Mantenimiento y mejora</h3>
                            <ul>
                                <li>Corrección de errores en producción.</li>
                                <li>Adaptación a nuevos requisitos o tecnologías.</li>
                                <li>Optimización continua.</li>
                            </ul>
                        </li>
                    </ol>

                    <div className="card-tip">
                        <h4>Importancia del SDLC</h4>
                        <ul>
                            <li>Organización y control: define un marco estructurado para el trabajo.</li>
                            <li>Reducción de riesgos: permite identificar problemas tempranos y minimizar costos de corrección.</li>
                            <li>Mejora de la calidad: asegura que se cumplan estándares y buenas prácticas en cada fase.</li>
                            <li>Trazabilidad: facilita saber qué se hizo, por qué y cómo, ayudando en auditorías y mantenimiento.</li>
                            <li>Adaptabilidad: diferentes modelos (Cascada, Ágil, Espiral, DevOps) permiten ajustarse a distintos tipos de proyectos.</li>
                        </ul>
                    </div>

                    <h2>Modelos Tradicionales</h2>

                    <h3>Modelo en Cascada</h3>
                    <div className="card-info">
                        <p>
                            Es el más clásico y lineal: cada fase se completa antes de pasar a la siguiente.
                            Se representa como una “cascada” porque el flujo es descendente y sin retrocesos formales.
                        </p>
                    </div>
                    <div>
                        <img src="/cascada.png" alt="Modelo en Cascada" />
                    </div>
                    <h4>Ventajas</h4>
                    <ul>
                        <li>Simplicidad y fácil de entender.</li>
                        <li>Buena opción en proyectos muy documentados y con requisitos estables.</li>
                        <li>Adecuado para equipos poco experimentados o proyectos pequeños.</li>
                    </ul>
                    <h4>Desventajas</h4>
                    <ul>
                        <li>Poco flexible: cambios en requisitos son costosos.</li>
                        <li>El cliente solo ve el producto al final.</li>
                        <li>No se adapta bien a proyectos largos o con incertidumbre.</li>
                    </ul>
                    <h4>Cuándo usarlo</h4>
                    <ul>
                        <li>Cuando los requisitos están claros y no van a cambiar.</li>
                        <li>En proyectos pequeños, de bajo riesgo y con fuerte necesidad de documentación.</li>
                    </ul>

                    <h3>Modelo en V</h3>
                    <div className="card-info">
                        <p>
                            Variante del cascada que enfatiza la relación entre desarrollo y pruebas.
                            Cada fase de construcción tiene su fase de prueba asociada:
                        </p>
                        <ul>
                            <li>Requisitos ↔ Pruebas de aceptación.</li>
                            <li>Diseño ↔ Pruebas de integración y sistema.</li>
                            <li>Codificación ↔ Pruebas unitarias.</li>
                        </ul>
                    </div>
                    <div>
                        <img src="/modeloV.png" alt="Modelo en V" />
                    </div>
                    <h4>Ventajas</h4>
                    <ul>
                        <li>Refuerza la importancia del testing desde el inicio.</li>
                        <li>Trazabilidad clara entre requisitos y pruebas.</li>
                        <li>Detecta inconsistencias más temprano que el cascada puro.</li>
                    </ul>
                    <h4>Desventajas</h4>
                    <ul>
                        <li>Sigue siendo rígido: difícil introducir cambios.</li>
                        <li>Alto costo si los requisitos cambian a mitad del proyecto.</li>
                        <li>Poca interacción con el cliente durante el desarrollo.</li>
                    </ul>
                    <h4>Cuándo usarlo</h4>
                    <ul>
                        <li>En proyectos donde la calidad y la validación son críticas (aeronáutica, defensa, salud).</li>
                        <li>Cuando el cliente valora pruebas exhaustivas y trazabilidad documental.</li>
                    </ul>

                    <h3>Modelos Iterativos e Incrementales</h3>
                    <div className="card-info">
                        <p>
                            El desarrollo se hace en ciclos cortos (iteraciones), cada uno entregando una parte funcional del software (incremento).
                            El sistema va creciendo poco a poco con entregas parciales hasta completar el producto.
                            Permite retroalimentación constante del cliente.
                        </p>
                    </div>
                    <div>
                        <img src="/iterativoIncremental.png" alt="Modelos Iterativos e Incrementales" />
                    </div>
                    <h4>Ventajas</h4>
                    <ul>
                        <li>Mucha flexibilidad: se adapta a cambios en requisitos.</li>
                        <li>El cliente ve resultados temprano y puede dar feedback.</li>
                        <li>Riesgos más controlados (los problemas aparecen en etapas tempranas).</li>
                    </ul>
                    <h4>Desventajas</h4>
                    <ul>
                        <li>Puede ser difícil estimar el costo total al inicio.</li>
                        <li>Requiere mayor comunicación con el cliente.</li>
                        <li>Riesgo de desorganización si no se gestiona bien.</li>
                    </ul>
                    <h4>Cuándo usarlo</h4>
                    <ul>
                        <li>Cuando los requisitos no están del todo claros al inicio.</li>
                        <li>Proyectos medianos o grandes que requieren entregas frecuentes.</li>
                        <li>Contextos ágiles, donde la prioridad es la satisfacción temprana del usuario.</li>
                    </ul>

                    <h2>Metodologías Ágiles</h2>
                    <div className="card-tip">
                        <h4>Principios del Manifiesto Ágil (2001)</h4>
                        <ul>
                            <li>Individuos e interacciones sobre procesos y herramientas.</li>
                            <li>Software funcionando sobre documentación extensiva.</li>
                            <li>Colaboración con el cliente sobre negociación contractual.</li>
                            <li>Respuesta al cambio sobre seguir un plan rígido.</li>
                        </ul>
                    </div>

                    <div>
                        <img src="/MetodAgil.png" alt="Metodologías Ágiles" />
                    </div>

                    <h3>Scrum</h3>
                    <h4>Principios</h4>
                    <ul>
                        <li>Dividir el trabajo en ciclos cortos llamados Sprints (2-4 semanas).</li>
                        <li>Se busca entregar un incremento de producto funcionando en cada Sprint.</li>
                    </ul>
                    <h4>Roles</h4>
                    <ul>
                        <li><strong>Product Owner (PO):</strong> representa al cliente, define la prioridad del Product Backlog.</li>
                        <li><strong>Scrum Master:</strong> facilita el proceso, elimina impedimentos, asegura que se sigan los principios ágiles.</li>
                        <li><strong>Development Team:</strong> equipo multidisciplinario que construye el producto.</li>
                    </ul>
                    <h4>Ceremonias</h4>
                    <ul>
                        <li>Sprint Planning</li>
                        <li>Daily Scrum (Daily Stand-up)</li>
                        <li>Sprint Review</li>
                        <li>Sprint Retrospective</li>
                    </ul>
                    <h4>Artefactos</h4>
                    <ul>
                        <li>Product Backlog</li>
                        <li>Sprint Backlog</li>
                        <li>Incremento</li>
                    </ul>

                    <h3>Kanban</h3>
                    <h4>Principios</h4>
                    <ul>
                        <li>Visualizar el flujo de trabajo mediante un tablero Kanban (To Do – In Progress – Done).</li>
                        <li>Limitar el trabajo en curso (WIP – Work in Progress) para evitar sobrecarga.</li>
                        <li>Mejorar de manera continua el flujo.</li>
                    </ul>
                    <h4>Roles</h4>
                    <ul>
                        <li>No define roles fijos (a diferencia de Scrum); el equipo se organiza de manera flexible.</li>
                    </ul>
                    <h4>Artefactos</h4>
                    <ul>
                        <li>Tablero Kanban: columnas que representan estados del trabajo.</li>
                        <li>Tarjetas (cards): cada tarea o historia de usuario.</li>
                    </ul>

                    <h3>Extreme Programming (XP)</h3>
                    <h4>Principios</h4>
                    <ul>
                        <li>Mejora la calidad del software con prácticas técnicas estrictas.</li>
                        <li>Fomenta la comunicación, la simplicidad y la retroalimentación continua.</li>
                    </ul>
                    <h4>Roles</h4>
                    <ul>
                        <li>Programadores: desarrollan el código en parejas.</li>
                        <li>Cliente: disponible todo el tiempo para aclarar dudas.</li>
                        <li>Coach: guía al equipo en la aplicación de XP.</li>
                    </ul>
                    <h4>Prácticas / Ceremonias</h4>
                    <ul>
                        <li>Programación en parejas (Pair Programming).</li>
                        <li>Desarrollo guiado por pruebas (TDD – Test Driven Development).</li>
                        <li>Integración continua.</li>
                        <li>Refactorización frecuente.</li>
                        <li>Pequeñas iteraciones con entregas rápidas.</li>
                    </ul>
                    <h4>Artefactos</h4>
                    <ul>
                        <li>Historias de usuario simples y claras.</li>
                        <li>Pruebas automatizadas como documentación viva.</li>
                    </ul>

                </div>
            </Glass>
            <Footer />
        </div>
    );
};

export default PDesarrollo;
