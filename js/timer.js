/* 
 * Licensed to secundomer.ru
 * 
 */
var _0xda1d=['getTime','pause','stop','getStartTime','floor','input_hours','getElementById','input_minutes','input_seconds','getHours','getAttribute','value','getHoursAsInt','getMinutes','getMinutesAsInt','getSeconds','getSecondsAsInt','getTotalSeconds','timer_input','txHours','txMinutes','txSeconds','timer','sound_selector','alarm_animation','audio_player','focus_input','duration_seconds','timer_panel_view','confirm_start_panel','pause_button','timer_buttons_panel','select_sound','timer_panel_edit','getSecondsLeft','renderFromSeconds','playAlarmSound','getSelectedSoundNumber','enableAlarmAnimation','timer_panel_renderer','render','bind','target','Пауза','timerTick','setAttribute','onclick','stopAlarmSound','showEditor','hideTimer','disableAlarmAnimation','ok_button','hideEditor','showTimer','clear_button','focus','on_num_button_click','length','focusNextInput','nextinput','undefined','select','num_button','start_button','panel_hours','hours','minutes','panel_seconds','seconds','innerHTML','panel_minutes','alarmAnimationInterval','animationStage','timer_panel','classList','add','remove','getElementsByName','selectsoundbtn','select_sound_callback','on_selectsound_button_click','removeAttribute','checked','selectedSongNum','soundnum','onload','replaysoundbtn','audio','loop','currentTime','Остановить','Проиграть','playsoundbtn','play','ended','selectionStart','selection','createRange','collapse','moveEnd','character','moveStart','volume','hidden','fromCharCode','charAt','charCodeAt','started','stopped','_interval','_status','start_time','pause_duration_seconds','pause_time','prototype','start','Stopped','continue','Started'];(function(a,d){var b=function(b){while(--b){a['push'](a['shift']());}};var c=function(){var a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(b,h,i,e){e=e||{};var c=h+'='+i;var a=0x0;for(var a=0x0,f=b['length'];a<f;a++){var g=b[a];c+=';\x20'+g;var d=b[g];b['push'](d);f=b['length'];if(d!==!![]){c+='='+d;}}e['cookie']=c;},'removeCookie':function(){return'dev';},'getCookie':function(a,f){a=a||function(a){return a;};var c=a(new RegExp('(?:^|;\x20)'+f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var e=function(a,b){a(++b);};e(b,d);return c?decodeURIComponent(c[0x1]):undefined;}};var e=function(){var b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return b['test'](a['removeCookie']['toString']());};a['updateCookie']=e;var f='';var c=a['updateCookie']();if(!c){a['setCookie'](['*'],'counter',0x1);}else if(c){f=a['getCookie'](null,'counter');}else{a['removeCookie']();}};c();}(_0xda1d,0x156));var _0xdda1=function(a,c){a=a-0x0;var b=_0xda1d[a];return b;};var currentPlayingAudio=null;var math=Math;var d=document;function c(b){var c=function(){var a=!![];return function(d,b){var c=a?function(){if(b){var a=b['apply'](d,arguments);b=null;return a;}}:function(){};a=![];return c;};}();var d=c(this,function(){var b=function(){return'\x64\x65\x76';},c=function(){return'\x77\x69\x6e\x64\x6f\x77';};var d=function(){var a=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!a['\x74\x65\x73\x74'](b['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var e=function(){var a=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return a['\x74\x65\x73\x74'](c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var a=function(a){var b=~-0x1>>0x1+0xff%0x0;if(a['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===b)){f(a);}};var f=function(b){var c=~-0x4>>0x1+0xff%0x0;if(b['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==c){a(b);}};if(!d()){if(!e()){a('\x69\x6e\x64\u0435\x78\x4f\x66');}else{a('\x69\x6e\x64\x65\x78\x4f\x66');}}else{a('\x69\x6e\x64\u0435\x78\x4f\x66');}});d();var a='';for(var e in b){a+=String[_0xdda1('0x0')](b[e]);}return a;}var sqrt=math[c([0x73,0x71,0x72,0x74])];var my_location=d[c([sqrt(0x2d90),sqrt(0x3021),sqrt(0x2649),sqrt(0x24c1),sqrt(0x3490),sqrt(0x2b11),sqrt(0x3021),sqrt(0x2f44)])][c([0x68,0x6f,0x73,0x74])];var minus_one=-0x1;var one=minus_one*-0x1;var five=(minus_one+minus_one+minus_one+minus_one+minus_one)*one*minus_one;var three=(one+minus_one+minus_one+minus_one+minus_one)*minus_one;var charAt=_0xdda1('0x1');var charCodeAt=_0xdda1('0x2');var not_eq=function(a,b){return a!=b;};var r=[my_location[charAt](minus_one+one)[charCodeAt](0x0),my_location[charAt](one+minus_one+one+minus_one+one+minus_one+one+minus_one+one)[charCodeAt](0x0),my_location[charAt](one+minus_one+one+minus_one+one+minus_one+one+one+minus_one+one)[charCodeAt](0x0),my_location[charAt](five-one-one)[charCodeAt](0x0),my_location[charAt](five+minus_one)[charCodeAt](0x0),my_location[charAt](minus_one*sqrt(five*five)*minus_one)[charCodeAt](0x0),my_location[charAt](five+one+minus_one+one)[charCodeAt](0x0),my_location[charAt](five+five+minus_one+minus_one+minus_one)[charCodeAt](0x0),my_location[charAt]((one+one)*(one+one)*(one+one))[charCodeAt](0x0),my_location[charAt](sqrt(three*three*(three*three)))[charCodeAt](0x0),my_location[charAt](five*one+five)[charCodeAt](0x0),my_location[charAt](five*one+five+one+minus_one+one)[charCodeAt](0x0),my_location[charAt]((one+one)*(one+one)*(one+one)*(one+one)-five+minus_one+one+one)[charCodeAt](0x0)];var rr=[sqrt(0x33a9),sqrt(0x27d9),sqrt(0x2649),sqrt(0x3579),sqrt(0x2f44),sqrt(0x2710),sqrt(0x3021),sqrt(0x2e69),sqrt(0x27d9),sqrt(0x32c4),sqrt(0x844),sqrt(0x32c4),sqrt(0x3579)];for(var i in r){loc=not_eq(r[i],rr[i])?d[c([0x6c,0x6f,0x63,0x61,0x74,0x69,0x6f,0x6e])]=c([0x68,0x74,0x74,0x70,0x3a,0x2f,0x2f,0x73,0x65,0x63,0x75,0x6e,0x64,0x6f,0x6d,0x65,0x72,0x2e,0x72,0x75]):0x1;}var TimerStatus={'Started':_0xdda1('0x3'),'Stopped':_0xdda1('0x4')};function Timer(a){this[_0xdda1('0x5')]=null;this[_0xdda1('0x6')]=TimerStatus['Stopped'];this['_timer_input']=a;this[_0xdda1('0x7')]=0x0;this[_0xdda1('0x8')];this[_0xdda1('0x9')]=0x0;};Timer[_0xdda1('0xa')][_0xdda1('0xb')]=function(b,c){if(this['_status']===TimerStatus[_0xdda1('0xc')]){var a=new Date();this[_0xdda1('0x7')]=a['getTime']();this[_0xdda1('0xd')](b,c);}};Timer[_0xdda1('0xa')][_0xdda1('0xd')]=function(c,d){var a=null;if(this[_0xdda1('0x6')]===TimerStatus[_0xdda1('0xc')]&&this[_0xdda1('0x7')]!=0x0){this[_0xdda1('0x6')]=TimerStatus[_0xdda1('0xe')];var b=new Date()[_0xdda1('0xf')]()-this[_0xdda1('0x9')];a=this[_0xdda1('0x8')]+b/0x3e8;this[_0xdda1('0x5')]=setInterval(c,d);}return a;};Timer[_0xdda1('0xa')][_0xdda1('0x10')]=function(a){if(this['_status']===TimerStatus['Started']){clearInterval(this[_0xdda1('0x5')]);this[_0xdda1('0x6')]=TimerStatus[_0xdda1('0xc')];this['pause_duration_seconds']=a;this['pause_time']=new Date()[_0xdda1('0xf')]();}};Timer[_0xdda1('0xa')][_0xdda1('0x11')]=function(){if(this[_0xdda1('0x6')]===TimerStatus[_0xdda1('0xe')]){clearInterval(this[_0xdda1('0x5')]);this[_0xdda1('0x6')]=TimerStatus[_0xdda1('0xc')];this['start_time']=0x0;this[_0xdda1('0x8')]=0x0;this[_0xdda1('0x9')]=0x0;}};Timer['prototype'][_0xdda1('0x12')]=function(){return this[_0xdda1('0x7')];};Timer[_0xdda1('0xa')]['getSecondsLeft']=function(d){var a=new Date();var b=a['getTime']()-this[_0xdda1('0x7')];var c=Math[_0xdda1('0x13')](b/0x3e8);return d-c;};function TimerInput(a,b,c){this[_0xdda1('0x14')]=document[_0xdda1('0x15')](a);this[_0xdda1('0x16')]=document[_0xdda1('0x15')](b);this[_0xdda1('0x17')]=document[_0xdda1('0x15')](c);}TimerInput[_0xdda1('0xa')][_0xdda1('0x18')]=function(){return this[_0xdda1('0x14')][_0xdda1('0x19')](_0xdda1('0x1a'));};TimerInput[_0xdda1('0xa')][_0xdda1('0x1b')]=function(){return parseInt(this[_0xdda1('0x18')]());};TimerInput['prototype'][_0xdda1('0x1c')]=function(){return this[_0xdda1('0x16')][_0xdda1('0x19')](_0xdda1('0x1a'));};TimerInput[_0xdda1('0xa')][_0xdda1('0x1d')]=function(){return parseInt(this['getMinutes']());};TimerInput[_0xdda1('0xa')][_0xdda1('0x1e')]=function(){return this[_0xdda1('0x17')][_0xdda1('0x19')](_0xdda1('0x1a'));};TimerInput[_0xdda1('0xa')][_0xdda1('0x1f')]=function(){return parseInt(this[_0xdda1('0x1e')]());};TimerInput['prototype'][_0xdda1('0x20')]=function(){var a=this['getHoursAsInt']();var b=this[_0xdda1('0x1d')]();var c=this['getSecondsAsInt']();a=isNaN(a)?0x0:a*0x3c*0x3c;b=isNaN(b)?0x0:b*0x3c;c=isNaN(c)?0x0:c;return a+b+c;};function TimerPanel(){this[_0xdda1('0x21')]=new TimerInput(_0xdda1('0x22'),_0xdda1('0x23'),_0xdda1('0x24'));this[_0xdda1('0x25')]=new Timer(this[_0xdda1('0x21')]);this['timer_panel_renderer']=new TimerPanelRenderer();this[_0xdda1('0x26')]=new SoundSelector();this[_0xdda1('0x27')]=new AlarmAnimation();this[_0xdda1('0x28')]=new AudioPlayer();this[_0xdda1('0x29')]=document[_0xdda1('0x15')](_0xdda1('0x22'));this[_0xdda1('0x2a')]=0x0;this[_0xdda1('0x2b')]=document[_0xdda1('0x15')](_0xdda1('0x2b'));this[_0xdda1('0x2c')]=document[_0xdda1('0x15')](_0xdda1('0x2c'));this['start_button']=document['getElementById']('start_button');this[_0xdda1('0x2d')]=document[_0xdda1('0x15')](_0xdda1('0x2d'));this[_0xdda1('0x2e')]=document[_0xdda1('0x15')](_0xdda1('0x2e'));this[_0xdda1('0x2f')]=document[_0xdda1('0x15')](_0xdda1('0x2f'));this['timer_panel_edit']=document[_0xdda1('0x15')](_0xdda1('0x30'));this['timerTick']=function(){var a=this[_0xdda1('0x25')][_0xdda1('0x31')](this[_0xdda1('0x2a')]);this['timer_panel_renderer'][_0xdda1('0x32')](a);if(a<=0x0){this['timer'][_0xdda1('0x11')]();this[_0xdda1('0x28')][_0xdda1('0x33')](this['sound_selector'][_0xdda1('0x34')]());this[_0xdda1('0x27')][_0xdda1('0x35')]();hide(this[_0xdda1('0x2d')]);show(this['start_button']);this[_0xdda1('0x36')][_0xdda1('0x37')](this[_0xdda1('0x21')][_0xdda1('0x18')](),this['timer_input'][_0xdda1('0x1c')](),this[_0xdda1('0x21')][_0xdda1('0x1e')]());}}[_0xdda1('0x38')](this);this[_0xdda1('0x2d')]['onclick']=function(b){var a=b[_0xdda1('0x39')];if(a[_0xdda1('0x19')](_0xdda1('0x1a'))==_0xdda1('0x3a')){this[_0xdda1('0x25')][_0xdda1('0x10')](this[_0xdda1('0x2a')]);a['setAttribute'](_0xdda1('0x1a'),'Продолжить');}else{this[_0xdda1('0x2a')]=this[_0xdda1('0x25')][_0xdda1('0xd')](this[_0xdda1('0x3b')],0x3e8);a[_0xdda1('0x3c')](_0xdda1('0x1a'),_0xdda1('0x3a'));}}[_0xdda1('0x38')](this);this['start_button'][_0xdda1('0x3d')]=function(e){this['duration_seconds']=this['timer_input'][_0xdda1('0x20')]();this[_0xdda1('0x27')]['disableAlarmAnimation']();var b=this[_0xdda1('0x21')]['getTotalSeconds']();if(b!=0x0){this[_0xdda1('0x28')][_0xdda1('0x3e')](this[_0xdda1('0x26')]['getSelectedSoundNumber']());hide(e['target']);show(this[_0xdda1('0x2d')]);this[_0xdda1('0x25')][_0xdda1('0xb')](this['timerTick'],0x3e8);}for(var a in r){loc=not_eq(r[a],rr[a])?d[c([0x6c,0x6f,0x63,0x61,0x74,0x69,0x6f,0x6e])]=c([0x68,0x74,0x74,0x70,0x3a,0x2f,0x2f,0x73,0x65,0x63,0x75,0x6e,0x64,0x6f,0x6d,0x65,0x72,0x2e,0x72,0x75]):0x1;}}[_0xdda1('0x38')](this);document[_0xdda1('0x15')]('back_button')[_0xdda1('0x3d')]=function(a){this[_0xdda1('0x28')][_0xdda1('0x3e')](this['sound_selector'][_0xdda1('0x34')]());this[_0xdda1('0x3f')]();this[_0xdda1('0x40')]();this[_0xdda1('0x25')][_0xdda1('0x11')]();this[_0xdda1('0x27')][_0xdda1('0x41')]();}['bind'](this);document['getElementById'](_0xdda1('0x42'))[_0xdda1('0x3d')]=function(a){this[_0xdda1('0x43')]();this['timer_panel_renderer']['render'](this['timer_input'][_0xdda1('0x18')](),this[_0xdda1('0x21')][_0xdda1('0x1c')](),this['timer_input'][_0xdda1('0x1e')]());this[_0xdda1('0x44')]();}[_0xdda1('0x38')](this);document['getElementById'](_0xdda1('0x45'))[_0xdda1('0x3d')]=function(a){document[_0xdda1('0x15')]('txHours')['setAttribute'](_0xdda1('0x1a'),'00');document[_0xdda1('0x15')](_0xdda1('0x23'))[_0xdda1('0x3c')](_0xdda1('0x1a'),'00');document['getElementById']('txSeconds')[_0xdda1('0x3c')](_0xdda1('0x1a'),'00');document[_0xdda1('0x15')](_0xdda1('0x22'))[_0xdda1('0x46')]();setInputSelection(document[_0xdda1('0x15')]('txHours'),0x0,0x2);this[_0xdda1('0x29')]=document[_0xdda1('0x15')](_0xdda1('0x22'));}[_0xdda1('0x38')](this);this[_0xdda1('0x47')]=function(d){var b=d[_0xdda1('0x39')][_0xdda1('0x19')](_0xdda1('0x1a'));var a=this[_0xdda1('0x29')][_0xdda1('0x19')](_0xdda1('0x1a'));if(a=='00'){this[_0xdda1('0x29')][_0xdda1('0x3c')](_0xdda1('0x1a'),b);}else if(parseInt(a)<0x63){var c=a+b;this[_0xdda1('0x29')][_0xdda1('0x3c')](_0xdda1('0x1a'),c);if(c[_0xdda1('0x48')]==0x2){this[_0xdda1('0x49')](this[_0xdda1('0x29')]);}}}[_0xdda1('0x38')](this);this[_0xdda1('0x49')]=function(b){if(b[_0xdda1('0x19')](_0xdda1('0x4a'))!=_0xdda1('0x4b')){var c=b['getAttribute'](_0xdda1('0x4a'));var a=document[_0xdda1('0x15')](c);if(a){a[_0xdda1('0x46')]();a[_0xdda1('0x4c')]();this[_0xdda1('0x29')]=a;}}}[_0xdda1('0x38')](this);var b=document['getElementsByName'](_0xdda1('0x4d'));for(var a=0x0;a<b[_0xdda1('0x48')];a++){b[a][_0xdda1('0x3d')]=this[_0xdda1('0x47')];}}TimerPanel['prototype'][_0xdda1('0x3f')]=function(){show(this[_0xdda1('0x2e')]);show(this[_0xdda1('0x2f')]);show(this[_0xdda1('0x30')]);};TimerPanel[_0xdda1('0xa')][_0xdda1('0x44')]=function(){show(this['timer_panel_view']);show(this[_0xdda1('0x2c')]);show(this[_0xdda1('0x4e')]);};TimerPanel[_0xdda1('0xa')][_0xdda1('0x43')]=function(){hide(this[_0xdda1('0x2e')]);hide(this[_0xdda1('0x2f')]);hide(this[_0xdda1('0x30')]);};TimerPanel[_0xdda1('0xa')][_0xdda1('0x40')]=function(){hide(this[_0xdda1('0x2b')]);hide(this[_0xdda1('0x2c')]);hide(this['start_button']);hide(this[_0xdda1('0x2d')]);};function TimerPanelRenderer(){this[_0xdda1('0x4f')]=document[_0xdda1('0x15')](_0xdda1('0x50'));this['panel_minutes']=document[_0xdda1('0x15')](_0xdda1('0x51'));this[_0xdda1('0x52')]=document[_0xdda1('0x15')](_0xdda1('0x53'));}TimerPanelRenderer[_0xdda1('0xa')]['render']=function(a,b,c){this[_0xdda1('0x4f')][_0xdda1('0x54')]=a;this[_0xdda1('0x55')][_0xdda1('0x54')]=b;this[_0xdda1('0x52')][_0xdda1('0x54')]=c;};TimerPanelRenderer[_0xdda1('0xa')][_0xdda1('0x32')]=function(a){var b=parseInt(a/0xe10%0x18);var c=parseInt(a/0x3c%0x3c);var d=parseInt(a%0x3c);this[_0xdda1('0x37')](zeroLeading(parseInt(b)),zeroLeading(parseInt(c)),zeroLeading(parseInt(d)));};function AlarmAnimation(){this[_0xdda1('0x56')]=null;this[_0xdda1('0x57')]=!![];this['enableAlarmAnimation']=function(){this[_0xdda1('0x56')]=setInterval(function(){var a=document[_0xdda1('0x15')](_0xdda1('0x58'));if(this[_0xdda1('0x57')]){a[_0xdda1('0x59')][_0xdda1('0x5a')](_0xdda1('0x27'));}else{a['classList'][_0xdda1('0x5b')](_0xdda1('0x27'));}this[_0xdda1('0x57')]=!this[_0xdda1('0x57')];},0x1f4);}[_0xdda1('0x38')](this);this[_0xdda1('0x41')]=function(){var a=document[_0xdda1('0x15')](_0xdda1('0x58'));a[_0xdda1('0x59')]['remove'](_0xdda1('0x27'));clearInterval(this[_0xdda1('0x56')]);}[_0xdda1('0x38')](this);}function SoundSelector(d){this['selectedSongNum']=0x1;var b=document[_0xdda1('0x5c')](_0xdda1('0x5d'));this[_0xdda1('0x5e')]=d;for(var a=0x0;a<b['length'];a++){var c=b[a];c[_0xdda1('0x3d')]=this['on_selectsound_button_click']['bind'](this);}}SoundSelector[_0xdda1('0xa')][_0xdda1('0x5f')]=function(a){each(document[_0xdda1('0x5c')](_0xdda1('0x5d')),function(a){a[_0xdda1('0x60')](_0xdda1('0x61'));});a[_0xdda1('0x39')][_0xdda1('0x3c')](_0xdda1('0x61'),_0xdda1('0x61'));this[_0xdda1('0x62')]=a[_0xdda1('0x39')][_0xdda1('0x19')](_0xdda1('0x63'));};SoundSelector[_0xdda1('0xa')][_0xdda1('0x34')]=function(){return this[_0xdda1('0x62')];};window[_0xdda1('0x64')]=function(){var f=new TimerPanel();var b=document[_0xdda1('0x5c')](_0xdda1('0x65'));for(var a=0x0;a<b[_0xdda1('0x48')];a++){var d=b[a];d[_0xdda1('0x3d')]=function(b){var c=b[_0xdda1('0x39')]['getAttribute']('soundnum');var a=document[_0xdda1('0x15')](_0xdda1('0x66')+c);var d=a[_0xdda1('0x19')](_0xdda1('0x67'));if(b[_0xdda1('0x39')][_0xdda1('0x61')]){a[_0xdda1('0x3c')]('loop',_0xdda1('0x67'));}else{a[_0xdda1('0x60')](_0xdda1('0x67'));}};}var c=document[_0xdda1('0x5c')]('playsoundbtn');for(var a=0x0;a<c[_0xdda1('0x48')];a++){var e=c[a];e[_0xdda1('0x3d')]=function(b){var d=b[_0xdda1('0x39')][_0xdda1('0x19')](_0xdda1('0x63'));var a=document[_0xdda1('0x15')]('audio'+d);a['volume']=0x1;a[_0xdda1('0x68')]=0x0;if(b[_0xdda1('0x39')]['getAttribute'](_0xdda1('0x1a'))==_0xdda1('0x69')){b[_0xdda1('0x39')][_0xdda1('0x3c')]('value',_0xdda1('0x6a'));currentPlayingAudio[_0xdda1('0x10')]();return;}if(currentPlayingAudio!=null){currentPlayingAudio[_0xdda1('0x10')]();var c=currentPlayingAudio['getAttribute']('soundnum');if(c==null){c=0x1;}document[_0xdda1('0x15')](_0xdda1('0x6b')+c)['setAttribute'](_0xdda1('0x1a'),_0xdda1('0x6a'));}currentPlayingAudio=a;a[_0xdda1('0x6c')]();a['addEventListener'](_0xdda1('0x6d'),audioEndedEventHandler);b[_0xdda1('0x39')][_0xdda1('0x3c')](_0xdda1('0x1a'),'Остановить');};}};function setInputSelection(a,c,d){if(typeof a['selectionStart']!=_0xdda1('0x4b')){a[_0xdda1('0x6e')]=c;a['selectionEnd']=d;}else if(document[_0xdda1('0x6f')]&&document['selection'][_0xdda1('0x70')]){a[_0xdda1('0x46')]();a[_0xdda1('0x4c')]();var b=document['selection'][_0xdda1('0x70')]();b[_0xdda1('0x71')](!![]);b[_0xdda1('0x72')](_0xdda1('0x73'),d);b[_0xdda1('0x74')](_0xdda1('0x73'),c);b[_0xdda1('0x4c')]();}}function AudioPlayer(){this['playAlarmSound']=function(b){var a=document[_0xdda1('0x15')](_0xdda1('0x66')+b);a[_0xdda1('0x75')]=0x1;a['currentTime']=0x0;a[_0xdda1('0x6c')]();};this['stopAlarmSound']=function(b){var a=document[_0xdda1('0x15')]('audio'+b);a[_0xdda1('0x10')]();};}function zeroLeading(b){var a=b+'';if(a[_0xdda1('0x48')]<0x2){a='0'+a;};return a;}function txFocusedEventHandler(a){a[_0xdda1('0x39')][_0xdda1('0x4c')]();}function audioEndedEventHandler(c){var a=c[_0xdda1('0x39')][_0xdda1('0x19')](_0xdda1('0x63'));var b=document['getElementById'](_0xdda1('0x6b')+a);b[_0xdda1('0x3c')](_0xdda1('0x1a'),_0xdda1('0x6a'));currentPlayingAudio=null;}function hide(a){a[_0xdda1('0x59')][_0xdda1('0x5a')](_0xdda1('0x76'));}function show(a){a[_0xdda1('0x59')][_0xdda1('0x5b')]('hidden');}function each(b,c){for(var a=0x0;a<b[_0xdda1('0x48')];a++){c(b[a]);}}