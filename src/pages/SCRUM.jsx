import React from "react";
import Header from "../components/Header";
import Glass from "../components/Glass";
import Footer from "../components/Footer";
import "../css/Sections.css";

const SCRUM = () => {
    return (
        <div>
            <Header />
            <Glass title="SCRUM Metodología">
                <div className="content">
                    <h2>¿Qué es SCRUM?</h2>
                    <div className="card-info">
                        <p>
                            Scrum es un marco de trabajo ágil para gestionar y desarrollar
                            proyectos complejos, especialmente en el ámbito del software,
                            aunque hoy se aplica en muchos otros sectores. Su propósito
                            principal es entregar valor de forma incremental, en partes
                            pequeñas pero funcionales, para adaptarse rápidamente a los
                            cambios y obtener retroalimentación continua del cliente o
                            usuario. Scrum no dice exactamente cómo hacer las cosas, sino que
                            establece una estructura de roles, eventos y artefactos que guían
                            la colaboración del equipo.
                        </p>
                    </div>

                    <h2>Roles en SCRUM</h2>
                    <ol>
                        <li>
                            <h3>Product Owner (PO)</h3>
                            <ul>
                                <li>Representa al cliente o negocio.</li>
                                <li>Maximiza el valor del producto.</li>
                                <li>Mantiene y prioriza el Product Backlog.</li>
                                <li>Toma decisiones sobre qué se hace primero.</li>
                                <li>Define criterios de aceptación.</li>
                            </ul>
                            <div className="card-example">
                                <p>
                                    <strong>En resumen:</strong> el PO dice “qué se debe hacer y
                                    por qué”.
                                </p>
                            </div>
                        </li>

                        <li>
                            <h3>Scrum Master (SM)</h3>
                            <ul>
                                <li>Facilitador del proceso Scrum, no jefe.</li>
                                <li>Guía y coach del equipo.</li>
                                <li>Elimina impedimentos y fomenta la mejora continua.</li>
                                <li>Promueve comunicación y trabajo colaborativo.</li>
                            </ul>
                            <div className="card-example">
                                <p>
                                    <strong>En resumen:</strong> el SM asegura que el equipo
                                    trabaje sin obstáculos y aplicando bien Scrum.
                                </p>
                            </div>
                        </li>

                        <li>
                            <h3>Development Team (Equipo de Desarrollo)</h3>
                            <ul>
                                <li>
                                    Profesionales que construyen el producto (programadores,
                                    diseñadores, testers, etc.).
                                </li>
                                <li>Multifuncional y autoorganizado.</li>
                                <li>Entrega incrementos funcionales en cada Sprint.</li>
                            </ul>
                            <div className="card-example">
                                <p>
                                    <strong>En resumen:</strong> el equipo hace el trabajo y
                                    entrega valor en cada iteración.
                                </p>
                            </div>
                        </li>
                    </ol>

                    <h2>Artefactos en SCRUM</h2>
                    <div className="card-info">
                        <p>
                            SCRUM utiliza 3 artefactos principales para organizar y visualizar
                            el trabajo:
                        </p>
                    </div>
                    <ol>
                        <li>
                            <h3>Product Backlog</h3>
                            <ul>
                                <li>Lista priorizada de todo lo necesario en el producto.</li>
                                <li>Incluye historias de usuario, bugs, tareas y mejoras.</li>
                                <li>Responsabilidad del Product Owner.</li>
                                <li>Es dinámico y evoluciona con el tiempo.</li>
                            </ul>
                            <div className="card-example">
                                <p>
                                    <strong>Ejemplo:</strong> “Como usuario quiero iniciar sesión
                                    con Google para no tener que crear una nueva cuenta.”
                                </p>
                            </div>
                        </li>

                        <li>
                            <h3>Sprint Backlog</h3>
                            <ul>
                                <li>
                                    Conjunto de ítems seleccionados del Product Backlog para el
                                    Sprint actual.
                                </li>
                                <li>Incluye un plan de ejecución.</li>
                                <li>Propiedad del equipo de desarrollo.</li>
                                <li>Se actualiza a diario durante el Daily Scrum.</li>
                            </ul>
                            <div className="card-example">
                                <p>
                                    Es el “plan de batalla” del equipo para el Sprint en curso.
                                </p>
                            </div>
                        </li>

                        <li>
                            <h3>Incremento</h3>
                            <ul>
                                <li>Resultado del Sprint: parte funcional del producto.</li>
                                <li>
                                    Cumple criterios de calidad y puede entregarse al cliente.
                                </li>
                                <li>Se acumula con los incrementos anteriores.</li>
                            </ul>
                            <div className="card-example">
                                <p>Es la evidencia tangible del progreso del equipo.</p>
                            </div>
                        </li>
                    </ol>

                    <h2>Eventos en SCRUM</h2>
                    <div className="card-info">
                        <p>
                            Scrum define una serie de eventos (reuniones o “ceremonias”) que
                            estructuran el trabajo dentro del marco.
                        </p>
                    </div>
                    <ol>
                        <li>
                            <h3>Sprint</h3>
                            <ul>
                                <li>Es el corazón de Scrum, dura entre 2 y 4 semanas.</li>
                                <li>
                                    Durante el Sprint se crea un incremento usable del producto.
                                </li>
                                <li>
                                    Objetivo: entregar valor y aprender para el siguiente ciclo.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h3>Sprint Planning</h3>
                            <div className="card-info">
                                <p>Reunión inicial del Sprint donde se define:</p>
                                <ol>
                                    <li>Qué se logrará (Objetivo del Sprint).</li>
                                    <li>Cómo se hará (plan y tareas).</li>
                                </ol>
                            </div>
                        </li>

                        <li>
                            <h3>Daily Scrum</h3>
                            <div className="card-info">
                                <p>
                                    Reunión diaria de 15 minutos para sincronizar el trabajo y
                                    ajustar el plan.
                                </p>
                            </div>
                            <ul>
                                <li>¿Qué hice ayer?</li>
                                <li>¿Qué haré hoy?</li>
                                <li>¿Hay algo que me bloquee?</li>
                            </ul>
                        </li>

                        <li>
                            <h3>Sprint Review</h3>
                            <ul>
                                <li>Se realiza al final del Sprint.</li>
                                <li>El equipo presenta el Incremento al PO y stakeholders.</li>
                                <li>Se obtiene feedback y se ajusta el Product Backlog.</li>
                            </ul>
                        </li>

                        <li>
                            <h3>Sprint Retrospective</h3>
                            <ul>
                                <li>Última reunión del Sprint.</li>
                                <li>Solo participa el equipo Scrum.</li>
                                <li>
                                    Se analizan mejoras y acciones concretas para el próximo
                                    ciclo.
                                </li>
                            </ul>
                        </li>
                    </ol>

                    <h2>Flujo general de Scrum</h2>
                    <ol>
                        <li>El Product Owner mantiene el Product Backlog priorizado.</li>
                        <li>El equipo selecciona ítems en la planificación del Sprint.</li>
                        <li>Durante el Sprint, trabajan y ajustan en el Daily.</li>
                        <li>Al final presentan el Incremento en la Review.</li>
                        <li>Luego mejoran en la Retrospectiva.</li>
                    </ol>

                    <h2>Beneficios de Scrum</h2>
                    <ul>
                        <li>Entregas rápidas e incrementales.</li>
                        <li>Flexibilidad ante cambios.</li>
                        <li>Transparencia y comunicación constante.</li>
                        <li>Retroalimentación continua.</li>
                        <li>Fomento de la autoorganización y mejora continua.</li>
                    </ul>
                </div>
            </Glass>
            <Footer />
        </div>
    );
};

export default SCRUM;
