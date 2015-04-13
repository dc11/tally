// $(document).ready(function() {


// });

var loadQuestion = function(template, data) {
	data = data || {};
	$('#current-question-drafts').html(Handlebars.templates[template](data));
};

var sendQuestion = function(template, data) {
	data = data || {};
	$('#sent-container').prepend(Handlebars.templates[template](data));
	$('#current-question-drafts').empty();
}

var createTable = function(template, data) {
	data = data || {};
	$('#all-questions-drafts').prepend(Handlebars.templates[template](data));
	$('#current-question-drafts').empty();
}

var addQuestionContent = function(template, data) {
	data = data || {};
	$('.saved-question-tr').html(Handlebars.templates[template](data));
}

var addAnswers = function(template, data, element) {
	data = data || {};
	$('.' + element).html(Handlebars.templates[template](data));
}

$(document).on('click', '#add', function (e) {
	e.preventDefault();
	var newQuestion = '';
	loadQuestion('addQuestion');
});

$(document).on('click', '#save', function (e) {
	e.preventDefault();
	var t = $('.addQuestion').find('textarea');
	var contents = grabContents(t);
	createTable('createTable');
	addQuestionContent('questionContent', { content : contents[0] });
	addAnswers('addAnswers', { content : [ contents[1], contents[2] ] }, 'saved-answer-tr-1');
	if (contents.length > 3) {
		addAnswers('addAnswers', { content : [ contents[3], contents[4] ] }, 'saved-answer-tr-2');
	}
});

$(document).on('click', '#send', function (e) {
	e.preventDefault();
	var t = $('.addQuestion').find('textarea');
	var contents = grabContents(t);
	sendQuestion('sendQuestion', { content : contents[0] });
});

$(document).on('click', '#delete-sent', function (e) {
	e.preventDefault();
	$('#sent-container').empty();
});

$(document).on('click', '#delete-drafts', function (e) {
	e.preventDefault();
	$('#all-questions-drafts').empty();
});

var grabContents = function(elements) {
	console.log(elements)
	var question = [];
	for (i = 0; i < 5; i++) {
		var element = elements[i];
		if (element.value != '') {
			question.push(element.value);
		}
	}
	return question;
}




