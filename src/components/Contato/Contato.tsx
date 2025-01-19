import './Contato.css'

const Contato = () => {
    return (
      <div className='container-contato' id="Contato">
        <div className='container-title-contato'>
          <h1 className="title-contato">Contato</h1>
          <p className='text'>Entre em contato para discutir projetos ou colaborações. Preencha o formulário abaixo e eu retornarei o mais breve possível. Estou ansioso para conectar com você!</p>
        </div>

        <div className='container-form'>
          <div className='container-map'>
            <a target='blank_' href="https://wa.me/5511987576861?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20seus%20servi%C3%A7os%20de%20cria%C3%A7%C3%A3o%20de%20sites.%20Gostaria%20de%20saber%20mais%20sobre%20como%20funciona%20e%20os%20valores."><button className='map-button'>Telefone</button></a>
            <div className='map'>

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