
var loadQuestion = function(template, data) {
	data = data || {};
	$('#current-question-drafts').html(Handlebars.templates[template](data));
};

var sendQuestion = function(template, data, question, answers) {
	data = data || {};
	$('#sent-container').prepend(Handlebars.templates[template](data));
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

var editQuestion = function(template, question, answers) {
	// data = data || {};
	// var selector = "#" + id;
	$('#current-question-drafts').html(Handlebars.templates[template]());
	$('.add-question').prepend(Handlebars.templates['answer'](answers));
	$('.add-question').prepend(Handlebars.templates['question'](question));
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

	var answers = [];
	var finAns = [];

	$('.answers-' + id).each(function (index) {
		var curAnswers = [];
		var onlyReal = [];
		var ans = $(this).find('input[type=hidden]');
		for (i = 0; i < ans.length; i++) {
			if (ans[i].value !== "") {
				onlyReal.push(ans[i].value);
			}
			curAnswers.push(ans[i].value);
		}
		answers.push(curAnswers);
		finAns.push(onlyReal);
	});

	var arr = finAns[0];
	var hold = [7, 8, 4, 5].slice(0,arr.length);
	
	$(function () {
	    $('#container-' + id).highcharts({
	        chart: {
	            type: 'bar'
	        },
	        title: {
	            text: ''
	        },
	        xAxis: {
	            categories: arr
	        },
	        yAxis: {
	            title: {
	                text: 'Students'
	            }
	        },
	        series: [{
	            data: hold,
	            name: "Total"
	        }],
	        legend: {
	        	enabled: false
	        },
	        credits: {
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
	var inp = $(e.target).parent();
	var checked=$(e.target).is(':checked');
	var back=$(e.target).parent().parent().find(".form-control");
	if (back.val()!=""){
		if (checked){
			inp.css('background', "#C5FFC5");
		} else {
			inp.css('background', "#eee");
		}
	} else {
		$(e.target).prop('checked', false);
	}
});

$(document).on('keyup', ".form-control", function(e) {
	var t=$(e.target);
	var inp = $(e.target).parent().children()[0];
	var click = $(inp).children();
	if (t.attr("id")!="question"){
	    var checked=$(e.target).parent().find(".check").is(':checked');
	    if(t.val()==""){
			$(inp).css('background-color', "#eee");
			click.prop('checked', false);
	    } else if (checked){
	    	$(inp).css('background-color', "#C5FFC5");
	    } 
	}
});

$(document).on('click', '#save', function (e) {
	e.preventDefault();
	var t = $('.addQuestion').find('input[type=text]');
	var contents = grabContents(t);
	var q = $('.addQuestion').find('#question')[0].value;
	if (q == '') {
		$('.alert').remove();
		questionError('questionError');
		$('#question').focus();
	}
	else if (contents.length < 2) {
		$('.alert').remove();
		questionError('answerError');
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

$(document).on('click', '.edit', function (e) {
	var parent = $(this).parent();
	var question = $(parent).find('.question-content')[0].textContent;
	var answers = $(parent).find('.answer-content');
	var ans = [];
	for (i = 0; i < answers.length; i++) {
		ans.push(answers[i].innerText);
	}
	var q = question.substring(1);
	if (ans.length < 4) {
		ans[3] = '';
	}
	if (ans.length < 3) {
		ans[2] = '';
	}
	if (ans.length < 2) {
		ans[1] = '';
	} 
	editQuestion('editQuestion', q, { content : ans });
	$('#question').focus();
	$(parent).remove();
});

$(document).on('click', '#send', function (e) {
	e.preventDefault();
	var t = $('.addQuestion').find('input[type=text]');
	var contents = grabContents(t);
	var q = $('.addQuestion').find('#question')[0].value;
	if (q == '') {
		$('.alert').remove();
		questionError('questionError');
		$('#question').focus();
	}
	else if (contents.length < 2) {
		$('.alert').remove();
		questionError('answerError');
		$('#question').focus();
	}
	else {
		var id = Math.floor(Math.random() * 100000000000)
		sendQuestion('sendQuestion', id, contents[0], { content : contents.splice(1,contents.length) });
		$('#current-question-drafts').empty();
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
		addQuestionContent('questionContent', { content : questions[i] }, id);
		var curAns = answers[i];
		if (curAns.length > 1) {
			addAnswers('addAnswers', { content : [ curAns[0] , curAns[1] ], index : [1, 2] }, 'saved-answer-tr-1', id);
		}
		else {
			addAnswers('addAnswers', { content : [ curAns[0] , '' ], index : [1, 2] }, 'saved-answer-tr-1', id);
		}
		if (curAns.length > 3) {
			addAnswers('addAnswers', { content : [ curAns[2] , curAns[3] ], index : [1, 2] }, 'saved-answer-tr-2', id);
		}
		else if (answers.length == 4) {
			addAnswers('addAnswers', { content : [ curAns[2] , '' ], index : [1, 2] }, 'saved-answer-tr-2', id);
		}
	}
	$('#sent-container').empty();
});

$(document).on('click', '.hide-eye', function (e) {
	var parent = $(this).parent();
	var q = $(parent).find('.question-td-sent')[0].innerText;
	var answers = [];
	var ans = $(parent).find('input[type=hidden]');
	for (i = 0; i < ans.length; i++) {
		answers.push(ans[i].value);
	}
	var id = Math.floor(Math.random() * 100000000000);
	createTable('createTable', id);
	addQuestionContent('questionContent', { content : q }, id);
	if (answers.length > 1) {
		addAnswers('addAnswers', { content : [ answers[0] , answers[1] ] }, 'saved-answer-tr-1', id);
	}
	else {
		addAnswers('addAnswers', { content : [ answers[0] , ' ' ] }, 'saved-answer-tr-1', id);
	}
	if (answers.length > 3) {
		addAnswers('addAnswers', { content : [ answers[2] , answers[3] ] }, 'saved-answer-tr-2', id);
	}
	else if (answers.length == 4) {
		addAnswers('addAnswers', { content : [ answers[2] , ' ' ] }, 'saved-answer-tr-2', id);
	}
	$(parent).remove();
});

$(document).on('click', '.trash', function (e) {
	var parent = $(this).parent();
	$(parent).remove();
});

$(document).on('click', '#cancel', function (e) {
	var parent = $(this).parent().parent();
	$(parent).remove();
});

$(document).on('click', '.sendButton', function (e) {
	var top = $(this).closest('.saved-question');
	var q = $(top).find('.question-content')[0].innerText;
	var answers = $(top).find('.answer-content');
	var ans = [];
	for (i = 0; i < answers.length; i++) {
		var a = answers[i].innerText;
		ans.push(a);
	}
	var ID = $(top).find('.saved-question-tr')[0].id;
	sendQuestion('sendQuestion', ID, q, { content : ans });
	$(top).remove();
})

Handlebars.registerHelper("countEven", function(index_count, block) {
  if(parseInt(index_count)%2=== 0){
  	if (typeof(this[0]) !== "string") {
  		return block.fn("");
  	}
    return block.fn(this);}
});

Handlebars.registerHelper("countOdd", function(index_count, block) {
  if(parseInt(index_count)%2!== 0){
  	if (typeof(this[0]) !== "string") {
  		return block.fn("");
  	}
    return block.fn(this);}
});

var grabContents = function(elements) {
	var question = $(elements).find('#question');
	var answers = $(elements).find('.answer-form');
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
	}
	var secondAnswers = $(elem).find(sa).children('.answer-content');
	for (j = 0; j < secondAnswers.length; j++) {
		var curAnswer = secondAnswers[j];
		var answer = curAnswer.innerText;
		answersCur.push(answer);
	}
	return answersCur;
}




