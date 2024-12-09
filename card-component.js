class CardComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                @import "./card-component.css";
            </style>
            <div class="card">
                <div class="card-header">
                    <slot name="header">[Заголовок карточки]</slot>
                </div>
                <div class="card-content">
                    <slot name="content">[Текст карточки]</slot>
                </div>
            </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}


customElements.define('card-component', CardComponent);
