import "./style.css";
import { getSurveyResults } from "./tools";

setTimeout(async () => {
	const surveyResults = await getSurveyResults();
	const surveyResultsElem =
		document.querySelector<HTMLParagraphElement>(".surveyResults");

	if (surveyResultsElem) {
		surveyResultsElem.innerHTML = surveyResults;
	}
}, 0);

const appElem = document.querySelector<HTMLDivElement>("#app");

if (appElem) {
	appElem.innerHTML = /*html*/ `
  <h1>Promises</h1>

  <p>User can type while the data loads:</p>
  <input class="sentence"/>
  <p class="surveyResults"><i class="spinner fa fa-spinner" aria-hidden="true"></i></p>
  `;
} else {
	alert(
		"Sorry, our website is experiencing problem, please call 234 / 3424 34 34."
	);
}
