/*

import { Component, h, State, Prop } from '@stencil/core';
import { services } from '../../../../../services/indexV1';

@Component({
  tag: 'reuse-service',
  shadow: true,
})
export class ReuseService {
  
  @Prop() service: string;

  @Prop() view: string;
  @Prop() load: string;
  @Prop() spinner: string;
  @Prop() customer: string;

  @State() isLoading = true;
  @State() data: any;
  @State() instance: any;

  componentWillLoad() {
    let promise = this.runPrefixedMethod('load', this.load);
    if (promise && (promise as Promise<any>).then) {
      (promise as Promise<any>).then((data) => {
        this.data = data;
        this.isLoading = false;
      });
    }
  }

  runPrefixedMethod(prefix: string, value: string) {
    if (!this.instance) {
      const Service = services[this.service];
      this.instance = new Service(this.customer);
    }
    if (!this.instance) throw 'Service not found.';
    if (!value) return prefix && this.instance[prefix];
    const method = prefix + value.charAt(0).toUpperCase() + value.slice(1);
    const result = this.instance[method] || this.instance[prefix];
    if (typeof result === 'function') return result(h);
  }

  render() {
    if (this.isLoading) {
      let spinner = this.runPrefixedMethod('renderSpinner', this.spinner);
      return spinner(); // TODO fallback
    }
    let render = this.runPrefixedMethod('render', this.view);
    return render(); // TODO fallback
  }
}
*/