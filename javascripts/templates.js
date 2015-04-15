(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addAnswers'] = template({"1":function(depth0,helpers,partials,data) {
    return "	<td style='width:50%'> "
    + this.escapeExpression(this.lambda(depth0, depth0))
    + " </td>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['addQuestion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='addQuestion' style='background-color:white'>\r\n	<table class='table table-bordered table-condensed'>\r\n		<tr class='question-tr'>\r\n			<td class='question-td' colspan='2'>\r\n			<span>\r\n				<span class=\"glyphicon glyphicon-edit\"></span> \r\n				<span class=\"glyphicon glyphicon-trash\"></span>\r\n			</span>\r\n			<textarea rows='3' class='question' placeholder='Type question...'></textarea>\r\n			</td>\r\n		</tr>\r\n		<tr class='answer-tr'>\r\n			<td class='answer-td'>\r\n			    <span>\r\n					<span class=\"glyphicon glyphicon-ok\"></span> \r\n					<span class=\"glyphicon glyphicon-remove\"></span>\r\n				</span>\r\n				<textarea rows='2' class='answer' placeholder='Answer...'></textarea>\r\n			</td>\r\n			<td class='answer-td'>\r\n				<span>\r\n					<span class=\"glyphicon glyphicon-ok\"></span> \r\n					<span class=\"glyphicon glyphicon-remove\"></span>\r\n				</span>\r\n				<textarea rows='2' class='answer' placeholder='Answer...'></textarea>\r\n			</td>\r\n		</tr>\r\n		<tr class='answer-tr'>\r\n			<td class='answer-td'>\r\n				<span>\r\n					<span class=\"glyphicon glyphicon-ok\"></span> \r\n					<span class=\"glyphicon glyphicon-remove\"></span>\r\n				</span>\r\n				<textarea rows='2' class='answer' placeholder='Answer...'></textarea>\r\n			</td>\r\n			<td class='answer-td'>\r\n				<span>\r\n					<span class=\"glyphicon glyphicon-ok\"></span> \r\n					<span class=\"glyphicon glyphicon-remove\"></span>\r\n				</span>\r\n				<textarea rows='2' class='answer' placeholder='Answer...'></textarea>\r\n			</td>\r\n		</tr>\r\n	</table>\r\n	<div class='save-send'>\r\n		<button class='btn btn-default' id='send'>Send</button>\r\n		<button class='btn btn-default' id='save'>Save</button>\r\n	</div>\r\n</div>";
},"useData":true});
templates['createTable'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<table class='table table-bordered table-condensed'>\r\n	<tr class='saved-question-tr'>\r\n	</tr>\r\n	<tr class='saved-answer-tr-1'>\r\n	</tr>\r\n	<tr class='saved-answer-tr-2'>\r\n	</tr>\r\n</table>";
},"useData":true});
templates['questionContent'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<td colspan='2'> "
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.content : depth0), depth0))
    + " </td>";
},"useData":true});
templates['saveQuestion'] = template({"1":function(depth0,helpers,partials,data) {
    return "		<tr class='question-tr'>\r\n			<td class='question-td' colspan='2'>\r\n				"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\r\n			</td>\r\n		</tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class='saveQuestion'>\r\n	<table class='table table-bordered table-condensed'>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</table>\r\n</div>";
},"useData":true});
templates['sendQuestion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='sent-answer'>\r\n	<div class='sent-answer-content'>\r\n		"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.content : depth0), depth0))
    + "\r\n	</div>\r\n	<div>\r\n		View Results\r\n	</div>\r\n</div>";
},"useData":true});
})();
