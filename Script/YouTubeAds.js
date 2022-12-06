// Hide Element of YouTube Ads

if ($response.body) {
    var body = $response.body;
    // if <!DOCTYPE html> is the top string, it's a html page
    if (body.startsWith("<!DOCTYPE html>")) {
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