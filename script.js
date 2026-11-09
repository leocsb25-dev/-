'use strict';
const questions = [
['숙소에 도착해 한 시간 여유가 생겼다.', ['일행과 근처 카페에 가서 이야기를 나눈다.','E'],['조용히 혼자 쉬면서 이동 피로를 푼다.','I']],
['처음 가는 도시의 여행 글을 찾아본다.', ['동선, 이동 시간, 가게 후기를 먼저 살핀다.','S'],['어떤 분위기의 여행이 될지 먼저 상상한다.','N']],
['일행이 서로 다른 식당을 가고 싶어 한다.', ['각자 그곳에 가고 싶은 이유를 먼저 듣는다.','F'],['가격과 거리처럼 함께 비교할 기준을 먼저 정한다.','T']],
['여행지에서 오후 일정이 비었다.', ['갈 곳과 이동 시간을 정한 뒤 출발한다.','J'],['일단 나가서 걷다가 마음에 드는 곳에 들른다.','P']],
['낯선 도시에서 자유시간이 생겼다.', ['이어폰을 끼고 혼자 동네를 둘러본다.','I'],['일행과 같이 나가 서로 발견한 곳을 구경한다.','E']],
['작은 마을에 다녀온 기억을 전한다.', ['마을의 분위기와 그곳에서 떠오른 생각을 말한다.','N'],['걸었던 길과 먹었던 음식처럼 기억나는 장면을 말한다.','S']],
['예산 때문에 체험 하나를 빼야 한다.', ['가격 대비 즐길 시간이 짧은 체험부터 살핀다.','T'],['각자 어떤 체험을 가장 기대했는지부터 묻는다.','F']],
['인기 있는 식당이 여럿 보인다.', ['당일 동네를 둘러보고 끌리는 곳에 간다.','P'],['한 곳을 골라 식사 시간과 함께 미리 정한다.','J']],
['종일 돌아다닌 뒤 저녁이 됐다.', ['일행과 오늘 있었던 이야기를 하며 쉰다.','E'],['각자 방에서 조용히 쉰 뒤 다시 만난다.','I']],
['작은 박물관의 전시를 보고 있다.', ['전시물의 쓰임새와 당시 생활을 살펴본다.','S'],['전시물에 얽힌 이야기를 상상해 본다.','N']],
['한 사람이 지쳐서 다음 일정이 고민된다.', ['그 사람이 어떤 속도라면 편할지 먼저 묻는다.','F'],['남은 시간과 이동 거리를 보고 조정할 일정을 찾는다.','T']],
['여행 마지막 날 오전이 남았다.', ['아침 기분에 따라 하고 싶은 걸 고른다.','P'],['전날 밤에 마지막 일정과 출발 시간을 정해둔다.','J']],
['숙소 공용 공간에서 다른 여행자를 만났다.', ['먼저 말을 걸어 서로의 여행 이야기를 나눈다.','E'],['가볍게 인사하고 나만의 시간을 보낸다.','I']],
['다음 여행지를 고르는 중이다.', ['새로운 영감을 줄 낯선 풍경을 상상한다.','N'],['실제 사진과 교통, 숙소 정보를 확인한다.','S']],
['예약한 숙소에 문제가 생겼다.', ['가능한 대안의 비용과 조건을 비교한다.','T'],['당황한 일행의 마음부터 살핀다.','F']],
['여행 가방을 챙길 때 나는?', ['목록을 만들고 필요한 물건을 미리 챙긴다.','J'],['떠나기 전에 그때 필요한 물건을 골라 담는다.','P']]
];
const results = {
 ISTJ:['🗓️','시간표 여행대장','꼼꼼하게 챙긴 일정 덕분에 여행이 한결 편안해져요. 믿을 수 있는 정보와 약속한 시간을 소중하게 생각해요.'],
 ISFJ:['🧺','든든한 일정지기','작은 준비로 일행의 하루를 편안하게 만들어요. 익숙하고 아늑한 장소에서 함께 쌓는 추억을 좋아해요.'],
 INFJ:['🌌','이야기를 따라 걷는 여행자','장소에 깃든 이야기와 의미를 찾아 걸어요. 마음이 통하는 사람과 깊은 대화를 나누는 시간이 소중해요.'],
 INTJ:['🧭','경로 설계자','나만의 기준으로 효율적인 여행을 설계해요. 충분히 알아보고 고른 특별한 장소를 차분히 탐험해요.'],
 ISTP:['🛠️','가볍게 떠나는 현장 탐험가','직접 움직이며 여행의 감각을 발견해요. 상황이 달라져도 침착하게 방법을 찾아 자유롭게 떠나요.'],
 ISFP:['🎨','골목길 수집가','작은 가게와 예쁜 빛처럼 순간의 아름다움을 발견해요. 마음이 이끄는 길을 나만의 속도로 걸어요.'],
 INFP:['💌','여행 엽서 수집가','마음에 오래 남을 풍경과 감정을 모아요. 계획에 없던 작은 만남에서도 나만의 이야기를 발견해요.'],
 INTP:['🔎','숨은 이야기 조사관','여행지의 낯선 지식과 숨은 맥락이 궁금해요. 호기심이 향하는 곳에서 시간을 잊고 탐색해요.'],
 ESTP:['🏄','지금 출발하는 탐험가','생생한 현장과 새로운 체험에서 에너지를 얻어요. 기회가 보이면 가볍게 도전하며 여행을 즐겨요.'],
 ESFP:['🎉','여행지 분위기 메이커','함께 웃고 즐기는 순간이 최고의 기념품이에요. 현장의 분위기를 느끼며 오늘의 즐거움을 발견해요.'],
 ENFP:['🎈','샛길 발견대장','새로운 사람과 뜻밖의 길에서 설렘을 찾아요. 번뜩이는 아이디어로 여행에 다채로운 이야기를 더해요.'],
 ENTP:['💡','즉석 코스 발명가','뻔하지 않은 코스를 떠올리는 일이 즐거워요. 새로운 가능성을 이야기하고 유연하게 여행을 바꿔 가요.'],
 ESTJ:['🗺️','동선 정리대장','일정과 역할을 정리해 모두의 여행을 이끌어요. 현실적인 판단과 빠른 실행으로 하루를 알차게 만들어요.'],
 ESFJ:['🍽️','모두의 식탁지기','모두가 함께 즐길 수 있는 여행을 준비해요. 맛있는 한 끼와 세심한 배려로 다정한 추억을 만들어요.'],
 ENFJ:['📷','추억 모으는 여행대장','일행의 취향을 살피고 함께할 경험을 제안해요. 모두가 오래 기억할 특별한 순간을 만드는 데 진심이에요.'],
 ENTJ:['🚩','여행 작전사령관','원하는 경험을 정하고 과감하게 실행해요. 큰 그림과 명확한 판단으로 여행의 가능성을 넓혀 가요.']
};
const pairs=['EI','SN','TF','JP'];
const labels=[['함께 충전 E','혼자 충전 I'],['구체적인 정보 S','가능성과 상상 N'],['합리적인 기준 T','마음과 관계 F'],['미리 정하기 J','현지에서 정하기 P']];
const tips=['함께하는 시간과 혼자 쉬는 시간을 미리 나눠 볼까요?','구체적인 이동 정보와 기대하는 분위기를 함께 이야기해 보세요.','비교할 기준과 각자가 기대하는 경험을 하나씩 나눠 보세요.','꼭 가고 싶은 곳을 한 곳씩 정하고 나머지는 현지에서 골라 볼까요?'];
let answers=[],current=0,lastResult=null;
const app=document.querySelector('#app');
function focusTitle(){const h=app.querySelector('h1,h2');if(h){h.tabIndex=-1;h.focus({preventScroll:true});}window.scrollTo(0,0);}
function calculate(a){
 if(a.length!==16||a.some((v,i)=>!questions[i].slice(1).some(o=>o[1]===v)))throw new Error('Incomplete answers');
 const scores=pairs.map(p=>a.filter(v=>v===p[0]).length);
 const type=pairs.map((p,i)=>scores[i]>2?p[0]:scores[i]<2?p[1]:a.filter(v=>p.includes(v)).at(-1)).join('');
 return {scores,type};
}
function validResult(r){return r&&results[r.type]&&Array.isArray(r.scores)&&r.scores.length===4&&r.scores.every((n,i)=>Number.isInteger(n)&&n>=0&&n<=4&&(n===2||r.type[i]===(n>2?pairs[i][0]:pairs[i][1])));}
function readSaved(){try{const r=JSON.parse(localStorage.getItem('travel-mbti-v1'));return validResult(r)?r:null;}catch{return null;}}
function toast(t){const el=document.querySelector('#toast');el.textContent=t;el.style.display='block';clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.style.display='none',3500);}
function home(){const saved=readSaved();app.innerHTML=`<section class="intro"><div><div class="eyebrow">YOUR NEXT JOURNEY STARTS WITH YOU</div><span class="pill">16개의 질문, 나만의 여행 캐릭터</span><h1 style="margin-top:22px">어디로 갈까?<br>그 전에,<br>나는 어떤 여행자?</h1><p class="lead">촘촘한 계획파부터 발길 닿는 대로 자유파까지.<br>여행 속 작은 선택으로 나다운 여행을 발견해 보세요.</p><button class="primary start" id="start">내 여행 스타일 찾기 <span>↗</span></button><div class="meta small"><span>◷ 약 3분</span><span>✓ 가입 없이 바로 시작</span></div>${saved?'<button class="back save" id="saved">지난 결과 보기 →</button>':''}</div><div class="art" aria-label="여권과 여행 태그 일러스트" role="img"><div class="sun"></div><div class="hill"></div><div class="passport"><small>MY TRAVEL PERSONALITY</small><div class="globe">🌐</div><strong>PASSPORT</strong><small>어디든, 나답게</small></div><div class="tag one">🧭 나만의 속도로 떠나는 여행</div><div class="tag two">NEXT STOP : 나의 여행 취향 ↗</div></div></section><section class="features"><div><span>01 / DISCOVER</span><strong>16가지 여행 캐릭터</strong></div><div><span>02 / UNDERSTAND</span><strong>네 가지 취향 알아보기</strong></div><div><span>03 / TOGETHER</span><strong>동행과 결과 나누기</strong></div></section>`;document.querySelector('#start').onclick=start;document.querySelector('#saved')?.addEventListener('click',()=>showResult(saved));}
function start(){answers=[];current=0;question();}
function question(){const q=questions[current];const done=answers.filter(Boolean).length;app.innerHTML=`<section class="test"><div class="progress-head"><span>나의 여행 취향 찾는 중</span><span>${done} / 16 응답 · ${Math.round(done/16*100)}%</span></div><div class="progress" role="progressbar" aria-label="응답 진행률" aria-valuenow="${done}" aria-valuemin="0" aria-valuemax="16"><i style="width:${done/16*100}%"></i></div><p class="question-number">QUESTION ${String(current+1).padStart(2,'0')} / 16</p><h2>${q[0]}</h2><p class="small">더 나다운 선택을 골라 주세요. 정답은 없어요.</p><div class="options">${q.slice(1).map((o,i)=>`<button class="option ${answers[current]===o[1]?'selected':''}" data-choice="${i}" aria-pressed="${answers[current]===o[1]}"><b>${i?'B':'A'}</b><span>${o[0]}</span></button>`).join('')}</div><div class="nav"><button class="back" id="prev" ${current===0?'disabled':''}>← 이전 질문</button><button class="primary" id="next" ${!answers[current]?'disabled':''}>${current===15?'결과 확인하기':'다음 질문 →'}</button></div><p class="small" style="margin-top:28px">선택한 답은 이전 질문에서 바꿀 수 있어요.</p></section>`;
 app.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{answers[current]=q[Number(b.dataset.choice)+1][1];question();app.querySelector(`[data-choice="${b.dataset.choice}"]`).focus();});
 document.querySelector('#prev').onclick=()=>{current--;question();focusTitle();};document.querySelector('#next').onclick=()=>{if(!answers[current])return;if(current<15){current++;question();focusTitle();}else{const r=calculate(answers);try{localStorage.setItem('travel-mbti-v1',JSON.stringify(r));}catch{toast('브라우저에서 결과 저장을 허용하지 않아 이번 결과는 저장되지 않았어요.');}showResult(r);}};
}
function encode(r){return `TR1-${r.type}-${r.scores.join('')}`;}
function decode(s){const m=/^TR1-([EI][SN][TF][JP])-([0-4]{4})$/.exec(s.trim().toUpperCase());if(!m)return null;const r={type:m[1],scores:[...m[2]].map(Number)};return validResult(r)?r:null;}
function showResult(r){lastResult=r;const [emoji,title,desc]=results[r.type];app.innerHTML=`<section class="result"><div class="eyebrow">YOUR TRAVEL PERSONALITY</div><span class="pill">16 / 16 완료 · 나의 여행 캐릭터</span><div class="emoji" aria-hidden="true">${emoji}</div><div class="type">${r.type}</div><h1>${title}</h1><p class="description">${desc}</p><div class="card"><h3>내 여행 취향 한눈에 보기</h3>${pairs.map((p,i)=>`<div class="score"><div class="score-labels"><span>${labels[i][0]} · ${r.scores[i]}표</span><span>${labels[i][1]} · ${4-r.scores[i]}표</span></div><div class="score-bar"><i style="width:${r.scores[i]*25}%"></i></div></div>`).join('')}<p class="small">각 성향은 4문항으로 계산합니다. 2:2 동점이면 해당 성향의 마지막 답변을 반영해요.</p></div><div class="actions"><button class="primary" id="share">결과 공유하기 ↗</button><button class="secondary" id="restart">다시 하기 ↻</button></div><div class="card"><h3>동행과 여행 취향 비교하기</h3><p class="small">내 코드를 보내고, 동행에게 받은 코드를 입력해 보세요.</p><p>내 결과 코드 <span class="code">${encode(r)}</span> <button class="back" id="copy-code">복사</button></p><form id="compare-form"><label class="small" for="companion">동행 결과 코드</label><div class="compare"><input id="companion" maxlength="20" placeholder="TR1-ENFP-3231" autocomplete="off" spellcheck="false" required aria-describedby="compare-error"><button class="secondary">비교하기</button></div><p class="error" id="compare-error" role="alert"></p></form><div id="comparison" aria-live="polite"></div></div><p class="small">여행 취향을 나누기 위한 가벼운 테스트입니다.<br>응답은 서버로 전송되지 않으며 최근 결과만 이 브라우저에 저장됩니다.</p></section>`;
 document.querySelector('#restart').onclick=()=>{start();focusTitle();};document.querySelector('#share').onclick=share;document.querySelector('#copy-code').onclick=()=>copy(encode(r));document.querySelector('#compare-form').onsubmit=e=>{e.preventDefault();const other=decode(document.querySelector('#companion').value);document.querySelector('#compare-error').textContent=other?'':'동행에게 받은 결과 코드를 다시 확인해 주세요';document.querySelector('#comparison').innerHTML=other?`<div class="comparison"><h3>나 ${r.type} · 동행 ${other.type}</h3>${pairs.every((p,i)=>r.scores[i]===other.scores[i])?'<p>네 가지 성향 점수가 같아요.</p>':''}${pairs.map((p,i)=>`<p><strong>${labels[i][0]} / ${labels[i][1]}</strong><br>나 ${r.scores[i]} : ${4-r.scores[i]} · 동행 ${other.scores[i]} : ${4-other.scores[i]}${r.scores[i]!==other.scores[i]?`<br>💬 ${tips[i]}`:'<br>비슷한 선택 경향을 보였어요.'}</p>`).join('')}</div>`:'';};focusTitle();}
async function copy(text){try{if(!navigator.clipboard)throw new Error();await navigator.clipboard.writeText(text);toast('복사했어요. 동행에게 보내 보세요!');}catch{document.querySelector('#copy-text').value=text;document.querySelector('#copy-dialog').showModal();document.querySelector('#copy-text').select();}}
async function share(){const r=lastResult;const text=`${results[r.type][0]} 나의 여행 스타일은 ${r.type} · ${results[r.type][1]}!\n${results[r.type][2]}\n우리 여행 스타일을 비교해 볼래? 테스트 후 동행과 비교에 내 코드를 입력해 줘.\n내 결과 코드: ${encode(r)}`;const web=/^https?:$/.test(location.protocol);const url=web?new URL(location.pathname,location.origin).href:null;const data={title:'어디든, 나답게 — 여행 MBTI',text:text+(url?'':'\n같은 테스트 파일을 열어 시작해 줘.')};if(url)data.url=url;if(navigator.share){try{await navigator.share(data);return;}catch(e){if(e.name==='AbortError')return;}}await copy(data.text+(url?'\n'+url:''));}
document.querySelector('#close-dialog').onclick=()=>document.querySelector('#copy-dialog').close();home();
