import { h } from "@stencil/core";
import { FaqItem } from './FaqItem';
export { FaqItem } from './FaqItem';
import { default as example } from './example.json';


interface Context {
  faqs: FaqItem[],
  loading: boolean
}

export class FaqServiceV1 {

  public constructor(
    private Expand: string,
    private ExpandArea = 'div',
    private ExpandContent = 'div',
  ) {}

  load(ctx: Context) {
    setTimeout(function () {
      ctx.loading = false;
      ctx.faqs = example;
    }, 2000);
  }

  renderExpandArea = (list: FaqItem[]) => {
    return <this.ExpandArea>
      {list.map(this.renderExpand)}
    </this.ExpandArea>;
  }

  renderExpand = (item: FaqItem) => {
    return <this.Expand>
      <span slot="header">{item.title}</span>
      <this.ExpandContent slot="content">{item.description}</this.ExpandContent>
    </this.Expand>;
  }
}
