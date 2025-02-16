import { useState } from 'react';
import emailjs from '@emailjs/browser';  // Importe o EmailJS
import './ContatoMobile.css';
import './Contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const templateParams = {
      to_name: 'Henrique', // Nome do destinatário (opcional)
      from_name: formData.email, // E-mail do remetente
      message: formData.mensagem, // Mensagem do usuário
      reply_to: formData.email, // E-mail para resposta
    };
  
    emailjs.send(
      'service_043biv2',  // Substitua pelo seu Service ID
      'fomulario_portfolio',  // Substitua pelo seu Template ID
      templateParams,
      'q8wFtnDmhQR6zjne6'  // Substitua pelo seu Public Key
    )
    .then(() => {
      alert('Mensagem enviada com sucesso!');
      setFormData({ email: '', assunto: '', mensagem: '' });
    })
    .catch((error) => {
      console.error('Erro ao enviar:', error);
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    });
  };
  

  return (
    <div className='container-contato' id="Contato">
      <div className='container-title-contato'>
        <h1 className="title-contato">CONTATO</h1>
        <p className='text'>
          Entre em contato para discutir projetos ou colaborações. Preencha o formulário abaixo ou me envie uma mensagem no WhatsApp, eu retornarei o mais breve possível.
        </p>
      </div>

      <div className='container-form'>

        <form className='form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>E-mail</label>
            <input
              type='email'
              name='email'
              placeholder='Digite seu e-mail...'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label>Assunto</label>
            <input
              type='text'
              name='assunto'
              placeholder='Digite o assunto...'
              value={formData.assunto}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label>Mensagem</label>
            <textarea
              name='mensagem'
              rows={8}
              placeholder='Escreva sua mensagem...'
              value={formData.mensagem}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type='submit' className='form-button'>Enviar mensagem</button>
        </form>

        <div className='container-map'>
            <iframe
              className='map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.862627869322!2d-46.61565986387413!3d-23.716599212361643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce44167a057615%3A0x67808c128b911c9!2sJardim%20Inamar%2C%20Diadema%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1737253727601!5m2!1spt-BR!2sbr"
              loading="lazy"
            ></iframe>
          <a target='_blank' href="https://wa.me/5511987576861?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20seus%20servi%C3%A7os%20de%20cria%C3%A7%C3%A3o%20de%20sites.%20Gostaria%20de%20saber%20mais%20sobre%20como%20funciona%20e%20os%20valores.">
            <button className='map-button'>Whatsapp</button>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Contato;
