import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return this.first +''+ this.middle +''+ this.last;
  }

  render() {
    let Test = 'csb-span';
    return <div class="mt-20 text-blue">H World! I'm {this.getText()}
      <Test onClick={() => {}} data-test={({'': true})}></Test>
    </div>;
  }
}
