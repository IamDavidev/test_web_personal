import logo from '../assets/itsdavidev.svg'

class Nabar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
             .navbarContainer{
                display:flex;
                align-items:center;
                flex-direction:column;
             }
            img{
                width: 50px;
            }
            nav{
                display:flex;
                justify-content: space-around;
                align-items: center;
                margin: 1rem 5rem;
                border-radius:2rem;
                color:#0fff;
                background: rgba( 0, 0, 0, 0.8 );
                backdrop-filter: blur( 0px );
                -webkit-backdrop-filter: blur( 0px );
                border: 1px solid rgba( 255, 255, 255, 0.18 );
                padding:.3rem;
                position:fixed;
                overflow:hidden;
                padding: 0.1rem 3rem ;
                z-index:10;
            }
            ul{
                list-style:none;
                display:flex;
                justify-content: space-around;
                align-items: center;
            }
            li{
                margin: 0 1rem;
                text-decoration:none;
            }
            a{
                text-decoration:none;
                color:#0ff;
                font-weight:bold;
            }
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${Nabar.styles}</style>
 <div>
     <div class="navbarContainer">
        <nav>
            <div  className="logo">
                <a href='#header'>
                    <img src=${logo}  alt='itsdavidev logo davidev '/>
                </a>
            </div>
            <div className="navLinks">
                     <ul>
                        <li>
                            <a href="#sobreMi"> Sobre Mi </a>
                        </li>
                        <li>
                            <a href="#tecnologias">  Tecnologias </a>
                        </li>
                        <li>
                            <a href="#proyectos"> Proyectos </a>
                        </li>
                     </ul>
            </div>
        </nav>
     
     </div>
        <slot></slot>
</div>
    `;
    }
}
customElements.define('navbar-ui', Nabar);