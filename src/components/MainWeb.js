import imageMe from '../assets//header/ImageMe.jpeg'
import fondoWeb from '../assets/header/mariola-grobelska-h6XihPOkSIY-unsplash.jpg'


class main extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
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
        background-position: center;
        object-fit:cover;
        width: 100%;
        z-index: -1;
        }
        .fondo img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: relative
        }
        .containerMe{
            height:100px;
            background:#000;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }
        .containerMe picture {
            height:100px;
            margin:0;
            padding:0;
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

    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${main.styles}</style>
    <div class="containerImageMe">
        <div class='fondo'></div>
        <div class='containerMe'>
            <picture class='imageMe'>
                <img src=${imageMe} alt=""/>
            </picture>
        </div>
        <slot></slot>
    </div>
    `;
    }
}
customElements.define('main-ui', main);