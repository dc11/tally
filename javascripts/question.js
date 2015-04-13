// $(document).ready(function() {


// });

var loadQuestion = function(template, data) {
	data = data || {};
	$('#drafts-container').html(Handlebars.templates[template](data));
};

$(document).on('click', '#add', function (e) {
	e.preventDefault();
	var newQuestion = '';
	loadQuestion('addQuestion');
	// $('#drafts-container').prepend('e')
})