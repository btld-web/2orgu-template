import { Component, Prop, State } from '@stencil/core';
import { FaqServiceV1, FaqItem } from '@2orgu/services/faq/FaqServiceV1';

@Component({
  tag: 'example-faq',
  shadow: true
})
export class ExampleFaq {

  @Prop() name: string;
  @State() faqs: FaqItem[];

  service = new FaqServiceV1(this, 'example');

  componentWillLoad() {
    this.service.openOnlyOne = true;
    this.service.load();
  }

  render() {
    return this.service.render();
  }
}
