import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Footer from './../Components/Footer'; 

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, message } = this.state;

    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    this.setState({
      email: '',
      message: ''
    });

    // Define WhatsApp message
    const whatsappMessage = `Email: ${email}%0A${message}`; // WhatsApp message format

    // Generate WhatsApp link
    const whatsappLink = this.generateWhatsAppLink('+4917661090263', whatsappMessage);

    // Open WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');

    // Optional alert
    alert('Daten erfolgreich an Server und WhatsApp gesendet!');
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  generateWhatsAppLink = (phoneNumber, message) => {
    const baseUrl = 'https://api.whatsapp.com/send';
    const encodedMessage = encodeURIComponent(message);
    return `${baseUrl}?phone=${phoneNumber}&text=${encodedMessage}`;
  }

  render() {
    return (
      <div className='contacts_content'>
        <Container style={{ width: '100%' }}>
          <div style={{
            // width: '600px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <h1 className='text-center'>Kontaktieren Sie uns</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>E-Mail-Adresse</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <Form.Text>
                Wir geben Ihre E-Mail-Adresse niemals an Dritte weiter
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Control
                placeholder="Nachricht"
                  as="textarea"
                  rows="3"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Überprüfe mich" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Schicken
              </Button>
            </Form>

            <div style={{ marginTop: '20px' }}>
              <p>Rufen uns an: <a href="tel:+4917661090263">+49 176 61090263</a></p>
              <p>WhatsApp: <Button variant="link" onClick={this.handleSubmit}>Schreiben Sie uns</Button></p>
              <p>Facebook-Gruppe: <a href="https://www.facebook.com/groups/schachinbrb/?ref=share" target="_blank" rel="noopener noreferrer">Schach in Brandenburg</a></p>
            </div>
          </div>

          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.506945941923!2d12.521271474974315!3d52.43373094261523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8c1253d1229c1%3A0xe458b341765b6aaf!2sFriedrich-Grasow-Stra%C3%9Fe%2061A%2C%2014772%20Brandenburg%20an%20der%20Havel!5e0!3m2!1sde!2sde!4v1725389360020!5m2!1sde!2sde" 
            width="100%" 
            height="450" 
            style={{ border: '2px solid black' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps location of Friedrich-Grasow-Straße 61A, Brandenburg an der Havel">
          </iframe>
        </Container>
        <Footer />
      </div>
    );
  }
}
