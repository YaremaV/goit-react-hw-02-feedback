(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),s=n.n(r),o=(n(13),n(4)),i=n(5),u=n(6),d=n(8),b=n(7),l=n(0);function j(e){var t=e.title,n=e.children;return Object(l.jsxs)("section",{children:[Object(l.jsxs)("h2",{className:"title",children:[" ",t]}),n]})}n(15);function h(e){var t=e.options,n=e.onLeaveFeedback;return Object(l.jsx)(j,{title:"Please leave Feedback",children:Object(l.jsx)(l.Fragment,{children:t.map((function(e,t){return Object(l.jsx)("button",{className:"button",type:"button",name:e,onClick:n,children:e},t)}))})})}n(16);function f(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(l.jsxs)(j,{title:"Statistics",children:[Object(l.jsxs)("p",{children:["Good: ",t]}),Object(l.jsxs)("p",{children:["Neutral: ",n]}),Object(l.jsxs)("p",{children:["Bad: ",c]}),Object(l.jsxs)("p",{children:["Total: ",a]}),Object(l.jsxs)("p",{children:["Positive feedback:",r,"%"]})]})}n(17);function O(e){var t=e.message;return Object(l.jsx)("p",{className:"message",children:t})}n(18);var v=function(e){var t=e.children;return Object(l.jsx)("div",{className:"Container",children:t})},g=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onFeedback=function(t){e.setState((function(e){return Object(o.a)({},t.target.name,e[t.target.name]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=Object.keys(this.state),r=Object.values(this.state);return Object(l.jsxs)(v,{children:[Object(l.jsx)(h,{options:a,onLeaveFeedback:this.onFeedback}),r.some((function(e){return e>0}))?Object(l.jsx)(f,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(l.jsx)(O,{message:"No feedback given"})]})}}]),n}(c.Component);g.defaultProps={positivePercentage:0};var p=g;s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.61b3675d.chunk.js.map