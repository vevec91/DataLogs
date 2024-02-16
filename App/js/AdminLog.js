// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support async functions
xui.Class('App.AdminLog', 'xui.Module',{
    Instance:{
        // Dependencies css
        Dependencies: [],
        // Required modules
        Required:[],
        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setLeft("22.095238095238095em")
                .setTop("17.523809523809526em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Password Input")
                .setType("password")
                .setValue("pwd")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setLeft("22.095238095238095em")
                .setTop("11.428571428571429em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Input")
                .setValue("admin")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button12")
                .setLeft("29.714285714285715em")
                .setTop("29.714285714285715em")
                .setWidth("7.542857142857143em")
                .setHeight("4.3428571428571425em")
                .setCaption("Button")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.AdminTool",
                        "args" : [true],
                        "method" : "switch",
                        "conditions" : [
                            {
                                "left" : "{page.xui_ui_input7.getValue()}",
                                "symbol" : "defined",
                                "right" : ""
                            },
                            {
                                "left" : "{page.xui_ui_input6.getValue()}",
                                "symbol" : "defined",
                                "right" : ""
                            }
                        ],
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button20")
                .setLeft("8.380952380952381em")
                .setTop("6.095238095238095em")
                .setCaption("Button")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App",
                        "args" : [true],
                        "method" : "switch",
                        "event" : 1
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
        }
    }
});