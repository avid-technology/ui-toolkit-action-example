# Example Action App
The Example Action app is an example of a custom action in MediaCentral Cloud UX. 

Once installed MediaCentral Cloud UX will have a new Pane called "CloudUX-Action-Example".

For more info go to [documentation](http://developer.avid.com/mcux_ui_plugin/clux-api/actions-api.html)

This example was created using MediaCentral Cloud UX Toolkit:
* [cloudux-starter-kit](https://www.npmjs.com/package/cloudux-starter-kit)

Action can be found there:

![Alt text](/screenshots/top-right-corner.png?raw=true "Right Corner")

Click to toggle actions:

![Alt text](/screenshots/toggle-action.png?raw=true "Toggle")

See action displayed:

![Alt text](/screenshots/HelloAction.png?raw=true "Hello")

Action definition:

![Alt text](/screenshots/action.png?raw=true "Hello")

Binding definition:

![Alt text](/screenshots/binding.png?raw=true "Hello")

## Running the examples
To run these examples you will need a running MediaCentral Cloud UX server running. 
Connection settings can be changed in [src/project.act](src/project.act)

### Dependencies
* [cloudux-l10n ](https://www.npmjs.com/package/cloudux-l10n)

### MediaCentral Cloud UX Toolkit
This example contains a basic action description and it's binding.

Running:
    
    npm install
    npm start
