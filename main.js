import './style.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';

// https://app.clearcompany.com/api/v2/jobs/salemacademy/xml/
// https://app.clearcompany.com/api/v2/jobs/salemacademy/json/

function summary(description) {
  return description.substr(0,400)
}

async function getData() {
  const response = await fetch('https://app.clearcompany.com/api/v2/jobs/salemacademy/json/')
  const rdata = await response.json()
  console.table(rdata)
  const jobs = document.querySelector('#jobs')
  jobs.innerHTML = rdata.reduce((p,c,i) => {
    return `${p} <h3><a href="${c.LegacyCareersUrl}">${c.PositionTitle}</a></h3>
    <p>${summary(c.Description)}</p>
    <div><a href="${c.ApplyUrl}">Apply for ${c.PositionTitle}</a></div>`
  },'')

}


// setupCounter(document.querySelector('#counter'));
getData()
