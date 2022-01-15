import imageMe from '../assets/ImageMe.jpeg'
import fondoWeb from '../assets/fondoWeb.webp'


class main extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
}

static get styles(){
    return /*css*/`
    .containerImageMe{
        height: 70vh;
        position: relative;
        z-index:20;
    }
    .fondo{
        height: 25rem;
        background-image: url(${fondoWeb});
        background-size: cover;
        }
        .fondo img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .containerMe{
            background:#1D2D50;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }
    .imageMe{;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
    .imageMe  img{
        object-fit:cover;
        width: 15rem;
        position:relative;
        border-radius: 50%;
        top: -100px;
    }
    `;
}

connectedCallback(){
     this.render();
}
render(){
    this.shadowRoot.innerHTML =/*html*/`
        <style>${main.styles}</style>
 <div class="containerImageMe">
        <div class='fondo'></div>
        <div class='containerMe'>
        <picture class='imageMe'>
        <img src=${imageMe} alt=""/>
        </picture>
        itsDavidev 
        </div>
        <slot></slot>
</div>
    `;
}
}
customElements.define('main-ui',main);