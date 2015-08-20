var PROJECTS = [];

function addProject(index, link, title, client, fields, bgImage) {
	PROJECTS.push({
		index: index,
		link: link,
		title: title,
		client: client,
		fields: fields,
		bgImg: bgImage
	})
}

function addAll() {
	addProject(1, "Forward", 'Forward', 'Client Name', 'UX, Design', 'img/work1.jpg');
	addProject(2, "Roche-CMS", 'Roche CMS', 'Client Name', 'UX, Design', 'img/work2.jpg');
	addProject(3, "Mei-li-Rose", 'Mei-li Rose', 'Client Name', 'UX, Design', 'img/work3.jpg');
}

addAll();

module.exports = PROJECTS

