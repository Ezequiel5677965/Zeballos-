import React from "react";
import Header from "../components/Header";
import Glass from "../components/Glass";
import Footer from "../components/Footer";
import "../css/Glosario.css";

const Preguntas = () => {
    return (
        <div>
            <Header />
            <Glass title="Preguntas Frecuentes sobre Metodologías Ágiles y Calidad de Software">
                <div className="faq-container">
                    <ol>
                        <li>
                            <h2>¿Qué son las metodologías ágiles?</h2>
                            <p>
                                Las metodologías ágiles son enfoques de trabajo que buscan entregar
                                valor rápidamente y adaptarse al cambio mediante la colaboración,
                                iteraciones cortas y retroalimentación continua.
                            </p>
                            <p>
                                Se basan en el <strong>Manifiesto Ágil (2001)</strong>, cuyos
                                principios incluyen:
                            </p>
                            <ul>
                                <li>Priorizar a las personas y la comunicación sobre los procesos.</li>
                                <li>Entregar software funcional de forma frecuente.</li>
                                <li>Colaborar estrechamente con el cliente.</li>
                                <li>Adaptarse al cambio en lugar de seguir un plan rígido.</li>
                            </ul>
                        </li>

                        <li>
                            <h2>¿Qué es Scrum?</h2>
                            <p>
                                Scrum es un marco de trabajo ágil que organiza el desarrollo del
                                software en <strong>Sprints</strong> (ciclos cortos de 2 a 4 semanas).
                                Su objetivo es entregar incrementos de producto funcionales de manera
                                frecuente y predecible.
                            </p>
                            <p>Scrum se basa en tres pilares:</p>
                            <ol>
                                <li>Transparencia: todos pueden ver el progreso y estado del trabajo.</li>
                                <li>Inspección: el equipo revisa su avance regularmente.</li>
                                <li>Adaptación: se hacen ajustes continuos según lo aprendido.</li>
                            </ol>
                        </li>

                        <li>
                            <h2>¿Cuáles son los roles principales en Scrum?</h2>
                            <ol>
                                <li>
                                    <strong>Product Owner (PO):</strong> Representa al cliente, prioriza
                                    el trabajo y define el valor a entregar.
                                </li>
                                <li>
                                    <strong>Scrum Master (SM):</strong> Facilita el proceso, ayuda al
                                    equipo y elimina impedimentos.
                                </li>
                                <li>
                                    <strong>Development Team:</strong> Grupo que construye el producto y
                                    se autoorganiza.
                                </li>
                            </ol>
                        </li>

                        <li>
                            <h2>¿Qué es un Sprint y cuánto dura?</h2>
                            <p>
                                Un Sprint es un ciclo de trabajo de 1 a 4 semanas en el que se
                                desarrolla un conjunto de funcionalidades completas y entregables.
                            </p>
                            <ul>
                                <li>Planificación (Sprint Planning)</li>
                                <li>Trabajo diario (Daily Scrum)</li>
                                <li>Revisión (Sprint Review)</li>
                                <li>Retrospectiva (Sprint Retrospective)</li>
                            </ul>
                        </li>

                        <li>
                            <h2>¿Qué diferencia hay entre Product Backlog y Sprint Backlog?</h2>
                            <ul>
                                <li>
                                    <strong>Product Backlog:</strong> Lista priorizada y en evolución de
                                    todas las funcionalidades y mejoras.
                                </li>
                                <li>
                                    <strong>Sprint Backlog:</strong> Elementos seleccionados del Product
                                    Backlog para el Sprint actual.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h2>¿Qué se hace en una Daily Scrum?</h2>
                            <p>
                                Es una reunión de 15 minutos donde el equipo sincroniza su trabajo y
                                detecta impedimentos. Cada miembro responde:
                            </p>
                            <ul>
                                <li>¿Qué hizo ayer?</li>
                                <li>¿Qué hará hoy?</li>
                                <li>¿Hay algún impedimento?</li>
                            </ul>
                        </li>

                        <li>
                            <h2>¿Qué se hace en la Sprint Review y la Retrospectiva?</h2>
                            <ul>
                                <li>
                                    <strong>Sprint Review:</strong> Presentación del incremento del
                                    producto y recolección de feedback.
                                </li>
                                <li>
                                    <strong>Sprint Retrospective:</strong> Reunión para analizar mejoras
                                    en el proceso y el trabajo del equipo.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h2>¿Qué es Kanban y para qué sirve?</h2>
                            <p>
                                Kanban es una herramienta de gestión visual que optimiza el flujo de
                                trabajo, limita el trabajo en curso y elimina cuellos de botella.
                            </p>
                        </li>

                        <li>
                            <h2>¿Qué es la calidad del software?</h2>
                            <p>
                                Es el grado en que un producto cumple los requisitos y expectativas
                                del cliente. Implica que el software sea:
                            </p>
                            <ul>
                                <li>Correcto</li>
                                <li>Confiable</li>
                                <li>Eficiente</li>
                                <li>Mantenible</li>
                                <li>Seguro</li>
                                <li>Fácil de usar</li>
                            </ul>
                        </li>

                        <li>
                            <h2>
                                ¿Qué diferencia hay entre Aseguramiento de la Calidad (QA) y Control
                                de Calidad (QC)?
                            </h2>
                            <ul>
                                <li>
                                    <strong>QA:</strong> Actividades preventivas que garantizan procesos
                                    adecuados para producir software de calidad.
                                </li>
                                <li>
                                    <strong>QC:</strong> Actividades de detección para encontrar defectos
                                    en el producto.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h2>¿Qué tipos de pruebas de software existen?</h2>
                            <ul>
                                <li>Pruebas Unitarias</li>
                                <li>Pruebas de Integración</li>
                                <li>Pruebas de Sistema</li>
                                <li>Pruebas de Aceptación</li>
                                <li>Pruebas de Regresión</li>
                                <li>Pruebas de Rendimiento</li>
                                <li>Pruebas de Usabilidad</li>
                            </ul>
                        </li>

                        <li>
                            <h2>¿Qué son la verificación y la validación en el desarrollo?</h2>
                            <ul>
                                <li>
                                    <strong>Verificación:</strong> “¿Estamos construyendo el producto
                                    correctamente?”
                                </li>
                                <li>
                                    <strong>Validación:</strong> “¿Estamos construyendo el producto
                                    correcto?”
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h2>¿Qué es una historia de usuario?</h2>
                            <p>
                                Es una forma ágil de expresar un requisito desde la perspectiva del
                                usuario:
                            </p>
                            <blockquote>
                                “Como [rol], quiero [acción], para [beneficio].”
                            </blockquote>
                        </li>

                        <li>
                            <h2>¿Qué es el mantenimiento del software?</h2>
                            <p>
                                Actividades posteriores a la entrega del producto para corregir,
                                mejorar o adaptar el software.
                            </p>
                        </li>

                        <li>
                            <h2>¿Qué métricas se usan para evaluar la calidad?</h2>
                            <ul>
                                <li>Lead Time</li>
                                <li>Cycle Time</li>
                                <li>Tasa de Defectos</li>
                                <li>Productividad</li>
                                <li>Eficiencia</li>
                            </ul>
                        </li>

                        <li>
                            <h2>¿Qué normas y modelos existen para la calidad del software?</h2>
                            <ul>
                                <li>ISO 9001</li>
                                <li>ISO/IEC 25010</li>
                                <li>CMMI</li>
                                <li>ITIL</li>
                            </ul>
                        </li>

                        <li>
                            <h2>
                                ¿Qué papel cumple la mejora continua en las metodologías ágiles?
                            </h2>
                            <p>
                                La mejora continua es el corazón de los métodos ágiles: cada iteración
                                analiza el desempeño y busca optimizarlo, especialmente en la
                                Retrospectiva de Scrum y Kanban.
                            </p>
                        </li>

                        <li>
                            <h2>
                                ¿Qué es la integración continua (CI) y la entrega continua (CD)?
                            </h2>
                            <ul>
                                <li>
                                    <strong>CI:</strong> Integrar frecuentemente el código y ejecutar
                                    pruebas automáticas.
                                </li>
                                <li>
                                    <strong>CD:</strong> Desplegar versiones nuevas de manera frecuente,
                                    estable y automatizada.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h2>¿Por qué las metodologías ágiles mejoran la calidad?</h2>
                            <ul>
                                <li>Promueven entregas tempranas y frecuentes.</li>
                                <li>Fomentan la retroalimentación constante.</li>
                                <li>Mantienen comunicación directa con el cliente.</li>
                                <li>Permiten adaptarse rápidamente al cambio.</li>
                                <li>Impulsan la colaboración y la mejora continua.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                </Glass>
                <Footer />
        </div>
    );
}

export default Preguntas;