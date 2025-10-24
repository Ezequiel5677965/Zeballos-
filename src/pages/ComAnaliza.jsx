import React from 'react';
import '../css/Glosario.css'
import Header from '../components/Header';
import Glass from '../components/Glass';
import Footer from '../components/Footer';


const ComAnaliza = () => {
    return (
        <div>
            <Header />
            <Glass title= "Enlaces de Interes">
                <div className='content'>
                            <h2>Organizaciones y comunidades</h2>
                            <ol>
                                <li>Scrum.org — sitio oficial con recursos, guías, certificaciones y evaluaciones gratuitas. <a href="https://www.scrum.org/?utm_source=chatgpt.com">Scrum.org+2Scrum.org+2</a></li>
                                <li>Scrum Alliance — comunidad global de practicantes ágiles con recursos, eventos y material educativo. <a href="https://resources.scrumalliance.org/?utm_source=chatgpt.com">Scrum Alliance Resources</a></li>
                                <li>Agile Alliance — organización enfocada en promover y apoyar el movimiento ágil; tienen una sección con libros recomendados y recursos gratuitos sobre metodologías ágiles. <a href="https://agilealliance.org/resources/books/?utm_source=chatgpt.com">agilealliance.org</a></li>
                                <li>KanbanZone — biblioteca y recursos sobre Kanban, Lean Thinking y metodologías relacionadas. <a href="https://kanbanzone.com/resources/?utm_source=chatgpt.com">kanbanzone.com</a></li>
                            </ol>
                            <h2>Libros recomendados</h2>
                            <ol>
                                <li>Kanban: Successful Evolutionary Change for Your Technology Business — David J. Anderson. Recurso clásico para entender Kanban y aplicar mejoras evolutivas. <a href="https://kanbantool.com/kanban-library/books?utm_source=chatgpt.com">kanbantool.com</a></li>
                                <li>Agile Project Management with Kanban — Eric Brechner. Guía práctica para aplicar Kanban en equipos de software. <a href="https://www.microsoftpressstore.com/store/agile-project-management-with-kanban-9780735698956?utm_source=chatgpt.com">microsoftpressstore.com</a></li>
                                <li>Otras lecturas sugeridas (Scrum, Agile, XP) en listas como “Recommended Books on Agile” de Scrump¬topía. <a href="Scrumtopia">Scrumtopia</a></li>
                                <li>En el sitio de Agile Alliance hay una colección de libros sobre metodologías ágiles que incluye títulos en español e inglés. <a href="https://agilealliance.org/resources/books/?utm_source=chatgpt.com">agilealliance.org</a></li>
                                <li>Agile Project Management: Creating Innovative Products — Jim Highsmith. libro clásico sobre gestión ágil de productos. <a href="https://en.wikipedia.org/wiki/Agile_Project_Management_(book)?utm_source=chatgpt.com">Wikipedia</a></li>
                            </ol>
                            <h2>Artículos, papers y trabajos académicos</h2>
                                <section>
                                    <ul>
                                        <li><strong>Agile Development at Scale: The Next Frontier</strong> — explora cómo aplicar métodos ágiles en proyectos grandes con múltiples equipos. <em>arXiv</em></li>
                                        <li><strong>Adoption and Suitability of Software Development Methods and Practices</strong> — estudio sobre la adopción de métodos en distintos contextos. <em>arXiv</em></li>
                                        <li><strong>Kanban + X: Leveraging Kanban for Focused Improvements</strong> — propone una extensión de Kanban para mejoras específicas (seguridad, rendimiento, etc.). <em>arXiv</em></li>
                                        <li><strong>Scrum2Kanban: Integrating Kanban and Scrum</strong> — trabajo que describe una fusión entre Scrum y Kanban en un entorno educativo. <em>arXiv</em></li>
                                    </ul>
                                </section>

                            <h2>Recursos prácticos, herramientas y utilidades</h2>
                                <section>
                                    <ul>
                                        <li><strong>Open Assessments</strong> (de Scrum.org) — evaluaciones gratuitas para medir tu conocimiento de Scrum, Product Owner, Developers, etc. <em>Scrum.org</em></li>
                                        <li><strong>Scrum.org – Resource Center</strong> — artículos, guías, módulos de aprendizaje sobre Scrum y roles específicos. <em>Scrum.org</em></li>
                                        <li><strong>Kanban Library</strong> (KanbanTool) — catálogo de libros y recursos sobre implementación de Kanban y casos prácticos. <em>kanbantool.com</em></li>
                                        <li><strong>Better Software Magazine</strong> — revista digital con artículos sobre QA, testing y ciclo de vida del software. <em>Wikipedia</em></li>
                                        <li><strong>Tuleap</strong> — plataforma de gestión ágil / ALM open source que soporta Scrum, Kanban y procesos híbridos. <em>Wikipedia</em></li>
                                    </ul>
                                </section>

                            <h2>Ejercicios y Casos Prácticos</h2>

                                <section>
                                    <h3>1. Simulación de un Sprint Scrum</h3>
                                    <p><strong>Objetivo:</strong> Comprender cómo funciona un sprint desde la planificación hasta la retrospectiva.</p>
                                    <p><strong>Contexto:</strong> Tu equipo trabaja en el desarrollo de una aplicación móvil para pedidos de comida (“NekoFood”).</p>

                                    <h4>Tareas:</h4>
                                        <ol>
                                            <li><strong>Define el Product Backlog:</strong>
                                                <ul>
                                                    <li>“Como cliente, quiero registrarme con Google para no llenar formularios.”</li>
                                                    <li>“Como repartidor, quiero ver los pedidos cercanos para optimizar el tiempo.”</li>
                                                </ul>
                                                <p>Priorízalas según valor de negocio.</p>
                                            </li>
                                            <li><strong>Planificación del Sprint:</strong> Elige qué historias caben en un sprint de 2 semanas y estima su esfuerzo.</li>
                                            <li><strong>Ejecución:</strong> Simula el trabajo día a día en una tabla tipo “To Do / In Progress / Done”.</li>
                                            <li><strong>Daily Scrum:</strong>
                                                <ul>
                                                    <li>¿Qué hice ayer?</li>
                                                    <li>¿Qué haré hoy?</li>
                                                    <li>¿Qué impedimentos tengo?</li>
                                                </ul>
                                            </li>
                                            <li><strong>Sprint Review:</strong> Evalúa si se cumplieron las historias y pide feedback del “cliente”.</li>
                                            <li><strong>Sprint Retrospective:</strong>
                                                <ul>
                                                    <li>¿Qué funcionó bien?</li>
                                                    <li>¿Qué podría mejorar el equipo?</li>
                                                </ul>
                                            </li>
                                        </ol>
                                        <p><strong>Cuándo aplicarlo:</strong> Ideal para entrenar equipos nuevos en Scrum o en capacitaciones académicas.</p>
                            </section>

                            <section>
                            <h3>2. Kanban en un Departamento de Soporte Técnico</h3>
                            <p><strong>Contexto:</strong> Un área de soporte informático recibe constantemente tickets de mantenimiento, solicitudes y problemas.</p>
                            <p><strong>Objetivo:</strong> Implementar Kanban para visualizar y mejorar el flujo de trabajo.</p>

                            <h4>Pasos:</h4>
                            <ol>
                                <li>Crea un tablero con las columnas: Pendiente / En curso / En revisión / Hecho.</li>
                                <li>Registra 10 tareas reales o simuladas.</li>
                                <li>Asigna responsables y limita el WIP a 2 tareas por persona.</li>
                                <li>Mide el tiempo de cada ticket de “Pendiente” a “Hecho”.</li>
                                <li>Busca cuellos de botella y define mejoras.</li>
                            </ol>
                            <p><strong>Cuándo aplicarlo:</strong> Ideal cuando hay flujo constante de tareas repetitivas o mantenimiento continuo.</p>
                            </section>

                            <section>
                            <h3>3. Comparación Scrum vs Kanban</h3>
                            <p><strong>Objetivo:</strong> Entender cuál metodología se adapta mejor a distintos tipos de proyectos.</p>

                            <h4>Tareas:</h4>
                            <ol>
                                <li>Analiza tres proyectos:
                                <ul>
                                    <li>Desarrollo de una nueva app (alta incertidumbre).</li>
                                    <li>Mantenimiento de sistemas antiguos (flujo continuo).</li>
                                    <li>Producción de informes mensuales (repetitivo).</li>
                                </ul>
                                </li>
                                <li>Decide si usarías Scrum, Kanban o Scrumban.</li>
                                <li>Justifica la elección según:
                                <ul>
                                    <li>Estabilidad del flujo de trabajo.</li>
                                    <li>Nivel de cambio de prioridades.</li>
                                    <li>Tamaño del equipo.</li>
                                </ul>
                                </li>
                            </ol>
                            <p><strong>Cuándo aplicarlo:</strong> Útil para enseñar a elegir la herramienta adecuada.</p>
                            </section>

                            <section>
                            <h3>4. Medición de la Velocidad del Equipo (Scrum)</h3>
                            <p><strong>Objetivo:</strong> Aprender a medir la capacidad del equipo para planificar futuros sprints.</p>

                            <h4>Instrucciones:</h4>
                            <ol>
                                <li>Simula tres sprints con distintas historias.</li>
                                <li>Registra cuántos puntos completa el equipo:
                                <ul>
                                    <li>Sprint 1: 25 puntos</li>
                                    <li>Sprint 2: 30 puntos</li>
                                    <li>Sprint 3: 28 puntos</li>
                                </ul>
                                </li>
                                <li>Calcula la velocidad promedio: <code>(25 + 30 + 28) / 3 = 27.6 puntos/sprint</code></li>
                                <li>Usa ese número para planificar el siguiente sprint.</li>
                            </ol>
                            <p><strong>Cuándo aplicarlo:</strong> Durante prácticas de planificación ágil o simulaciones.</p>
                            </section>

                            <section>
                            <h3>5. Identificación de Roles Scrum</h3>
                            <p><strong>Objetivo:</strong> Reconocer las responsabilidades del Product Owner, Scrum Master y Development Team.</p>

                            <h4>Actividad:</h4>
                            <ul>
                                <li>“El cliente pide cambiar una historia durante el sprint.” → Product Owner</li>
                                <li>“El equipo tiene un bloqueo técnico que retrasa el trabajo.” → Scrum Master</li>
                                <li>“Se requiere ajustar la estimación de una tarea.” → Development Team</li>
                            </ul>
                            <p><strong>Cuándo aplicarlo:</strong> En capacitaciones iniciales sobre roles y responsabilidades en Scrum.</p>
                            </section>

                            <section>
                            <h3>6. Integración Scrum + Kanban (Scrumban)</h3>
                            <p><strong>Contexto:</strong> Un startup combina desarrollo de nuevas funcionalidades (Scrum) y resolución de bugs (Kanban).</p>

                            <h4>Ejercicio:</h4>
                            <ol>
                                <li>Define dos tableros:
                                <ul>
                                    <li>Scrum Board: para historias de usuario y sprints.</li>
                                    <li>Kanban Board: para incidencias o tareas urgentes.</li>
                                </ul>
                                </li>
                                <li>Define reglas para mover tareas entre tableros.</li>
                                <li>Evalúa semanalmente cómo se afecta la productividad.</li>
                            </ol>
                            <p><strong>Cuándo aplicarlo:</strong> Cuando los equipos necesitan flexibilidad entre lo planificado y lo emergente.</p>
                            </section>

                            <section>
                            <h3>7. Ejercicio de Calidad de Software</h3>
                            <p><strong>Objetivo:</strong> Comprender cómo la calidad se integra en el ciclo ágil.</p>

                            <h4>Instrucciones:</h4>
                            <ol>
                                <li>Define criterios de aceptación para una historia de usuario.</li>
                                <li>Diseña pruebas automatizadas o manuales simples.</li>
                                <li>Evalúa cómo estas pruebas pueden incorporarse al pipeline ágil.</li>
                            </ol>
                            <p><strong>Cuándo aplicarlo:</strong> En clases o proyectos donde se integran QA y testing con prácticas ágiles.</p>
                            </section>
                </div>
            </Glass>
            <Footer />
        </div>
    );
};

export default ComAnaliza;