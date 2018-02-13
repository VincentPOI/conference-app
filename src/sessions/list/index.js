var $ = require("jquery");
import TalkService from '../../common/talk.service';

export default class SessionList{
  render(idView){
    const talkService = new TalkService();
    $('#'+idView).html("<ul class='list-group'>");
    const listeSession = talkService.findAllSessions().then(sessions => sessions.map(session=> $('#'+idView).append("<li class='list-group-item'><a href='#'>"+session.title+"</a><span class='glyphicon glyphicon-chevron-right pull-right'></span></li>")));
  }
}
