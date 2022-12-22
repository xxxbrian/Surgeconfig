// Hide Element of Google Search Ads

function findclassdiv(page, element) {
    var divs = [];
    var start = 0;
    while (start > -1) {
        start = page.indexOf('<div ' + element, start);
        if (start > -1) {
            var num_div = 1;
            var sub_start = start + 1;
            while (num_div) {
                var sub_div = page.indexOf("<div", sub_start);
                var sub_div_end = page.indexOf("</div>", sub_start);
                if (sub_div_end == -1) {
                    return divs;
                }
                if (sub_div > -1 && sub_div < sub_div_end) {
                    num_div++;
                    sub_start = sub_div + 1;
                } else {
                    num_div--;
                    sub_start = sub_div_end + 1;
                }
            }
            var end = sub_start + 5;
            divs.push([start, end]);
            start = end;
        }
    }
    console.log(divs);
    return divs;
}

function hideclassdiv(page, point) {
    shift = 0;
    for (var i = 0; i < point.length; i++) {
        var start = point[i][0] + shift;
        var end = point[i][1] + shift;
        var hide = "<!--" + page.substring(start, end) + "-->";
        page = page.substring(0, start) + hide + page.substring(end);
        shift = shift - (end - start) + hide.length;
    }
    return page;
}

function handleBody(body, elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        // find the divs to hide
        var l = findclassdiv(body, element);
        console.log("Found " + l.length + " divs " + element + " to hide");
        // hide the divs
        body = hideclassdiv(body, l);
    }
    return body;
}

if ($response.body) {
    var body = $response.body;
    // if Content-Type is HTML
    if ($response.headers["Content-Type"].includes("text/html")) {
        // list of elements need to hide
        elements = ['id="tvcap"', 'id="tadsb"']
        body = handleBody(body, elements);
    }
    // write back
    $done({ body });
} else {
    $done({});
}