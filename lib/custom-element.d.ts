import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 * @cssprop --custom-element-font-size - The button's font size
 */
export declare class CustomElement extends LitElement {
    static styles: import("lit").CSSResult[];
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    render(): import("lit").TemplateResult<1>;
    protected _onClick(): void;
}
//# sourceMappingURL=custom-element.d.ts.map