(this["webpackJsonppersonality-matcher"]=this["webpackJsonppersonality-matcher"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/match-img.6ff100e1.png"},function(e,t,n){e.exports=n.p+"static/media/mbti-explanation.58b4bcb9.jpg"},function(e,t,n){e.exports=n.p+"static/media/mbti-icon.588138d7.jpg"},function(e,t,n){e.exports=n.p+"static/media/LoveMatchFGWide.d13e860b.png"},,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(5),s=n.n(o),r=(n(19),n(1)),l=n(3),c=n(6),h=n(7),d=n(2),p=n(13),u=n(12),y=n(8),m=n.n(y);var g=function(e){return i.a.createElement("div",{class:"card lime lighten-5"},i.a.createElement("div",{class:"card-image waves-effect waves-block waves-light"},i.a.createElement("img",{alt:"lovey dovey",class:"activator",src:m.a})),i.a.createElement("div",{class:"card-content"},i.a.createElement("span",{class:"card-title"},e.matchItem.personalityType[0]," \u2665",e.matchItem.personalityType[1]),i.a.createElement("span",{class:"card-title"},"Match Type: ",e.matchItem.type),i.a.createElement("span",{class:"card-title activator grey-text text-darken-4"},i.a.createElement("i",{class:"material-icons"},"chevron_right"),"Learn More",i.a.createElement("i",{class:"material-icons right"},"more_vert"))),i.a.createElement("div",{class:"card-reveal"},i.a.createElement("span",{class:"card-title"},"Comparibility Description",i.a.createElement("i",{class:"material-icons right"},"close")),i.a.createElement("p",{style:{fontSize:18}},e.matchItem.description)))},b=n(9),f=n.n(b),v=n(10),w=n.n(v);var E=function(e){var t=e.matches.map((function(e){return i.a.createElement(g,{matchItem:e,key:e.id})}));return i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"container"},i.a.createElement("div",null,i.a.createElement("h3",null,"Your personality type is ",i.a.createElement("strong",null,e.quizResult)),i.a.createElement("ul",{style:{fontSize:20}},i.a.createElement("li",null,"MBTI: ",e.mbti.mbti," ",i.a.createElement("br",null)),i.a.createElement("li",null,"Role: ",e.mbti.role," ",i.a.createElement("br",null)),i.a.createElement("li",null,"Type: ",e.mbti.type," ",i.a.createElement("br",null)),i.a.createElement("li",null,"Personality Description: ",e.mbti.description))),i.a.createElement("div",null,t),i.a.createElement("div",{style:{alignItems:"center"}},i.a.createElement("img",{style:{display:"block",marginLeft:"auto",marginRight:"auto"},alt:"mbti explanation",class:"materialboxed",width:"700",src:f.a}),i.a.createElement("img",{style:{display:"block",marginLeft:"auto",marginRight:"auto"},alt:"mbti explanation",class:"materialboxed",width:"700",src:w.a}))))};var T=function(e){return i.a.createElement("h2",{className:"question"},e.content)};var I=function(e){return i.a.createElement("div",{className:"questionCount"},"Question ",i.a.createElement("span",null,e.counter)," of ",i.a.createElement("span",null,e.total))};var S=function(e){return i.a.createElement("div",{style:{margin:10}},i.a.createElement("input",{type:"radio",name:"radioGroup",checked:e.answerType===e.answer,id:e.answerType,value:e.answerType,disabled:e.answer,onChange:e.onAnswerSelected}),i.a.createElement("div",{style:{color:"orange",fontSize:24}},i.a.createElement("i",{class:"material-icons"},"chevron_right"),i.a.createElement("label",{style:{color:"orange",fontSize:22},htmlFor:e.answerType},e.answerContent)))},k=n(11),F=n.n(k);var J=function(e){return i.a.createElement("div",{class:"row"},i.a.createElement("img",{style:{display:"block",marginLeft:"auto",marginRight:"auto"},alt:"mbti explanation",class:"materialboxed",width:"700",src:F.a}),i.a.createElement("div",{class:"col s12 m16"},i.a.createElement("div",{class:"card blue-grey darken-1"},i.a.createElement("div",{class:"card-content white-text",key:e.questionId},i.a.createElement("span",{class:"card-title"},i.a.createElement(I,{counter:e.questionId,total:e.questionTotal})),i.a.createElement("p",null,i.a.createElement(T,{content:e.question}))),i.a.createElement("div",{class:"card-action white-text",style:{alignItems:"cemter"}},e.answerOptions.map((function(t){return i.a.createElement(S,{key:t.content,answerContent:t.content,answerType:t.type,answer:e.answer,questionId:e.questionId,onAnswerSelected:e.onAnswerSelected})}))))))},P=[{question:"Choose one that best describes you",answers:[{type:"Extraversion",content:"Expand energy, enjoy groups"},{type:"Introversion",content:"Conserve energy, enjoy one-on-one"}]},{question:"Choose one that best describes you",answers:[{type:"Extraversion",content:"More outgoing, think out loud"},{type:"Introversion",content:"More reserved, think to yourself"}]},{question:"Choose one that best describes you",answers:[{type:"Extraversion",content:"Seek many tasks, public activities, interaction with others"},{type:"Introversion",content:"Seek private solitary activities with quiet to concentrate"}]},{question:"Choose one that best describes you",answers:[{type:"Extraversion",content:"external, communicative, express yourself"},{type:"Introversion",content:"internal, reticent, keep to yourself"}]},{question:"Choose one that best describes you",answers:[{type:"Extraversion",content:"active, initiate"},{type:"Introversion",content:"reflective, deliberate"}]},{question:"Choose one that best describes you",answers:[{type:"Sensing",content:"interpret literally"},{type:"iNtuitive",content:"look for meaning and possibilities"}]},{question:"Choose one that best describes you",answers:[{type:"Sensing",content:"practical, realistic, experiential"},{type:"iNtuitive",content:"imaginative, innovative, theoretical"}]},{question:"Choose one that best describes you",answers:[{type:"Sensing",content:"standard, usual, conventional"},{type:"iNtuitive",content:"different, novel, unique"}]},{question:"Choose one that best describes you",answers:[{type:"Sensing",content:"focus on here-and-now"},{type:"iNtuitive",content:"look to the future, global perspective, big picture\u201d"}]},{question:"Choose one that best describes you",answers:[{type:"Sensing",content:'facts, things, "what is"'},{type:"iNtuitive",content:"ideas, dreams, \u201cwhat could be,\u201d philosophical"}]},{question:"Choose one that best describes you",answers:[{type:"Thinking",content:"logical, thinking, questioning"},{type:"Feeling",content:"empathetic, feeling, accommodating"}]},{question:"Choose one that best describes you",answers:[{type:"Thinking",content:"candid, straight forward, frank "},{type:"Feeling",content:"tactful, kind, encouraging"}]},{question:"Choose one that best describes you",answers:[{type:"Thinking",content:"firm, tend to criticize, hold the line"},{type:"Feeling",content:"gentle, tend to appreciate, conciliate"}]},{question:"Choose one that best describes you",answers:[{type:"Thinking",content:"tough-minded, just"},{type:"Feeling",content:"tender-hearted, merciful"}]},{question:"Choose one that best describes you",answers:[{type:"Thinking",content:"matter of fact, issue-oriented"},{type:"Feeling",content:"sensitive, people-oriented, compassionate"}]},{question:"Choose one that best describes you",answers:[{type:"Judging",content:"organized, orderly"},{type:"Perceptive",content:"flexible, adaptable"}]},{question:"Choose one that best describes you",answers:[{type:"Judging",content:"plan, schedule"},{type:"Perceptive",content:"unplanned, spontaneous"}]},{question:"Choose one that best describes you",answers:[{type:"Judging",content:"regulated, structured"},{type:"Perceptive",content:"easygoing, \u201clive\u201d and \u201clet live\u201d"}]},{question:"Choose one that best describes you",answers:[{type:"Judging",content:"preparation, plan ahead"},{type:"Perceptive",content:"go with the flow, adapt as you go"}]},{question:"Choose one that best describes you",answers:[{type:"Judging",content:"control, govern"},{type:"Perceptive",content:"latitude, freedom"}]}],x={INTJ:{mbti:"INTJ",role:"Analyst",type:"Architect",description:"Imaginative and strategic thinkers, with a plan for everything.",trait:""},INTP:{mbti:"INTP",role:"Analyst",type:"Logician",description:"Innovative inventors with an unquenchable thirst for knowledge.",trait:""},ENTJ:{mbti:"ENTJ",role:"Analyst",type:"Commander",description:"Bold, imaginative and strong-willed leaders, always finding a way \u2013 or making one.",trait:""},ENTP:{mbti:"ENTP",role:"Analyst",type:"Debator",description:"Smart and curious thinkers who cannot resist an intellectual challenge",trait:""},INFJ:{mbti:"INFJ",role:"Diplomat",type:"Advocate",description:"Quiet and mystical, yet very inspiring and tireless idealists.",trait:""},INFP:{mbti:"INFP",role:"Diplomat",type:"Mediator",description:"Poetic, kind and altruistic people, always eager to help a good cause.",trait:""},ENFJ:{mbti:"ENFJ",role:"Diplomat",type:"Protagonist",description:"Charismatic and inspiring leaders, able to mesmerize their listeners.",trait:""},ENFP:{mbti:"ENFP",role:"Diplomat",type:"Campaigner",description:"Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.",trait:""},ISTJ:{mbti:"ISTJ",role:"Sentinels",type:"Logistician",description:"Practical and fact-minded individuals, whose reliability cannot be doubted.",trait:""},ISFJ:{mbti:"ISFJ",role:"Sentinels",type:"Defender",description:"Very dedicated and warm protectors, always ready to defend their loved ones.",trait:""},ESTJ:{mbti:"ESTJ",role:"Sentinels",type:"Executive",description:"Excellent administrators, unsurpassed at managing things \u2013 or people.",trait:""},ESFJ:{mbti:"ESFJ",role:"Sentinels",type:"Consul",description:"Extraordinarily caring, social and popular people, always eager to help.",trait:""},ISTP:{mbti:"ISTP",role:"Explorer",type:"Virtuoso",description:"Bold and practical experimenters, masters of all kinds of tools.",trait:""},ISFP:{mbti:"ISFP",role:"Explorer",type:"Adventurer",description:"Flexible and charming artists, always ready to explore and experience something new.",trait:""},ESTP:{mbti:"ESTP",role:"Explorer",type:"Entrepreneur",description:"Smart, energetic and very perceptive people, who truly enjoy living on the edge.",trait:""},ESFP:{mbti:"ESFP",role:"Explorer",type:"Entertainer",description:"pontaneous, energetic and enthusiastic people \u2013 life is never boring around them.",trait:""}},N=[{id:1,personalityType:["INTP","INTJ"],type:"Ideal match",description:"The Architect (INTJ) tends to be a perfectionist, and at the core, values rules, order, and planning. They work best with someone who can either balance out their introversion or totally accept it \u2014 like The Logician (INTP). This is an excellent match because both types value honesty and independence. Since both enjoy time alone, neither is likely to get offended when the other needs to recharge solo. And given that they both spend a lot of time thinking about and exploring theories, they can definitely have super insightful, engaging conversation. In fact, they can challenge each other intellectually in a way that each craves. Both personality types have high expectations for themselves, as well as those around them \u2014 and neither shies away from a heated debate."},{id:2,personalityType:["ENFP","INFJ"],type:"Ideal match",description:"At first glance, it may seem like these two types are quite different, but the two traits they do share are actually super important \u2014 and the ones they don\u2019t can complement each other in a surprising way. For an ENFP, having an introverted partner offers up a rewarding challenge in terms of connecting on a deep level. Meanwhile, for an INFJ, having an extroverted partner (who\u2019s especially friendly, warm, and compassionate, to boot) may encourage them to get out of their comfort zone when it comes to socializing. In other words, this relationship can challenge both partners in a positive way."},{id:3,personalityType:["ENFJ","INFP"],type:"Ideal match",description:"This is another pairing that perfectly illustrates the importance of balance. ENFJs have a knack for getting people to open up so they can get a deeper look, and that\u2019s just what an INFP needs. The INFP has many complex layers to their personality, and fortunately, an ENFJ will find it immensely fulfilling to take the time to peel back each one. Since these types are both intuitive feelers, they have the awe-inspiring ability to sense each other\u2019s moods, desires, and needs with ease, and then care for each other accordingly. This is helpful given that the ENFJ \u2014 aka The Giver \u2014 is prone to forgetting to take care of their own needs. It will be nearly effortless for these two types to become in tune with each other, and since they\u2019re both skilled communicators, they\u2019re able to avoid misunderstandings and handle issues with ease (which is saying a lot for the conflict-hating ENFJ). Note that two ENFJs are also a phenomenal pairing, given that they are sensitive peacemakers by nature who value planning and organization."},{id:4,personalityType:["ISTJ","ESFP"],type:"Ideal match",description:"While this may seem like an unlikely duo, The Examiner and The Entertainer actually make a lot of sense, because they can bring different things to the relationship. You know the old expression \u201copposites attract\u201d? This combo serves as the perfect proof that it can certainly be true. While the ESFP will appreciate the ISTJ\u2019s determination, strength of character, and reliability, the ISTJ is bound to be attracted to the ESFP\u2019s natural amiability, charm, and emotional intelligence. These two types make a great team because they\u2019re both sensing personalities, meaning that they tend to focus on the here and now and make decisions based on the facts rather than their feelings or intuition. Best of all, these personalities complement each other in a number of unique ways. For example, ESFPs can challenge ISTJs to consider other peoples\u2019 feelings in any situation, and ISTJs can help ESFPs approach problem-solving in a more practical way and strategically pursue their goals."},{id:5,personalityType:["ESTP","ISFJ"],type:"Ideal match",description:"What often draws these two personality types to each other is that they\u2019re both incredibly energetic and enthusiastic in everything they do. Also, neither type demands a ton of emotional feedback in order to feel satisfied in their relationship. Even though the ISFJ is an introvert, this type does enjoy being around small groups of people, so they can totally keep up with the ESTP\u2019s active social life. An ESTP is often attracted to the ISFJ\u2019s dependable, nurturing nature, while the ISFJ is sucked in by the ESTP\u2019s charisma and sense of adventure. Both are sensing types, so they pay attention to detail, which means they\u2019re more likely to make choices and respond to situations in a similar fashion \u2014 based on knowledge from past experiences, as well as present facts. On top of that, they can push each other toward self-improvement. For instance, ESTPs are especially good at dealing with change, so they can help ISFJs to adapt to new situations."},{id:6,personalityType:["ESFJ","ISFP"],type:"Ideal match",description:"Despite a few differences, this pairing tends to balance each other out, while also sharing a common sensitivity, expressiveness, and natural affection. Since they both possess the sensing and feeling preferences, they are both super conscientious and empathetic \u2014 not to mention expert communicators, and they both prefer to hash out problems by openly and honestly sharing their feelings. As such, they can quickly recognize each others\u2019 needs and easily overcome conflict. While the ISFP can be a bit scattered (it comes with the territory of being incredibly creative), the ESFJ is wonderfully patient, and are able to appreciate their partner\u2019s artistic sensibilities while also helping to bring a little order to their lives (which they usually appreciate). Meanwhile, ISFPs can help ESFJs to lighten up and approach life with a more playful, spontaneous attitude."},{id:7,personalityType:["ISTP","ESTJ"],type:"Ideal match",description:"While ISTPs tend to be spontaneous and unpredictable, ESTJs are methodical, organized, and value structure. While it might seem like an odd pairing, these personalities are both pretty pragmatic. Most importantly, they share the sensing and thinking preferences. That means they have the same straightforward communication tendencies, and they both approach decisions in the same logical, practical way. These shared traits allow them to better understand each other and potentially avoid some conflict because they can be super direct without having to worry about offending each other. Besides, their differences only make them a stronger team. The extrovert side of ESTJs will appreciate that the introverted ISTP is always willing to lend an ear when they need to vent, and the ISTP will enjoy the fact that their extroverted partner connects them to new people who they may otherwise have been too shy to meet."},{id:8,personalityType:["INFJ","ENTP"],type:"Ideal match",description:"This pairing only shares one trait \u2014 the intuitive preference. But if you\u2019re scratching your head over this match, consider this: These two personalities love a challenge, which means their complex relationship will prove immensely fulfilling for both partners. In other words, they aren\u2019t likely to get frustrated by their differences \u2014 instead, they\u2019ll view them as an exciting opportunity for growth. The ENTP is a pro at getting the slightly guarded INFJ to come out of their shell, while the INFJ is able to help the ENTP improve their organizational skills. While the ENTP can give the INFJ the encouragement they may need to socialize, they also won\u2019t get offended when the INFJ needs some personal space or time alone."},{id:9,personalityType:["ENTJ","INTP"],type:"Ideal match",description:"What makes this bond super special is that these personality types place a high value on intellect and have a shared eagerness and passion for learning, which means they\u2019re bound to have an endlessly stimulating relationship. They can even enjoy a little healthy competition, motivating each other to improve in a variety of ways. Direct, analytical, and logical, these personalities tend to approach conflict in much the same way. They can engage in candid conversations about their problems, because neither type is overly sensitive \u2014 so they don\u2019t have to sugar coat their thoughts to avoid hurting each other\u2019s feelings. Another commonality for this duo is that they are both forward-thinking, and prefer to thoroughly think through their decisions. As a result, they have an easy time planning for the future together"}],q=(n(20),function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{Introversion:0,Extraversion:0,Sensing:0,iNtuitive:0,Thinking:0,Feeling:0,Judging:0,Perceptive:0},result:"",mbtiData:{},matchData:{}},e.handleAnswerSelected=e.handleAnswerSelected.bind(Object(d.a)(e)),e}return Object(h.a)(n,[{key:"shuffleArray",value:function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}},{key:"componentDidMount",value:function(){var e=this,t=P.map((function(t){return e.shuffleArray(t.answers)}));this.setState({question:P[0].question,answerOptions:t[0],mbtiData:x,matchData:N})}},{key:"setUserAnswer",value:function(e){console.log("selected ans: ",e),this.setState((function(t){return{answersCount:Object(l.a)(Object(l.a)({},t.answersCount),{},Object(r.a)({},e,(t.answersCount[e]||0)+1)),answer:e}}))}},{key:"setNextQuestion",value:function(){var e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:P[e].question,answerOptions:P[e].answers,answer:""})}},{key:"getResults",value:function(){var e=this.state.answersCount,t=e.Introversion>e.Extraversion?"I":"E",n=e.Sensing>e.iNtuitive?"S":"N",a=e.Thinking>e.Feeling?"T":"F",i=e.Judging>e.Perceptive?"J":"P",o="".concat(t).concat(n).concat(a).concat(i);return console.log("get result returns:",o),o}},{key:"setResults",value:function(e){console.log("result len: ",e.length),4===e.length?this.setState({result:e}):this.setState({result:"Undetermined"})}},{key:"handleAnswerSelected",value:function(e){var t=this;this.setUserAnswer(e.currentTarget.value),this.state.questionId<P.length?setTimeout((function(){return t.setNextQuestion()}),300):setTimeout((function(){return t.setResults(t.getResults())}),300)}},{key:"renderQuiz",value:function(){return i.a.createElement(J,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:P.length,onAnswerSelected:this.handleAnswerSelected})}},{key:"renderResult",value:function(){var e=this.state.result,t=this.state.mbtiData[this.state.result],n=this.state.matchData.filter((function(t){return t.personalityType.includes(e)}));return console.log("mbtidadaitem: ",t),i.a.createElement(E,{quizResult:e,mbti:t,matches:n})}},{key:"render",value:function(){return i.a.createElement("div",{class:"row"},i.a.createElement("h1",{style:{textAlign:"center"}},"Personality Compatibility Matcher"),i.a.createElement("div",null,this.state.result?this.renderResult():this.renderQuiz()))}}]),n}(a.Component));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(q,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.5aaee5d1.chunk.js.map