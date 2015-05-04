(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addAnswer'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"col-lg-12 answer-textbox\">\r\n	<div class=\"input-group mid\">\r\n\r\n		<input type=\"text\" class=\"form-control answer-form\" placeholder=\"Answer...\" aria-label=\"...\">\r\n	</div>\r\n</div>";
},"useData":true});
templates['addAnswers'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return ((stack1 = (helpers.countEven || (depth0 && depth0.countEven) || alias1).call(depth0,(data && data.index),{"name":"countEven","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.countOdd || (depth0 && depth0.countOdd) || alias1).call(depth0,(data && data.index),{"name":"countOdd","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    return "		<td class='answer-content content-left' style='width:50%'> "
    + this.escapeExpression(this.lambda(depth0, depth0))
    + " </td>\r\n";
},"4":function(depth0,helpers,partials,data) {
    return "		<td class='answer-content content-right' style='width:50%'> "
    + this.escapeExpression(this.lambda(depth0, depth0))
    + " </td>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['addQuestion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='addQuestion quest' style=\"background-color:white\">\r\n	<div class=\"row add-question\">\r\n	  <div class=\"col-lg-12\" style=\"padding-top:15px\">\r\n	    <div class=\"input-group mid well\" style=\"padding-top:10px;padding-bottom:10px;height:40px\">\r\n	      <input id=\"question\" type=\"text\" placeholder=\"Enter Question...\" class=\"form-control\" aria-label=\"...\">\r\n	    </div>\r\n	  </div>\r\n	  <div class='add-remove-answer'>\r\n		<button class='btn btn-default plus' style=\"float:left;\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n		<button class='btn btn-default minus' style=\"float:left;margin-left:5px;\"><span class=\"glyphicon glyphicon-minus\"></span></button>\r\n	  </div>\r\n	  <div class=\"col-lg-12 answer-textbox\">\r\n	    <div class=\"input-group mid\">\r\n	     \r\n	      <input type=\"text\" class=\"form-control answer-form\" placeholder=\"Answer...\" aria-label=\"...\">\r\n	    </div>\r\n	  </div>\r\n	  <div class=\"col-lg-12 answer-textbox\">\r\n	    <div class=\"input-group mid\">\r\n	      \r\n	      <input type=\"text\" class=\"form-control answer-form\" placeholder=\"Answer...\" aria-label=\"...\">\r\n	    </div>\r\n	  </div>\r\n	  <div class=\"col-lg-12 answer-textbox\">\r\n	    <div class=\"input-group mid\">\r\n	      \r\n	      <input type=\"text\" class=\"form-control answer-form\" placeholder=\"Answer...\" aria-label=\"...\">\r\n	    </div>\r\n	  </div>\r\n	  <div class=\"col-lg-12 answer-textbox\">\r\n	    <div class=\"input-group mid\">\r\n	      \r\n	      <input type=\"text\" class=\"form-control answer-form\" placeholder=\"Answer...\" aria-label=\"...\">\r\n	    </div>\r\n	  </div>\r\n	</div>\r\n	<div class='save-send' style=\"height:55px;\">\r\n	    <br><button class='btn btn-default' id='save' style=\"margin-left:12px;float:left;vertical-align:top;\"><span class=\"glyphicon glyphicon-floppy-disk\" style=\"padding-right:2px;\"></span> Save</button>\r\n		<button class='btn btn-default' id='send' style=\"margin-left:5px;float:left;vertical-align:top;\"><span class=\"glyphicon glyphicon-send\" style=\"padding-right:2px;\"></span> Share</button><button class='btn btn-default' id='cancel' style=\"margin-right:12px;float:right;vertical-align:top;\"><span class=\"glyphicon glyphicon-remove\" style=\"padding-right:2px;\"></span> Cancel</button>\r\n	</div>\r\n</div>";
},"useData":true});
templates['answer'] = template({"1":function(depth0,helpers,partials,data) {
    return "	<div class=\"col-lg-12 answer-textbox\">\r\n		<div class=\"input-group mid\">\r\n			<input type=\"text\" class=\"form-control answer-form\" aria-label=\"...\" value=\""
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\">\r\n		</div>\r\n	</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['answerError'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='alert alert-danger' role='alert' style='display:inline-block;margin-bottom:10px;margin-top:15px;'>\r\n	<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\r\n	<span class=\"sr-only\">Error:</span>\r\n	Please enter more than one answer.\r\n</div>";
},"useData":true});
templates['classCard'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<a href=\"lectures.ejs\" style=\"text-decoration:none\">\r\n	<div class=\"well nonEdit\">\r\n		<p class=\"trash\"><span class=\"glyphicon glyphicon-trash\"></span></p>\r\n		<p class=\"edit\"><span class=\"glyphicon glyphicon-edit\"></span></p>\r\n		<h2 class=\"className\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\r\n	</div>\r\n</a>";
},"useData":true});
templates['classEdit'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"well\">\r\n	<input type=\"hidden\" class=\"hiddenName\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\r\n	<input type=\"text\" class=\"form-control answer-form focusQuestion\" onfocus=\"this.value = this.value;\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"\" aria-label=\"...\">\r\n	<button type='button' class='btn btn-default addNew save' style=\"margin-top:10px\"><span class=\"glyphicon glyphicon-floppy-disk\" style=\"padding-right:2px;\"></span> Save</button>\r\n    <button type='button' class='btn btn-default addNew cancel' style=\"float:right; margin-top:10px\"><span class=\"glyphicon glyphicon-remove\" style=\"float:left;padding-right:4px; padding-top:2px\"></span> Cancel</button>\r\n</div>";
},"useData":true});
templates['createTable'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class='addQuestion quest saved-question' style='background-color:white;padding-bottom:0px;'>\r\n	<p class='sendButton'>\r\n		<span class=\"glyphicon glyphicon-send sent-icon\" ></span>\r\n	</p>\r\n	<p class='edit'>\r\n		<span class=\"glyphicon glyphicon-edit sent-icon\" ></span>\r\n	</p>\r\n	<p class='trash'>\r\n		<span class=\"glyphicon glyphicon-trash sent-icon\" ></span>\r\n	</p>\r\n	<table class='table table-condensed "
    + alias2(alias1(depth0, depth0))
    + "' style=\"table-layout:fixed\">\r\n		<tr class='saved-question-tr' id='"
    + alias2(alias1(depth0, depth0))
    + "'>\r\n		</tr>\r\n		\r\n	</table>\r\n\r\n</div>\r\n\r\n";
},"useData":true});
templates['editQuestion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='addQuestion quest' style=\"background-color:white\">\r\n	<div class=\"row add-question\">\r\n	  \r\n	</div>\r\n	<div class='save-send' style=\"height:55px;\">\r\n	    <br>\r\n		<button class='btn btn-default' id='save' style=\"margin-left:12px;float:left;vertical-align:top;\"><span class=\"glyphicon glyphicon-floppy-disk\" style=\"padding-right:2px;\"></span> Save</button>\r\n		<button class='btn btn-default' id='send' style=\"margin-left:5px;float:left;vertical-align:top;\"><span class=\"glyphicon glyphicon-send\" style=\"padding-right:2px;\"></span> Share</button><button class='btn btn-default' id='cancel' style=\"margin-right:12px;float:right;vertical-align:top;\"><span class=\"glyphicon glyphicon-remove\" style=\"padding-right:2px;\"></span> Cancel</button>\r\n	</div>\r\n</div>";
},"useData":true});
templates['insertAnswersToTable'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<tr class='saved-answer-tr-"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + " saved-answer-tr'>\r\n</tr>";
},"useData":true});
templates['lecEdit'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"well\">\r\n	<input type=\"hidden\" class=\"hiddenName\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\r\n	<input type=\"text\" class=\"form-control answer-form focusQuestion\" onfocus=\"this.value = this.value;\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"\" aria-label=\"...\">\r\n	<button type='button' class='btn btn-default addNew saveLec' style=\"margin-top:10px\"><span class=\"glyphicon glyphicon-floppy-disk\" style=\"padding-right:2px;\"></span> Save</button>\r\n    <button type='button' class='btn btn-default addNew cancelLec' style=\"float:right; margin-top:10px\"><span class=\"glyphicon glyphicon-remove\" style=\"float:left;padding-right:4px; padding-top:2px\"></span> Cancel</button>\r\n</div>";
},"useData":true});
templates['lectureCard'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<a href=\"question.ejs\" style=\"text-decoration:none\">\r\n	<div class=\"well nonEdit\">\r\n		<p class=\"trash\"><span class=\"glyphicon glyphicon-trash\"></span></p>\r\n		<p class=\"editLec\"><span class=\"glyphicon glyphicon-edit\"></span></p>\r\n		<h2 class=\"className\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\r\n	</div>\r\n</a>";
},"useData":true});
templates['question'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"col-lg-12\" style=\"padding-top:15px\">\r\n	<div class=\"input-group mid well\" style=\"padding-top:10px;padding-bottom:10px;height:40px\">\r\n		<input id=\"question\" type=\"text\" class=\"form-control\" aria-label=\"...\" value=\""
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\">\r\n	</div>\r\n</div>\r\n<div class='add-remove-answer'>\r\n		<button class='btn btn-default plus' style=\"float:left;\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n		<button class='btn btn-default minus' style=\"float:left;margin-left:5px;\"><span class=\"glyphicon glyphicon-minus\"></span></button>\r\n</div>\r\n	\r\n";
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
    return "<div class='alert alert-danger' role='alert' style='display:inline-block;margin-bottom:10px;margin-top:15px;'>\r\n	<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\r\n	<span class=\"sr-only\">Error:</span>\r\n	Please enter a question.\r\n</div>";
},"useData":true});
templates['results'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class='btn btn-default' id='closeResults'><span class=\"glyphicon glyphicon-remove\" style=\"padding-right:2px;\"></span> Close Results</button>\r\n<div id=\"container-"
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

  return "<div class='addQuestion quest sent-question' style='background-color:white;padding-bottom:0px;'>\r\n	<p class='trash'>\r\n		<span class='glyphicon glyphicon-trash sent-icon' aria-hidden='true'>\r\n	</p>\r\n	<p class='hide-eye'>\r\n		<span class='glyphicon glyphicon-eye-close sent-icon' aria-hidden='true'>\r\n	</p>\r\n	<table class='table table-condensed' style='height:100%;'>\r\n		<tr class='question-tr-sent-"
    + alias2(alias1(depth0, depth0))
    + "'>\r\n			\r\n		</tr>\r\n		<tr class='answer-tr-sent'>\r\n			<td class='answer-td-sent' colspan=\"2\">\r\n				<div class=\"viewButton\" id=\""
    + alias2(alias1(depth0, depth0))
    + "\">\r\n					<button class='btn btn-default' id='view'><span class=\"glyphicon glyphicon-stats\" style=\"padding-right:2px;\"></span> View Results</button>\r\n				</div>\r\n				<div class='answers-"
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
    return "<td class='question-td-sent' colspan='2' style=\"font-size: 20px;word-wrap: break-word;padding-left:20px;padding-right:20px;border-top:none;\">\r\n	"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\r\n</td>";
},"useData":true});
templates['view'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class='btn btn-default' id='view'><span class=\"glyphicon glyphicon-stats\" style=\"padding-right:2px;\"></span> View Results</button>";
},"useData":true});
})();
