
var loadQuestion = function(template, data) {
	data = data || {};
	$('#current-question-drafts').html(Handlebars.templates[template](data));
};

var sendQuestion = function(template, data, question, answers) {
	data = data || {};
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
	$(selector).html(Handlebars.templates[template](data));
}

var questionError = function(template, data) {
	data = data || {};
	$('.save-send').prepend(Handlebars.templates[template](data));
}

var viewResults = function(template, data, id) {
	data = data || {};
	var selector = "#" + id;
	$(selector).html(Handlebars.templates[template](data));
}

$(document).on('click', '#add', function (e) {
	e.preventDefault();
	var newQuestion = '';
	loadQuestion('addQuestion');
	$('#question').focus();
});

$(document).on('click', '#view', function (e) {
	e.preventDefault();
	var id = $(this).parent()[0].id;
	viewResults('results', {id: id}, id);

	var questions = [];
	var answers = [];
	$('.sent-question').each(function (index) {
		var q = $(this).find('.question-td-sent')[0].innerText;
		questions.push(q);
		var curAnswers = [];
		var ans = $(this).find('input[type=hidden]');
		for (i = 0; i < ans.length; i++) {
			curAnswers.push(ans[i].value);
		}
		answers.push(curAnswers);
	});
	
	$(function () {
	    $('#container-' + id).highcharts({
	        chart: {
	            type: 'bar'
	        },
	        title: {
	            text: ''
	        },
	        xAxis: {
	            categories: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
	        },
	        yAxis: {
	            title: {
	                text: 'Students'
	            }
	        },
	        series: [{
	            data: [7, 8, 4, 5],
	            name: "Total"
	        }],
	        legend: {
	        	enabled: false
	        }
	    });
	});
});

$(document).on('click', '#closeResults', function (e) {
	e.preventDefault();
	var id = $(this).parent()[0].id;
	viewResults('view', {}, id);
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
});

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
	var ids = []
	var answers = [];
	$('.saved-question').each( function (index) {
		var q = $(this).find('.question-content')[0];
		var question = q.textContent;
		var ID = $(this).find('.saved-question-tr')[0].id;
		ans = grabAnswers(this, ID);
		answers.push(ans);
		questions.push(question);
		ids.push(ID);
	});
	for (i = 0; i < questions.length; i++) {
		sendQuestion('sendQuestion', ids[i], questions[i], { content : answers[i] });
	}
	$('#all-questions-drafts').empty();
});

$(document).on('click', '#hide-all', function (e) {
	var questions = [];
	var answers = [];
	$('.sent-question').each(function (index) {
		var q = $(this).find('.question-td-sent')[0].innerText;
		questions.push(q);
		var curAnswers = [];
		var ans = $(this).find('input[type=hidden]');
		for (i = 0; i < ans.length; i++) {
			curAnswers.push(ans[i].value);
		}
		answers.push(curAnswers);
	});
	for (i = 0; i < questions.length; i++) {
		var id = Math.floor(Math.random() * 100000000000);
		createTable('createTable', id);
		console.log(questions[i]);
		addQuestionContent('questionContent', { content : questions[i] }, id);
		var curAns = answers[i];
		if (curAns.length > 1) {
			addAnswers('addAnswers', { content : [ curAns[0] , curAns[1] ] }, 'saved-answer-tr-1', id);
		}
		else {
			addAnswers('addAnswers', { content : [ curAns[0] , '' ] }, 'saved-answer-tr-1', id);
		}
		if (curAns.length > 3) {
			addAnswers('addAnswers', { content : [ curAns[2] , curAns[3] ] }, 'saved-answer-tr-2', id);
		}
		else {
			addAnswers('addAnswers', { content : [ curAns[2] , '' ] }, 'saved-answer-tr-2', id);
		}
	}
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

var grabAnswers = function(elem, id) {
	var fa = '.saved-answer-tr-1-' + id;
	var sa = '.saved-answer-tr-2-' + id;
	var answersCur = [];
	var firstAnswers = $(elem).find(fa).children('.answer-content');
	for (j = 0; j < firstAnswers.length; j++) {
		var curAnswer = firstAnswers[j];
		var answer = curAnswer.innerText;
		answersCur.push(answer);
		console.log(answer)
	}
	var secondAnswers = $(elem).find(sa).children('.answer-content');
	for (j = 0; j < secondAnswers.length; j++) {
		var curAnswer = secondAnswers[j];
		var answer = curAnswer.innerText;
		answersCur.push(answer);
		console.log(answer)
	}
	return answersCur;
}




