(this.webpackJsonpmgh=this.webpackJsonpmgh||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(7),r=a.n(s),u=(a(13),a(1)),i=a(2),c=a(4),o=a(3),m=a(5),h=(a(14),a(15),a(16),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).gugudanSubmit=function(e){e.preventDefault(),console.log(typeof e.target[0].value),Number(e.target[0].value)===a.state.firstNum*a.state.lastNum?a.setState({value:"",result:"\uc815\ub2f5\uc785\ub2c8\ub2e4. \ub2f5: "+a.state.firstNum*a.state.lastNum,firstNum:Math.ceil(9*Math.random()),lastNum:Math.ceil(9*Math.random())}):a.setState({value:"",result:"\ud2c0\ub838\uc2b5\ub2c8\ub2e4."})},a.gugudanChang=function(e){return a.setState({value:e.target.value})},a.state={value:"",result:"",firstNum:Math.ceil(9*Math.random()),lastNum:Math.ceil(9*Math.random())},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"gugudan"},l.a.createElement("div",{className:"gugudan-exam",title:"\uad6c\uad6c\ub2e8 \ubb38\uc81c"},this.state.firstNum," \uacf1\ud558\uae30\ub294 ",this.state.lastNum," \ub294?"),l.a.createElement("div",{className:"gugudan-input"},l.a.createElement("form",{onSubmit:this.gugudanSubmit},l.a.createElement("input",{type:"number",vlaue:this.state.value,onChange:this.gugudanChang}),l.a.createElement("button",null,"\uc785\ub825"))),l.a.createElement("div",{className:"gugudan-result"},this.state.result))}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).lastAndFirst=function(e){return a.setState({value:e.target.value})},a.wordChain=function(e){e.preventDefault();var t=a.state.value,n=a.state.result;(t=t.substring(0,1))===(n=n.substr(n.length-1))?a.setState({value:"",result:a.state.value}):(alert("\ub2e4\ub978 \ub2e8\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),a.setState({value:""}))},a.state={value:"",result:"\uace0\uad6c\ub9c8"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"wordChain"},l.a.createElement("div",{className:"wordChain-top"},this.state.result),l.a.createElement("div",{className:"wordChain-middle"},l.a.createElement("form",{onSubmit:this.wordChain},l.a.createElement("input",{type:"text",value:this.state.value,onChange:this.lastAndFirst}),l.a.createElement("button",null,"\uc785\ub825"))))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).startBaseball=function(){for(var e=[1,2,3,4,5,6,7,8,9],t=[],n=0;n<4;n++){var l=Math.ceil(8*Math.random());-1===t.indexOf(l+1)?t.push(e[l]):n--}var s=t.join("");a.setState({numberBaseball:s})},a.throwABall=function(e){e.preventDefault();var t=Array.from(e.target[0].value),n=Array.from(a.state.numberBaseball),l=0,s=0,r=null;console.log(typeof n[0],typeof t[0]),console.log(n,t);for(var u=0;u<t.length;u++)t[u]===n[u]?l+=1:n.indexOf(t[u])>-1&&(s+=1);l==t.length?(r="\ud648\ub7f0!",a.startBaseball()):r=l+"\uc2a4\ud2b8\ub77c\uc774\ud06c "+s+"\ubcfc",a.setState({baseballMessage:r}),e.target[0].value="",e.target[0].focus()},a.state={numberBaseball:"",baseballMessage:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.startBaseball()}},{key:"render",value:function(){return l.a.createElement("div",{className:"numberBaseball"},l.a.createElement("div",{className:"numberBaseball-top"},l.a.createElement("input",{type:"number",value:this.state.numberBaseball,readOnly:!0}),this.state.baseballMessage),l.a.createElement("div",{className:"numberBaseball-middle"},l.a.createElement("form",{onSubmit:this.throwABall},l.a.createElement("input",{type:"text",maxLength:"4"}),l.a.createElement("button",null,"\uc785\ub825"))))}}]),t}(n.Component),d=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).seeGames=function(){!1===a.state.isActive?a.setState({isActive:!0}):a.setState({isActive:!1})},a.state={isActive:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"minigames"},l.a.createElement("ol",null,l.a.createElement("li",{className:"title-gugudan"},l.a.createElement("h1",{onClick:this.seeGames},"\uad6c\uad6c\ub2e8 \uac8c\uc784"),this.state.isActive?l.a.createElement(h,null):""),l.a.createElement("li",{className:"title-wordChain"},l.a.createElement("h1",{onClick:this.seeGames},"\ub05d\ub9d0\uc787\uae30"),this.state.isActive?l.a.createElement(v,null):""),l.a.createElement("li",null,l.a.createElement("h1",{onClick:this.seeGames},"\uc22b\uc790\uc57c\uad6c"),this.state.isActive?l.a.createElement(b,null):"")))}}]),t}(n.Component),f=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.3d38b118.chunk.js.map