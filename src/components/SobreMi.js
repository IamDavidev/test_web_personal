import lit from '../assets/header/itsdavidev.svg'

class SobreMi extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        .sobremi{
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .containerSobreMi{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }
        .imgMi > img {
            width: 200px;
            border-radius: 1rem;
            border: 1px solid #000;
            padding:.3rem;
        }
        .descriptionMe{
            border: 1px solid #000;
            border-radius:1rem;
        }
        .descriptionMe > p{
            padding:0;
            margin:0;

        }
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${SobreMi.styles}</style>
 <div class='sobremi'>
     <div class='containerSobreMi'>
            <div class='imgMi' >
                <img src=${lit}   alt='itsdavidev davidev davidlezama david'/>
            </div> 
            <div class='descriptionMe'>
                <h3>David Lezama</h3>
                <p>Soy un un desarollador y programador autodidacta</p><p> apasionado por la tecnología.</p>
                <p>Me gusta aprender nuevas tecnologias y</p>
                <p> aprender de los demas</p>
            </div>
                 </div>
        <slot></slot>
</div>
    `;
    }
}
customElements.define('sobre-mi', SobreMi);