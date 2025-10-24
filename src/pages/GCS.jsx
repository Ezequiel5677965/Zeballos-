import React from 'react';
import Header from '../components/Header';
import Glass from '../components/Glass';
import Footer from '../components/Footer';
import "../css/Sections.css"

const GCS = () => {
    return (
        <div>
            <Header />
            <Glass title="GCS - Gestión de Calidad de Software">
                <div className="content">

                    <div className="card-info">
                        <p>
                            Cuando hablamos de calidad en software no es solo “que funcione”,
                            sino un conjunto de propiedades que hacen que el producto sea confiable,
                            usable y mantenible. Algunos conceptos centrales:
                        </p>
                    </div>

                    <ul>
                        <li>
                            <strong>Calidad del producto:</strong> características propias del software (ej. seguridad, eficiencia, facilidad de uso).
                        </li>
                        <li>
                            <strong>Calidad en uso:</strong> qué tan bien satisface el software las necesidades reales del usuario en un contexto.
                        </li>
                    </ul>

                    <h2>Atributos de calidad típicos</h2>
                    <ol>
                        <li>
                            <h3>Funcionalidad</h3>
                            <p>
                                Mide si el software cumple con las funciones para las que fue diseñado, de acuerdo con los requisitos.
                            </p>
                            <h4>Subcaracterísticas</h4>
                            <ul>
                                <li>Adecuación</li>
                                <li>Exactitud</li>
                                <li>Interoperabilidad</li>
                                <li>Seguridad</li>
                                <li>Cumplimiento</li>
                            </ul>
                            <div className="card-example">
                                <p><strong>Ejemplo:</strong> un sistema bancario debe calcular correctamente intereses y comisiones según la normativa.</p>
                            </div>
                        </li>

                        <li>
                            <h3>Confiabilidad</h3>
                            <p>Mide la capacidad del software de mantener su desempeño en condiciones específicas, sin fallar.</p>
                            <h4>Subcaracterísticas</h4>
                            <ul>
                                <li>Madurez</li>
                                <li>Disponibilidad</li>
                                <li>Tolerancia a fallos</li>
                                <li>Recuperabilidad</li>
                            </ul>
                            <div className="card-example">
                                <p><strong>Ejemplo:</strong> una aplicación de streaming que rara vez se cae y, si ocurre, se recupera rápido.</p>
                            </div>
                        </li>

                        <li>
                            <h3>Eficiencia (Rendimiento)</h3>
                            <p>Se refiere a cómo el software usa los recursos (tiempo, memoria, CPU, red) para realizar sus funciones.</p>
                            <h4>Subcaracterísticas</h4>
                            <ul>
                                <li>Comportamiento temporal</li>
                                <li>Utilización de recursos</li>
                            </ul>
                            <div className="card-example">
                                <p><strong>Ejemplo:</strong> un buscador web que devuelve resultados en milisegundos, incluso con millones de consultas concurrentes.</p>
                            </div>
                        </li>

                        <li>
                            <h3>Usabilidad</h3>
                            <p>Mide la facilidad con la que los usuarios pueden aprender, entender y usar el sistema.</p>
                            <h4>Subcaracterísticas</h4>
                            <ul>
                                <li>Aprendibilidad</li>
                                <li>Operabilidad</li>
                                <li>Accesibilidad</li>
                                <li>Estética y experiencia</li>
                            </ul>
                            <div className="card-example">
                                <p><strong>Ejemplo:</strong> una app móvil con menús claros, iconos reconocibles y accesibilidad para personas con discapacidad visual.</p>
                            </div>
                        </li>

                        <li>
                            <h3>Mantenibilidad</h3>
                            <p>Capacidad del software para ser modificado, corregido o mejorado de forma eficiente.</p>
                            <h4>Subcaracterísticas</h4>
                            <ul>
                                <li>Analizabilidad</li>
                                <li>Modificabilidad</li>
                                <li>Estabilidad</li>
                                <li>Testabilidad</li>
                            </ul>
                            <div className="card-example">
                                <p><strong>Ejemplo:</strong> un sistema con código modular y bien documentado que permite añadir un nuevo módulo sin romper los existentes.</p>
                            </div>
                        </li>

                        <li>
                            <h3>Portabilidad</h3>
                            <p>Mide la facilidad con la que el software puede trasladarse o adaptarse a diferentes entornos.</p>
                            <h4>Subcaracterísticas</h4>
                            <ul>
                                <li>Adaptabilidad</li>
                                <li>Instalabilidad</li>
                                <li>Conformidad</li>
                                <li>Reemplazabilidad</li>
                            </ul>
                            <div className="card-example">
                                <p><strong>Ejemplo:</strong> una aplicación que corre en Windows, Linux y Mac sin necesidad de cambios en el código.</p>
                            </div>
                        </li>
                    </ol>

                    <div className="card-tip">
                        <p>Prevención vs. Corrección</p>
                        <p>
                            La calidad se busca desde el inicio del ciclo de vida, no solo con pruebas al final.
                        </p>
                    </div>

                    <h2>Métricas de Calidad</h2>
                    <h4>De producto (internas)</h4>
                    <ul>
                        <li>Complejidad ciclomática</li>
                        <li>Cobertura de pruebas</li>
                        <li>Defectos por mil líneas de código</li>
                    </ul>
                    <h4>De proceso</h4>
                    <ul>
                        <li>Velocidad de desarrollo</li>
                        <li>Retrabajo o defectos detectados en fases posteriores</li>
                    </ul>
                    <h4>De uso (externas)</h4>
                    <ul>
                        <li>Tiempo de respuesta de la aplicación</li>
                        <li>Tasa de fallos en producción</li>
                        <li>Satisfacción del usuario</li>
                    </ul>

                    <h2>Estándares: ISO/IEC 9126 y 25000</h2>
                    <div className='card-info'>
                        <p>
                            Son marcos de referencia que definen cómo evaluar y medir la calidad del software.
                        </p>
                    </div>
                    <ul>
                        <li><strong>ISO/IEC 9126:</strong> definió 6 características principales (funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad, portabilidad).</li>
                        <li><strong>ISO/IEC 25000 (SQuaRE):</strong> amplía la 9126, incorpora calidad en uso y métricas objetivas.</li>
                    </ul>

                    <h2>Técnicas de Aseguramiento del Software (SQA)</h2>
                    <div className='card-info'>
                        <p>
                            Conjunto de actividades planificadas y sistemáticas para garantizar que el software cumpla con los estándares y requisitos.
                        </p>
                    </div>

                    <h3>Tipos de pruebas</h3>
                    <ul>
                        <li>Funcionales</li>
                        <li>No funcionales</li>
                        <li>Mantenimiento/regresión</li>
                    </ul>

                    <h3>Niveles de pruebas</h3>
                    <ol>
                        <li>Pruebas unitarias</li>
                        <li>Pruebas de integración</li>
                        <li>Pruebas de sistema</li>
                        <li>Pruebas de aceptación (UAT)</li>
                    </ol>

                    <h3>Técnicas de pruebas</h3>
                    <ul>
                        <li>Caja negra</li>
                        <li>Caja blanca</li>
                        <li>Caja gris</li>
                        <li>Exploratorias</li>
                        <li>Automatizadas</li>
                    </ul>

                    <h2>Herramientas de Calidad</h2>
                    <div className='card-info'>
                        <p>
                            Permiten planificar, ejecutar, controlar y mejorar el proceso de desarrollo. Se agrupan en:
                        </p>
                    </div>

                    <h3>Herramientas de gestión de pruebas</h3>
                    <ul>
                        <li>TestRail, Zephyr, Xray, qTest</li>
                        <li>Selenium, Cypress, JUnit, Jest</li>
                    </ul>

                    <h3>Herramientas de seguimiento de defectos</h3>
                    <ul>
                        <li>Jira</li>
                        <li>Bugzilla</li>
                        <li>Redmine</li>
                        <li>MantisBT</li>
                        <li>Trello</li>
                    </ul>

                    <h3>Herramientas de análisis de calidad</h3>
                    <ul>
                        <li>SonarQube, ESLint, PMD, FindBugs</li>
                        <li>JMeter, Gatling, LoadRunner</li>
                        <li>Fortify, OWASP ZAP</li>
                    </ul>

                </div>
            </Glass>
            <Footer />
        </div>
    );
};

export default GCS;
