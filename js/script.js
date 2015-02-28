function loadJson(lang) {
	$.getJSON('js/data.json', function(data) {
		console.log( "Json in " + lang + " loaded successfully" );

		var html = '',
		container = $('code');
		container.html('');


		/*$.each(data, function(key) {
			html += '<p>' + key + '</p>';
		});*/
		html += '<p>/* resume.css */</p>';
		html += '<p>&nbsp;</p>';

		/* -------------- General Info -------------- */
		html += '<p>#contact-info {</p>';
		$.each(data.bio, function(key) {
			switch (key) {
				case "address":
					html += '<p>' + key +': url("' + '<a href="' + this.gmapsLink + '" target="_blank">' + this.streetName + '</a>' + '");</p>';
					break;
				case "email":
					html += '<p>' + key +': ' + '<a href="mailto:' + this + '">' + this + '</a>' + ';</p>';
					break;
				case "phone":
					html += '<p>' + key +': rgba(' + this + ');</p>';
					break;
				default: 
					html += '<p>' + key +': ' + this + ';</p>';
			}
		});
		html += '<p>}</p>';
		html += '<p>&nbsp;</p>';

		/* -------------- Work Experience -------------- */
		html += '<p>/* Work Experience */</p>';

		$.each(data.workExperience, function(workplaceNumber) {
			html += '<p>#work-experience ' + data.workExperience[workplaceNumber].classname[lang] + ' {</p>';
			$.each(data.workExperience[workplaceNumber], function(key) {
				if (key !== "classname" && key !== "link") {
					if (key === "work-place") {
						console.log();
						html += '<p>' + key +': ' + '<a href="' + data.workExperience[workplaceNumber].link[lang] + '">' + this[lang] + '</a>' + ';</p>';
					}
					else if (key === "responsibilities") {
						html += '<p>' + key +': ';
						/*for (var i in this.responsibilities[lang]) {*/
						for (var i = 0; i <= this[lang].length - 1; i++ ) {
							if (i === this[lang].length - 1) {
								html += '<span>' + this[lang][i] +';</span>';
							} else {
								html += '<span>' + this[lang][i] +',<br></span>';
							}
						}
						html += '</p>';
					}
					else {
						html += '<p>' + key +': ' + this[lang] + ';</p>';
					}
				}
			});
			html += '<p>}</p>';
			html += '<p>&nbsp;</p>';
		});

		/* -------------- Education -------------- */
		html += '<p>/* Education */</p>';

		$.each(data.education, function(universityNumber) {
			html += '<p>#education:' + data.education[universityNumber].classname[lang] + ' {</p>';
			$.each(data.education[universityNumber], function(key) {
				if (key !== "classname") {
					html += '<p>' + key +': ' + this[lang] + ';</p>';
				}   
			});
			html += '<p>}</p>';
			html += '<p>&nbsp;</p>';
		});

		/* -------------- Skills -------------- */
		html += '<p>/* My Skills */</p>';
		$.each(data.skills, function(diferentSkills) {
			html += '<p>#skills ' + '.' + diferentSkills + ' {</p>';

			switch (diferentSkills) {
				case "languageSkills":
					$.each(data.skills[diferentSkills], function(key) {
						html += '<p>' + key + ': '+ this[lang] + ';</p>';
					});
					break;
				case "professionalSkills":
					$.each(data.skills[diferentSkills], function(key) {
						html += '<p>' + key + ': '+ this + ';</p>';
					});
			}
			html += '<p>}</p>';
			if (diferentSkills !== "professionalSkills") {
				html += '<p>&nbsp;</p>';
			}
		});

		container.append(html);
	})
	.done(function() {
		$('code').each(function(i, block) {
			hljs.highlightBlock(block);
		});
	})
	.fail(function() {
		console.log( "Error!" );
	});
}

$(document).ready(function() {
	console.log('Smile! You\'re on camera :)');
	loadJson("english");
	$('#code-box').slimScroll({
		height: '490px',
		size: '8px',
		color: '#fff',
		alwaysVisible: true,
		distance: '1px',
		railVisible: true,
		railColor: '#212121',
		railOpacity: 1,
		allowPageScroll: false,
		disableFadeOut: false
	});

	$('footer').html('<p>&copy; ' + new Date().getFullYear() + '. All Rights Reserved.</p>');

	$('#english').click(function() {
		loadJson("english");
		$(".lang-switcher").removeClass('active');
		$(this).parents(".lang-switcher").addClass('active');
		return false;
	});

	$('#russian').click(function() {
		loadJson("russian");
		$(".lang-switcher").removeClass('active');
		$(this).parents(".lang-switcher").addClass('active');
		return false;
	});

	$('#czech').click(function() {
		loadJson("czech");
		$(".lang-switcher").removeClass('active');
		$(this).parents(".lang-switcher").addClass('active');
		return false;
	});

	$('#top-bar a').click(function() {
		return false;
	});
});