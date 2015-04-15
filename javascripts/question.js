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
	$('.question').focus();
});

$(document).on('click', '.glyphicon-ok', function (e) {
	e.preventDefault();
	var back=$(e.target).parent().parent();
	var t=back.find('textarea');
	if (t.val()!==""){
		back.css('background', "#94FF94");
		t.css('background', "#94FF94");
	}
});

$(document).on('click', '.glyphicon-remove', function (e) {
	e.preventDefault();
	var back=$(e.target).parent().parent();
	var t=back.find('textarea');
	if (t.val()!==""){
		back.css('background', "#FF8080");
		t.css('background', "#FF8080");
	}
});

$(document).on('keyup', ".answer", function(e) {
    var t=$(e.target);	
    if(t.val()==""){
        t.parent().css('background', "#FFFFFF");
		t.css('background', "#FFFFFF");
    } else if (t.css("background-color")!="rgb(148, 255, 148)"){
    	t.parent().css('background', "#FF8080");
		t.css('background', "#FF8080");
    }
});

$(document).on('click', '#save', function (e) {
	e.preventDefault();
	var t = $('.addQuestion').find('input[type=text]');
	var contents = grabContents(t);
// <<<<<<< HEAD
// =======
// 	console.log(contents);
// >>>>>>> b4bac325dafe054877d1d23c0975c92264eb13e4
	if (contents.length < 1) {
		$('.alert').remove();
		questionError('questionError');
		$('#question').focus();
	}
	else {
		var id = Math.floor(Math.random() * 100000000000)
		createTable('createTable', id);
		addQuestionContent('questionContent', { content : contents[0] }, id);
		console.log(contents[1]);
		console.log(contents[2]);
		addAnswers('addAnswers', { content : [ contents[1], contents[2] ] }, 'saved-answer-tr-1', id);
		if (contents.length > 3) {
			addAnswers('addAnswers', { content : [ contents[3], contents[4] ] }, 'saved-answer-tr-2', id);
		}
	}
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
		sendQuestion('sendQuestion', { content : contents[0] });
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
})

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




