module.exports.en_aliases = (prompts, _prompts) => {
  prompts.set('pfp', { worker: _prompts.avatar, language: 'en' })
  prompts.set('cat', { worker: _prompts.cat, language: 'en' })
  prompts.set('pick', { worker: _prompts.choose, language: 'en' })
  prompts.set('remove', { worker: _prompts.delete, language: 'en' })
  prompts.set('rm', { worker: _prompts.delete, language: 'en' })
  prompts.set('dog', { worker: _prompts.dog, language: 'en' })
  prompts.set('puppy', { worker: _prompts.dog, language: 'en' })
  prompts.set('docs', { worker: _prompts.help, language: 'en' })
  prompts.set('wiki', { worker: _prompts.library, language: 'en' })
  prompts.set('wikipedia', { worker: _prompts.library, language: 'en' })
  prompts.set('namu', { worker: _prompts.namuwiki, language: 'en' })
  prompts.set('pong', { worker: _prompts.ping, language: 'en' })
  prompts.set('probability', { worker: _prompts.probability, language: 'en' })
}

module.exports.ko = (prompts, _prompts) => {
  prompts.set('아바타', { worker: _prompts.avatar, language: 'ko' })
  prompts.set('고양이', { worker: _prompts.cat, language: 'ko' })
  prompts.set('선택', { worker: _prompts.choose, language: 'ko' })
  prompts.set('강아지', { worker: _prompts.dog, language: 'ko' })
  prompts.set('삭제', { worker: _prompts.delete, language: 'ko' })
  prompts.set('도움말', { worker: _prompts.help, language: 'ko' })
  prompts.set('라이브러리', { worker: _prompts.library, language: 'ko' })
  prompts.set('나무위키', { worker: _prompts.namuwiki, language: 'ko' })
  prompts.set('네코', { worker: _prompts.neko, language: 'ko' })
  prompts.set('질의', { worker: _prompts.ping, language: 'ko' })
  prompts.set('확률', { worker: _prompts.probability, language: 'ko' })
  prompts.set('준비', { worker: _prompts.ready, language: 'ko' })
  prompts.set('가위바위보', { worker: _prompts.rps, language: 'ko' })
  prompts.set('검색', { worker: _prompts.search, language: 'ko' })
  prompts.set('부끄러워', { worker: _prompts.shy, language: 'ko' })
  prompts.set('서버정보', { worker: _prompts.serverinfo, language: 'ko' })
  prompts.set('사용자정보', { worker: _prompts.userinfo, language: 'ko' })
}

module.exports.ko_aliases = (prompts, _prompts) => {
  prompts.set('프로필사진', { worker: _prompts.avatar, language: 'ko' })
  prompts.set('프사', { worker: _prompts.avatar, language: 'ko' })
  prompts.set('냥이', { worker: _prompts.cat, language: 'ko' })
  prompts.set('캣', { worker: _prompts.cat, language: 'ko' })
  prompts.set('뽑기', { worker: _prompts.choose, language: 'ko' })
  prompts.set('고르기', { worker: _prompts.choose, language: 'ko' })
  prompts.set('강아지', { worker: _prompts.dog, language: 'ko' })
  prompts.set('개', { worker: _prompts.dog, language: 'ko' })
  prompts.set('제거', { worker: _prompts.delete, language: 'ko' })
  prompts.set('지우기', { worker: _prompts.delete, language: 'ko' })
  prompts.set('도움', { worker: _prompts.help, language: 'ko' })
  prompts.set('위키백과', { worker: _prompts.library, language: 'ko' })
  prompts.set('위백', { worker: _prompts.library, language: 'ko' })
  prompts.set('나무위키', { worker: _prompts.namuwiki, language: 'ko' })
  prompts.set('나무', { worker: _prompts.namuwiki, language: 'ko' })
  prompts.set('나뮈', { worker: _prompts.namuwiki, language: 'ko' })
  prompts.set('네코', { worker: _prompts.neko, language: 'ko' })
  prompts.set('핑', { worker: _prompts.ping, language: 'ko' })
  prompts.set('퐁', { worker: _prompts.ping, language: 'ko' })
  prompts.set('확률', { worker: _prompts.probability, language: 'ko' })
  prompts.set('준비', { worker: _prompts.ready, language: 'ko' })
  prompts.set('가바보', { worker: _prompts.rps, language: 'ko' })
  prompts.set('구글', { worker: _prompts.search, language: 'ko' })
  prompts.set('부끄', { worker: _prompts.shy, language: 'ko' })
  prompts.set('서버정보', { worker: _prompts.serverinfo, language: 'ko' })
  prompts.set('유저정보', { worker: _prompts.userinfo, language: 'ko' })
  prompts.set('prob', { worker: _prompts.probability, language: 'ko' })
}
