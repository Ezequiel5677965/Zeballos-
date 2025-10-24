import React from 'react';
import Header from '../components/Header';
import Glass from '../components/Glass';
import Footer from '../components/Footer';
import '../css/Sections.css';

const KANBAN = () => {
    return (
        <div>
            <Header />
            <Glass title="Kanban Metodología">
                <div className="content">

                    <h2>¿Qué es Kanban?</h2>
                    <div className="card-info">
                        <p>
                            Kanban es una herramienta visual de gestión de procesos que permite organizar, controlar y mejorar el flujo de trabajo de un equipo o proyecto.
                            El término “Kanban” proviene del japonés y significa literalmente “tarjeta visual” o “señal visual”.
                            Fue creado por Taiichi Ohno en Toyota durante la década de 1940, como parte del Sistema de Producción Toyota (TPS), con el objetivo de optimizar la producción y eliminar desperdicios.
                            Hoy Kanban se aplica no solo en fábricas, sino también en software, servicios, marketing, educación y administración, ya que ayuda a visualizar el trabajo, limitar el trabajo en curso y mejorar continuamente los procesos.
                        </p>
                    </div>

                    <h2>Kanban como herramienta de gestión de procesos</h2>
                    <div className="card-info">
                        <p>
                            Kanban no es solo un tablero con tarjetas: es una metodología de control de flujo de trabajo basada en la visualización y la mejora continua.
                            Su propósito es lograr que el proceso sea eficiente, predecible y transparente, identificando cuellos de botella y mejorando la productividad sin sobrecargar al equipo.
                        </p>
                    </div>

                    <h2>Elementos básicos del sistema Kanban</h2>
                    <ol>
                        <li>
                            <h3>Tablero Kanban (Kanban Board)</h3>
                            <div className="card-info">
                                <p>
                                    Es la representación visual del proceso de trabajo, dividido en columnas que representan las etapas del flujo.
                                </p>
                                <div className="card-example">
                                    <p><strong>Ejemplo de columnas:</strong> Pendiente | En Progreso | En Revisión | Terminado</p>
                                </div>
                                <p>Su objetivo es visualizar el flujo de trabajo y detectar fácilmente en qué punto se acumulan los problemas o retrasos.</p>
                            </div>
                        </li>

                        <li>
                            <h3>Tarjetas Kanban (Kanban Cards)</h3>
                            <div className="card-info">
                                <p>
                                    Cada tarjeta representa una tarea o ítem de trabajo (por ejemplo, una historia de usuario, una corrección, un pedido, etc.).
                                    En cada tarjeta suele incluirse:
                                </p>
                                <ul>
                                    <li>Título o descripción de la tarea.</li>
                                    <li>Responsable.</li>
                                    <li>Fecha límite o prioridad.</li>
                                    <li>Estado o notas.</li>
                                </ul>
                                <p>Las tarjetas se mueven entre columnas a medida que la tarea avanza, mostrando el progreso en tiempo real.</p>
                            </div>
                        </li>

                        <li>
                            <h3>Límites de Trabajo en Curso (WIP Limits – Work In Progress)</h3>
                            <div className="card-info">
                                <p>
                                    Kanban establece límites máximos de tareas que pueden estar simultáneamente en una misma columna.
                                </p>
                                <div className="card-example">
                                    <p><strong>Ejemplo:</strong> “En progreso” → máximo 3 tareas.</p>
                                </div>
                                <p>
                                    Esto evita la sobrecarga y promueve la finalización antes de comenzar algo nuevo.
                                    El objetivo es mantener un flujo constante, sin bloqueos ni acumulaciones.
                                </p>
                            </div>
                        </li>

                        <li>
                            <h3>Flujo de trabajo (Workflow)</h3>
                            <div className="card-info">
                                <p>
                                    Representa el camino que sigue una tarea desde que se inicia hasta que se completa.
                                    Kanban busca que este flujo sea:
                                </p>
                                <ul>
                                    <li>Continuo (sin pausas innecesarias).</li>
                                    <li>Predecible (se sabe cuánto tarda cada etapa).</li>
                                    <li>Optimizado (sin desperdicio de tiempo ni esfuerzo).</li>
                                </ul>
                                <p>
                                    Se analiza el flujo con métricas como el <strong>lead time</strong> (tiempo total desde que se inicia una tarea hasta que se completa).
                                </p>
                            </div>
                        </li>
                    </ol>

                    <h2>Principios fundamentales de Kanban</h2>
                    <ol>
                        <li>
                            <h3>Comenzar con lo que ya se hace</h3>
                            <p>No obliga a cambiar los procesos actuales de golpe; se implementa sobre el flujo de trabajo existente.</p>
                        </li>
                        <li>
                            <h3>Buscar mejoras evolutivas</h3>
                            <p>Promueve mejoras graduales y constantes, no transformaciones bruscas.</p>
                        </li>
                        <li>
                            <h3>Respetar los roles, responsabilidades y procesos actuales</h3>
                            <p>Se adapta al contexto del equipo sin redefinir roles (a diferencia de Scrum).</p>
                        </li>
                        <li>
                            <h3>Fomentar el liderazgo en todos los niveles</h3>
                            <p>Todos los miembros pueden proponer mejoras; el liderazgo es compartido y colaborativo.</p>
                        </li>
                    </ol>

                    <h2>Prácticas claves de Kanban</h2>
                    <ol>
                        <li> Visualizar el flujo de trabajo — Mostrar tareas y su estado en un tablero visible.</li>
                        <li> Limitar el trabajo en curso (WIP) — Evitar multitareas y sobrecarga.</li>
                        <li> Gestionar el flujo — Observar y optimizar cómo avanza el trabajo entre columnas.</li>
                        <li> Hacer explícitas las políticas del proceso — Definir reglas claras de transición entre etapas.</li>
                        <li> Implementar ciclos de retroalimentación — Reuniones periódicas para analizar métricas y mejoras.</li>
                        <li> Mejorar colaborativamente — Basar las mejoras en datos y observación.</li>
                    </ol>

                    <h2>Métricas y control del proceso</h2>
                    <div className="card-info">
                        <p>Kanban utiliza indicadores visuales y métricas para evaluar el rendimiento del proceso:</p>
                        <ul>
                            <li><strong>Lead Time:</strong> tiempo total desde el inicio hasta la finalización de una tarea.</li>
                            <li><strong>Cycle Time:</strong> tiempo efectivo de trabajo en una tarea.</li>
                            <li><strong>Throughput:</strong> cantidad de tareas completadas en un período.</li>
                            <li><strong>Cumulative Flow Diagram (CFD):</strong> gráfico que muestra estabilidad y cuellos de botella.</li>
                        </ul>
                        <p>Estas métricas ayudan a predecir plazos, detectar retrasos y mejorar la eficiencia.</p>
                    </div>

                    <h2>Kanban en la práctica</h2>
                    <div className="card-info">
                        <p>Ejemplo de tablero de un equipo de desarrollo:</p>
                        <ul>
                            <li>Por hacer</li>
                            <li>En progreso</li>
                            <li>En pruebas</li>
                            <li>Hecho</li>
                        </ul>
                        <p>
                            Cada tarjeta representa una tarea.
                            El límite WIP en “En progreso” es de 3 tareas; si ya hay tres, no se inicia una nueva hasta terminar alguna.
                            Cada día, el equipo revisa el tablero para ajustar prioridades y detectar bloqueos.
                        </p>
                    </div>

                </div>
            </Glass>
            <Footer />
        </div>
    );
};

export default KANBAN;