var editCard = function(template, data, parent) {
	data = data || {};
	parent.html(Handlebars.templates[template](data));
}

$(document).on('click', '.edit', function (e) {
	e.preventDefault();
	var parent = $(this).parent().parent().parent();
	var content = $(parent).find('.className')[0].textContent;

	editCard('classEdit',{name: content}, parent);
	var children = parent.children();
	var focus = children[0].children[1];
	focus.focus();
});

$(document).on('click', '.editLec', function (e) {
	e.preventDefault();
	var parent = $(this).parent().parent().parent();
	var content = $(parent).find('.className')[0].textContent;

	editCard('lecEdit',{name: content}, parent);
	var children = parent.children();
	var focus = children[0].children[1];
	focus.focus();
});

$(document).on('click', '.cancel', function (e) {
	e.preventDefault();
	var parent = $(this).parent().parent();
	var content = $(parent).find("input[type=hidden]")[0];
	var className = $(content).val();

	editCard('classCard',{name: className}, parent);
});

$(document).on('click', '.cancelLec', function (e) {
	e.preventDefault();
	var parent = $(this).parent().parent();
	var content = $(parent).find("input[type=hidden]")[0];
	var className = $(content).val();

	editCard('lectureCard',{name: className}, parent);
});

$(document).on('click', '.save', function (e) {
	e.preventDefault();
	var parent = $(this).parent().parent();
	var content = $(parent).find("input[type=text]")[0];
	var className = $(content).val();
	var hidden = $(parent).find("input[type=hidden]")[0];
	var oldName = $(hidden).val();

	console.log(className.trim().length)
	if (className.trim().length > 0) {
		editCard('classCard',{name: className}, parent);
	} else {
		editCard('classCard',{name: oldName}, parent);
	}
});

$(document).on('click', '.saveLec', function (e) {
	e.preventDefault();
	var parent = $(this).parent().parent();
	var content = $(parent).find("input[type=text]")[0];
	var className = $(content).val();
	var hidden = $(parent).find("input[type=hidden]")[0];
	var oldName = $(hidden).val();

	console.log(className.trim().length)
	if (className.trim().length > 0) {
		editCard('lectureCard',{name: className}, parent);
	} else {
		editCard('lectureCard',{name: oldName}, parent);
	}
});