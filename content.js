/* content.js */
// Function to parse and log the signed request received from Salesforce
function handleSignedRequest(signedRequest) {
    console.log("Signed Request from Salesforce: ", signedRequest);
}

// Function to extract signed request from URL and process it
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    if (params.has('signed_request')) {
        const signedRequest = params.get('signed_request');
        handleSignedRequest(signedRequest);
    } else {
        console.log("No signed request found in URL");
    }
}
