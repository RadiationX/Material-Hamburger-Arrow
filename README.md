# Material-Back-Arrow
## How to add
You must download **rx_icon.css** and **rx_icon.js**. Add this files to head
```html
<link rel="stylesheet" href="../lib/rx_icon.css" type="text/css">
<script src="../lib/rx_icon.js" type="text/javascript"></script>
```
Add elem .rx_icon#rx_icon in your place in html
```html
<div class="rx_icon" id="rx_icon"></div>
```
Add init in onload function
```javascript
var drawerIcon;
window.addEventListener("load", function (e) {
    drawerIcon = new DrawerIcon(document.getElementById("rx_icon"));
});
```
##How to use methods
###.state()
Return bool.
True - not "opened"
False - "opened"
```javascript
drawerIcon.state(); //Return true or false
```
###.setOnClick(function)
Set onclick listener:)
```javascript
//Example toggle arrow state
drawerIcon.setOnClick(function () {
    if (drawerIcon.state())
        drawerIcon.setState(1);
    else
        drawerIcon.setState(0);
});
```
###.set(percent)
Set rotate arrow by percent[0-100]
```javascript
drawerIcon.set(50); //Arrow rotate 90deg
```
###.setState(state, duration) //duration in seconds
**state**:
0 - "close" arrow to hamburger
1 - "open" arrow
**duration**
```javascript
drawerIcon.setState(0) //Close arrow
drawerIcon.setState(1, 0.5) //Open arrow with duration 0.5s
```
Default value 0.25, argument not important
###.lock() .unLock()
Lock arrow in this state
```javascript
drawerIcon.lock() //Lock
drawerIcon.unLock() //Unlock
```


