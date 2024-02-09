export const getSurveyResults = () => {
	return new Promise<string>((resolve) => {
		setTimeout(() => {
				resolve('survey results that take a long time to compute');
		}, 3000);
	})

}