import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { on } from '@ember/modifier';

export default class Demo extends Component {
  @tracked count = 0;

  inc = () => this.count++;

  <template>
    <output>{{this.count}}</output>

    <button {{on 'click' this.inc}}>inc</button>
  </template>
}
