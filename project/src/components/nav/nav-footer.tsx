import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'nav-header',
  styleUrl: 'nav-header.scss',
  shadow: true,
})
export class NavHeader {

  render() {
    return <Host>
      <slot name="header"></slot>
      <slot name="content"></slot>
    </Host>;
  }
}
