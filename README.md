angular_mouse_event_test
========================

Trying to add ngFocus and ngBlur to AngularJS maybe other events.

#INSTALLATION:

After download or clone:
###Run this command:

    npm install && bower install

that will install alot of dependencies, after that finish do this steps:

1. Open src/libs/unstable-angular-complete/angular.js.
2. Change the line 13963:
    'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress'.split(' '),
with this:
    'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress focus blur'.split(' '),
3. Use the ngFocus and the ngBlur as your new directives.

###Events to test and add later:
Javascript events:

    'cut',
    'blur',
    'copy',
    'load',
    'click',
    'error',
    'focus',
    'keyup',
    'paste',
    'reset',
    'wheel',
    'change',
    'resize',
    'scroll',
    'select',
    'submit',
    'unload',
    'focusin',
    'keydown',
    'mouseup',
    'dblclick',
    'focusout',
    'keypress',
    'mouseout',
    'mousedown',
    'mousemove',
    'mouseover',
    'textinput',
    'hashchange',
    'mouseenter',
    'mouseleave',
    'mousewheel',
    'contextmenu',
HTML5 events:
A list of events could be found here:
[HTML5 events list](http://www.quackit.com/html_5/tags/html_5_event_handler_content_attributes.cfm).
