// Hide Element of YouTube Ads

if ($response.body) {
    var body = $response.body;
    // if Content-Type is HTML
    if ($response.headers['Content-Type'].includes('text/html')) {
        // Main page ads
        body = body.replace("adSlotRenderer", "xxx");
        // Watch page ads
        body = body.replace("promotedSparklesWebRenderer", "xxx");
    }
    // write back
    $done({ body });
} else {
    $done({});
}