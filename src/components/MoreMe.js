class MoreMe extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
}

static get styles(){
    return /*css*/`
        :host{

    }
    `;
}

connectedCallback(){
     this.render();
}

render(){
    this.shadowRoot.innerHTML =/*html*/`
        <style>${MoreMe.styles}</style>
 <div class='moreMe'>
     <div class='containerMoreMe'>
       <h1>
        mas sobre mi
       </h1> 

     </div>
        <slot></slot>
</div>
    `;
}
}
customElements.define('more-me',MoreMe);