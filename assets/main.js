(function(){
 var $=function(i){return document.getElementById(i)};
 var menu=$('menu'),nav=$('nav');
 function setMenu(o){nav.classList.toggle('open',o);menu.setAttribute('aria-expanded',o);menu.setAttribute('aria-label',o?'Fechar menu':'Abrir menu')}
 menu.addEventListener('click',function(){setMenu(!nav.classList.contains('open'))});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});
 var y=$('ano');if(y)y.textContent=new Date().getFullYear();
 var p=$('prog');function sc(){var h=document.documentElement;var m=h.scrollHeight-h.clientHeight;p.style.transform='scaleX('+(m>0?h.scrollTop/m:0)+')'}
 window.addEventListener('scroll',sc,{passive:true});sc();
 var subs=document.querySelectorAll('.sub a');
 if(subs.length&&'IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){subs.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-40% 0px -55% 0px'});
  document.querySelectorAll('.person').forEach(function(s){io.observe(s)});
 }
 var f=$('form');if(!f)return;
 var WA='244938313789',MAIL='geralkriativuz@gmail.com',st=$('status'),q=new URLSearchParams(location.search);
 if(q.get('servico')){var s=$('servico');for(var i=0;i<s.options.length;i++)if(s.options[i].text===q.get('servico'))s.selectedIndex=i}
 if(q.get('evento'))$('msg').value='Tenho um evento: '+q.get('evento')+'. Data e local: ';
 function build(){var n=$('nome').value.trim(),m=$('msg').value.trim();
  if(!n||!m){st.className='err';st.textContent='Preencha o nome e a mensagem para continuar.';(!n?$('nome'):$('msg')).focus();return null}
  var e=$('empresa').value.trim();return 'Olá, Kriativuz! Chamo-me '+n+(e?' ('+e+')':'')+'.\nServiço: '+$('servico').value+'\n\n'+m}
 f.addEventListener('submit',function(ev){ev.preventDefault();var t=build();if(!t)return;var u='https://wa.me/'+WA+'?text='+encodeURIComponent(t);st.className='';st.textContent='A abrir o WhatsApp com a sua mensagem…';var w=window.open(u,'_blank','noopener');if(!w)location.href=u});
 $('mail').addEventListener('click',function(){var t=build();if(!t)return;st.className='';st.textContent='A abrir o seu email…';location.href='mailto:'+MAIL+'?subject='+encodeURIComponent('Pedido de orçamento – '+$('servico').value)+'&body='+encodeURIComponent(t)});
})();
