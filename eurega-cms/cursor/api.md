REST API parameters
API parameters can be used with the REST API to filter, sort, and paginate results and to select fields and relations to populate. Additionally, specific parameters related to optional Strapi features can be used, like the publication state and locale of a content-type.

The following API parameters are available:

Operator	Type	Description
filters	Object	Filter the response
locale	String	Select a locale
status	String	Select the Draft & Publish status
populate	String or Object	Populate relations, components, or dynamic zones
fields	Array	Select only specific fields to display
sort	String or Array	Sort the response
pagination	Object	Page through entries
Query parameters use the LHS bracket syntax  (i.e. they are encoded using square brackets []).

 Tip
A wide range of REST API parameters can be used and combined to query your content, which can result in long and complex query URLs.
👉 You can use Strapi's interactive query builder tool to build query URLs more conveniently. 🤗