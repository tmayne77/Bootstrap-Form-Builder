define([
       "jquery" , "underscore" , "backbone"
       , "collections/snippets" , "collections/my-form-snippets"
       , "views/tab" , "views/my-form"
       , "text!data/input.json", "text!data/radio.json", "text!data/select.json", "text!data/buttons.json"
       , "text!templates/app/render.html",  "text!templates/app/about.html", "text!templates/app/json.html"
	   , "text!data/recaptcha.json"
], function(
  $, _, Backbone
  , SnippetsCollection, MyFormSnippetsCollection
  , TabView, MyFormView
  , inputJSON, radioJSON, selectJSON, buttonsJSON
  , renderTab, aboutTab, jsonTab, recaptchaJSON
){
  return {
    initialize: function(existingFormData){

	//Bootstrap tabs from json.
      new TabView({
        title: "Input"
		, display: true
        , collection: new SnippetsCollection(JSON.parse(inputJSON))
      });
      new TabView({
        title: "Radios / Checkboxes"
		, display: true
        , collection: new SnippetsCollection(JSON.parse(radioJSON))
      });
      new TabView({
        title: "Select"
		, display: true
        , collection: new SnippetsCollection(JSON.parse(selectJSON))
      });
      new TabView({
        title: "Buttons"
		, display: true
        , collection: new SnippetsCollection(JSON.parse(buttonsJSON))
      });
      new TabView({
        title: "reCAPTCHA"
		, display: true
        , collection: new SnippetsCollection(JSON.parse(recaptchaJSON))
      });
	  new TabView({
	    title: "JSON"
		, display: false
		, content: jsonTab
	  });
      new TabView({
        title: "Rendered"
		, display: false
        , content: renderTab
      });
      // new TabView({
        // title: "About"
        // , content: aboutTab
      // });

      //Make the first tab active!
      $("#components .tab-pane").first().addClass("active");
      $("#formtabs li").first().addClass("active");
      // Bootstrap "My Form" with 'Form Name' snippet.
	  if (existingFormData == undefined) {
		new MyFormView({
		  title: "Original"
          , collection: new MyFormSnippetsCollection([
            { "title" : "Form Name"
              , "fields": {
                "name" : {
                  "label"   : "Form Name"
                  , "type"  : "input"
                  , "value" : "Form Name"
                },
				"inquirytype": {
				  "label"   : "Inquiry Type"
				  , "type"  : "select"
		          , "value": [
					{
						"value": "",
						"label": "None",
						"selected": true
					},
					{
						"value": "Contact",
						"label": "Contact Me/Us",
						"selected": false
					},
					{
						"value": "Guestbook",
						"label": "Guestbook",
						"selected": false
					},
					{
						"value": "Mailing List Signup",
						"label": "Mailing List Signup",
						"selected": false
					},
					{
						"value": "Request Appointment",
						"label": "Request Appointment",
						"selected": false
					},
					{
						"value": "Request Information",
						"label": "Request Information",
						"selected": false
					},
					{
						"value": "RSVP",
						"label": "RSVP",
						"selected": false
					},
					{
						"value": "Other",
						"label": "Other",
						"selected": false
					}
				  ]
				}, 
				"inquirysource": {
				  "label": "Inquiry Source"
				  , "type": "select"
				  , "value": [
					{
						"value": "",
						"label": "None",
						"selected": true
					},
					{
						"value": "Locator",
						"label": "Locator",
						"selected": false
					},
					{
						"value": "Portal",
						"label": "Portal",
						"selected": false
					},
					{
						"value": "Website",
						"label": "Website",
						"selected": false
					}
				  ]
				}, 
				"xsltargumentlist": {
				  "label": "XSLT Arguments"
				  , "type": "textarea"
				  , "value": ""
				}
              }
            }
          ])
        });
	  } else {
	    new MyFormView({
		  title: "Original"
		  , collection: new MyFormSnippetsCollection(JSON.parse(existingFormData))
		});
	  }
    }
  }
});
