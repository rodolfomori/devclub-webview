import './styles.css'
import './responsividade.css'

import NewLogo from './assets/logo-nova.png'
import Aula1 from './assets/aula-1.webp'
import Aula2 from './assets/aula-2.webp'
import Aula3 from './assets/aula-3.webp'
import Aula4 from './assets/aula-4.webp'
import Youtube from './assets/youtube.svg'
import Insta from './assets/logo-insta.png'
import Calendario from './assets/calendario.svg'
import Whats from './assets/whatsapp.svg'
import Sino from './assets/sino.svg'

export function Launch() {
  return (
    <div>
      <main className="container-1">
        <img
          src={NewLogo}
          alt="Logo missao do zero"
          className="logo-missao-zero"
        />
      </main>
      <main className="container-2">
        <div className="card-container-2">
          <img src={Aula1} alt="baner aula 01" className="baner" />
          <div className="content-card-2">
            <div className="content-1">
              <p>AULA 1</p>

              <span>
                {' '}
                <img src={Calendario} alt="icone de calendario" /> TERÇA 14/03
                às 19h00
              </span>
            </div>
            <p className="text-start">
              <strong>START:</strong> O Oceano de Oportunidades na Programação
            </p>
            <div className="content-2">
              {/* <a
                href="https://swiy.co/EP1-MVP"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img src={Sino} alt="icone sino" /> DEFINIR LEMBRETE
                </button>
              </a> */}
              {/* <p>Aperte para ser notificado quando a aula começar!</p> */}
              <a href="https://swiy.co/EP1-MVP" target="_blank" rel="noreferrer">
                        <button className="button"><img src={Youtube} alt="icone sino" /> ASSISTIR A AULA</button>
                    </a>

              <a href="https://rodolfo-mori-material.s3.amazonaws.com/MapaMissa%CC%83oProgramador-%5BMarc%CC%A7o%5D-parte+2.pdf" className="pdf">PDF da AULA</a>
            </div>
          </div>
        </div>
        <div className="card-container-2">
          <img src={Aula2} alt="baner aula 02" className="baner" />
          <div className="content-card-2">
            <div className="content-1">
              <p>AULA 2</p>

              <span>
                <img src={Calendario} alt="icone de calendario" /> QUARTA 15/03
                às 19h00
              </span>
            </div>
            <p className="text-start">
              <strong>Mão na massa:</strong> a segunda tecnologia na missão do
              Programador
            </p>
            <div className="content-2">
              <a
                href="https://swiy.co/MVP-EP2"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img src={Sino} alt="icone sino" /> DEFINIR LEMBRETE
                </button>
              </a>
              <p>Aperte para ser notificado quando a aula começar!</p>
              {/* <a href="https://youtube.com/live/oW0mPMNlBHs" target="_blank" rel="noreferrer">
                        <button className="button"><img src={Youtube} alt="icone sino" /> ASSISTIR A AULA</button>
                    </a> */}
              {/* <a href="https://drive.google.com/file/d/18rFKEDhB-N45lQ8jVdGQnt8NueXTf4dX/view?usp=sharing" className="pdf">PDF da AULA</a> */}
            </div>
          </div>
        </div>
        <div className="card-container-2">
          <img src={Aula3} alt="baner aula 03" className="baner" />
          <div className="content-card-2">
            <div className="content-1">
              <p>AULA 3</p>
              <span>
                <img src={Calendario} alt="icone de calendario" />
                QUINTA 16/03 às 19h00
              </span>
            </div>
            <p className="text-start">
              <strong>NA PRÁTICA:</strong> Aprenda sua Primeira Linguagem de
              Programação
            </p>
            <div className="content-2">
              <a
                href="https://swiy.co/MVP-EP3"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img src={Sino} alt="icone sino" /> DEFINIR LEMBRETE
                </button>
              </a>
              <p>Aperte para ser notificado quando a aula começar!</p>{' '}
              {/* <a href="https://youtube.com/live/rM2pnvDuxjY" target="_blank" rel="noreferrer">
                        <button className="button"><img src={Youtube} alt="icone sino" /> ASSISTIR A AULA</button>
                    </a> */}
              {/* <a href="https://drive.google.com/file/d/1anm5ZYsw4FHWbtTrNgMNYz11c6V6mw4j/view?usp=sharing" className="pdf">PDF da AULA</a> */}
            </div>
          </div>
        </div>
        <div className="card-container-2">
          <img src={Aula4} alt="baner aula 04" className="baner" />
          <div className="content-card-2">
            <div className="content-1">
              <p>AULA 4</p>
              <span>
                <img src={Calendario} alt="icone de calendario" /> DOMINGO 19/03
                às 19h00
              </span>
            </div>
            <p className="text-start">
              <strong>Passo a Passo:</strong>Como conseguir o seu Primeiro
              Emprego Como Programador em até 6 meses.
            </p>
            <div className="content-2">
              <a
                href="https://swiy.co/MVP-EP4"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img src={Sino} alt="icone sino" /> DEFINIR LEMBRETE
                </button>
              </a>
              <p>Aperte para ser notificado quando a aula começar!</p>
            </div>
          </div>
        </div>
      </main>
      <main className="container-4">
        <div className="div-icones-2">
          <img src={Whats} alt="icone do whatsapp" />
          <div className="icones-2-textos">
            <p>Entre no Grupo de Avisos no Whatsapp</p>
            <p>
              O Grupo é silencioso e somente a nossa equipe poderá enviar
              mensagens. Por lá você receberá direto no seu celular o link das
              aulas e também os materiais complementares. .
            </p>
          </div>
        </div>
        <div>
          <a href="https://rodolfomori.com.br/grupovip">
            <button className="button">
              <img src={Calendario} alt="icone calendario" /> QUERO ENTRAR NO
              GRUPO VIP
            </button>
          </a>
        </div>
      </main>
      <main className="container-5">
        <div className="div-redes-sociais">
          <p>
            Siga seu professor nas redes sociais e fique por dentro das
            novidades!
          </p>
          <div className="div-img-redes-sociais">
            <a href="https://www.instagram.com/rodolfomorii/">
              <img src={Insta} alt="logo do instagram" />
            </a>
            <a href="https://www.youtube.com/@RodolfoMori?sub_confirmation=1">
              <img src={Youtube} alt="logo do youtube" style={{ width: 50 }} />
            </a>
          </div>
        </div>
      </main>
      <footer>
        <div className="div-footer">
          <p>Rodolfo Mori | Copyright 2023</p>
        </div>
      </footer>
    </div>
  )
}
