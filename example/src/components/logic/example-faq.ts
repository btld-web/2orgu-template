import { Component, Prop, State } from '@stencil/core';
import { FaqServiceV1, FaqItem } from '@2orgu/services/faq/FaqServiceV1';
import { default as config } from '../../../tailwind.json';

@Component({
  tag: 'example-faq',
  shadow: true
})
export class ExampleFaq {

  @Prop() name: string;
  @State() faqs: FaqItem[];

  service = new FaqServiceV1(this, 'example', config);

  componentWillLoad() {
    this.service.openOnlyOne = true;
    this.service.ExpandHeader = 'example-expand-header';
    this.service.load();
  }

  render() {
    return this.service.render();
  }
}
