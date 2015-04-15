
var loadQuestion = function(template, data) {
	data = data || {};
	$('#current-question-drafts').html(Handlebars.templates[template](data));
};

var sendQuestion = function(template, data, question, answers) {
	data = data || {};
	console.log(answers);
	$('#sent-container').prepend(Handlebars.templates[template](data));
	$('#current-question-drafts').empty();
	var qSelector = '.question-tr-sent-' + data;
	$(qSelector).html(Handlebars.templates['sentQuestionContent'](question));
	var aSelector = '.answers-' + data;
	$(aSelector).html(Handlebars.templates['sentAnswerContent'](answers));
}

var createTable = function(template, data) {
	data = data || {};
	$('#all-questions-drafts').prepend(Handlebars.templates[template](data));
	$('#current-question-drafts').empty();
}

var addQuestionContent = function(template, data, id) {
	data = data || {};
	var selector = "#" + id + "";
	$(selector).html(Handlebars.templates[template](data));
}

var addAnswers = function(template, data, element, id) {
	data = data || {};
	var selector = "." + element + "-" + id;
	console.log(selector);
	console.log($(selector));
	$(selector).html(Handlebars.templates[template](data));
}

var questionError = function(template, data) {
	data = data || {};
	$('.save-send').prepend(Handlebars.templates[template](data));
}

$(document).on('click', '#add', function (e) {
	e.preventDefault();
	var newQuestion = '';
	loadQuestion('addQuestion');
	$('#question').focus();
});

$(document).on('click', '.check', function (e) {
	var checked=$(e.target).is(':checked');
	var back=$(e.target).parent().parent().find(".form-control");
	if (back.val()!=""){
		if (checked){
			back.css('background', "#94FF94");
		} else {
			back.css('background', "#FF8080");
		}
	} 
});

$(document).on('keyup', ".form-control", function(e) {
    var t=$(e.target);
    var checked=$(e.target).parent().find(".check").is(':checked');
    if(t.val()==""){
		t.css('background', "#FFFFFF");
    } else if (checked){
    	t.css('background', "#94FF94");
    } else {
		t.css('background', "#FF8080");
    }

});

var counter = 1;
$(document).on('click', '#save', function (e) {
	e.preventDefault();
	var t = $('.addQuestion').find('input[type=text]');
	var contents = grabContents(t);
	if (contents.length < 1) {
		$('.alert').remove();
		questionError('questionError');
		$('#question').focus();
	}
	else {
		var id = counter;
		createTable('createTable', id);
		addQuestionContent('questionContent', { content : contents[0] }, id);
		addAnswers('addAnswers', { content : [ contents[1], contents[2] ] }, 'saved-answer-tr-1', id);
		if (contents.length > 3) {
			addAnswers('addAnswers', { content : [ contents[3], contents[4] ] }, 'saved-answer-tr-2', id);
		}
		counter += 1;
	}
});

$(document).on('mouseover', ".saved-question-tr", function (e) {
		
});

$(document).on('click', '#send', function (e) {
	e.preventDefault();
	var t = $('.addQuestion').find('input[type=text]');
	var contents = grabContents(t);
	if (contents.length < 1) {
		$('.alert').remove();
		questionError('questionError');
		$('#question').focus();
	}
	else {
		var id = Math.floor(Math.random() * 100000000000)
		sendQuestion('sendQuestion', id, contents[0], { content : contents.splice(1,contents.length) });
	}
});

$(document).on('click', '#delete-sent', function (e) {
	e.preventDefault();
	$('#sent-container').empty();
});

$(document).on('click', '#delete-drafts', function (e) {
	e.preventDefault();
	$('#all-questions-drafts').empty();
});

$(document).on('click', '#send-all', function (e) {
	var questions = [];
	$('.saved-question').each( function (index) {
		var q = $(this).find('.question-content')[0];
		var question = q.textContent;
		questions.push(question);
	});
	questions.forEach( function (question) {
		sendQuestion('sendQuestion', { content : question });
	});
	$('#all-questions-drafts').empty();
});
var counter2 = 1;
$(document).on('click', '#hide-all', function (e) {
	var questions = [];
	$('.question-td-sent').each(function (index) {
		var q = $(this)[0];
		questions.push(q.innerText);
	});
	questions.forEach( function (question) {
		var id = counter2;
		createTable('createTable', id);
		addQuestionContent('questionContent', { content : question }, id);
		addAnswers('addAnswers', { content : [ '' , '' ] }, 'saved-answer-tr-1', id);
		addAnswers('addAnswers', { content : [ '' , '' ] }, 'saved-answer-tr-2', id);
		counter2 += 1;
		// if (contents.length > 3) {
		// 	addAnswers('addAnswers', { content : [ contents[3], contents[4] ] }, 'saved-answer-tr-2', id);
		// }	
	});
	$('#sent-container').empty();
});

var grabContents = function(elements) {
	var question = [];
	for (i = 0; i < 5; i++) {
		var element = elements[i];
		if (element.value != '') {
			question.push(element.value);
		}
	}
	return question;
}




