import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {

    return (

        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/26754364?s=460&u=79da8d0e79b828b6ec428689a2ea20c11fd372a5&v=4" alt="Saymon Macedo"/>
                        <div>
                            <strong>Saymon Macedo</strong>
                            <span>Design UI | UX</span>
                        </div>
                    </header>
                    <p>
                        Aprimorando conhecimentos em Design UI | UX.
                        <br /><br />
                        Conhecendo tecnologias de desenvolvimento NodeJS | ReactJS.
                        O JavaScript está a cada dia ganhando mais espaço no mercado, por esse motivo,
                        decidi focar em uma única stack para construir conhecimento e alavancar
                        minha carreira como dev.
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 75,90</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>

                </article>
    );
}
export default TeacherItem;