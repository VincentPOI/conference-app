var $ = require("jquery");
export default class TalkService{
  findAllSpeakers(){
    return $.get('http://localhost:3000/speakers');
  }
  findSpeakerById(idSpeaker){
    let req = ('http://localhost:3000/speakers/'+idSpeaker);
    return $.get(req);
  }
  findAllSessions(){
    return $.get('http://localhost:3000/sessions');
  }
  findAllSocials(idSpeaker){
    let req = ('http://localhost:3000/speakers/'+idSpeaker+'/socials');
    return $.get(req);
  }
  findSessionByIdSpeaker(idSpeaker){
    return $.get('http://localhost:3000/sessions?speakers_like='+idSpeaker);
  }
}
