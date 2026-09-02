export default {
    async fetch(request) {

        const url = new URL(request.url);

        // API endpoint
        if (url.pathname === "/api/test") {

            return new Response(
                JSON.stringify({
                    success: true,
                    message: "SSL backend is working!"
                }),
                {
                    headers: {
                        "content-type": "application/json"
                    }
                }
            );
        }

        // Website
        return new Response(`
<!DOCTYPE html>
<html>

<head>
    <title>Free SSL Generator</title>

    <style>
        body {
            font-family: Arial;
            background: #f4f7fb;
            text-align: center;
            padding-top: 100px;
        }

        .box {
            background: white;
            max-width: 600px;
            margin: auto;
            padding: 40px;
            border-radius: 12px;
        }

        input {
            padding: 12px;
            width: 250px;
        }

        button {
            padding: 12px 20px;
            background: #2563eb;
            color: white;
            border: none;
            cursor: pointer;
        }

        #result {
            margin-top: 20px;
        }
    </style>

</head>

<body>

<div class="box">

    <h1>🔒 Free SSL Generator</h1>

    <p>Generate a free SSL certificate for your domain.</p>

    <input
        id="domain"
        placeholder="example.com"
    >

    <button onclick="generateSSL()">
        Generate SSL
    </button>

    <div id="result"></div>

</div>

<script>

async function generateSSL() {

    const domain =
        document.getElementById("domain").value;

    if (!domain) {

        document.getElementById("result").innerText =
            "Please enter a domain.";

        return;
    }

    document.getElementById("result").innerText =
        "Checking backend...";

    try {

        const response =
            await fetch("/api/test");

        const data =
            await response.json();

        document.getElementById("result").innerText =
            data.message + " Domain: " + domain;

    } catch (error) {

        document.getElementById("result").innerText =
            "Backend connection failed.";

    }

}

</script>

</body>
</html>
        `, {
            headers: {
                "content-type": "text/html"
            }
        });
    }
};
