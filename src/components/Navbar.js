import logo from '../assets/itsdavidev.svg'
import menuModal from '../assets/menu.png'
import xModal from '../assets/x.png'


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
             .cerrarModal{
                 display:none;
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
                background: rgba( 0, 0, 0, 0.7 );
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
            
            @media (min-width:300px)and (max-width:1024px){
                .movileV{
                    display:flex;
                    flex-direction:column;
                }
                .navbarContainer{
                    display:flex;
                    align-items:flex-start;
                    position: fixed;
                    top:0;
                    left:0;
                    z-index:5;
                }
                nav{
                    width:50vw;
                    margin:0px;
                    border-radius:10px;
                    transition:all .5s;
                }
                .movileNav{
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;
                    align-items: center;
                }
                ul{
                    display:flex;
                    flex-direction:column;
                }
                li{
                    margin: 1rem 0;
                }
                button{
                    background: transparent;
                    border:none;
                }
                .cerrarModal{
                    display: flex;
                    position:absolute;
                    bottom:10px;
                    right:10px;
                    cursor: pointer;
                }
                .navMovile{
                    display:none;
                }
                .btnModal{
                    position:initial
                }
                .btn{
                    width:30px;
                }
            }
    `;
    }

    cerarModal() {
        const $btnModal = this.shadowRoot.querySelector('#xModal');
        const $navbarMovile = this.shadowRoot.querySelector('#navbarMovile');
        const $linkMovile = this.shadowRoot.querySelector('#linkMovile');
        const $logoMovile = this.shadowRoot.querySelector('#logoMovile');
        const $btnModalX = this.shadowRoot.querySelector('#btnModal');
        $btnModal.addEventListener('click',()=> {
                $navbarMovile.classList.toggle('movileNav');
                $logoMovile.classList.toggle('navMovile');
                $linkMovile.classList.toggle('navMovile');
                $btnModal.classList.toggle('btnModal')
        })
    }

    connectedCallback() {
        this.render();
        this.cerarModal()
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${Nabar.styles}</style>
 <div>
     <div id='containerNavbarMovile' class="navbarContainer">
     <nav id='navbarMovile' class="movileNav">
        <div id='xModal' class='cerrarModal '>
            <button id='btnModal' > 
                <img class='btn' src=${menuModal} alt="menu"/>
            </button>
        </div >
            <div id='logoMovile' className="logo">
                <a href='#header'>
                    <img src=${logo}  alt='itsdavidev logo davidev '/>
                </a>
            </div>
            <div  id='linkMovile'  className="navLinks ">
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