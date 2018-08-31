import Paul from './paul';
import css1 from '../css/site.css';
import css2 from '../css/page.css';
import scss from '../css/paul.scss'

// Export the function
export function callme(name) {
  const paul = new Paul();
  return paul.hello(name);
}

// Initial load
const element = document.getElementById('text_here');
element.innerHTML = callme('Fauzia Bartlett');
