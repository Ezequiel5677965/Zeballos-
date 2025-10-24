import React from 'react';
import Header from '../components/Header';
import Glass from '../components/Glass';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Inicio = () => {
    return (
    <div>
        <Header />
        <Glass title="SISTEMA DE GESTIÓN DE CALIDAD DE SOFTWARE">
            <p>Esta página trata sobre un conocimiento básico-intermedio sobre la materia Sistema de Gestión de Calidad de Software y algunos de sus temas principales tales como los procesos de desarrollo, metodologías de trabajo, SCRUM, etc.</p>
        </Glass>
        <Glass title="Temas Principales">
            <Card title="G.C.S" content="(Gestión de Calidad de Software) Controla y mejora calidad." url="/GCS" />
            <Card title="P. Desarrollo" content="Etapas para crear apps." url="/PDesarrollo" />
            <Card title="SCRUM" content="La cultura sobre como trabajar de manera eficiente." url="/SCRUM" />
            <Card title="Kanban" content="Metodología ágil para gestionar proyectos." url="/Kanban" />
            <Card title="Glosario" content="Filtra de manera mas exacta lo que buscas." url="/Glosario" />
        </Glass>
        <Glass title="Podría interesarte">
            <Card title="Preguntas Frecuentes" content="Respuestas a las dudas más comunes." url="/Preguntas" />
            <Card title="Compara y analizá " content="Compará y aprende sobre las diferencias entre las metodologías." url="/ComAnaliza" />
        </Glass>
        <Footer />
    </div>
);
}

export default Inicio;
