import { h } from '@stencil/core';
import { FaqItem } from './FaqItem';
export { FaqItem } from './FaqItem';
import { default as example } from './example.json';

interface State {
  name: string;
  faqs: FaqItem[];
}

export class FaqServiceV1 {
  public constructor(
    public state: State,
    public prefix = 'csb',
    public config: any
  ) {}

  // Tags
  public Expand = this.prefix + '-expand';
  public Spinner = this.prefix + '-spinner';
  public ExpandArea = 'div';
  public ExpandHeader = 'h2';
  public ExpandContent = 'div';

  // Config
  public openOnlyOne: boolean = false;

  // Local State
  private loading = true;

  load() {
    console.log('Load faq', this.state.name);
    setTimeout(() => {
      this.state.faqs = example;
      this.loading = false;
    }, 200);
  }

  render = () => {
    if (this.loading) return <this.Spinner type="faq"></this.Spinner>;
    return (
      <this.ExpandArea>
        {this.state.faqs.map(this.renderExpand)}
      </this.ExpandArea>
    );
  };

  renderExpand = (item: FaqItem) => {
    return (
      <this.Expand open={item.open} item={item}>
        <this.ExpandHeader
          slot="header"
          onClick={this.toggle(item)}
          item={item}
        >
          {item.title}
        </this.ExpandHeader>
        <this.ExpandContent
          slot="content"
          class="csb-prose"
          innerHTML={item.description}
          item={item}
        />
      </this.Expand>
    );
  };

  toggle = (item: FaqItem) => (ev: MouseEvent) => {
    if (item.open) {
      item.open = false;
    } else {
      if (this.openOnlyOne) {
        this.state.faqs.forEach(faq => (faq.open = false));
        this.scrollToHeader(ev.target);
      }
      item.open = true;
    }
    this.state.faqs = [...this.state.faqs];
  };

  scrollToHeader(target: EventTarget) {
    console.log(target);
  }
}
