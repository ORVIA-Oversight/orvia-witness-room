const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');}));

const demoData=[
{label:'01 — ACCOUNT',title:'Tell the account in your own words',body:`<div class="demo-row"><strong>Fictional account</strong><small>“At 19:40 I was told a resident had fallen. I went to the lounge, checked the resident, asked staff what had happened and called the on-call manager.”</small></div><div class="demo-row"><strong>System treatment</strong><small>Design principle: the original account remains distinct and corrections are shown as later versions in the signed-in workflow.</small></div>`},
{label:'02 — EVIDENCE',title:'Separate the account from the material that supports it',body:`<span class="evidence-pill">Incident form · supplied</span><span class="evidence-pill">Care notes · supplied</span><span class="evidence-pill">Phone log · missing</span><span class="evidence-pill">Staff account · disputed</span><div class="challenge" style="margin-top:22px"><strong>Evidence discipline</strong><br>Two records repeating the same assertion are not automatically independent corroboration. Source and provenance still matter.</div>`},
{label:'03 — CHRONOLOGY',title:'Build what happened, when, and according to which source',body:`<div class="demo-list"><div class="demo-row"><strong>19:40 — Initial notification</strong><small>Source: user account · verification pending</small></div><div class="demo-row"><strong>19:44 — Resident checked</strong><small>Source: account + care note</small></div><div class="demo-row"><strong>19:51 — On-call manager contacted</strong><small>Source: user account · phone log not yet supplied</small></div></div>`},
{label:'04 — PERSPECTIVES',title:'Different roles ask different questions',body:`<div class="demo-row"><strong>Legal scrutiny</strong><small>What establishes the exact escalation time?</small></div><div class="demo-row"><strong>Safeguarding</strong><small>Did any delay change risk or protection?</small></div><div class="demo-row"><strong>Governance</strong><small>Can ownership and rationale be reconstructed?</small></div><div class="demo-row"><strong>Family</strong><small>What human impact is absent from the formal record?</small></div>`},
{label:'05 — CRUCIBLE',title:'Pressure-test the case being presented',body:`<div class="challenge"><strong>Crucible challenge</strong><br>You rely on 19:51 as the escalation time. What supports it, what contradicts it, and would a different time materially change your reasoning?</div><div class="demo-row" style="margin-top:12px"><strong>Result</strong><small>The timing remains important but unresolved. More evidence is required before certainty is justified.</small></div>`},
{label:'06 — RED TEAM',title:'Look deliberately for what the case has missed',body:`<div class="demo-row"><strong>Blind spot</strong><small>Could the staff account be based on the same original source rather than independent recollection?</small></div><div class="demo-row"><strong>Counterargument</strong><small>If the phone log shows a later escalation, which parts of the current account still stand and which need correction?</small></div><div class="demo-row"><strong>Overconfidence check</strong><small>Do not state the disputed time as established fact.</small></div>`},
{label:'07 — PREPARATION REPORT',title:'Leave with clarity, limitations and next actions',body:`<div class="report-grid"><div><strong>Supported</strong><small>Initial attendance at the scene</small></div><div><strong>Disputed</strong><small>Exact escalation sequence</small></div><div><strong>Missing evidence</strong><small>On-call phone record</small></div><div><strong>Likely question</strong><small>What is the source for 19:51?</small></div><div><strong>Preparation action</strong><small>Obtain phone record and compare chronology</small></div><div><strong>Limitation</strong><small>No finding about truth, blame or liability</small></div></div>`}
];
const screen=document.getElementById('demo-screen');
const tabs=[...document.querySelectorAll('.demo-tab')];
function renderDemo(i){if(!screen)return;const d=demoData[i];screen.innerHTML=`<div class="demo-top"><span class="demo-badge">${d.label}</span><small>Fictional demonstration</small></div><h3>${d.title}</h3>${d.body}`;tabs.forEach((t,idx)=>t.classList.toggle('active',idx===i));}
tabs.forEach((t,i)=>t.addEventListener('click',()=>renderDemo(i)));renderDemo(0);


document.querySelectorAll('.purchase-button[aria-disabled="true"]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const note=document.querySelector('.commercial-note');
    note?.scrollIntoView({behavior:'smooth',block:'center'});
  });
});
