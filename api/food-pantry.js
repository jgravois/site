---
layout: null
---
var locations = [

{% assign data_collection = site.collections | where: "label", "food-pantry" | first %}
{% assign data_list = data_collection.docs %}
{% for data in data_list %}
{
	latitude  : "{{ data.latitude }}",
	longitude : "{{ data.longitude }}",
	name      : "{{ data.name }}",
	address_1 : "{{ data.address_1 | replace: '"', '' }}",
	category  : "{{ data.category }}",
	day       : "{{ data.day }}",
	open      : "{{ data.open }}",
	close     : "{{ data.close }}",
	uri       : "{{ data.uri }}"
}{% unless forloop.last %},{% endunless %}
{% endfor %}

];
