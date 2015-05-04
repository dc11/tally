(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addAnswer'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"col-lg-12 answer-textbox\">\n	<div class=\"input-group mid\">\n\n		<input type=\"text\" class=\"form-control answer-form\" placeholder=\"Answer...\" aria-label=\"...\">\n	</div>\n</div>";
},"useData":true});
templates['addAnswers'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return ((stack1 = (helpers.countEven || (depth0 && depth0.countEven) || alias1).call(depth0,(data && data.index),{"name":"countEven","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.countOdd || (depth0 && depth0.countOdd) || alias1).call(depth0,(data && data.index),{"name":"countOdd","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    return "		<td class='answer-content content-left' style='width:50%'> "
    + this.escapeExpression(this.lambda(depth0, depth0))
    + " </td>\n";
},"4":function(depth0,helpers,partials,data) {
    return "		<td class='answer-content content-right' style='width:50%'> "
    + this.escapeExpression(this.lambda(depth0, depth0))
    + " </td>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['addQuestion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='addQuestion quest' style=\"background-color:white\">\n	<div class=\"row add-question\">\n	  <div class=\"col-lg-12\" style=\"padding-top:15px\">\n	    <div class=\"input-group mid well\" style=\"padding-top:10px;padding-bottom:10px;height:40px\">\n	      <input id=\"question\" type=\"text\" placeholder=\"Enter Question...\" class=\"form-control\" aria-label=\"...\">\n	    </div>\n	  </div>\n	  <div class='add-remove-answer'>\n		<span class=\"glyphicon glyphicon-plus\" style=\"float:left;\"></span><span class=\"glyphicon glyphicon-minus\" style=\"float:left;margin-left:5px;\"></span>\n	  </div>\n	  <div class=\"col-lg-12 answer-textbox\">\n	    <div class=\"input-group mid\">\n	     \n	      <input type=\"text\" class=\"form-control answer-form\" placeholder=\"Answer...\" aria-label=\"...\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12 answer-textbox\">\n	    <div class=\"input-group mid\">\n	      \n	      <input type=\"text\" class=\"form-control answer-form\" placeholder=\"Answer...\" aria-label=\"...\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12 answer-textbox\">\n	    <div class=\"input-group mid\">\n	      \n	      <input type=\"text\" class=\"form-control answer-form\" placeholder=\"Answer...\" aria-label=\"...\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12 answer-textbox\">\n	    <div class=\"input-group mid\">\n	      \n	      <input type=\"text\" class=\"form-control answer-form\" placeholder=\"Answer...\" aria-label=\"...\">\n	    </div>\n	  </div>\n	</div>\n	<div class='save-send' style=\"height:55px;\">\n	    <br><button class='btn btn-default' id='save' style=\"margin-left:12px;float:left;vertical-align:top;\"><span class=\"glyphicon glyphicon-floppy-disk\" style=\"padding-right:2px;\"></span> Save</button>\n		<button class='btn btn-default' id='send' style=\"margin-left:5px;float:left;vertical-align:top;\"><span class=\"glyphicon glyphicon-send\" style=\"padding-right:2px;\"></span> Share</button><button class='btn btn-default' id='cancel' style=\"margin-right:12px;float:right;vertical-align:top;\"><span class=\"glyphicon glyphicon-remove\" style=\"padding-right:2px;\"></span> Cancel</button>\n	</div>\n</div>";
},"useData":true});
templates['answer'] = template({"1":function(depth0,helpers,partials,data) {
    return "	<div class=\"col-lg-12 answer-textbox\">\n		<div class=\"input-group mid\">\n			<input type=\"text\" class=\"form-control answer-form\" aria-label=\"...\" value=\""
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\">\n		</div>\n	</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['answerError'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='alert alert-danger' role='alert' style='display:inline-block;margin-bottom:10px;margin-top:15px;'>\n	<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n	<span class=\"sr-only\">Error:</span>\n	Please enter more than one answer.\n</div>";
},"useData":true});
templates['createTable'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class='addQuestion quest saved-question' style='background-color:white;padding-bottom:0px;'>\n	<p class='sendButton'>\n		<span class=\"glyphicon glyphicon-send sent-icon\" ></span>\n	</p>\n	<p class='edit'>\n		<span class=\"glyphicon glyphicon-edit sent-icon\" ></span>\n	</p>\n	<p class='trash'>\n		<span class=\"glyphicon glyphicon-trash sent-icon\" ></span>\n	</p>\n	<table class='table table-condensed "
    + alias2(alias1(depth0, depth0))
    + "' style=\"table-layout:fixed\">\n		<tr class='saved-question-tr' id='"
    + alias2(alias1(depth0, depth0))
    + "'>\n		</tr>\n		\n	</table>\n\n</div>\n\n";
},"useData":true});
templates['editQuestion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='addQuestion quest' style=\"background-color:white\">\n	<div class=\"row add-question\">\n	  \n	</div>\n	<div class='save-send' style=\"height:55px;\">\n	    <br>\n		<button class='btn btn-default' id='save' style=\"margin-left:12px;float:left;vertical-align:top;\"><span class=\"glyphicon glyphicon-floppy-disk\" style=\"padding-right:2px;\"></span> Save</button>\n		<button class='btn btn-default' id='send' style=\"margin-left:5px;float:left;vertical-align:top;\"><span class=\"glyphicon glyphicon-send\" style=\"padding-right:2px;\"></span> Share</button><button class='btn btn-default' id='cancel' style=\"margin-right:12px;float:right;vertical-align:top;\"><span class=\"glyphicon glyphicon-remove\" style=\"padding-right:2px;\"></span> Cancel</button>\n	</div>\n</div>";
},"useData":true});
templates['insertAnswersToTable'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<tr class='saved-answer-tr-"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + " saved-answer-tr'>\n</tr>";
},"useData":true});
templates['question'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"col-lg-12\" style=\"padding-top:15px\">\n	<div class=\"input-group mid well\" style=\"padding-top:10px;padding-bottom:10px;height:40px\">\n		<input id=\"question\" type=\"text\" class=\"form-control\" aria-label=\"...\" value=\""
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\">\n	</div>\n	<div class='add-remove-answer'>\n		<span class=\"glyphicon glyphicon-plus\" style=\"float:left;\"></span><span class=\"glyphicon glyphicon-minus\" style=\"float:left;margin-left:5px;\"></span>\n	</div>\n</div>";
},"useData":true});
templates['questionContent'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<td class='question-content' id='"
    + alias2(alias1((depth0 != null ? depth0.content : depth0), depth0))
    + "'colspan='2' style=\"font-size:20px;padding-left:20px;padding-right:20px;border-top:none;\"> "
    + alias2(alias1((depth0 != null ? depth0.content : depth0), depth0))
    + " </td>";
},"useData":true});
templates['questionError'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='alert alert-danger' role='alert' style='display:inline-block;margin-bottom:10px;margin-top:15px;'>\n	<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n	<span class=\"sr-only\">Error:</span>\n	Please enter a question.\n</div>";
},"useData":true});
templates['results'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class='btn btn-default' id='closeResults'><span class=\"glyphicon glyphicon-remove\" style=\"padding-right:2px;\"></span> Close Results</button>\n<div id=\"container-"
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" style=\"height: 300px\"></div>";
},"useData":true});
templates['saveQuestion'] = template({"1":function(depth0,helpers,partials,data) {
    return "		<tr class='question-tr'>\n			<td class='question-td' colspan='2'>\n				"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\n			</td>\n		</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class='addQuestion quest' style='background-color:white'>\n	<table class='table table-bordered table-condensed'>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</table>\n</div>";
},"useData":true});
templates['sendQuestion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class='addQuestion quest sent-question' style='background-color:white;padding-bottom:0px;'>\n	<p class='trash'>\n		<span class='glyphicon glyphicon-trash sent-icon' aria-hidden='true'>\n	</p>\n	<p class='hide-eye'>\n		<span class='glyphicon glyphicon-eye-close sent-icon' aria-hidden='true'>\n	</p>\n	<table class='table table-condensed' style='height:100%;'>\n		<tr class='question-tr-sent-"
    + alias2(alias1(depth0, depth0))
    + "'>\n			\n		</tr>\n		<tr class='answer-tr-sent'>\n			<td class='answer-td-sent' colspan=\"2\">\n				<div class=\"viewButton\" id=\""
    + alias2(alias1(depth0, depth0))
    + "\">\n					<button class='btn btn-default' id='view'><span class=\"glyphicon glyphicon-stats\" style=\"padding-right:2px;\"></span> View Results</button>\n				</div>\n				<div class='answers-"
    + alias2(alias1(depth0, depth0))
    + "'>\n					<input type='hidden' value='hold'>\n				</div>\n			</td>\n		</tr>\n	</table>\n</div>\n\n";
},"useData":true});
templates['sentAnswerContent'] = template({"1":function(depth0,helpers,partials,data) {
    return "	<input type='hidden' value='"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "'>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['sentQuestionContent'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<td class='question-td-sent' colspan='2' style=\"font-size: 20px;word-wrap: break-word;padding-left:20px;padding-right:20px;border-top:none;\">\n	"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\n</td>";
},"useData":true});
templates['view'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class='btn btn-default' id='view'><span class=\"glyphicon glyphicon-stats\" style=\"padding-right:2px;\"></span> View Results</button>";
},"useData":true});
})();
