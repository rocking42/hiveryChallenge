from list_content import list_content
import json

@list_content.route('/')
@list_content.route('/index')
def index():
    output = json.dumps([
        	{
        		"number":"04114",
        		"name": "EP Countertop Long_v2",
        		"markets": "Elementary Schools,Primary",
        		"author": "Art Hufnagel",
        		"created": "19 minutes ago"
    
       	 	},
       	 	{
        		"number":"128873",
        		"name": "Wide Double Door Frontside Lipsum",
        		"markets": "Elementary Schools,Primary",
        		"author": "Rachel Dahlberg",
        		"created": "Today, 9:12am"
    
       	 	},
       	 	{
        		"number":"667888",
        		"name": "LM single stacked side access",
        		"markets": "Elementary Schools,Primary",
        		"author": "Erinda Scarlett",
        		"created": "Today, 8:30am"
    
       	 	},
       	 	{
        		"number":"284658",
        		"name": "FS Short Double Door Frontside",
        		"markets": "Elementary Schools,Primary",
        		"author": "Vertie Provencal",
        		"created": "Yesterday, 6:53pm"
    
       	 	},
       	 	{
        		"number":"193759",
        		"name": "Single Door Frontside Lipsum",
        		"markets": "Shooping mall, Primary",
        		"author": "Latina Tutt",
        		"created": "Tuesday, 10:02pm"
    
       	 	},
       	 	{
        		"number":"184657",
        		"name": "EP Countertop Long_v2",
        		"markets": "Shooping mall, Primary",
        		"author": "Halley Meggs",
        		"created": "Dec 1, 8:35pm"
    
       	 	},
       	 	{
        		"number":"285637",
        		"name": "Two Door Frontside Lipsum",
        		"markets": "Shooping mall, Primary",
        		"author": "Jeane Waldorf",
        		"created": "Nove 30, 7:42pm"
    
       	 	},
       	 	{
        		"number":"048114",
        		"name": "EP Countertop Long_v2",
        		"markets": "Elementary Schools,Primary",
        		"author": "Victorina Aguero",
        		"created": "Nov 24, 10:53pm"
    
       	 	},
        	{
        		"number":"128873",
        		"name": "FS short Double Door Frontside",
        		"markets": "Shooping mall, Primary",
        		"author": "Javier Brandenburg",
        		"created": "Nov 24, 9:04am"
    
       	 	},
        ])
    return output
