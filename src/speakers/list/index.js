var $ = require("jquery");
import TalkService from '../../common/talk.service';

export default class SpeakerList{
  render(idView){
    const talkService = new TalkService();
    $('#'+idView).html("<ul class='list-group'>");
    const listePresentateur = talkService.findAllSpeakers().then(speakers => speakers.map(speaker=> $('#'+idView).append("<li class='list-group-item'><a href='#speaker["+speaker.id+"]'>"+speaker.lastname+" "+speaker.firstname+"</a><span class='glyphicon glyphicon-chevron-right pull-right'></span></li>")));
    $('#'+idView).append("</ul>");
  }
}
