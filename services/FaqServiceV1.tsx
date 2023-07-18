import { h } from "@stencil/core";

export class FaqServiceV1 {

  public constructor(
    private Expand: string,
    private ExpandArea = 'div',
    private ExpandContent = 'div',
  ) {}

  async load(name: string): Promise<FaqItem[]> {
    return new Promise(resolve => {
      setTimeout(function () {
        console.log('Load FAQs:', name);
        resolve(example());
      }, 2000);
    });
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






// Helper:

export interface FaqItem {
  title?: string;
  description?: string;
  customerId?: string;
  languageCode?: string;
  section?: string;
  hide: boolean;
  createdBy?: string;
  creationDate?: Date;
  order: number;
  anchor?: string;
}

function example() {
  return [
    {
      order: 0,
      hide: false,
      title: 'Item1',
      description: 'Description1',
    },
    {
      order: 1,
      hide: false,
      title: 'Item2',
      description: 'Description2',
    },
    {
      order: 2,
      hide: false,
      title: 'Item3',
      description: 'Description3',
    },
  ];
}
