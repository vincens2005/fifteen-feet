export default async (request, context) => {
	let url = request.url.split("/cors/");
	url.shift(); // remove first element
	url = url.join(""); // combine other ones. now we've removes the first instance of /proxy/
	url = decodeURIComponent(url);
	
	if (!url) return new Response("error: no url provided");
	
	url = new URL(url);
	
	let req = await replicate_request(request, url, {
		headers: {
			host: url.host
		}
	});
	
	let response = await fetch(req)
	

	return response;
};

// mostly stolen from https://stackoverflow.com/a/48713509/15317442
async function replicate_request(request, url, options) {
	options = options || {};
	url = url || request.url;
	let init = {}
	Object.keys(Request.prototype).forEach(value => {
		init[value] = options[value] ?? request[value];
	});
	
	delete init.url;
	init.headers = {};
	
	for (let pair of request.headers.entries()) {
		init.headers[pair[0]] = options.headers[pair[0]] ?? pair[1];
	}	
		
	let blob = await request.blob();
	if (request.method.toUpperCase() !== 'HEAD' && request.method.toUpperCase() !== 'GET' && blob.size > 0) {
		init.body = blob;
	}
	return new Request(url, init);
}
