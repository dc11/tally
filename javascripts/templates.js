(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addAnswers'] = template({"1":function(depth0,helpers,partials,data) {
    return "	<td class='answer-content' style='width:50%'> "
    + this.escapeExpression(this.lambda(depth0, depth0))
    + " </td>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['addQuestion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='addQuestion quest' style=\"background-color:white\">\r\n	<div class=\"row\">\r\n	  <div class=\"col-lg-12\" style=\"padding-top:15px\">\r\n	    <div class=\"input-group mid well\" style=\"padding-top:10px;padding-bottom:10px;height:40px\">\r\n	      <input id=\"question\" type=\"text\" placeholder=\"Enter Question...\" class=\"form-control\" aria-label=\"...\">\r\n	    </div>\r\n	  </div>\r\n	  <div class=\"col-lg-12\">\r\n	    <div class=\"input-group mid\">\r\n	      <span class=\"input-group-addon\">\r\n	        <input type=\"checkbox\" class=\"check\" aria-label=\"...\">\r\n	      </span>\r\n	      <input type=\"text\" class=\"form-control\" placeholder=\"Answer...\" aria-label=\"...\">\r\n	    </div>\r\n	  </div>\r\n	  <div class=\"col-lg-12\">\r\n	    <div class=\"input-group mid\">\r\n	      <span class=\"input-group-addon\">\r\n	        <input type=\"checkbox\" class=\"check\" aria-label=\"...\">\r\n	      </span>\r\n	      <input type=\"text\" class=\"form-control\" placeholder=\"Answer...\" aria-label=\"...\">\r\n	    </div>\r\n	  </div>\r\n	  <div class=\"col-lg-12\">\r\n	    <div class=\"input-group mid\">\r\n	      <span class=\"input-group-addon\">\r\n	        <input type=\"checkbox\" class=\"check\" aria-label=\"...\">\r\n	      </span>\r\n	      <input type=\"text\" class=\"form-control\" placeholder=\"Answer...\" aria-label=\"...\">\r\n	    </div>\r\n	  </div>\r\n	  <div class=\"col-lg-12\">\r\n	    <div class=\"input-group mid\">\r\n	      <span class=\"input-group-addon\">\r\n	        <input type=\"checkbox\" class=\"check\" aria-label=\"...\">\r\n	      </span>\r\n	      <input type=\"text\" class=\"form-control\" placeholder=\"Answer...\" aria-label=\"...\">\r\n	    </div>\r\n	  </div>\r\n	</div>\r\n	<div class='save-send'>\r\n	    <br>\r\n		<button class='btn btn-default' id='save'>Save</button>\r\n		<button class='btn btn-default' id='send'>Send</button>\r\n	</div>\r\n</div>";
},"useData":true});
templates['createTable'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class='addQuestion quest saved-question' style='background-color:white;padding-bottom:0px;'>\r\n	<table class='table table-condensed' style=\"table-layout:fixed\">\r\n		<span>\r\n			<span class=\"glyphicon glyphicon-edit\">\r\n			<span class=\"glyphicon glyphicon-trash\">\r\n		</span>\r\n		<tr class='saved-question-tr' id='"
    + alias2(alias1(depth0, depth0))
    + "'>\r\n		</tr>\r\n		<tr class='saved-answer-tr-1-"
    + alias2(alias1(depth0, depth0))
    + "'>\r\n		</tr>\r\n		<tr class='saved-answer-tr-2-"
    + alias2(alias1(depth0, depth0))
    + "'>\r\n		</tr>\r\n	</table>\r\n\r\n</div>";
},"useData":true});
templates['questionContent'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<td class='question-content' id='"
    + alias2(alias1((depth0 != null ? depth0.content : depth0), depth0))
    + "'colspan='2' style=\"padding-left:20px;padding-right:20px\"> "
    + alias2(alias1((depth0 != null ? depth0.content : depth0), depth0))
    + " </td>";
},"useData":true});
templates['questionError'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='alert alert-danger' role='alert' style='display:inline-block;margin-bottom:10px;'>\r\n	<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\r\n	<span class=\"sr-only\">Error:</span>\r\n	Please enter a question.\r\n</div>";
},"useData":true});
templates['results'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class='btn btn-default' id='closeResults'>Close Results</button>\r\n<div id=\"container-"
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" style=\"height: 300px\"></div>";
},"useData":true});
templates['saveQuestion'] = template({"1":function(depth0,helpers,partials,data) {
    return "		<tr class='question-tr'>\r\n			<td class='question-td' colspan='2'>\r\n				"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\r\n			</td>\r\n		</tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class='addQuestion quest' style='background-color:white'>\r\n	<table class='table table-bordered table-condensed'>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</table>\r\n</div>";
},"useData":true});
templates['sendQuestion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class='addQuestion quest sent-question' style='background-color:white;padding-bottom:0px;'>\r\n	<table class='table table-condensed' style='height:100%;'>\r\n		<tr class='question-tr-sent-"
    + alias2(alias1(depth0, depth0))
    + "'>\r\n			\r\n		</tr>\r\n		<tr class='answer-tr-sent'>\r\n			<td class='answer-td-sent' colspan=\"2\">\r\n				<div class=\"viewButton\" id=\""
    + alias2(alias1(depth0, depth0))
    + "\">\r\n					<button class='btn btn-default' id='view'>View Results</button>\r\n				</div>\r\n				<div class='answers-"
    + alias2(alias1(depth0, depth0))
    + "'>\r\n					<input type='hidden' value='hold'>\r\n				</div>\r\n			</td>\r\n		</tr>\r\n	</table>\r\n</div>\r\n\r\n";
},"useData":true});
templates['sentAnswerContent'] = template({"1":function(depth0,helpers,partials,data) {
    return "	<input type='hidden' value='"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "'>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['sentQuestionContent'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<td class='question-td-sent' colspan='2' style=\"word-wrap: break-word;padding-left:20px;padding-right:20px\">\r\n	"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\r\n</td>";
},"useData":true});
templates['view'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class='btn btn-default' id='view'>View Results</button>";
},"useData":true});
})();
