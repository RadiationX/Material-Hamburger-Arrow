var drawerIcon;
window.addEventListener("load", function (e) {
    drawerIcon = new DrawerIcon(document.getElementById("rx_icon"));
    drawerIcon.setOnClick(function () {
        if (drawerIcon.state()) drawerIcon.setState(1);
        else drawerIcon.setState(0);
    });
});

function setChange(value) {
    var percent = Number(value);
    drawerIcon.set(percent);
}