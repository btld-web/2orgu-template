import { Component, h, Prop, State } from '@stencil/core';
import { FaqServiceV1, FaqItem } from '@2orgu/services/faq/FaqServiceV1';

@Component({
  tag: 'example-faq',
  shadow: true,
})
export class ExampleFaq {

  @Prop() name: string;
  
  @State() faqs: FaqItem[];
  @State() loading = true;

  service = new FaqServiceV1('example-expand');

  componentWillLoad() {
    this.service.load(this);
  }

  render() {
    if (this.loading) {
      return <div>Spinner TODO 1</div>;
    }
    return this.service.renderExpandArea(this.faqs);
  }
}
