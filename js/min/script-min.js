function loadCV(e){$.getJSON("js/data.json",function(a){console.log("Json in "+e+" loaded successfully");var s="",i=$("code");i.html(""),s+="<p>/* resume.css */</p>",s+="<p>&nbsp;</p>",s+="<p>#contact-info {</p>",$.each(a.bio,function(e){switch(e){case"address":s+="<p>"+e+': url("<a href="'+this.gmapsLink+'" target="_blank">'+this.streetName+'</a>");</p>';break;case"email":s+="<p>"+e+': <a href="mailto:'+this+'">'+this+"</a>;</p>";break;case"phone":s+="<p>"+e+": rgba("+this+");</p>";break;default:s+="<p>"+e+": "+this+";</p>"}}),s+="<p>}</p>",s+="<p>&nbsp;</p>",s+="<p>/* Work Experience */</p>",$.each(a.workExperience,function(i){s+="<p>#work-experience "+a.workExperience[i].classname[e]+" {</p>",$.each(a.workExperience[i],function(n){if("classname"!==n&&"link"!==n)if("work-place"===n)console.log(),s+="<p>"+n+': <a href="'+a.workExperience[i].link[e]+'">'+this[e]+"</a>;</p>";else if("responsibilities"===n){s+="<p>"+n+": ";for(var t=0;t<=this[e].length-1;t++)s+=t===this[e].length-1?"<span>"+this[e][t]+";</span>":"<span>"+this[e][t]+",<br></span>";s+="</p>"}else s+="<p>"+n+": "+this[e]+";</p>"}),s+="<p>}</p>",s+="<p>&nbsp;</p>"}),s+="<p>/* Education */</p>",$.each(a.education,function(i){s+="<p>#education:"+a.education[i].classname[e]+" {</p>",$.each(a.education[i],function(a){"classname"!==a&&(s+="<p>"+a+": "+this[e]+";</p>")}),s+="<p>}</p>",s+="<p>&nbsp;</p>"}),s+="<p>/* My Skills */</p>",$.each(a.skills,function(i){switch(s+="<p>#skills ."+i+" {</p>",i){case"languageSkills":$.each(a.skills[i],function(a){s+="<p>"+a+": "+this[e]+";</p>"});break;case"professionalSkills":$.each(a.skills[i],function(e){s+="<p>"+e+": "+this+";</p>"})}s+="<p>}</p>","professionalSkills"!==i&&(s+="<p>&nbsp;</p>")}),i.append(s)}).done(function(){$("code").each(function(e,a){hljs.highlightBlock(a)})}).fail(function(){console.log("Error!")})}function loadInstragramPhotos(){var e=new Instafeed({get:"user",userId:1632422781,accessToken:"1632422781.0cf4cd7.a07484a4a5dd4ef3a0f6a0cd004235a5",resolution:"low_resolution",template:'<a href="{{link}}" rel="nofollow" target="_blank"><img class="owl-lazy" data-src="{{image}}" /></a>',limit:20,after:function(){$("#instafeed").owlCarousel({smartSpeed:1e3,lazyLoad:!0,loop:!0,margin:10,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:3,dots:!0},768:{items:5,nav:!1},992:{items:7}}})}});e.run()}function getFoursquareLocation(){var e="OIYPE4RLDTJ0VADWQZ5143V02Q2MEG0NNYBO0HCJBJFVFS4M",a="18827111",s="https://api.foursquare.com/v2/users/self/checkins?oauth_token="+e+"&v=20150301&limit=1";$(function(){$.ajax({type:"GET",dataType:"jsonp",cache:!1,url:s,success:function(e){$("#foursquare").attr({href:"https://foursquare.com/user/"+a+"/checkin/"+e.response.checkins.items[0].id,title:e.response.checkins.items[0].venue.name}).text(e.response.checkins.items[0].venue.name)}})})}$(document).ready(function(){console.log("Smile! You're on camera :)"),getFoursquareLocation(),loadCV("english"),loadInstragramPhotos(),$("#code-box").slimScroll({height:"490px",size:"8px",color:"#fff",alwaysVisible:!0,distance:"1px",railVisible:!0,railColor:"#212121",railOpacity:1,allowPageScroll:!1,disableFadeOut:!1}),$("footer .wrapper").html("<p>&copy; "+(new Date).getFullYear()+". All Rights Reserved.</p>"),$("#english").click(function(){return loadCV("english"),$(".lang-switcher").removeClass("active"),$(this).parents(".lang-switcher").addClass("active"),!1}),$("#russian").click(function(){return loadCV("russian"),$(".lang-switcher").removeClass("active"),$(this).parents(".lang-switcher").addClass("active"),!1}),$("#czech").click(function(){return loadCV("czech"),$(".lang-switcher").removeClass("active"),$(this).parents(".lang-switcher").addClass("active"),!1}),$("#top-bar a").click(function(){return!1})});