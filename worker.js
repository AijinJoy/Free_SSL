export default {
    async fetch(request) {
        return new Response(`
<!DOCTYPE html>
<html>
<head>
    <title>Free SSL Certificate Generator</title>
</head>

<body>
    <h1>🔒 Free SSL Certificate Generator</h1>

    <p>Your Cloudflare Worker is working!</p>

    <p>Next we will connect this to your SSL certificate system.</p>
</body>
</html>
        `, {
            headers: {
                "content-type": "text/html"
            }
        });
    }
};
