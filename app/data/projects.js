var PROJECTS = [];

function addProject(title, client, fields, bgImage) {
	PROJECTS.push({
		title: title,
		client: client,
		fields: fields,
		bgImg: bgImage
	})
}

function addAll() {
	addProject('Quisque Sit Amet Mi Eleifend', 'Client Name', 'UX, Design', 'img/work1.jpg');
	addProject('Lorem Ipsum Dolor', 'Client Name', 'UX, Design', 'img/work2.jpg');
	addProject('Consectetur Adipiscing Elit', 'Client Name', 'UX, Design', 'img/work3.jpg');
}

addAll();

module.exports = PROJECTS

