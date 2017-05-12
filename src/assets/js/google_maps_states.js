var GBrowserIsCompatible;
var GPolygon;
var GMap2;
var GLargeMapControl;
var GMapTypeControl;
var GLatLng;
var GEvent;
var GXmlHttp;
var GXml;
var polys = [];
var labels = [];
// === A method for testing if a point is inside a polygon
// === Returns true if poly contains point
// === Algorithm shamelessly stolen from http://alienryderflex.com/polygon/
GPolygon.prototype.Contains = function (point) {
    console.log("containts : " + point);
    var j = 0;
    var oddNodes = false;
    var x = point.lng();
    var y = point.lat();
    for (var i = 0; i < this.getVertexCount(); i++) {
        j++;
        if (j == this.getVertexCount()) {
            j = 0;
        }
        if (((this.getVertex(i).lat() < y) && (this.getVertex(j).lat() >= y))
            || ((this.getVertex(j).lat() < y) && (this.getVertex(i).lat() >= y))) {
            if (this.getVertex(i).lng() + (y - this.getVertex(i).lat())
                / (this.getVertex(j).lat() - this.getVertex(i).lat())
                * (this.getVertex(j).lng() - this.getVertex(i).lng()) < x) {
                oddNodes = !oddNodes;
            }
        }
    }
    return oddNodes;
};
// Display the map, with some controls and set the initial location
var map = new GMap2(document.getElementById("map"));
map.addControl(new GLargeMapControl());
map.addControl(new GMapTypeControl());
map.setCenter(new GLatLng(42.16, -100.72), 4);
GEvent.addListener(map, "click", function (overlay, point) {
    console.log(point);
    if (!overlay) {
        for (var i = 0; i < polys.length; i++) {
            if (polys[i].Contains(point)) {
                map.openInfoWindowHtml(point, "You clicked on " + labels[i]);
                //i = 999; // Jump out of loop
            }
        }
    }
});
// Read the data from states.xml
var request = GXmlHttp.create();
request.open("GET", "assets/states.xml", true);
request.onreadystatechange = function () {
    if (request.readyState == 4) {
        var xmlDoc = GXml.parse(request.responseText);
        // ========= Now process the polylines ===========
        var states = xmlDoc.documentElement.getElementsByTagName("state");
        // read each line
        for (var a = 0; a < states.length; a++) {
            // get any state attributes
            var label = states[a].getAttribute("name");
            var colour = states[a].getAttribute("colour");
            // read each point on that line
            var points = states[a].getElementsByTagName("point");
            var pts = [];
            for (var i = 0; i < points.length; i++) {
                pts[i] = new GLatLng(parseFloat(points[i].getAttribute("lat")), parseFloat(points[i].getAttribute("lng")));
            }
            var poly = new GPolygon(pts, "#000000", 1, 1, colour, 0.5, { clickable: false });
            polys.push(poly);
            labels.push(label);
            map.addOverlay(poly);
        }
        // ================================================
    }
};
request.send(null);
