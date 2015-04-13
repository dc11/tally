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
  return "<div class='addQuestion'>\n	<table class='table table-bordered table-condensed'>\n		<tr class='question-tr'>\n			<td class='question-td' colspan='2'>\n				<textarea rows='3' class='question' placeholder='Type question...'></textarea>\n			</td>\n		</tr>\n		<tr class='answer-tr'>\n			<td class='answer-td'>\n				<textarea rows='2' class='answer' placeholder='Answer...'></textarea>\n			</td>\n			<td class='answer-td'>\n				<textarea rows='2' class='answer' placeholder='Answer...'></textarea>\n			</td>\n		</tr>\n		<tr class='answer-tr'>\n			<td class='answer-td'>\n				<textarea rows='2' class='answer' placeholder='Answer...'></textarea>\n			</td>\n			<td class='answer-td'>\n				<textarea rows='2' class='answer' placeholder='Answer...'></textarea>\n			</td>\n		</tr>\n	</table>\n	<div class='save-send'>\n		<button class='btn btn-default' id='send'>Send</button>\n		<button class='btn btn-default' id='save'>Save</button>\n	</div>\n</div>";
  },"useData":true});
templates['createTable'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<table class='table table-bordered table-condensed'>\n	<tr class='saved-question-tr'>\n	</tr>\n	<tr class='saved-answer-tr-1'>\n	</tr>\n	<tr class='saved-answer-tr-2'>\n	</tr>\n</table>";
  },"useData":true});
templates['questionContent'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<td colspan='2'> "
    + escapeExpression(lambda((depth0 != null ? depth0.content : depth0), depth0))
    + " </td>";
},"useData":true});
templates['saveQuestion'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<tr class='question-tr'>\n			<td class='question-td' colspan='2'>\n				"
    + escapeExpression(lambda(depth0, depth0))
    + "\n			</td>\n		</tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class='saveQuestion'>\n	<table class='table table-bordered table-condensed'>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.content : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</table>\n</div>";
},"useData":true});
})();
