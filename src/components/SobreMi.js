import Me from '/assets/Me.jpeg'

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
            padding:.3rem;
            margin: 1rem; 
        }
        .descriptionMe{
            border-radius:1rem;
            border-left:0;
        }
        .descriptionMe > h3{
            color: #3b004c
        }

        .descriptionMe > p{
            padding:0;
            margin:0;
            color:#000;
            font-weight:bold;
        }
        .socialsMe{
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
        }

        #btncv{
            background-color: #3b004c;
            color: #000;
            padding: .5rem;
            border-radius: 1rem;
            border: none;
            margin: .5rem;
        }
        #btncv > a{
            color: #fff;
            text-decoration:none;
            
        }
        @media(min-width:300px)and (max-width:1024px){
            .containerSobreMi{
                display:flex;
                flex-direction:column;
            }
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
                <img src=${Me}   alt='itsdavidev davidev davidlezama david'/>
            </div> 
            <div class='descriptionMe'>
                <h3>ItsDavidev </h3>
                <p>Soy un un desarollador y programador autodidacta</p>
                <p> apasionado por la tecnología.</p>
                <p>Me gusta aprender nuevas tecnologias y</p>
                <p> aprender de los demas.</p>
                <button id='btncv' >
                    <a href='/cv.pdf' target='_blank'>Descargar CV</a>
                </button>
                <div class='socialsMe'>
                <social-ui name='github'></social-ui>
                <social-ui name='likedin'></social-ui>
                </div>
            </div>
                 </div>
        <slot></slot>
</div>
    `;
    }
}
customElements.define('sobre-mi', SobreMi);