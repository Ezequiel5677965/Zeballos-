import Header from '../components/Header';
import Glass from '../components/Glass';
import Footer from '../components/Footer';


const Contact = () => {
    return (
       <div>
            <Header />
            <Glass title="Contactos">
                <div className="content">

                    <h2>¿Tenés dudas? Hablemos</h2>
                    
                    <div className="card-tip">
                        <p>
Estamos para ayudarte. Completá el formulario o elegí el medio que prefieras para comunicarte con nosotros. Te responderemos lo antes posible.                        </p>
                    </div>

                    <h2>Formulario</h2>
                    
                    <form className="contact-form">
                                <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id="name" name="name" required />
                                </div>
                                <div className="form-group">
                                <label htmlFor="email">Correo electrónico</label>
                                <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                <label htmlFor="phone">Teléfono</label>
                                <input type="tel" id="phone" name="phone" />
                                </div>
                                <div className="form-group">
                                <label htmlFor="message">Mensaje</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                                </div>
                                <button type="submit">Enviar</button>
                    </form>

                    <div className="contact-info">
                    <p>📧 Correo: <a href="mailto:contacto@tusitio.com">contacto@tusitio.com</a></p>
                    <p>☎️ Teléfono: <a href="tel:+54299XXXXXXX">+54 299 xxx xxxx</a></p>
                    </div>

                </div>
            </Glass>
            <Footer />
        </div>



    );
};
export default Contact;