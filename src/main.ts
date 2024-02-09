import './style.css'
import { getSurveyResults } from './tools'

const surveyResults = getSurveyResults();

const appElem = document.querySelector<HTMLDivElement>('#app');

if (appElem) {
  appElem.innerHTML = /*html*/ `
  <h1>Promises</h1>
  <p>${surveyResults}</p>
  `
} else {
  alert('Sorry, our website is experiencing problem, please call 234 / 3424 34 34.')
}
