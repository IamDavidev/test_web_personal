class MoreMe extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
       .moreMe{
           display:flex;
           justify-content:center;
           align-items:center;
           margin:3rem 0rem 0rem 0rem;
           padding:0;
       }
       .containerMoreMe{
           display:flex;
           flex-direction: column;
            justify-content:center;
            align-items:center;

        }
        .containerMoreMe > p{
            padding:0;
            margin:.3rem;
            color:#000;
            font-weight:bold;
        }
        .t-justify{
            text-align:justify;
            max-width:20rem;
        }
        .social{
            display:flex;
            justify-content:center;
            align-items:center;
        }
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${MoreMe.styles}</style>
 <div class='moreMe'>
 <div class='containerMoreMe'>
                      <p class='t-justify'>
                            Mi nombre es Brayan David Lezama Trejo soy un 
                            desarollador web de  18 años.
                            Actualme vivo en la cuidad de pachuca hidalgo mx.
                        </p>
                        <p class='t-justify'>
                            soy una persona que le gusta mucho la musica en especial 
                            el rock y la musica electronica.         
                        </p>
                        <p class='t-justify'>
                            Me cosidero una persona que tiene claro sus objetivos y que siempre
                            estoy buscando la mejor forma  de lograr las cosas que me propongo
                            y dar mi mayor esfuerzo en todo lo que realizo.
                        </p>
                        <p class='t-justify'>
                            Actualmente estoy buscando una oportunidad laboral 
                            para poder mejorar mi desempeño y mejorar mi
                            capacidades de desarollo para poder seguir mejorando cada dia.
                        </p>
                        <div class='social'>
                            <social-ui name='instagram'></social-ui>
                            <social-ui name='twitter'></social-ui>
                        </div>
                        </div>
</div>
    `;
    }
}
customElements.define('more-me', MoreMe);