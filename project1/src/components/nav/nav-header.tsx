import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'nav-footer',
  styleUrl: 'nav-footer.scss',
  shadow: true,
})
export class NavFooter {

  render() {
    return <Host>
      <slot name="header"></slot>
      <slot name="content"></slot>
    </Host>;
  }
}
