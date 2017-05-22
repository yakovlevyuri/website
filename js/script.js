function loadCV(lang) {
	$.getJSON('js/data.json', function(data) {
		var html = '',
		container = $('code');
		container.html('');

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
			html += '<p>#work-experience:' + data.workExperience[workplaceNumber].classname[lang] + ' {</p>';
			$.each(data.workExperience[workplaceNumber], function(key) {
				if (key !== "classname" && key !== "link") {
					if (key === "work-place") {
						html += '<p>' + key +': ' + '<a href="' + data.workExperience[workplaceNumber].link[lang] + '" target="_blank">' + this[lang] + '</a>' + ';</p>';
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
				case "language-skills":
					$.each(data.skills[diferentSkills], function(key) {
						html += '<p>' + key + ': '+ this[lang] + ';</p>';
					});
					break;
				case "professional-skills":
					$.each(data.skills[diferentSkills], function(key) {
						html += '<p>' + key + ': '+ this + ';</p>';
					});
			}
			html += '<p>}</p>';
			if (diferentSkills !== "professional-skills") {
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

function getFoursquareLocation() {
	var accessToken = "OIYPE4RLDTJ0VADWQZ5143V02Q2MEG0NNYBO0HCJBJFVFS4M",
	userID = "18827111",
	startUrl = "https://api.foursquare.com/v2/users/self/checkins?oauth_token=" + accessToken + "&v=20150301&limit=1";

	$(function() {
		$.ajax({
			type: "GET",
			dataType: "jsonp",
			cache: false,
			url: startUrl,
			success: function(data) {
				$("#foursquare").attr({
					href: "https:\/\/foursquare.com\/user\/" + userID + "\/checkin\/" + data.response.checkins.items[0].id,
					title: data.response.checkins.items[0].venue.name
				}).text(
					data.response.checkins.items[0].venue.name
				);
			}
		});
	});
}

$(document).ready(function() {
	getFoursquareLocation();
	loadCV("english");

	/*$('#code-box').slimScroll({
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
	});*/

	$('.top-bar-button').click(function() {
		$('#editor').fadeOut(function(){
			$('header').after('<p class="egg">Boom!</p>');
		});
	});
	
	$('.current-year').html(new Date().getFullYear());

	$('.switcher').click(function() {
		var thisID = $(this).attr('id');

		loadCV(thisID);
		$(".lang-switcher").removeClass('active');
		$('#' + thisID).parents(".lang-switcher").addClass('active');
		return false;
	});

	$('#top-bar a').click(function() {
		return false;
	}); 
});