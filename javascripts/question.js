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

<<<<<<< HEAD
$(document).on('keyup', ".answer", function(e) {
    var t=$(e.target);	
    if(t.val()==""){
        t.parent().css('background', "#FFFFFF");
		t.css('background', "#FFFFFF");
    } else if (t.css("background-color")!="rgb(148, 255, 148)"){
    	t.parent().css('background', "#FF8080");
		t.css('background', "#FF8080");
    }
=======
$(document).on('keyup', ".form-control", function(e) {
	var t=$(e.target);
	if (t.attr("id")!="question"){
	    var checked=$(e.target).parent().find(".check").is(':checked');
	    if(t.val()==""){
			t.css('background', "#FFFFFF");
	    } else if (checked){
	    	t.css('background', "#94FF94");
	    } else {
			t.css('background', "#FF8080");
	    }
	}
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
=======
	else {
		var id = Math.floor(Math.random() * 100000000000);
		createTable('createTable', id);
		addQuestionContent('questionContent', { content : contents[0] }, id);
		addAnswers('addAnswers', { content : [ contents[1], contents[2] ] }, 'saved-answer-tr-1', id);
		if (contents.length > 3) {
			addAnswers('addAnswers', { content : [ contents[3], contents[4] ] }, 'saved-answer-tr-2', id);
		}
	}
});

$(document).on('mouseover', ".quest", function (e) {
		console.log("death");
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
	// console.log(elements);
=======
<<<<<<< HEAD
	console.log(elements)
=======
	console.log(elements);
>>>>>>> d5abd2bfb0c029054a79fab8fa5ba302c976a668
	var question = $(elements).find('#question');
	var answers = $(elements).find('.answer-form');
	// console.log(question);
	console.log(answers)
>>>>>>> FETCH_HEAD
	var question = [];
	for (i = 0; i < 5; i++) {
		var element = elements[i];
		if (element.value != '') {
			question.push(element.value);
		}
	}
	return question;
}




