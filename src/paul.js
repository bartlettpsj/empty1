import _ from 'lodash';

export default class Paul {
  hello(name) {
    return _.join(["hello", name], "-");
  }
}