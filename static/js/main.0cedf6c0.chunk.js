(this["webpackJsonpgfl-logistics"]=this["webpackJsonpgfl-logistics"]||[]).push([[0],{36:function(e){e.exports=JSON.parse('[{"chapter":0,"missions":[{"mission":1,"time":3000,"rewards":{"resources":{"manpower":0,"ammunition":145,"ration":145,"parts":0},"items":{"tDollContract":0,"equipmentContract":0,"quickProductionContract":20,"quickRepairContract":50,"token":0}}},{"mission":2,"time":10800,"rewards":{"resources":{"manpower":550,"ammunition":0,"ration":0,"parts":350},"items":{"tDollContract":50,"equipmentContract":0,"quickProductionContract":0,"quickRepairContract":0,"token":0}}},{"mission":3,"time":43200,"rewards":{"resources":{"manpower":900,"ammunition":900,"ration":900,"parts":250},"items":{"tDollContract":0,"equipmentContract":40,"quickProductionContract":0,"quickRepairContract":40,"token":0}}},{"mission":4,"time":86400,"rewards":{"resources":{"manpower":0,"ammunition":1200,"ration":800,"parts":750},"items":{"tDollContract":0,"equipmentContract":0,"quickProductionContract":0,"quickRepairContract":0,"token":100}}}]},{"chapter":1,"missions":[{"mission":1,"time":900,"rewards":{"resources":{"manpower":10,"ammunition":30,"ration":15,"parts":0},"items":{"tDollContract":0,"equipmentContract":0,"quickProductionContract":0,"quickRepairContract":0,"token":0}}},{"mission":2,"time":1800,"rewards":{"resources":{"manpower":0,"ammunition":40,"ration":60,"parts":0},"items":{"tDollContract":0,"equipmentContract":0,"quickProductionContract":0,"quickRepairContract":0,"token":0}}},{"mission":3,"time":3600,"rewards":{"resources":{"manpower":30,"ammunition":0,"ration":30,"parts":10},"items":{"tDollContract":0,"equipmentContract":0,"quickProductionContract":0,"quickRepairContract":60,"token":0}}},{"mission":4,"time":7200,"rewards":{"resources":{"manpower":160,"ammunition":160,"ration":0,"parts":0},"items":{"tDollContract":20,"equipmentContract":0,"quickProductionContract":0,"quickRepairContract":0,"token":0}}}]}]')},44:function(e,t,r){e.exports=r(54)},54:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(12),o=r.n(i),s=r(10),l=r(9),u=r(95),c=r(87),m=r(98),g=r(88),h=r(99),p=r(100),w=r(96),d=r(97),b=r(89),C=r(90),k=r(91),f=r(92),q=r(93),S=r(94),y=r(101),W=r(34),L=new(r.n(W).a)({en:{checkFrequency:{question:"How often can you check your phone?",answerConstantlyValue:"Constantly",answerConstantly:"{0}.",answerSingular:"Every {0} hour.",answerPlural:"Every {0} hours.",longAnswerConstantlyValue:"constantly",longAnswerConstantly:"I can check my phone {0}.",longAnswerSingular:"I can check my phone every {0} hour.",longAnswerPlural:"I can check my phone every {0} hours.",valueLabel:"{0}h",handleLabelConstantly:"Constantly",handleLabelSingular:"{0} hour",handleLabelPlural:"{0} hours"},runTime:{question:"How long do you want to run logistics for?",answerSingular:"For {0} hour.",answerPlural:"For {0} hours.",longAnswerSingular:"I want to run logistics for {0} hour.",longAnswerPlural:"I want to run logistics for {0} hours.",valueLabel:"{0}h",handleLabelSingular:"{0} hour",handleLabelPlural:"{0} hours"},unlockedChapters:{question:"Which chapters have you unlocked?",single:"{0}",range:"{0}-{1}",answerSingular:"Chapter {0}.",answerPlural:"Chapters {0}.",longAnswerSingle:"I have unlocked chapter {0}.",longAnswerRange:"I have unlocked chapters {0}.",handleLabel:"Chapter {0}"},resourceWeights:{question:"How much do you care about each resource?",multiplier:"{0}x",answer:"{0}\xa0manpower, {1}\xa0ammunition, {2}\xa0ration, {3}\xa0parts.",longAnswer:"I care: {0}\xa0about\xa0manpower, {1}\xa0about\xa0ammunition, {2}\xa0about\xa0ration, and {3}\xa0about\xa0parts.",handleLabel:"{0}x",valueLabel:"{0}x",manpowerLabel:"Manpower",ammunitionLabel:"Ammunition",rationLabel:"Ration",partsLabel:"Parts"},itemWeights:{question:"How much is each item worth to you?",multiplier:"{0}",answer:"T-Doll\xa0Contract\xa0{0}, Equipment\xa0Contract\xa0{1}, Quick\xa0Production\xa0Contract\xa0{2}, Quick\xa0Repair\xa0Contract\xa0{3}, Token\xa0{4}.",longAnswer:"To me, a\xa0T-Doll\xa0Contract\xa0is\xa0worth\xa0{0}, an\xa0Equipment\xa0Contract\xa0is\xa0worth\xa0{1}, a\xa0Quick\xa0Production\xa0Contract\xa0is\xa0worth\xa0{2}, a\xa0Quick\xa0Repair\xa0Contract\xa0is\xa0worth\xa0{3}, and a\xa0Token\xa0is\xa0worth\xa0{4}.",tDollContractLabel:"T-Doll Contract",equipmentContractLabel:"Equipment Contract",quickProductionContractLabel:"Quick Production Contract",quickRepairContractLabel:"Quick Repair Contract",tokenLabel:"Token"},results:{headers:{mission:"Mission",manpower:"Manpower",ammunition:"Ammunition",ration:"Ration",parts:"Parts",tDollContract:"T-Doll Contract",equipmentContract:"Equipment Contract",quickProductionContract:"Quick Production Contract",quickRepairContract:"Quick Repair Contract",token:"Token",value:"Value"}}}}),v={activeStep:0,checkFrequency:1,runTime:4,unlockedChapters:[0,10],manpowerWeight:1,ammunitionWeight:1,rationWeight:1,partsWeight:1,tDollContractWeight:100,equipmentContractWeight:100,quickProductionContractWeight:100,quickRepairContractWeight:100,tokenWeight:100,resultsOrder:"desc",resultsOrderBy:L.results.headers.value},E=r(85),P=Object(E.a)((function(e){return{root:{width:"80em",maxWidth:"100%",margin:"0 auto",fontSize:"0.875rem",fontWeight:"400",fontFamily:"'Roboto', sans-serif;"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1),float:"right"},answer:{position:"absolute",color:"rgba(0, 0, 0, 0.71)",fontWeight:"500"},importantContent:{fontWeight:"500"},importantAnswer:{fontWeight:"700",color:"rgba(0, 0, 0, 0.89)"},slider:{width:"100%"},sliderLabel:{width:"8em",minWidth:"5em",textAlign:"right"},sliderDescription:{marginBottom:"1.5em"},stepLabel:{textAlign:"left"},labelledSlider:{display:"flex",alignItems:"center",height:"5em","& $slider":{marginLeft:"1em",top:"0.125em"}},title:{width:"100%",textAlign:"center",fontSize:"3.5em",fontWeight:"500"},stepper:{marginBottom:"4em"}}})),A=r(35),D=r(36),R=function(e){var t=function(t){return Math.max(1,Math.floor(3600*e.runTime/function(t){return Math.max(t,3600*e.checkFrequency)}(t)))};return D.flatMap((function(e){return e.missions.map((function(t){return Object(A.a)({},t,{chapter:e.chapter})}))})).filter((function(t){return t.time<=3600*e.runTime})).filter((function(t){return t.chapter>=e.unlockedChapters[0]})).filter((function(t){return t.chapter<=e.unlockedChapters[1]})).map((function(r){return function(r){return{chapter:r.chapter,mission:r.mission,runs:t(r.time),rewards:r.rewards,value:(r.rewards.resources.manpower*e.manpower+r.rewards.resources.ammunition*e.ammunition+r.rewards.resources.ration*e.ration+r.rewards.resources.parts*e.parts+.01*r.rewards.items.tDollContract*e.tDollContract+.01*r.rewards.items.equipmentContract*e.equipmentContract+.01*r.rewards.items.quickProductionContract*e.quickProductionContract+.01*r.rewards.items.quickRepairContract*e.quickRepairContract+.01*r.rewards.items.token*e.token)*t(r.time)}}(r)}))};o.a.render(n.a.createElement((function(){var e=P(),t=n.a.useState(v.activeStep),r=Object(l.a)(t,2),a=r[0],i=r[1],o=n.a.useState(v.checkFrequency),W=Object(l.a)(o,2),E=W[0],A=W[1],D=n.a.useState(v.runTime),O=Object(l.a)(D,2),T=O[0],F=O[1],x=n.a.useState(v.unlockedChapters),j=Object(l.a)(x,2),M=j[0],N=j[1],V=n.a.useState(v.manpowerWeight),I=Object(l.a)(V,2),Q=I[0],B=I[1],H=n.a.useState(v.ammunitionWeight),J=Object(l.a)(H,2),z=J[0],G=J[1],$=n.a.useState(v.rationWeight),K=Object(l.a)($,2),U=K[0],X=K[1],Y=n.a.useState(v.partsWeight),Z=Object(l.a)(Y,2),_=Z[0],ee=Z[1],te=n.a.useState(v.tDollContractWeight),re=Object(l.a)(te,2),ae=re[0],ne=re[1],ie=n.a.useState(v.equipmentContractWeight),oe=Object(l.a)(ie,2),se=oe[0],le=oe[1],ue=n.a.useState(v.quickProductionContractWeight),ce=Object(l.a)(ue,2),me=ce[0],ge=ce[1],he=n.a.useState(v.quickRepairContractWeight),pe=Object(l.a)(he,2),we=pe[0],de=pe[1],be=n.a.useState(v.tokenWeight),Ce=Object(l.a)(be,2),ke=Ce[0],fe=Ce[1],qe=n.a.useState(v.resultsOrder),Se=Object(l.a)(qe,2),ye=Se[0],We=Se[1],Le=n.a.useState(v.resultsOrderBy),ve=Object(l.a)(Le,2),Ee=ve[0],Pe=ve[1],Ae=[{label:L.resourceWeights.manpowerLabel,weight:Q,weightSetter:B},{label:L.resourceWeights.ammunitionLabel,weight:z,weightSetter:G},{label:L.resourceWeights.rationLabel,weight:U,weightSetter:X},{label:L.resourceWeights.partsLabel,weight:_,weightSetter:ee}],De=[{label:L.itemWeights.tDollContractLabel,weight:ae,weightSetter:ne},{label:L.itemWeights.equipmentContractLabel,weight:se,weightSetter:le},{label:L.itemWeights.quickProductionContractLabel,weight:me,weightSetter:ge},{label:L.itemWeights.quickRepairContractLabel,weight:we,weightSetter:de},{label:L.itemWeights.tokenLabel,weight:ke,weightSetter:fe}],Re=function(t){return n.a.createElement("span",{className:e.importantContent},t)},Oe=function(t){return n.a.createElement("span",{className:e.importantAnswer},t)},Te=[{question:L.checkFrequency.question,answer:function(){return L.formatString(0===E?L.checkFrequency.answerConstantly:1===E?L.checkFrequency.answerSingular:L.checkFrequency.answerPlural,Oe(0===E?L.checkFrequency.answerConstantlyValue:E))},longAnswer:function(){return L.formatString(0===E?L.checkFrequency.longAnswerConstantly:1===E?L.checkFrequency.longAnswerSingular:L.checkFrequency.longAnswerPlural,Re(0===E?L.checkFrequency.longAnswerConstantlyValue:E))},bigMargin:!1,sliders:[{value:E,setValue:A,handleLabel:function(e){return L.formatString(0===e?L.checkFrequency.handleLabelConstantly:1===e?L.checkFrequency.handleLabelSingular:L.checkFrequency.handleLabelPlural,e)},valueLabel:function(e){return L.formatString(L.checkFrequency.valueLabel,e)},label:null,labelDisplay:"auto",bigMargin:!1,step:1,min:0,max:24}]},{question:L.runTime.question,answer:function(){return L.formatString(1===T?L.runTime.answerSingular:L.runTime.answerPlural,Oe(T))},longAnswer:function(){return L.formatString(1===T?L.runTime.longAnswerSingular:L.runTime.longAnswerPlural,Re(T))},bigMargin:!1,sliders:[{value:T,setValue:F,handleLabel:function(e){return L.formatString(1===e?L.runTime.handleLabelSingular:L.runTime.handleLabelPlural,e)},valueLabel:function(e){return L.formatString(L.runTime.valueLabel,e)},label:null,labelDisplay:"auto",bigMargin:!1,step:1,min:1,max:24}]},{question:L.unlockedChapters.question,answer:function(){return M[0]===M[1]?L.formatString(L.unlockedChapters.answerSingular,Oe(L.formatString(L.unlockedChapters.single,M[0]))):L.formatString(L.unlockedChapters.answerPlural,Oe(L.formatString(L.unlockedChapters.range,M[0],M[1])))},longAnswer:function(){return M[0]===M[1]?L.formatString(L.unlockedChapters.longAnswerSingle,Re(L.formatString(L.unlockedChapters.single,M[0]))):L.formatString(L.unlockedChapters.longAnswerRange,Re(L.formatString(L.unlockedChapters.range,M[0],M[1])))},bigMargin:!1,sliders:[{value:M,setValue:N,handleLabel:function(e){return L.formatString(L.unlockedChapters.handleLabel,e)},valueLabel:function(e){return e},label:null,labelDisplay:"auto",bigMargin:!1,step:1,min:0,max:10}]},{question:L.resourceWeights.question,answer:function(){return L.formatString(L.resourceWeights.answer,Oe(L.formatString(L.resourceWeights.multiplier,Q)),Oe(L.formatString(L.resourceWeights.multiplier,z)),Oe(L.formatString(L.resourceWeights.multiplier,U)),Oe(L.formatString(L.resourceWeights.multiplier,_)))},longAnswer:function(){return L.formatString.apply(L,[L.resourceWeights.longAnswer].concat(Object(s.a)(Ae.map((function(e){return Re(L.formatString(L.resourceWeights.multiplier,e.weight))})))))},bigMargin:!0,sliders:Ae.map((function(e){return{value:e.weight,setValue:e.weightSetter,handleLabel:function(e){return L.formatString(L.resourceWeights.handleLabel,e)},valueLabel:function(e){return L.formatString(L.resourceWeights.valueLabel,e)},label:e.label,bigMargin:!0,labelDisplay:"on",step:1,min:0,max:10}}))},{question:L.itemWeights.question,answer:function(){return L.formatString(L.itemWeights.answer,Oe(L.formatString(L.itemWeights.multiplier,ae)),Oe(L.formatString(L.itemWeights.multiplier,se)),Oe(L.formatString(L.itemWeights.multiplier,me)),Oe(L.formatString(L.itemWeights.multiplier,we)),Oe(L.formatString(L.itemWeights.multiplier,ke)))},longAnswer:function(){return L.formatString.apply(L,[L.itemWeights.longAnswer].concat(Object(s.a)(De.map((function(e){return Re(L.formatString(L.itemWeights.multiplier,e.weight))})))))},bigMargin:!0,sliders:De.map((function(e){return{value:e.weight,setValue:e.weightSetter,handleLabel:function(e){return e},valueLabel:function(e){return e},label:e.label,bigMargin:!0,labelDisplay:"on",step:50,min:0,max:1e3}}))}],Fe=function(e){return function(t){We(Ee===e&&"desc"===ye?"asc":"desc"),Pe(e)}};return n.a.createElement("div",{className:e.root},n.a.createElement("div",{className:e.title},"Girls' Frontline logistics calculator"),n.a.createElement(h.a,{className:e.stepper,nonLinear:!0,orientation:"vertical",activeStep:a},Te.map((function(t,r){return n.a.createElement(g.a,{key:t.question},n.a.createElement(p.a,{onClick:function(){return i(r)}},n.a.createElement(d.a,{className:e.stepLabel},t.question,a!==r?n.a.createElement("div",{className:e.answer},t.answer()):null)),n.a.createElement(w.a,null,n.a.createElement("div",null,n.a.createElement("div",{className:t.bigMargin?e.sliderDescription:null},t.longAnswer()),t.sliders.map((function(t,r){return n.a.createElement("span",{key:r,className:t.bigMargin?e.labelledSlider:null},t.label?n.a.createElement("span",{className:e.sliderLabel},t.label):null,n.a.createElement(m.a,{key:r,className:e.slider,defaultValue:t.value,onChange:function(e,r){return t.setValue(r)},getAriaValueText:t.handleLabel,valueLabelDisplay:t.labelDisplay,step:t.step,marks:!0,valueLabelFormat:t.valueLabel,min:t.min,max:t.max}))})))))}))),n.a.createElement(b.a,{component:c.a},n.a.createElement(C.a,null,n.a.createElement(k.a,null,n.a.createElement(f.a,null,n.a.createElement(q.a,null,L.results.headers.mission),[L.results.headers.manpower,L.results.headers.ammunition,L.results.headers.ration,L.results.headers.parts,L.results.headers.value].map((function(e){return n.a.createElement(q.a,{key:e,align:"right",sortDirection:Ee===e&&ye},n.a.createElement(y.a,{active:Ee===e,direction:Ee===e?ye:"desc",onClick:Fe(e)},e))})))),n.a.createElement(S.a,null,R({runTime:T,checkFrequency:E,unlockedChapters:M,manpower:Q,ammunition:z,ration:U,parts:_,tDollContract:ae,equipmentContract:se,quickProductionContract:me,quickRepairContract:we,token:ke}).sort((function(e,t){var r=0;switch(Ee){case L.results.headers.manpower:r=e.rewards.resources.manpower-t.rewards.resources.manpower;break;case L.results.headers.ammunition:r=e.rewards.resources.ammunition-t.rewards.resources.ammunition;break;case L.results.headers.ration:r=e.rewards.resources.ration-t.rewards.resources.ration;break;case L.results.headers.parts:r=e.rewards.resources.parts-t.rewards.resources.parts;break;case L.results.headers.value:default:r=e.value-t.value}return"asc"===ye?r:-1*r})).map((function(e){return n.a.createElement(f.a,{key:e.chapter+"-"+e.mission},n.a.createElement(q.a,{component:"th",scope:"row"},e.chapter,"-",e.mission),n.a.createElement(q.a,{align:"right"},e.rewards.resources.manpower),n.a.createElement(q.a,{align:"right"},e.rewards.resources.ammunition),n.a.createElement(q.a,{align:"right"},e.rewards.resources.ration),n.a.createElement(q.a,{align:"right"},e.rewards.resources.parts),n.a.createElement(q.a,{align:"right"},e.value))}))))),n.a.createElement(u.a,{className:e.button,onClick:function(){i(v.activeStep),A(v.checkFrequency),F(v.runTime),N(v.unlockedChapters),B(v.manpowerWeight),G(v.ammunitionWeight),X(v.rationWeight),ee(v.partsWeight),ne(v.tDollContractWeight),le(v.equipmentContractWeight),ge(v.quickProductionContractWeight),de(v.quickRepairContractWeight),fe(v.tokenWeight),We(v.resultsOrder),Pe(v.resultsOrderBy)},color:"secondary"},"Reset"))}),null),document.querySelector("#root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.0cedf6c0.chunk.js.map