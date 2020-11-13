// function getDocHeight() {
//     var D = document;
//     return Math.max(
//         D.body.scrollHeight, D.documentElement.scrollHeight,
//         D.body.offsetHeight, D.documentElement.offsetHeight,
//         D.body.clientHeight, D.documentElement.clientHeight
//     );
// }
// $(window).scroll(function() {
//     console.log("scroll");
//     if($(window).scrollTop() + $(window).height() == getDocHeight()) {
//         // alert("bottom! of " + window.location.href);
//         if(window.location.pathname === "/about.html") {
//             window.location.replace("contact.html");
//         }
//     }
//     // if($(window).scrollTop() == 0) {
//     //     // alert("top! of " + window.location.href);
//     //     if(window.location.pathname === "/about.html") {
//     //         window.location.replace("index.html");
//     //     }
//     //     if(window.location.pathname === "/contact.html" ) {
//     //         window.location.replace("about.html");
//     //     }
//     // }
// });