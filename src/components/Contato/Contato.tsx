import './Contato.css'

const Contato = () => {
    return (
      <div className='container-contato' id="Contato">
        <div className='container-title-contato'>
          <h1 className="title-contato">Contato</h1>
          <p className='text'>Entre em contato para discutir projetos ou colaborações. Preencha o formulário abaixo ou me envie uma mensagem no whatsapp eu retornarei o mais breve possível. Estou ansioso para conectar com você!</p>
        </div>

        <div className='container-form'>
          <div className='container-map'>
            <a target='blank_' href="https://wa.me/5511987576861?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20seus%20servi%C3%A7os%20de%20cria%C3%A7%C3%A3o%20de%20sites.%20Gostaria%20de%20saber%20mais%20sobre%20como%20funciona%20e%20os%20valores."><button className='map-button'>Contato</button></a>
            <div>
              <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.862627869322!2d-46.61565986387413!3d-23.716599212361643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce44167a057615%3A0x67808c128b911c9!2sJardim%20Inamar%2C%20Diadema%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1737253727601!5m2!1spt-BR!2sbr" loading="lazy">
            </iframe>
            </div>
          </div>

          <div className='form'>
            <div className='form-group'>
              <label>E-mail</label>
              <input type='email' placeholder='Digite seu e-mail...' />
            </div>

            <div className='form-group'>
              <label>Assunto</label>
              <input type='text' placeholder='Digite o assunto...' />
            </div>

            <div className='form-group'>
              <label>Mensagem</label>
              <textarea rows={8} placeholder='Escreva sua mensagem...'></textarea>
            </div>

            <button className='form-button'>Enviar mensagem</button>
          </div>
        </div>
      
      </div>
    )
}

export default Contato;