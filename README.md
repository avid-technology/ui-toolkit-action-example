# Example Action App
The Example Action app is an example of a custom action in MediaCentral Cloud UX. 

Once installed MediaCentral Cloud UX will have a new Pane called "CloudUX-Action-Example".

For more info go to [documentation](http://developer.avid.com/mcux_ui_plugin/clux-api/actions-api.html)

This example was created using MediaCentral Cloud UX Toolkit:
* [cloudux-starter-kit](https://www.npmjs.com/package/cloudux-starter-kit)

Action can be found there:

![Alt text](screenshots/actionRightCor.png "Right Corner")

Click to toggle actions:

![Alt text](screenshots/toggleAction.png "Toggle")

See action displayed:

![Alt text](screenshots/helloAction.png "Hello")

Action [definition](src/app/action.js "Action"):

![Alt text](screenshots/action.png "Hello")

Binding [definition](src/app/binding.js "Action"):

![Alt text](screenshots/binding.png "Hello")

## Running the examples
To run these examples you will need a running MediaCentral Cloud UX server running. 

**Running:**
1. Change connections settings in [src/project.act](src/project.act)
2. In CLI type **npm install**
3. Then in CLI type **npm start**
