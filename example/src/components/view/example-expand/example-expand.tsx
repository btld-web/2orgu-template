import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'example-expand',
  styleUrl: 'example-expand.scss',
  shadow: true,
})
export class ExampleExpand {

  @Prop({ reflect: true }) open: boolean;

  render() {
    return <Host>
      <slot name="header"></slot>
      <slot name="content"></slot>
    </Host>;
  }
}
