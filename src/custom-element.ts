import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import style from './custom-element.css';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 * @cssprop --custom-element-font-size - The button's font size
 */
@customElement('custom-element')
export class CustomElement extends LitElement
{
  static styles = [style];

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render()
  {
    return html`
      <h1>Hello World</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  protected _onClick()
  {
    this.count++;
    const event = new Event('count-changed', { bubbles: true });
    this.dispatchEvent(event);
  }
}
