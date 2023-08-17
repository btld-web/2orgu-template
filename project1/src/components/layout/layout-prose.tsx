import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'layout-prose',
  styleUrl: 'layout-prose.scss',
  shadow: true,
})
export class LayoutProse {

  render() {
    return <Host>
      <slot name="header"></slot>
      <slot name="content"></slot>
    </Host>;
  }
}
