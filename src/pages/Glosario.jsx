import React from "react";
import "../css/Glosario.css";
import Glass from "../components/Glass";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Glosario = () => {
    return (
    <div>
        <Header />
        <Glass title="Glosario">
            <div className="glosario-container">
            <section>
                <h2>1. Conceptos Fundamentales</h2>
                <ul>
                    <li><strong>Software:</strong> Conjunto de programas, datos y documentación que permiten realizar tareas específicas en un sistema informático.</li>
                    <li><strong>Desarrollo de Software:</strong> Proceso de diseño, creación, prueba e implementación de aplicaciones o sistemas informáticos.</li>
                    <li><strong>Ciclo de Vida del Software (SDLC):</strong> Etapas del software desde su concepción hasta su retiro: análisis, diseño, desarrollo, pruebas, implementación y mantenimiento.</li>
                    <li><strong>Requisito:</strong> Condición o capacidad que un sistema debe cumplir. Puede ser funcional o no funcional.</li>
                    <li><strong>Especificación:</strong> Documento que describe con precisión los requisitos y funcionalidades de un sistema.</li>
                </ul>
            </section>

            <section>
                <h2>2. Metodologías y Marcos de Trabajo</h2>
                <ul>
                    <li><strong>Metodología Ágil:</strong> Enfoque basado en iteraciones cortas, colaboración y adaptación al cambio.</li>
                    <li><strong>Scrum:</strong> Marco ágil con sprints y roles definidos (Product Owner, Scrum Master, Development Team).</li>
                    <li><strong>Kanban:</strong> Método visual que optimiza la eficiencia y limita el trabajo en curso (WIP).</li>
                    <li><strong>Waterfall (Cascada):</strong> Modelo secuencial donde cada fase se completa antes de la siguiente.</li>
                    <li><strong>Extreme Programming (XP):</strong> Metodología ágil que enfatiza la programación en parejas y la calidad del código.</li>
                </ul>
            </section>

            <section>
                <h2>3. Calidad del Software</h2>
                <ul>
                    <li><strong>Calidad del Software:</strong> Grado en que un producto cumple los requisitos y expectativas del cliente.</li>
                    <li><strong>Aseguramiento de la Calidad (QA):</strong> Actividades planificadas para garantizar procesos de calidad.</li>
                    <li><strong>Control de Calidad (QC):</strong> Actividades de verificación y validación del producto.</li>
                    <li><strong>Prueba de Software (Testing):</strong> Ejecución controlada del software para encontrar errores.</li>
                    <li><strong>Defecto (Bug):</strong> Error o fallo en el código que produce un comportamiento incorrecto.</li>
                    <li><strong>Error:</strong> Equivocación humana que causa un defecto en el software.</li>
                    <li><strong>Falla:</strong> Manifestación visible de un defecto durante la ejecución.</li>
                    <li><strong>Verificación:</strong> Comprobar si el producto se está construyendo correctamente.</li>
                    <li><strong>Validación:</strong> Comprobar si se construyó el producto correcto.</li>
                </ul>
            </section>

            <section>
                <h2>4. Tipos de Pruebas de Software</h2>
                <ul>
                    <li><strong>Prueba Unitaria:</strong> Evalúa componentes individuales del código.</li>
                    <li><strong>Prueba de Integración:</strong> Verifica la interacción entre componentes.</li>
                    <li><strong>Prueba de Sistema:</strong> Evalúa el sistema completo.</li>
                    <li><strong>Prueba de Aceptación:</strong> Validación final por parte del cliente.</li>
                    <li><strong>Prueba de Regresión:</strong> Asegura que los cambios no introduzcan nuevos errores.</li>
                    <li><strong>Prueba de Rendimiento:</strong> Evalúa velocidad y estabilidad bajo carga.</li>
                    <li><strong>Prueba de Usabilidad:</strong> Mide la facilidad de uso y experiencia del usuario.</li>
                </ul>
            </section>

            <section>
                <h2>5. Gestión y Mantenimiento</h2>
                <ul>
                    <li><strong>Gestión de Configuración:</strong> Control de versiones y cambios en el software.</li>
                    <li><strong>Control de Versiones:</strong> Registro de cambios en el código fuente (Git, SVN).</li>
                    <li><strong>Repositorio:</strong> Lugar donde se almacena el código del proyecto.</li>
                    <li><strong>Mantenimiento de Software:</strong> Modificación posterior para corregir o mejorar.</li>
                    <li><strong>Refactorización:</strong> Reestructuración del código sin alterar su comportamiento externo.</li>
                </ul>
            </section>

            <section>
                <h2>6. Procesos y Documentación</h2>
                <ul>
                    <li><strong>Caso de Uso:</strong> Describe cómo un usuario interactúa con el sistema.</li>
                    <li><strong>Historia de Usuario:</strong> Requisito ágil: “Como [rol], quiero [acción], para [beneficio].”</li>
                    <li><strong>Backlog:</strong> Lista priorizada de tareas o requisitos pendientes.</li>
                    <li><strong>Sprint:</strong> Iteración de tiempo fija de desarrollo.</li>
                    <li><strong>Incremento:</strong> Resultado funcional entregable al final del sprint.</li>
                    <li><strong>Retrospectiva:</strong> Reunión para analizar mejoras del proceso.</li>
                </ul>
            </section>

            <section>
                <h2>7. Modelos y Normas de Calidad</h2>
                <ul>
                    <li><strong>ISO 9001:</strong> Norma internacional para la gestión de la calidad.</li>
                    <li><strong>ISO/IEC 25010:</strong> Define las características de calidad del software.</li>
                    <li><strong>CMMI:</strong> Modelo que mide la madurez de los procesos de desarrollo.</li>
                    <li><strong>ITIL:</strong> Buenas prácticas para la gestión de servicios de TI.</li>
                </ul>
            </section>

            <section>
                <h2>8. Métricas y Evaluación</h2>
                <ul>
                    <li><strong>Métrica de Software:</strong> Medida cuantitativa del desarrollo o la calidad.</li>
                    <li><strong>Productividad:</strong> Cantidad de trabajo completado en un período.</li>
                    <li><strong>Eficiencia:</strong> Uso óptimo de recursos para lograr resultados.</li>
                    <li><strong>Eficacia:</strong> Grado en que se logran los objetivos planteados.</li>
                    <li><strong>Tasa de Defectos:</strong> Número de errores detectados por unidad de tiempo.</li>
                </ul>
            </section>

            <section>
                <h2>9. Conceptos Técnicos Relacionados</h2>
                <ul>
                    <li><strong>Integración Continua (CI):</strong> Combinación frecuente del trabajo de los desarrolladores.</li>
                    <li><strong>Entrega Continua (CD):</strong> Despliegue frecuente y confiable de versiones.</li>
                    <li><strong>Pipeline de DevOps:</strong> Secuencia automatizada de pasos para entregar software.</li>
                    <li><strong>Repositorio Git:</strong> Sistema distribuido de control de versiones.</li>
                    <li><strong>Branch (Rama):</strong> Versión paralela del código para nuevas funciones.</li>
                </ul>
            </section>

            <section>
                <h2>10. Otros Términos Relevantes</h2>
                <ul>
                    <li><strong>Stakeholder:</strong> Persona o grupo con interés en el proyecto.</li>
                    <li><strong>Benchmarking:</strong> Comparación de desempeño con estándares o competidores.</li>
                    <li><strong>Deploy (Despliegue):</strong> Poner en funcionamiento una nueva versión.</li>
                    <li><strong>Rollback:</strong> Reversión a una versión anterior por errores.</li>
                    <li><strong>Mockup / Prototipo:</strong> Representación visual o funcional preliminar.</li>
                </ul>
            </section>
            </div>
        </Glass>
        <Footer />
    </div>
    );
}

export default Glosario;