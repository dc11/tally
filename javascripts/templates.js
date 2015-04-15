(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addAnswers'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	<td class='answer-content' style='width:50%'> "
    + escapeExpression(lambda(depth0, depth0))
    + " </td>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.content : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['addQuestion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class='addQuestion quest' style=\"background-color:white\">\n	<div class=\"row add-question\">\n	  <div class=\"col-lg-12\" style=\"padding-top:15px\">\n	    <div class=\"input-group mid well\" style=\"padding-top:10px;padding-bottom:10px;height:40px\">\n	      <input id=\"question\" type=\"text\" placeholder=\"Enter Question...\" class=\"form-control\" aria-label=\"...\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" class=\"check\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control answer-form\" placeholder=\"Answer...\" aria-label=\"...\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" class=\"check\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control answer-form\" placeholder=\"Answer...\" aria-label=\"...\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" class=\"check\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control answer-form\" placeholder=\"Answer...\" aria-label=\"...\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" class=\"check\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control answer-form\" placeholder=\"Answer...\" aria-label=\"...\">\n	    </div>\n	  </div>\n	</div>\n	<div class='save-send'>\n	    <br>\n		<button class='btn btn-default' id='save' style=\"margin-right:100px\"><span class=\"glyphicon glyphicon-floppy-disk\" style=\"padding-right:2px;\"></span> Save</button>\n		<button class='btn btn-default' id='send'><span class=\"glyphicon glyphicon-send\" style=\"padding-right:2px;\"></span> Send</button>\n	</div>\n</div>";
  },"useData":true});
templates['answer'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	<div class=\"col-lg-12\">\n		<div class=\"input-group mid\">\n			<span class=\"input-group-addon\">\n			<input type=\"checkbox\" class=\"check\" aria-label=\"...\">\n			</span>\n			<input type=\"text\" class=\"form-control answer-form\" aria-label=\"...\" value=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\">\n		</div>\n	</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.content : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['createTable'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class='addQuestion quest saved-question' style='background-color:white;padding-bottom:0px;'>\n	<p class='edit'>\n		<span class=\"glyphicon glyphicon-edit sent-icon\" style=\"visible:hidden\"></span>\n	</p>\n	<p class='trash'>\n		<span class=\"glyphicon glyphicon-trash sent-icon\" style=\"visible:hidden\"></span>\n	</p>\n	<table class='table table-condensed' style=\"table-layout:fixed\">\n		<tr class='saved-question-tr' id='"
    + escapeExpression(lambda(depth0, depth0))
    + "'>\n		</tr>\n		<tr class='saved-answer-tr-1-"
    + escapeExpression(lambda(depth0, depth0))
    + "'>\n		</tr>\n		<tr class='saved-answer-tr-2-"
    + escapeExpression(lambda(depth0, depth0))
    + "'>\n		</tr>\n		<tr class='answer-single-send' style=\"padding-top:20px\">\n			<td class='answer-td-save' colspan=\"2\">\n				<div class=\"sendButton\">\n					<button class='btn btn-default' id='view'><span class=\"glyphicon glyphicon-send\" style=\"margin-top:3px;padding-right:2px;\"></span> Send</button>\n				</div>\n			</td>\n		</tr>\n	</table>\n\n\n</div>\n\n";
},"useData":true});
templates['editQuestion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class='addQuestion quest' style=\"background-color:white\">\n	<div class=\"row add-question\">\n	  \n	</div>\n	<div class='save-send'>\n	    <br>\n		<button class='btn btn-default' id='save'>Save</button>\n		<button class='btn btn-default' id='send'>Send</button>\n	</div>\n</div>";
  },"useData":true});
templates['question'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"col-lg-12\" style=\"padding-top:15px\">\n	<div class=\"input-group mid well\" style=\"padding-top:10px;padding-bottom:10px;height:40px\">\n		<input id=\"question\" type=\"text\" class=\"form-control\" aria-label=\"...\" value=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\">\n	</div>\n</div>";
},"useData":true});
templates['questionContent'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<td class='question-content' id='"
    + escapeExpression(lambda((depth0 != null ? depth0.content : depth0), depth0))
    + "'colspan='2' style=\"font-size:20px;padding-left:20px;padding-right:20px;border-top:none;\"> "
    + escapeExpression(lambda((depth0 != null ? depth0.content : depth0), depth0))
    + " </td>";
},"useData":true});
templates['questionError'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class='alert alert-danger' role='alert' style='display:inline-block;margin-bottom:10px;margin-top:15px;'>\n	<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n	<span class=\"sr-only\">Error:</span>\n	Please enter a question.\n</div>";
  },"useData":true});
templates['results'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<button class='btn btn-default' id='closeResults'><span class=\"glyphicon glyphicon-remove\" style=\"padding-right:2px;\"></span> Close Results</button>\n<div id=\"container-"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" style=\"height: 300px\"></div>";
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
  return "<div class='addQuestion quest sent-question' style='background-color:white;padding-bottom:0px;'>\n	<p class='trash'>\n		<span class='glyphicon glyphicon-trash sent-icon' aria-hidden='true'>\n	</p>\n	<p class='hide-eye'>\n		<span class='glyphicon glyphicon-eye-close sent-icon' aria-hidden='true'>\n	</p>\n	<table class='table table-condensed' style='height:100%;'>\n		<tr class='question-tr-sent-"
    + escapeExpression(lambda(depth0, depth0))
    + "'>\n			\n		</tr>\n		<tr class='answer-tr-sent'>\n			<td class='answer-td-sent' colspan=\"2\">\n				<div class=\"viewButton\" id=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\">\n					<button class='btn btn-default' id='view'><span class=\"glyphicon glyphicon-stats\" style=\"padding-right:2px;\"></span> View Results</button>\n				</div>\n				<div class='answers-"
    + escapeExpression(lambda(depth0, depth0))
    + "'>\n					<input type='hidden' value='hold'>\n				</div>\n			</td>\n		</tr>\n	</table>\n</div>\n\n";
},"useData":true});
templates['sentAnswerContent'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	<input type='hidden' value='"
    + escapeExpression(lambda(depth0, depth0))
    + "'>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.content : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['sentQuestionContent'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<td class='question-td-sent' colspan='2' style=\"font-size: 20px;word-wrap: break-word;padding-left:20px;padding-right:20px;border-top:none;\">\n	"
    + escapeExpression(lambda(depth0, depth0))
    + "\n</td>";
},"useData":true});
templates['view'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<button class='btn btn-default' id='view'><span class=\"glyphicon glyphicon-stats\" style=\"padding-right:2px;\"></span> View Results</button>";
  },"useData":true});
})();
