export const getSurveyResults = () => {
	return new Promise<string>((resolve) => {
		setTimeout(() => {
				resolve('These are survey results that take a long time to compute.');
		}, 5000);
	})

}