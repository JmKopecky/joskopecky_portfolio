$(document).ready(function(){

    $("#header-name-container").css({"visibility": "visible", "translate": "0"})

    $("#hero-name-pretext").css({"visibility": "visible", "translate": "0"})
    $("#hero-header-name").css({"visibility": "visible", "translate": "0"})
    $("#hero-tagline").css({"visibility": "visible", "translate": "0"})

    $(".animate-left").each(function() {
        var waypoint = new Waypoint({
            element: $(this),
            handler: function() {
                this.element.css("visibility", "visible")
                this.element.css("translate", "0")
            },
            offset: "90%"
        })
    })

    $(".animate-right").each(function() {
        var waypoint = new Waypoint({
            element: $(this),
            handler: function() {
                this.element.css("visibility", "visible")
                this.element.css("transform", "scaleX(1)")
            },
            offset: "90%"
        })
    })
});