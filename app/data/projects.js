var PROJECTS = [];

function Project() {
	this.index = index;
	this.title = title;
	this.extraInfo = extraInfo;
}




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
	addProject(1, "forward", 'Forward', 'Client Name', 'UX, Design', 'img/work1.jpg');
	addProject(2, "roche-cms", 'Roche CMS', 'Client Name', 'UX, Design', 'img/work2.jpg');
	addProject(3, "mei-li-rose", 'Mei-li Rose', 'Client Name', 'UX, Design', 'img/work3.jpg');
}

addAll();

module.exports = PROJECTS

