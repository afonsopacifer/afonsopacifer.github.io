(self.webpackChunkafonsopacifer_github_io=self.webpackChunkafonsopacifer_github_io||[]).push([[374],{7689:function(e,o,a){"use strict";a.r(o),a.d(o,{default:function(){return F}});var r=a(7294),t=a(5526),n=a(2905),s=a(1330),i=a(3145),c=a(5074),d=a(4474),m=a(7368),p=a.n(m),l=a(3281),u=a.n(l),f=a(2796),h=a.n(f),v=a(5893);function b(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,r)}return a}function g(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?b(Object(a),!0).forEach((function(o){y(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function y(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function j(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,t,n=[],s=!0,i=!1;try{for(a=a.call(e);!(s=(r=a.next()).done)&&(n.push(r.value),!o||n.length!==o);s=!0);}catch(c){i=!0,t=c}finally{try{s||null==a.return||a.return()}finally{if(i)throw t}}return n}(e,o)||function(e,o){if(!e)return;if("string"==typeof e)return S(e,o);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return S(e,o)}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,o){(null==o||o>e.length)&&(o=e.length);for(var a=0,r=new Array(o);a<o;a++)r[a]=e[a];return r}var C=function(e){var o,a=e.onClick,t=e.children,n=e.disabled,s=e.toggle,i=e.haspopup,c=e.id,d=e.pressed,m=void 0!==d&&d,p=j((0,r.useState)(!1),2),l=p[0],u=p[1];(0,r.useEffect)((function(){(s||i)&&u(m)}),[m]);var f=(y(o={className:"button ".concat(n?"button--disabled":""),id:c},"aria-pressed",s?l:null),y(o,"aria-expanded",i?l:null),y(o,"aria-controls",i?c+"-popup":null),y(o,"aria-haspopup",i?"true":null),y(o,"disabled",n),y(o,"onClick",(function(){(s||i)&&u(!l),a&&a()})),o);return(0,v.jsx)("button",g(g({},f),{},{children:(0,v.jsxs)("span",{className:"button__content",tabIndex:"-1",children:[t,i&&(0,v.jsx)(h(),{className:"button__toggle__icon"})]})}))},w=function(e){var o=e.label,a=e.id,r=e.onChange;return(0,v.jsxs)("div",{className:"checkbox",children:[(0,v.jsx)("input",{className:"checkbox__input",type:"checkbox",id:a,name:a,onChange:r}),(0,v.jsx)("label",{className:"checkbox__label",htmlFor:a,children:o})]})};function x(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||M(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,t,n=[],s=!0,i=!1;try{for(a=a.call(e);!(s=(r=a.next()).done)&&(n.push(r.value),!o||n.length!==o);s=!0);}catch(c){i=!0,t=c}finally{try{s||null==a.return||a.return()}finally{if(i)throw t}}return n}(e,o)||M(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,o){if(e){if("string"==typeof e)return A(e,o);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?A(e,o):void 0}}function A(e,o){(null==o||o>e.length)&&(o=e.length);for(var a=0,r=new Array(o);a<o;a++)r[a]=e[a];return r}var E=function(e){var o=e.label,a=e.options,t=void 0===a?[]:a,n=e.setFilters,s=e.filters,i=void 0===s?[]:s,c=e.id,d=(0,r.useRef)(),m=q((0,r.useState)(!1),2),p=m[0],l=m[1];(0,r.useEffect)((function(){var e=function(e){p&&d.current&&!d.current.contains(e.target)&&l(!1)};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}),[p]);var u=function(e){var o=e.target;o.checked?n((function(e){return[].concat(x(e),[o.id])})):n((function(e){return e.filter((function(e){return e!==o.id}))}))},f=t.map((function(e,o){return(0,v.jsx)(w,{label:e.label,id:e.id,onChange:u},o)}));return(0,v.jsxs)("div",{className:"filter",ref:d,children:[(0,v.jsxs)(C,{onClick:function(){return l(!p)},haspopup:!0,id:c,pressed:p,children:[i.length?(0,v.jsxs)("span",{className:"filter__counter","data-testid":"counter",children:[" ",i.length," "]}):null,o]}),(0,v.jsx)("div",{"aria-labelledby":c,id:c+"-popup",className:"filter__dropdown ".concat(p&&"filter__dropdown--show"),"data-testid":"popup",children:f})]})},k=function(e,o){return function(a){if(!e.length)return!0;var r=e.filter((function(e){return e===a[o]}));return r.length}};function z(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,t,n=[],s=!0,i=!1;try{for(a=a.call(e);!(s=(r=a.next()).done)&&(n.push(r.value),!o||n.length!==o);s=!0);}catch(c){i=!0,t=c}finally{try{s||null==a.return||a.return()}finally{if(i)throw t}}return n}(e,o)||function(e,o){if(!e)return;if("string"==typeof e)return P(e,o);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return P(e,o)}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,o){(null==o||o>e.length)&&(o=e.length);for(var a=0,r=new Array(o);a<o;a++)r[a]=e[a];return r}var F=function(){var e=z((0,r.useState)([]),2),o=e[0],a=e[1];return(0,v.jsxs)(t.Z,{children:[(0,v.jsx)(i.Z,{title:"Articles"}),(0,v.jsxs)(d.Z,{children:[(0,v.jsxs)("h1",{className:"heading heading--lv1",children:[(0,v.jsx)("strong",{className:"heading--underline",children:" Blog posts "})," about the tech world."]}),(0,v.jsxs)("p",{className:"text",children:["I started writing to record my journey through the ",(0,v.jsx)("a",{href:"https://johnresig.com/blog/write-code-every-day/",className:"link",children:"write code every day"})," challenge in 2015",(0,v.jsxs)("em",{className:"text--hand-drawing",children:[" (inpired by ",(0,v.jsx)("a",{href:"https://raphamorim.io/about/",target:"_blank",className:"link",children:"Raphael Amorim"})," and ",(0,v.jsx)("a",{href:"https://johnresig.com/about/",target:"_blank",className:"link",children:"John Resig"}),")"]}),"."]}),(0,v.jsx)("p",{className:"text",children:"Many years later, here are my beloved articles about engineering, design and career."}),(0,v.jsxs)(c.Z,{href:"https://dev.to/afonsopacifer/",children:[(0,v.jsx)(p(),{}),"Follow me on DEV / ",(0,v.jsx)("b",{className:"text--highlight",children:"+39k post views"})]}),(0,v.jsxs)(c.Z,{href:"https://medium.com/@afonsopacifer",children:[(0,v.jsx)(u(),{}),"Follow me on Medium / ",(0,v.jsx)("b",{className:"text--highlight",children:"+500 Followers"})]})]}),(0,v.jsx)(E,{label:"Filter by lang",id:"lang",setFilters:a,filters:o,options:[{label:"Portuguese",id:"pt-br"},{label:"English",id:"en"},{label:"Chinese",id:"zh"}]}),(0,s.Z)(n,k(o,"lang"))]})}},7368:function(e,o,a){var r=a(7294);function t(e){return r.createElement("svg",e,r.createElement("path",{d:"M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"}))}t.defaultProps={viewBox:"0 32 447.99999999999994 448",width:"24",height:"24"},e.exports=t,t.default=t},3281:function(e,o,a){var r=a(7294);function t(e){return r.createElement("svg",e,r.createElement("path",{d:"M24 24h-24v-24h24v24zm-4.03-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"}))}t.defaultProps={width:"24",height:"24",fillRule:"evenodd",clipRule:"evenodd",viewBox:"0 0 24 24"},e.exports=t,t.default=t},2796:function(e,o,a){var r=a(7294);function t(e){return r.createElement("svg",e,r.createElement("path",{d:"M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"}))}t.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=t,t.default=t},2905:function(e){"use strict";e.exports=JSON.parse('{"articles_2020":[{"event":"如何保持对个人项目的热情？","date":"Sep 11 2020","description":"我觉得这是一个简单但深刻的问题。许多人下定决心开始做自己的个人项目，刚开始的几天感到非常兴奋，但是没过多久热情就消失了——这中间发生了什么？","url":"https://mp.weixin.qq.com/s/xHgadCpm18MW7JTcEVGfsg","platform":"WeChat","lang":"zh","highlights":true,"image":"articles/how-you-can-stay-motivated-zh.jpg"},{"event":"5 ideas for personal projects using vanilla javascript","date":"Sep 02 2020","description":"Building personal projects is one of the must-have habits for any developer, but a big question appears for many developers that make the process stop: What project am I going to do?","url":"https://dev.to/afonsopacifer/5-ideas-for-personal-projects-using-vanilla-javascript-1p2m","platform":"DEV","lang":"en"},{"event":"How you can stay motivated to work on personal projects","date":"Ago 17 2020","description":"I believe this is a simple but deep question. Many people start new side projects and get very excited at the beginning, but after a few days, the energy is gone. WTF happen?","url":"https://dev.to/afonsopacifer/how-you-can-stay-motivated-to-work-on-personal-projects-565a","platform":"DEV","lang":"en","highlights":true,"image":"articles/how-you-can-stay-motivated.jpg"},{"event":"How I became a senior javascript developer with personal projects","date":"Ago 10 2020","description":"I decided to create my tools, not for commercial propose, but to know how these technologies actually work and to improve my tech skills. This is a short story about how this decision changed my life.","url":"https://dev.to/afonsopacifer/how-i-became-a-senior-javascript-developer-with-personal-projects-1lpo","platform":"DEV","lang":"en","highlights":true,"image":"articles/how-i-became-a-senior-javascript-developer.jpg"}],"articles_2019":[{"event":"Arquitetura para aplicações REST com express (node.js) #01: Cada escolha uma renúncia","date":"Fev 19 2019","description":"É complicado entender a necessidade de algo que não temos, nunca vimos ou ouvimos falar. Para termos o que comparar, vou apresentar um conceito que é um dos pilares do famoso e super desenvolvido Ruby on Rails.","url":"https://dev.to/afonsopacifer/arquitetura-para-aplicacoes-rest-com-express-node-js-01-cada-escolha-uma-renuncia-21e4","platform":"DEV","lang":"pt-br"}],"articles_2018":[{"event":"Guia para empoderar pessoas através de HTML e Realidade Virtual","date":"Jun 22 2018","description":"Durante muito tempo, vários dos ditos “programadores” zombaram dos amiguinhos focados em client side dizendo coisas como “quem trabalha com HTML não é programador de verdade” ou o meu favorito “HTML é coisa de criança”, pois é, quem diria que esse povinho estava parcialmente correto.","url":"https://medium.com/@afonsopacifer/guia-para-empoderar-pessoas-atrav%C3%A9s-de-html-e-realidade-virtual-7798b8e7d57e","platform":"Medium","lang":"pt-br","highlights":true,"image":"articles/guia-para-empoderar-pessoas.jpg"},{"event":"Do Front-End ao Node.js #02: Módulos Globais, dicas de npm e criando sua primeira CLI do zero.","date":"Feb 03 2018","description":"Vamos criar uma ferramenta de linha de comando do absoluto zero e com poucas linhas de Javascript para demostrar de forma prática o verdadeiro poder dos módulos globais.","url":"https://codepen.io/afonsopacifer/post/do-front-end-ao-nodejs-02-modulos-globais-dicas-de-npm-e-criando-sua-primeira-cli-do-zero","platform":"Codepen","lang":"pt-br"},{"event":"Do Front-End ao Node.js #01: Introdução, Módulos e File System.","date":"Jan 11 2018","description":"Se você tem um background como desenvolvedor Front-End e já chegou a usar alguma ferramenta baseada em Node.js (Gulp, stylus, etc…) mas, não entende como elas funcionam por trás dos panos ou, tem curiosidade sobre como o Back-End disponibiliza aqueles endpoints mágicos através de APIs, você está no lugar certo!","url":"https://codepen.io/afonsopacifer/post/do-front-end-ao-node-js-01-introducao","platform":"Codepen","lang":"pt-br"}],"articles_2017":[{"event":"Mindset para aplicações baseadas em componentes no Front-End — Parte 2: react-router","date":"Sep 27 2017","description":"Agora que aprendermos alguns termos e princípios durante o primeiro artigo da série, temos uma base para construir nosso primeiro exemplo com códigos, vamos lá!","url":"https://medium.com/@afonsopacifer/mindset-para-aplica%C3%A7%C3%B5es-baseadas-em-componentes-no-front-end-parte-2-react-router-b13259be9360","platform":"Medium","lang":"pt-br"},{"event":"Mindset para aplicações baseadas em componentes no Front-End — Parte 1","date":"Sep 22 2017","description":"Hoje vamos conversar sobre uma mudança de mindset que todo desenvolvedor Front-End precisa ter. Não veremos códigos neste artigo, apenas a base teórica sobre como devemos compor nossas aplicações utilizando componentes.","url":"https://medium.com/@afonsopacifer/mindset-para-aplica%C3%A7%C3%B5es-baseadas-em-componentes-no-front-end-parte-1-ab15e3733e5c","platform":"Medium","lang":"pt-br"},{"event":"Desmistificando um futuro chamado Polymer 3","date":"Sep 12 2017","description":"Fala pessoal, hoje vou desmistificar um pouco a história do Polymer Project, tentar tirar algumas dúvidas frequentes, localiza-los na linha do tempo e apresentar um futuro chamado Polymer 3.","url":"https://medium.com/@afonsopacifer/desmistificando-um-futuro-chamado-polymer-3-ae0476cf8c0a","platform":"Medium","lang":"pt-br"},{"event":"Nem só de Front-End Week SP vive o homem!","date":"Jul 29 2017","description":"Durante a Front-End Week SP 2017, eu e o Diogo Moretti fizemos uma cobertura no Youtube de todos os eventos e tivemos vários feedbacks, muita gente que participou dos eventos curtiu rever o que vivenciaram, porém tivemos muitos feedbacks de pessoas fora de São Paulo querendo ter algo do tipo em suas cidades e com os olhinhos brilhando vendo os encontros.","url":"https://medium.com/@afonsopacifer/nem-s%C3%B3-de-front-end-week-sp-vive-o-homem-9a1cddc2170a","platform":"Medium","lang":"pt-br"},{"event":"Não me “importo” em usar Web Components com PUG, afinal, ninguém disse que não podia ;)","date":"April 30 2017","description":"Hoje vamos conversar sobre duas coisas que sou pessoalmente apaixonado: Web Components e HTML Template Engines. Vou apresentar uma abordagem diferente para compor nossas páginas utilizando apenas três das quatro especificações que compõem um Web Component.","url":"https://medium.com/@afonsopacifer/web-components-com-pug-62b265129977","platform":"Medium","lang":"pt-br"},{"event":"Polymer 2 e o futuro onde os Web Components dominam a terra","date":"April 14 2017","description":"Vamos começar falando sobre o que ele não é. Definitivamente não é mais framework de javascript, muito menos um Polyfill para Web Components.","url":"https://medium.com/@afonsopacifer/polymer-2-e-o-futuro-onde-os-web-components-dominam-a-terra-308a42858470","platform":"Medium","lang":"pt-br"},{"event":"Entrevista: Como é trabalhar como Evangelista CSS, por Afonso Pacifer","date":"April 13 2017","description":"Esse post é parte de uma série de entrevistas para o Training Center sobre o que um profissional pode dizer sobre sua área de atuação visando mostrar para outras pessoas como é trabalhar no que fazem.","url":"https://medium.com/trainingcenter/como-%C3%A9-trabalhar-como-evangelista-css-por-afonso-pacifer-32cc077f4fdd","platform":"Training Center","lang":"pt-br"},{"event":"CSS Features detection de forma nativa com @supports","date":"Mar 15 2017","description":"Quando falamos em desenvolvimento Front-End, a adoção de novas tecnologias se torna uma tarefa relativamente complicada pela necessidade de dar suporte a diversos browsers, nesse cenário temos basicamente duas abordagens: Graceful Degradation e Progressive Enhancement.","url":"https://codepen.io/afonsopacifer/post/css-feature-detection","platform":"Codepen","lang":"pt-br"}],"articles_2016":[{"event":"luz camera ação! - introdução a modelagem 3D com three.js","date":"Nov 30 2016","description":"Hoje vamos entender os conceitos básicos que envolvem esse mundo e criar nosso primeiro modelo 3D, e claro, com muito javascript porque somos desses ;)","url":"http://codepen.io/afonsopacifer/post/introducao-a-modelagem-3d-com-three-js","platform":"Codepen","lang":"pt-br"},{"event":"Como foi a #FrontWeekSP para um comedor de biscoito?","date":"Jul 05 2016","description":"Esse é um relato das coisas maravilhosas que aconteceram comigo nessa semana que entrou para a história da comunidade mundial de desenvolvedores Front-End.","url":"https://medium.com/@afonsopacifer/um-relato-sobre-como-foi-a-frontweeksp-para-um-comedor-de-biscoito-85e936052bd#.ucnpbahra","platform":"Medium","lang":"pt-br"},{"event":"Como foi o Sampa.JS para um carioca que curte CSS?","date":"Jun 27 2016","description":"Fala galera, esse é apenas o relato de um carioca que que teve a oportunidade de participar do já tradicional Sampa.JS, e de cara quero dizer que voltarei nos próximos anos COM CERTEZA!","url":"https://medium.com/@afonsopacifer/como-foi-o-sampa-js-para-um-carioca-que-curte-css-3702665c60cc#.82wcbksfk","platform":"Medium","lang":"pt-br"},{"event":"Iniciando seus testes unitários em componentes ReactJS","date":"May 08 2016","description":"Vamos testar um componente simples, que escreve hello na página. Como somos descolados vamos usar ES6 e um bundler para organizar nossas dependências e componentes.","url":"https://medium.com/@afonsopacifer/iniciando-seus-testes-unit%C3%A1rios-em-componentes-reactjs-de-forma-moderna-c711977d7143#.cq0htj66o","platform":"Medium","lang":"pt-br"},{"event":"Pensando em URLs no Github","date":"Mar 19 2016","description":"Criar um link em markdown é realmente muito simples, mas existem alguns casos especiais, se você já tentou adicionar um arquivo SVG ou criar uma âncora para um heading que usa caracteres especiais sabe do que estou falando.","url":"https://medium.com/@afonsopacifer/pensando-em-urls-no-github-3517d97249d0#.un4beit6n","platform":"Medium","lang":"pt-br"},{"event":"Hora de aventura com CSS #10 - Hora do Finn","date":"Mar 15 2016","description":"Foi realmente incrível passar esses últimos dias com vocês, recebi tantos feedbacks positivos, vi tantos desenhos irados e conheci muita gente boa. Só tenho a agracer o carinho de todos!","url":"http://codepen.io/afonsopacifer/post/hora-de-aventura-com-css-10-hora-do-finn","platform":"Codepen","lang":"pt-br"},{"event":"Hora de aventura com CSS #9 - Flexbox básico","date":"Mar 13 2016","description":"Flexbox é um modulo da CSS3 que define um novo box model otimizado para interfaces, ou seja, agora temos uma especificação focada em interfaces, nada de floats ou tabelas aqui.","url":"http://codepen.io/afonsopacifer/post/hora-de-aventura-com-css-9-flexbox","platform":"Codepen","lang":"pt-br"},{"event":"Hora de aventura com CSS #8 - Animações (parte 2)","date":"Mar 12 2016","description":"Na parte 1 aprendemos a configurar nossas animações, hoje iremos focar nas animações de fato, em cada movimento e conbinações de movimentos. Vamos nessa <3","url":"http://codepen.io/afonsopacifer/post/hora-de-aventura-com-css-8-animacoes-parte-2","platform":"Codepen","lang":"pt-br"},{"event":"Hora de aventura com CSS #7 - Pseudo-elementos","date":"Mar 11 2016","description":"Abordaremos basicamente os pseudo-elementos ::after e ::before, hoje aprenderemos que esses caras são muito importantes para a qualidade de nossos desenhos.","url":"http://codepen.io/afonsopacifer/post/hora-de-aventura-com-css-7-pseudo-elementos","platform":"Codepen","lang":"pt-br"},{"event":"Hora de aventura com CSS #6 - Sombras","date":"Mar 11 2016","description":"Sombras com CSS são bem fáceis de criar e entender, tão fáceis, que a partir de hoje você meu caro leitor, nunca mais vai precisar de nenhum box-shadow generator em sua vida ;)","url":"http://codepen.io/afonsopacifer/post/hora-de-aventura-com-css-6-sombras","platform":"Codepen","lang":"pt-br"},{"event":"Hora de aventura com CSS #5 - Animações (parte 1)","date":"Mar 11 2016","description":"Chegou a hora de falar sobre umas das coisas mais divertidas da vida! Vamos aprender um pouco sobre animações com CSS3, que é algo tão simples quanto poderoso!","url":"http://codepen.io/afonsopacifer/post/hora-de-aventura-com-css-5-animacoes","platform":"Codepen","lang":"pt-br"},{"event":"Hora de aventura com CSS #4 - Desenhando com amor","date":"Mar 08 2016","description":"Agora que tal juntarmos tudo para desenhar algo que represente o motivo desta série de posts existir? Vamos la!","url":"http://codepen.io/afonsopacifer/post/hora-de-aventura-com-css-4-desenhando-com-amor","platform":"Codepen","lang":"pt-br"},{"event":"Hora de aventura com CSS #3 - Transformações ","date":"Mar 07 2016","description":"Agora sim! Vamos conhecer umas das melhores features do CSS3, o que vai literalmente transformar sua percepção da linguagem :D","url":"http://codepen.io/afonsopacifer/post/hora-de-aventura-com-css-3-transformacoes","platform":"Codepen","lang":"pt-br"},{"event":"Hora de aventura com CSS #2 - Posicionamento","date":"Mar 06 2016","description":"Agora que sabemos como criar formas básicas, podemos dar o próximo passo e preparar nossa folha de papel em branco para posicionarmos nossas formas e montar nosso desenho, a princípio usaremos apenas o bom e velho position, mas nos próximos artigos veremos flexbox e outras coisinhas legais sobre posicionamento.","url":"http://codepen.io/afonsopacifer/post/hora-de-aventura-com-css-2-posicionamento","platform":"Codepen","lang":"pt-br"},{"event":"Hora de aventura com CSS #1 - Formas básicas","date":"Mar 05 2016","description":"Depois de muito tempo sem fazer nada legal, resolvi pegar uma noite e fazer algo para me distrair e acabei criando o Jake apenas com CSS, depois de mostrar para a galera no facebook recebi alguns pedidos para ensinar os macetes para fazer essas coisas fofas com CSS.","url":"http://codepen.io/afonsopacifer/post/hora-de-aventura-com-css-1-formas-basicas","platform":"Codepen","lang":"pt-br"}],"articles_2015":[{"event":"Como usar variáveis no CSS de forma nativa","date":"Nov 17 2015","description":"Olá pessoal, neste artigo irei abordar o básico sobre variáveis nativas com CSS, e como você pode usar essa tecnologia hoje e sem medo de ser feliz.","url":"http://tableless.com.br/como-usar-variaveis-no-css-de-forma-nativa/","platform":"Tableless","lang":"pt-br","year":"2015"},{"event":"Commit Wars Episode III: A vingança dos Commits","date":"Jul 31 2015","description":"Assim que postei o último artigo, o Raphael Amorim me parabenizou pelo repositório commit-wars, e me confessou que já tinha pensando em fazer algo do gênero, porém, um pouco diferente e bem mais completo, etc...","url":"https://medium.com/@afonsopacifer/commit-wars-880d05f61831","platform":"Medium","lang":"pt-br","year":"2015"},{"event":"Commit Wars Episode II: Guerra dos Clones","date":"Jun 30 2015","description":"É pessoal, depois de receber tantos feedbacks positivos sobre o primeiro post, eu não poderia deixar de comentar que escrever sem duvidas é tão importante quando contribuir em projetos. etc...","url":"https://medium.com/@afonsopacifer/commit-wars-a6cd5372b46","platform":"Medium","lang":"pt-br","year":"2015"},{"event":"Commit Wars Episode I: A Ameaça Fantasma","date":"May 31 2015","description":"Tudo começou no último Meetup RioJS de 2014, quando o @raphamorim deu uma talk intitulada Confissões de um contribuidor, basicamente ele apresentou os benefícios de aderir ao movimento Write Code Every Day, etc...","url":"https://medium.com/@afonsopacifer/commit-wars-5c51ddd837cd#.nq1xp6z0w","platform":"Medium","lang":"pt-br","year":"2015"}]}')}}]);
//# sourceMappingURL=component---src-pages-articles-js-27dc0dad5fd65fd3592d.js.map