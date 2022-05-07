export default async (request, context) => {
	let url = request.url.split(/\/proxy(?:\/\?q=|\/\!?|\?q=)/);
	url.shift(); // remove first element
	url = url.join(""); // combine other ones. now we've removes the first instance of /proxy/?q=
	url = decodeURIComponent(url);
	
	if (!url) return new Response("error: no url provided");
	
	console.log(url)
	url = new URL(url);
	
	
	let response = await fetch(url, {
		headers: {
			"user-agent": "Googlebot/2.1 (+http://www.google.com/bot.html)"
		}
	});
	

	return response;
};
