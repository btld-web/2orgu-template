import { FaqItem } from '@2orgu/services/faq/FaqItem';
import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'example-expand-header',
  styleUrl: 'example-expand-header.scss',
  shadow: true,
})
export class ExampleExpandHeader {

  @Prop() item: FaqItem;

  render() {
    return <Host open={this.item.open}>
      <h2>{this.item.title} {this.item.order}</h2>
    </Host>;
  }
}
