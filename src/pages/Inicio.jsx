import React from 'react';
import Header from '../components/Header';
import Glass from '../components/Glass';
import Card from '../components/Card';
import Footer from '../components/Footer';
import GC from "../img/GC.jpeg";
import PDesarrollo from "../img/PDesarrollo.png";
import Kanban from "../img/kanban.png";
import Glosario from "../img/Glosario.png";
import Preguntas from "../img/Preguntas.jpeg";
import CA from "../img/CA.jpeg";
import SCRUM from "../img/SCRUM.jpg";

const Inicio = () => {
    return (
    <div>
        <Header />
        <Glass title="SISTEMA DE GESTIÓN DE CALIDAD DE SOFTWARE">
            <p>Esta página trata sobre un conocimiento básico-intermedio sobre la materia Sistema de Gestión de Calidad de Software y algunos de sus temas principales tales como los procesos de desarrollo, metodologías de trabajo, SCRUM, etc.</p>
        </Glass>
        <Glass title="Temas Principales">
            <Card title="G.C.S" content="(Gestión de Calidad de Software) Controla y mejora calidad." url="/GCS" imagen={GC} desc="GCS" />
            <Card title="P. Desarrollo" content="Etapas para crear apps." url="/PDesarrollo" imagen={PDesarrollo} desc="Des"/>
            <Card title="Kanban" content="Metodología ágil para gestionar proyectos." url="/Kanban" imagen={Kanban} desc="kanban"/>
            <Card title="Glosario" content="Filtra de manera mas exacta lo que buscas." url="/Glosario" imagen={Glosario} desc="glosario"/>
            <Card title="SCRUM" content="La cultura sobre como trabajar de manera eficiente." url="/SCRUM" imagen={SCRUM} desc="scrum" />
        </Glass>
        <Glass title="Podría interesarte">
            <Card title="Preguntas Frecuentes" content="Respuestas a las dudas más comunes." url="/Preguntas" imagen={Preguntas} desc="preguntas"/>
            <Card title="Compara y analizá" content="Compará y aprende sobre las diferencias entre las metodologías." url="/ComAnaliza" imagen={CA} desc="CA"/>
        </Glass>
        <Footer />
    </div>
);
}

export default Inicio;
