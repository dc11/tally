(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addAnswers'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	<td style='width:50%'> "
    + escapeExpression(lambda(depth0, depth0))
    + " </td>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.content : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['addQuestion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class='addQuestion quest' style=\"background-color:white\">\n	<div class=\"row\">\n	  <div class=\"col-lg-12\" style=\"padding-top:15px\">\n	    <div class=\"input-group mid well\" style=\"padding-top:10px;padding-bottom:10px;height:40px\">\n	      <input id=\"question\" type=\"text\" class=\"form-control\" aria-label=\"Enge\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\n	    </div>\n	  </div>\n	</div>\n	<div class='save-send'>\n	    <br>\n		<button class='btn btn-default' id='save'>Save</button>\n		<button class='btn btn-default' id='send'>Send</button>\n	</div>\n</div>";
  },"useData":true});
templates['createTable'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class='addQuestion quest' style='background-color:white'>\n	<table class='table table-condensed'>\n		<tr class='saved-question-tr'>\n		</tr>\n		<tr class='saved-answer-tr-1'>\n		</tr>\n		<tr class='saved-answer-tr-2'>\n		</tr>\n	</table>\n</div>";
  },"useData":true});
templates['questionContent'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<td colspan='2'> "
    + escapeExpression(lambda((depth0 != null ? depth0.content : depth0), depth0))
    + " </td>";
},"useData":true});
templates['questionError'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class='alert alert-danger' role='alert' style='display:inline-block;'>\n	<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n	<span class=\"sr-only\">Error:</span>\n	Please enter a question.\n</div>";
  },"useData":true});
templates['saveQuestion'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<tr class='question-tr'>\n			<td class='question-td' colspan='2'>\n				"
    + escapeExpression(lambda(depth0, depth0))
    + "\n			</td>\n		</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class='addQuestion quest' style='background-color:white'>\n	<table class='table table-bordered table-condensed'>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.content : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</table>\n</div>";
},"useData":true});
templates['sendQuestion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class='addQuestion quest' style='background-color:white;padding-bottom:0px;'>\n	<table class='table table-condensed' style='height:100%;'>\n		<tr class='question-tr-sent'>\n			<td class='question-td-sent' colspan='2'>\n				"
    + escapeExpression(lambda((depth0 != null ? depth0.content : depth0), depth0))
    + "\n			</td>\n		</tr>\n		<tr class='answer-tr-sent'>\n			<td class='answer-td-sent'>\n				View Results\n			</td>\n		</tr>\n	</table>\n</div>\n\n";
},"useData":true});
})();
