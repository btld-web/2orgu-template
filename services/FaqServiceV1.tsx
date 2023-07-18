export class FaqServiceV1 {

  public constructor() {}

  async load(props: { name: string }): Promise<FaqItem[]> {
    return new Promise(resolve => {
      setTimeout(function () {
        console.log('Load FAQs:', props.name);
        resolve(example());
      }, 2000);
    });
  }

  renderExpandArea = (h) => (list: FaqItem[]) => {
    return <example-expand-area>
      {list.map(this.renderExpand(h))}
    </example-expand-area>;
  }

  renderExpand = (h) => (item: FaqItem) => {
    return <example-expand>
      <span slot="header">{item.title}</span>
      <div slot="content">{item.description}</div>
    </example-expand>;
  }

  renderSpinner = (h) => () => {
    return <div>Spinner</div>;
  }
}






// Helper:

interface FaqItem {
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
