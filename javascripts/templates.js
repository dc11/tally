(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addAnswers'] = template({"1":function(depth0,helpers,partials,data) {
<<<<<<< HEAD
    return "	<td style='width:50%'> "
    + this.escapeExpression(this.lambda(depth0, depth0))
    + " </td>\r\n";
=======
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	<td class='answer-content' style='width:50%'> "
    + escapeExpression(lambda(depth0, depth0))
    + " </td>\n";
>>>>>>> e0d53154fe1654537f62e28f56f4227d6b7758b7
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['addQuestion'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
<<<<<<< HEAD
<<<<<<< HEAD
    return "<div class='addQuestion quest' style=\"background-color:white\">\r\n	<div class=\"row\">\r\n	  <div class=\"col-lg-12\" style=\"padding-top:15px\">\r\n	    <div class=\"input-group mid well\" style=\"padding-top:10px;padding-bottom:10px;height:40px\">\r\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\r\n	    </div>\r\n	  </div>\r\n	  <div class=\"col-lg-12\">\r\n	    <div class=\"input-group mid\">\r\n	      <span class=\"input-group-addon\">\r\n	        <input type=\"checkbox\" class=\"check\" aria-label=\"...\">\r\n	      </span>\r\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\r\n	    </div>\r\n	  </div>\r\n	  <div class=\"col-lg-12\">\r\n	    <div class=\"input-group mid\">\r\n	      <span class=\"input-group-addon\">\r\n	        <input type=\"checkbox\" class=\"check\" aria-label=\"...\">\r\n	      </span>\r\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\r\n	    </div>\r\n	  </div>\r\n	  <div class=\"col-lg-12\">\r\n	    <div class=\"input-group mid\">\r\n	      <span class=\"input-group-addon\">\r\n	        <input type=\"checkbox\" class=\"check\" aria-label=\"...\">\r\n	      </span>\r\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\r\n	    </div>\r\n	  </div>\r\n	  <div class=\"col-lg-12\">\r\n	    <div class=\"input-group mid\">\r\n	      <span class=\"input-group-addon\">\r\n	        <input type=\"checkbox\" class=\"check\" aria-label=\"...\">\r\n	      </span>\r\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\r\n	    </div>\r\n	  </div>\r\n	</div>\r\n	<div class='save-send'>\r\n	    <br>\r\n		<button class='btn btn-default' id='save'>Save</button>\r\n		<button class='btn btn-default' id='send'>Send</button>\r\n	</div>\r\n</div>";
},"useData":true});
=======
  return "<div class='addQuestion quest' style=\"background-color:white\">\n	<div class=\"row\">\n	  <div class=\"col-lg-12\" style=\"padding-top:15px\">\n	    <div class=\"input-group mid well\" style=\"padding-top:10px;padding-bottom:10px;height:40px\">\n	      <input id=\"question\" type=\"text\" class=\"form-control\" aria-label=\"Enge\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\n	    </div>\n	  </div>\n	</div>\n	<div class='save-send'>\n	    <br>\n		<button class='btn btn-default' id='save'>Save</button>\n		<button class='btn btn-default' id='send'>Send</button>\n	</div>\n</div>";
=======
  return "\n<div class='addQuestion quest' style=\"background-color:white\">\n	<div class=\"row\">\n	  <div class=\"col-lg-12\" style=\"padding-top:15px\">\n	    <div class=\"input-group mid well\" style=\"padding-top:10px;padding-bottom:10px;height:40px\">\n	      <input id=\"question\" type=\"text\" class=\"form-control\" aria-label=\"Enge\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\n	    </div>\n	  </div>\n	  <div class=\"col-lg-12\">\n	    <div class=\"input-group mid\">\n	      <span class=\"input-group-addon\">\n	        <input type=\"checkbox\" aria-label=\"...\">\n	      </span>\n	      <input type=\"text\" class=\"form-control\" aria-label=\"Enge\">\n	    </div>\n	  </div>\n	</div>\n\n	<div class='save-send'>\n	    <br>\n		<button class='btn btn-default' id='save'>Save</button>\n		<button class='btn btn-default' id='send'>Send</button>\n	</div>\n</div>";
>>>>>>> e0d53154fe1654537f62e28f56f4227d6b7758b7
  },"useData":true});
>>>>>>> bea0166c55bd6dfa67178d26e9dcbd2f289a7e7a
templates['createTable'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
<<<<<<< HEAD
    return "<div class='addQuestion quest' style='background-color:white'>\r\n	<table class='table table-condensed'>\r\n		<tr class='saved-question-tr'>\r\n		</tr>\r\n		<tr class='saved-answer-tr-1'>\r\n		</tr>\r\n		<tr class='saved-answer-tr-2'>\r\n		</tr>\r\n	</table>\r\n</div>";
},"useData":true});
templates['questionContent'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<td colspan='2'> "
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.content : depth0), depth0))
    + " </td>";
},"useData":true});
templates['questionError'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='alert alert-danger' role='alert' style='display:inline-block;'>\r\n	<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\r\n	<span class=\"sr-only\">Error:</span>\r\n	Please enter a question.\r\n</div>";
},"useData":true});
=======
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class='addQuestion quest saved-question' style='background-color:white;padding-bottom:0px;'>\n	<table class='table table-condensed'>\n		<tr class='saved-question-tr' id='"
    + escapeExpression(lambda(depth0, depth0))
    + "'>\n		</tr>\n		<tr class='saved-answer-tr-1-"
    + escapeExpression(lambda(depth0, depth0))
    + "'>\n		</tr>\n		<tr class='saved-answer-tr-2-"
    + escapeExpression(lambda(depth0, depth0))
    + "'>\n		</tr>\n	</table>\n</div>";
},"useData":true});
templates['questionContent'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<td class='question-content' id='"
    + escapeExpression(lambda((depth0 != null ? depth0.content : depth0), depth0))
    + "'colspan='2'> "
    + escapeExpression(lambda((depth0 != null ? depth0.content : depth0), depth0))
    + " </td>";
},"useData":true});
templates['questionError'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class='alert alert-danger' role='alert' style='display:inline-block;margin-bottom:10px;'>\n	<span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n	<span class=\"sr-only\">Error:</span>\n	Please enter a question.\n</div>";
  },"useData":true});
>>>>>>> e0d53154fe1654537f62e28f56f4227d6b7758b7
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
    return "<div class='addQuestion quest' style='background-color:white;padding-bottom:0px;'>\r\n	<table class='table table-condensed' style='height:100%;'>\r\n		<tr class='question-tr-sent'>\r\n			<td class='question-td-sent' colspan='2'>\r\n				"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.content : depth0), depth0))
    + "\r\n			</td>\r\n		</tr>\r\n		<tr class='answer-tr-sent'>\r\n			<td class='answer-td-sent'>\r\n				View Results\r\n			</td>\r\n		</tr>\r\n	</table>\r\n</div>\r\n\r\n";
},"useData":true});
})();
