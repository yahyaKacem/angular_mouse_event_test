angular_mouse_event_test
========================

Trying to add ngFocus and ngBlur to AngularJS.

#INSTALLATION:

After download or clone:
###Run this command:

    `npm install && bower install`

that will install alot of dependencies, after that finish do this steps:

    1. Open src/libs/unstable-angular-complete/angular.js.
    2. Change the line 13963:
        `'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress'.split(' '),`
    with this:
        ` 'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress focus blur'.split(' '),`
    3. Use the ngFocus and the ngBlur as your new directives.

###Events to test later:
    A list can be found in this directory in a file named "all_the_js_events".
