(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.detekt = factory();
  }
})(this, function() {
  'use strict';

  const services = {
    '500px': 'https://500px.com/login?r=%2Ffavicon.ico',
    academia: 'https://www.academia.edu/login?cp=/favicon.ico&cs=www',
    airbnb: 'https://www.airbnb.com/login?redirect_params[action]=favicon.ico&redirect_params[controller]=home',
    amazon: 'https://www.amazon.com/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico',
    battlenet: 'https://eu.battle.net/login/de/index?ref=http://eu.battle.net/favicon.ico',
    bitbucket: 'https://bitbucket.org/account/signin/?next=/favicon.ico',
    blogger: 'https://accounts.google.com/ServiceLogin?service=blogger&hl=de&passive=1209600&continue=https://www.blogger.com/favicon.ico',
    carbonmade: 'https://carbonmade.com/signin?returnTo=favicon.ico',
    disqus: 'https://disqus.com/profile/login/?next=https%3A%2F%2Fdisqus.com%2Ffavicon.ico',
    dropbox: 'https://www.dropbox.com/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Fabout%2Fdropbox_logo_glyph_2015.svg',
    edx: 'https://courses.edx.org/login?next=/favicon.ico',
    expedia: 'https://www.expedia.de/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico',
    facebook: 'https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp',
    foursquare: 'https://de.foursquare.com/login?continue=%2Ffavicon.ico',
    github: 'https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Ffavicon.ico%3Fid%3D1',
    gmail: 'https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail',
    googleplus: 'https://plus.google.com/up/accounts/upgrade/?continue=https://plus.google.com/favicon.ico',
    hackernews: 'https://news.ycombinator.com/login?goto=y18.gif%23',
    indeed: 'https://secure.indeed.com/account/login?continue=%2ffavicon.ico',
    khanacademy: 'https://www.khanacademy.org/login?continue=https%3A//www.khanacademy.org/favicon.ico',
    medium: 'https://medium.com/m/signin?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default',
    meetup: 'https://secure.meetup.com/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Fimg%2Fajax_loader_trans.gif',
    paypal: 'https://www.paypal.com/signin?returnUri=https://t.paypal.com/ts?v=1.0.0',
    pinterest: 'https://www.pinterest.com/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico',
    reddit: 'https://www.reddit.com/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico',
    skype: 'https://login.skype.com/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico',
    slack: 'https://slack.com/checkcookie?redir=https%3A%2F%2Fslack.com%2Ffavicon.ico%23',
    spotify: 'https://www.spotify.com/en/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico',
    square: 'https://squareup.com/login?return_to=%2Ffavicon.ico',
    steam: 'https://store.steampowered.com/login/?redir=favicon.ico',
    tumblr: 'https://www.tumblr.com/login?redirect_to=%2Ffavicon.ico',
    twitter: 'https://twitter.com/login?redirect_after_login=%2f..%2ffavicon.ico',
    vk: 'https://vk.com/login?u=2&to=ZmF2aWNvbi5pY28-',
    youtube: 'https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube',
  };

  return function(service, callback) {
    if (!services.hasOwnProperty(service)) {
      return setTimeout(function() {
        callback(new Error('Service ' + service + ' is unsupported.'));
      }, 0);
    }

    const img = document.createElement('img');

    img.onload  = function() { callback(null, true); };
    img.onerror = function() { callback(null, false); };
    img.src     = services[service];
  };
});
