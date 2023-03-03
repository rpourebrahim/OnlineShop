// $(document).ready(function(){
//     $("#acc").find("p").slideUp(1);
//     $("#acc").find("h3").click(function(){
//     $(this).next().slideToggle(400);})
// });

$(document).ready(function() {

    var icon1 = document.getElementById("icon1");
    var icon2 = document.getElementById("icon2");
    $("#acc").children("h3").click(function() {
        if ($(this).hasClass("active")) {
            icon1.setAttribute("visibility", "visible");
            icon2.setAttribute("visibility", "hidden");
            $(this).next().slideUp(200);
            // $(this).addClass(active2);
            $(this).removeClass(active);
            // $("#acc").children("p").addClass("active2");
        } else {
            $("#acc").children("p").slideUp();
            $("#acc").children("h3").removeClass("active");
            icon2.setAttribute("visibility", "visible");
            icon1.setAttribute("visibility", "hidden");
            // icon1.removeAttribute("class");
            // icon1.setAttribute("class", "fas fa - dove");
            $(this).next().slideDown(700);
            $(this).addClass("active");
        }
    })
})