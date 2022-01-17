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
                background: rgba( 0, 0, 0, 0.15 );
                // box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
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
             <img src=${logo}  alt='itsdavidev logo davidev '/>
            </div>
            <div className="navLinks">
                     <ul>
                        <li><a href="#"> Principal </a></li>
                        <li><a href="#">  Sobre mi  </a></li>
                        <li><a href="#"> Tecnologias </a></li>
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