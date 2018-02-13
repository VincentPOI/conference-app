var $ = require("jquery");
import TalkService from './common/talk.service';
import Layout from './layout/index';
import SpeakerList from './speakers/list/index';
import SessionList from './sessions/list/index';
import SpeakerDetail from './speakers/detail/index'
import accueil from './vues/accueil.html';
import listeSessions from './vues/listeSessions.html';
import listePresentateurs from './vues/listePresentateurs.html';
import speaker from './vues/speaker.html';

const talkService = new TalkService();
talkService.findAllSpeakers().then(speakers => console.log(speakers.map(speaker=>speaker.firstname)));
const layout = new Layout();
layout.render();
const speakerList = new SpeakerList();
const sessionList = new SessionList();
const speakerDetail = new SpeakerDetail();



var router = () => {
	if (location.hash == '#speakers-list') {
		$("#main-view").html(listePresentateurs);
		speakerList.render("listePresentateurs");
	} else if (location.hash == '#sessions-list') {
		$("#main-view").html(listeSessions);
		sessionList.render("listeSessions");
	 }
	 else if (location.hash.startsWith('#speaker[')) {
		let speakerId = location.hash.substring(location.hash.indexOf('[')+1,location.hash.indexOf("]"));
		$("#main-view").html(speaker);
		speakerDetail.render(speakerId);
	}
	else {
		$("#main-view").html(accueil);

	}
}
window.addEventListener('load', () => {
	window.onhashchange = () => {
		router();
	};
	router();
});
