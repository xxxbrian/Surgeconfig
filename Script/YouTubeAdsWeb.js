// Hide Element of YouTube Ads (Web)

if ($response.body) {
    var body = $response.body;
    // if Content-Type is HTML or JSON
    if ($response.headers['Content-Type'].includes('text/html') || $response.headers['Content-Type'].includes('application/json')) {
        // Main page ads
        body = body.replace("adSlotRenderer", "xxx");
        // Watch page ads
        body = body.replace("promotedSparklesWebRenderer", "xxx");
        // Player ads
        body = body.replace("adPlacements", "xxx");
        
    }
    // write back
    $done({ body });
} else {
    $done({});
}