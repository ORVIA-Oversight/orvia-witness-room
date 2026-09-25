const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

const demoData = [
  {
    label: '01 — ACCOUNT',
    title: 'Tell the account in your own words',
    body: `<div class="demo-row"><strong>Fictional account</strong><small>“At 19:40 I was told a resident had fallen. I went to the lounge, checked the resident, asked staff what had happened and called the on-call manager.”</small></div>
           <div class="demo-row"><strong>System treatment</strong><small>The original account is preserved. Any later correction becomes a version, not a silent rewrite.</small></div>`
  },
  {
    label: '02 — CHRONOLOGY',
    title: 'Turn narrative into a traceable timeline',
    body: `<div class="demo-list">
      <div class="demo-row"><strong>19:40 — Initial notification</strong><small>Source: user account · verification pending</small></div>
      <div class="demo-row"><strong>19:44 — Resident checked</strong><small>Source: user account · evidence requested</small></div>
      <div class="demo-row"><strong>19:51 — On-call manager contacted</strong><small>Source: user account · phone log not yet supplied</small></div>
    </div>`
  },
  {
    label: '03 — EVIDENCE',
    title: 'Show what supports the account — and what is still missing',
    body: `<span class="evidence-pill">Incident form · supplied</span><span class="evidence-pill">Care notes · supplied</span><span class="evidence-pill">Phone log · missing</span><span class="evidence-pill">Staff account · disputed</span>
      <div class="challenge" style="margin-top:22px"><strong>Evidence gap</strong><br>The timing of the on-call escalation is material, but the supporting phone record has not yet been provided.</div>`
  },
  {
    label: '04 — CHALLENGE',
    title: 'The room asks the question nobody has yet resolved',
    body: `<div class="challenge"><strong>Evidence challenger</strong><br>You say the on-call manager was contacted at 19:51. What is the source for that time?</div>
      <div class="demo-row" style="margin-top:12px"><strong>Governance lens</strong><small>If the time is later corrected, does that alter the rationale for the actions that followed?</small></div>
      <div class="demo-row"><strong>Alternative interpretation</strong><small>Another staff account suggests escalation happened after medication was administered. This difference remains unresolved.</small></div>`
  },
  {
    label: '05 — REPORT',
    title: 'Leave with clarity, not a credibility score',
    body: `<div class="report-grid">
      <div><strong>Well supported</strong><small>Initial attendance at the scene</small></div>
      <div><strong>Needs clarification</strong><small>Exact escalation time</small></div>
      <div><strong>Alternative interpretation</strong><small>Sequence of escalation and medication</small></div>
      <div><strong>Missing evidence</strong><small>On-call phone record</small></div>
      <div><strong>Preparation action</strong><small>Obtain phone log and compare against care notes</small></div>
      <div><strong>Limitation</strong><small>No finding is made about truth, blame or liability</small></div>
    </div>`
  }
];

const screen = document.getElementById('demo-screen');
const tabs = [...document.querySelectorAll('.demo-tab')];
function renderDemo(i){
  const d = demoData[i];
  screen.innerHTML = `<div class="demo-top"><span class="demo-badge">${d.label}</span><small>Fictional demonstration</small></div><h3>${d.title}</h3>${d.body}`;
  tabs.forEach((t,idx)=>t.classList.toggle('active',idx===i));
}
tabs.forEach((t,i)=>t.addEventListener('click',()=>renderDemo(i)));
renderDemo(0);

const modeCopy = document.getElementById('mode-copy');
document.querySelectorAll('.mode').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.mode').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  modeCopy.textContent = btn.dataset.mode === 'practice'
    ? 'Practice mode is designed for rehearsal without performative scoring or comparison against other users. Retention can be configured.'
    : 'Saved-case mode deliberately keeps an ongoing account, evidence, open questions, session history, contradictions, preparation actions and report versions.';
}));
