import React from 'react';
import Header from '../components/Header';
import Glass from '../components/Glass';
import Footer from '../components/Footer';


const About = () => {
    return (
        <div>
            <Header />
            <Glass title= "Sobre Nosotros">
                <div className='content'>
                            <h2>SCRUM Master — Ezequiel Salazar</h2>
                            <p>Ezequiel se destaca por su capacidad de liderazgo, organización y comunicación dentro del equipo. Posee un fuerte sentido de la coordinación y sabe definir tareas clave en los momentos adecuados. Su habilidad para trabajar en grupo y dirigir con empatía garantiza un entorno de trabajo colaborativo y productivo.</p>
                            <h2>Programador — Joaquín Carrasco</h2>
                            <p>Joaquín asume el rol de programador gracias a su capacidad analítica y técnica. Cuenta con las competencias necesarias para desarrollar las tareas planteadas, así como para resolver problemas de forma creativa y eficiente. Su enfoque está en asegurar que el código sea funcional, limpio y escalable.</p>
                            <h2>Diseñador / Tester — Juan Ferreyra</h2>
                            <p>Juan combina creatividad y precisión en su rol dual. Su talento para el dibujo y la ilustración fortalece el diseño visual del proyecto, mientras que su curiosidad e interés por explorar en profundidad las funcionalidades de las páginas lo convierten en un tester detallista y meticuloso.</p>
                            <h2>Documentación — Iván Moreno</h2>
                            <p>Juan combina creatividad y precisión en su rol dual. Su talento para el dibujo y la ilustración fortalece el diseño visual del proyecto, mientras que su curiosidad e interés por explorar en profundidad las funcionalidades de las páginas lo convierten en un tester detallista y meticuloso.</p>
                            <h2>Marketing — Sofía Araya</h2>
                            <p>Sofía lidera la comunicación y difusión del proyecto. Tiene experiencia en el manejo de redes sociales y estrategias de promoción digital, lo que le permite transmitir el valor del producto de forma efectiva. Su creatividad y empatía con el público fortalecen la presencia del equipo en diferentes medios.</p>
                </div>
            </Glass>
            <Footer />
        </div>
    );
};

export default About;