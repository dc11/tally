(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addQuestion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class='addQuestion'>\n	<form>\n		<div class='form-group'>\n			<input type='textarea' class='form-control question' placeholder='Type question...'>\n		</div>\n		<div class='form-group'>\n			<input type='textarea' class='form-control answer' placeholder='Answer...'>\n		</div>\n		<div class='form-group'>\n			<input type='textarea' class='form-control answer' placeholder='Answer...'>\n		</div>\n		<div class='form-group'>\n			<input type='textarea' class='form-control answer' placeholder='Answer...'>\n		</div>\n		<div class='form-group'>\n			<input type='textarea' class='form-control answer' placeholder='Answer...'>\n		</div>\n	</form>\n</div>";
  },"useData":true});
})();
