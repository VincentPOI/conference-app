var $ = require("jquery");
import TalkService from '../../common/talk.service';

export default class SpeakerDetail{

	render(idView){
		const talkService = new TalkService();
		const sessionService = new TalkService();
		let speaker = talkService.findSpeakerById(idView)
		.then(sp => {
			let urlImage = "/images/"+sp.image;
			let titre = sp.lastname+" "+sp.firstname;
			$("#titre").html(titre);
			$("#image").attr("src",urlImage );
			sp.socials.forEach(social => $("#listeLiens").append("<a href='"+social.link+"'>"+social.class+"</a><br>"));
			sessionService.findSessionByIdSpeaker(sp.id).then(se => se.forEach( session => $("#listePresentations").append("<a href='"+session.title+"'>"+session.title+"</a><br>")));
			// sessionService.findSessionByIdSpeaker(sp.id).forEach(session => $("#listePresentations").append("<a href='"+session.title+"'>"+session.title+"</a><br>"));
		});

		// $("#titre").;
		// $("#image").;
		// $("#listeLiens").;
		// $("#listePresentations").;

	}
}
