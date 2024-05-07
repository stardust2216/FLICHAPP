
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","background":"#efeff4","navigationBar":{"backgroundColor":"#F8F8F8","titleText":"uni-app","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"FLICHAPP","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"4.08","entryPagePath":"pages/start","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#333333","selectedColor":"#333333","borderStyle":"black","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","backgroundColor":"#ffffff","list":[{"pagePath":"pages/Consult/Consult","iconPath":"/static/趣学资讯.png","selectedIconPath":"/static/趣学资讯2.png","text":"趣学资讯"},{"pagePath":"pages/Lesson/Lesson","iconPath":"/static/趣学课程.png","selectedIconPath":"/static/趣学课程2.png","text":"趣学课程"},{"pagePath":"pages/index/index","iconPath":"/static/趣学非遗2.png","selectedIconPath":"/static/趣学非遗.png","text":"趣学非遗"},{"pagePath":"pages/experience/experience","iconPath":"/static/趣学体验.png","selectedIconPath":"/static/趣学体验2.png","text":"趣学体验"},{"pagePath":"pages/stillmore/stillmore","iconPath":"/static/趣学更多.png","selectedIconPath":"/static/趣学更多2.png","text":"趣学更多"}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/start","meta":{"isQuit":true,"isEntry":true,"navigationBar":{"style":"custom","type":"default"},"isNVue":false}},{"path":"pages/Consult/Consult","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"style":"custom","type":"default"},"isNVue":false}},{"path":"pages/Lesson/Lesson","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"style":"custom","type":"default"},"isNVue":false}},{"path":"pages/index/index","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"navigationBar":{"style":"custom","type":"default"},"isNVue":false}},{"path":"pages/experience/experience","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"navigationBar":{"style":"custom","type":"default"},"isNVue":false}},{"path":"pages/stillmore/stillmore","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":4,"navigationBar":{"style":"custom","type":"default"},"isNVue":false}},{"path":"pages/stillmore/IntangibleHeritageMart","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"非遗商城","type":"default"},"isNVue":false}},{"path":"pages/stillmore/FunLearnCustom","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"趣学定制","type":"default"},"isNVue":false}},{"path":"pages/stillmore/ContactUs","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"联系我们","type":"default"},"isNVue":false}},{"path":"pages/stillmore/Communication","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"交流区","type":"default"},"isNVue":false}},{"path":"pages/Consult/figure","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"人物介绍","type":"default"},"isNVue":false}},{"path":"pages/Consult/Information","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"综合咨讯","type":"default"},"isNVue":false}},{"path":"pages/Consult/AiChat/AiChat","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"AI问答","type":"default"},"isNVue":false}},{"path":"pages/experience/AR","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"AR体验","type":"default"},"isNVue":false}},{"path":"pages/experience/challenge","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"线上闯关","type":"default"},"isNVue":false}},{"path":"pages/experience/study","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"线下研学","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  