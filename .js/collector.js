var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    (function(){var COOKIE_NAME='webs-stats-visitor-id';var COOKIE_DURATION=1;var data=window.webs&&webs.stats;if(!data){return;}
        var url=data.collectorUrl;if(!url){return;}
        delete data.collectorUrl;data.referrer=document.referrer;data.location=window.location.href;data.visitorId=getVisitorId();var qs='?'+(function(){var list=[];for(var k in data){list.push(''+encodeURIComponent(k)+'='+encodeURIComponent(data[k]));}
            return list.join('&');})();var img=document.createElement('img');img.setAttribute('src',url+qs);img.setAttribute('height',1);img.setAttribute('width',1);img.style.position='fixed';img.style.left='0px';img.style.bottom='0px';document.body.appendChild(img);function getVisitorId(){var vid=readCookie(COOKIE_NAME);if(vid){return vid;}
            vid=Math.floor(Math.random()*1000000000);createCookie(COOKIE_NAME,vid,COOKIE_DURATION);return vid;}
        function createCookie(name,value,days){var expires;if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires='; expires='+date.toGMTString();}else{expires='';}
            document.cookie=name+'='+value+expires+'; path=/';}
        function readCookie(name){var nameEQ=name+'=';var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1,c.length);}
            if(c.indexOf(nameEQ)===0){return c.substring(nameEQ.length,c.length);}}
            return null;}
        function eraseCookie(name){createCookie(name,'',-1);}})();

}
/*
     FILE ARCHIVED ON 11:06:29 Oct 05, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:35:47 Aug 05, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.594
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.017
  esindex: 0.01
  cdx.remote: 18.901
  LoadShardBlock: 308.584 (6)
  PetaboxLoader3.datanode: 230.453 (8)
  load_resource: 117.146 (2)
  PetaboxLoader3.resolve: 75.497 (2)
*/
