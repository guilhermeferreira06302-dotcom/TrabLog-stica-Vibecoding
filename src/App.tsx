import { useEffect, useRef, useState } from 'react'

/* ─── tipos ─────────────────────────────────────────── */
type SlideId = 's1'|'s2'|'s3'|'s4'|'s5'|'s6'|'s7'|'s8'

/* ─── estilos inline compartilhados ─────────────────── */
const S = {
  slide: {
    width: 960,
    height: 540,
    position: 'relative' as const,
    overflow: 'hidden' as const,
    borderRadius: 4,
    flexShrink: 0,
    scrollMarginTop: 52,
    boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
  },
  bar: {
    position: 'absolute' as const,
    bottom: 0, left: 0, right: 0,
    height: 3,
    background: 'linear-gradient(90deg,#00e5ff 0%,#8b5cf6 50%,#f59e0b 100%)',
  },
  eyebrow: {
    fontSize: 11, fontWeight: 700,
    letterSpacing: 3, textTransform: 'uppercase' as const,
    color: '#00e5ff', marginBottom: 8,
  },
  sep: {
    width: '100%', height: 1.5,
    background: 'linear-gradient(90deg,#00e5ff 0%,#8b5cf6 100%)',
    marginBottom: 14,
  },
}

/* ═══════════════════════════════════════════════════════
   SLIDE 1 — CAPA
═══════════════════════════════════════════════════════ */
function Slide1() {
  return (
    <div id="s1" style={{
      ...S.slide,
      background: 'linear-gradient(135deg,#0d1117 0%,#111827 60%,#0f172a 100%)',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '56px 64px',
    }}>
      {/* decorative circles */}
      <div style={{ position:'absolute', top:-60, right:-60, width:380, height:380, pointerEvents:'none' }}>
        <div style={{ position:'absolute', width:340, height:340, borderRadius:'50%', border:'1.5px solid rgba(139,92,246,0.35)', top:0, right:0 }}/>
        <div style={{ position:'absolute', width:260, height:260, borderRadius:'50%', background:'rgba(30,40,70,0.7)', border:'1px solid rgba(0,229,255,0.15)', top:40, right:40 }}/>
      </div>

      <div style={{ fontSize:11, fontWeight:700, letterSpacing:3, textTransform:'uppercase', color:'#00e5ff', marginBottom:24 }}>
        TRABALHO DE LOGÍSTICA
      </div>
      <h1 style={{ fontSize:56, fontWeight:800, color:'#fff', lineHeight:1.1, maxWidth:560 }}>
        Segurança, Meio Ambiente<br/>e Saúde (SMS)
      </h1>
      <div style={{ fontSize:18, color:'#94a3b8', marginTop:16, marginBottom:16 }}>
        Normas Regulamentadoras &amp; Legislação Trabalhista
      </div>
      <div style={{ width:120, height:3, background:'#00e5ff', marginBottom:24 }}/>
      <div style={{ display:'flex', gap:10 }}>
        {['SMS','NRs','CLT','ISO 14000'].map(b => (
          <div key={b} style={{
            border:'1.5px solid rgba(0,229,255,0.4)', color:'#fff',
            fontSize:13, fontWeight:700, padding:'8px 24px', borderRadius:2,
            background:'rgba(0,229,255,0.05)',
          }}>{b}</div>
        ))}
      </div>
      <div style={{ position:'absolute', bottom:20, left:64, fontSize:13, color:'#94a3b8' }}>
        18 de Maio de 2026 &nbsp;•&nbsp; Área de Logística
      </div>
      <div style={S.bar}/>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   SLIDE 2 — 4 PILARES
═══════════════════════════════════════════════════════ */
const pilares = [
  { num:1, color:'#00c896', textColor:'#fff', title:'Sustentabilidade\nnos Negócios',   desc:'Neutralidade de carbono nas operações. Prevenção e mitigação de impactos ambientais.' },
  { num:2, color:'#00e5ff', textColor:'#000', title:'Gestão Baseada\nem Riscos',        desc:'Excelência em segurança de processo. Aprendizado contínuo e inovação para redução proativa de riscos.' },
  { num:3, color:'#8b5cf6', textColor:'#fff', title:'Respeito\nà Vida',                 desc:'Cultura justa de SMS baseada em confiança mútua, transparência e aprendizado.' },
  { num:4, color:'#f59e0b', textColor:'#fff', title:'SMS\nÉ Valor',                     desc:'Zero fatalidade e zero vazamento. Metas integradas à estratégia e processos decisórios.' },
]

function Slide2() {
  return (
    <div id="s2" style={{
      ...S.slide,
      background:'#0d1117',
      display:'flex', flexDirection:'column',
      padding:'32px 48px 28px',
    }}>
      <div style={S.eyebrow}>SEGURANÇA, MEIO AMBIENTE E SAÚDE</div>
      <h2 style={{ fontSize:32, fontWeight:800, color:'#fff', marginBottom:12 }}>Os 4 Pilares SMS</h2>
      <div style={S.sep}/>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, flex:1 }}>
        {pilares.map(p => (
          <div key={p.num} style={{
            background:'#1a2233', borderRadius:4,
            borderTop:`3px solid ${p.color}`,
            padding:'20px 18px',
            display:'flex', flexDirection:'column', gap:12,
          }}>
            <div style={{ display:'flex', justifyContent:'center' }}>
              <div style={{
                width:54, height:54, borderRadius:'50%',
                background:p.color, color:p.textColor,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:24, fontWeight:800,
              }}>{p.num}</div>
            </div>
            <h3 style={{ fontSize:14, fontWeight:700, color:'#fff', textAlign:'center', lineHeight:1.3, whiteSpace:'pre-line' }}>{p.title}</h3>
            <p style={{ fontSize:12, color:'#94a3b8', lineHeight:1.55 }}>{p.desc}</p>
          </div>
        ))}
      </div>
      <div style={S.bar}/>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   SLIDE 3 — O QUE SÃO NRs
═══════════════════════════════════════════════════════ */
function Slide3() {
  return (
    <div id="s3" style={{
      ...S.slide,
      background:'#0d1117',
      display:'flex', flexDirection:'column',
      padding:'32px 48px 28px',
    }}>
      <div style={S.eyebrow}>LEGISLAÇÃO &nbsp;●&nbsp; NR</div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
        <h2 style={{ fontSize:42, fontWeight:800, color:'#fff', lineHeight:1.1, maxWidth:580 }}>
          O que são as Normas<br/>Regulamentadoras?
        </h2>
        <div style={{ border:'1.5px solid #8b5cf6', borderRadius:4, padding:'14px 24px', textAlign:'center', minWidth:180 }}>
          <div style={{ fontSize:22, fontWeight:800, color:'#8b5cf6' }}>Lei nº 6.514</div>
          <div style={{ fontSize:14, color:'#fff', margin:'2px 0' }}>de 1977</div>
          <div style={{ fontSize:11, color:'#94a3b8' }}>Ministério do Trabalho</div>
        </div>
      </div>
      <div style={S.sep}/>
      <div style={{
        background:'#1a2233', borderLeft:'3px solid #8b5cf6',
        borderRadius:'0 4px 4px 0', padding:'14px 20px',
        fontSize:13, color:'#94a3b8', lineHeight:1.65, marginBottom:14,
      }}>
        São disposições complementares ao Capítulo V do Título II da CLT, introduzidas pela Lei nº 6.514/1977, que atribuiu ao Ministério do Trabalho a competência para estabelecê-las. Seu objetivo é prevenir acidentes e doenças ocupacionais.
      </div>
      <div style={{
        background:'#1a2233', border:'1px solid rgba(0,229,255,0.25)',
        borderRadius:4, padding:'12px 20px',
        display:'flex', gap:20, alignItems:'flex-start', marginBottom:14,
      }}>
        <div style={{ fontSize:14, fontWeight:700, color:'#00e5ff', whiteSpace:'nowrap' }}>Art. 1°</div>
        <p style={{ fontSize:12, color:'#94a3b8', lineHeight:1.6, fontStyle:'italic' }}>
          As NRs são de observância obrigatória pelas empresas privadas e públicas e pelos órgãos dos Poderes Legislativo e Judiciário, que possuam empregados regidos pela CLT.
        </p>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10 }}>
        {[
          { color:'#00e5ff', title:'Obrigatoriedade', text:'Aplicável ao setor público e privado, incluindo os Poderes Legislativo e Judiciário com empregados CLT.' },
          { color:'#00c896', title:'Objetivo Principal', text:'Prevenir acidentes e doenças ocupacionais em todos os ambientes de trabalho.' },
          { color:'#8b5cf6', title:'Aplicação', text:'Abrange todos os setores que possuam empregados regidos pela Consolidação das Leis do Trabalho.' },
        ].map(b => (
          <div key={b.title} style={{ background:'#1a2233', borderRadius:4, borderTop:`2px solid ${b.color}`, padding:'12px 14px' }}>
            <h4 style={{ fontSize:13, fontWeight:700, color:'#fff', marginBottom:5 }}>{b.title}</h4>
            <p style={{ fontSize:11, color:'#94a3b8', lineHeight:1.5 }}>{b.text}</p>
          </div>
        ))}
      </div>
      <div style={S.bar}/>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   SLIDE 4 — NR 9 / 16 / 17
═══════════════════════════════════════════════════════ */
const nrs = [
  { color:'#00c896', num:'NR 9',  sub:'Riscos Ambientais',    desc:'Monitora agentes físicos, químicos e biológicos. Integrada ao PGR e ISO 14001.' },
  { color:'#00e5ff', num:'NR 16', sub:'Atividades Perigosas', desc:'Adicional de 30% para expostos a explosivos, inflamáveis, eletricidade e violência.' },
  { color:'#f59e0b', num:'NR 17', sub:'Ergonomia',            desc:'Adapta condições de trabalho ao trabalhador. Exige AEP/AET. Inclui home office.' },
]

function Slide4() {
  return (
    <div id="s4" style={{
      ...S.slide,
      background:'#0d1117',
      display:'grid', gridTemplateColumns:'280px 1fr',
    }}>
      <div style={{
        background:'#111827', padding:'44px 32px',
        display:'flex', flexDirection:'column', justifyContent:'center', gap:12,
        borderRight:'1px solid rgba(255,255,255,0.1)',
      }}>
        <h2 style={{ fontSize:36, fontWeight:900, color:'#fff', lineHeight:1.05, textTransform:'uppercase' }}>
          NORMAS<br/>REGULAMEN-<br/>TADORAS
        </h2>
        <div style={{ width:60, height:3, background:'#00e5ff' }}/>
        <p style={{ fontSize:13, color:'#94a3b8', lineHeight:1.55 }}>
          Prevenção de acidentes e doenças ocupacionais em todos os setores.
        </p>
        <p style={{ fontSize:12, fontWeight:700, color:'#00e5ff', marginTop:12, lineHeight:1.6 }}>
          Lei nº 6.514/1977<br/>Ministério do Trabalho
        </p>
      </div>
      <div style={{
        padding:'36px 36px',
        display:'flex', flexDirection:'column', justifyContent:'center', gap:14,
        borderLeft:'2px solid rgba(0,229,255,0.2)',
      }}>
        {nrs.map(n => (
          <div key={n.num} style={{
            background:'#1a2233', borderRadius:4,
            borderLeft:`4px solid ${n.color}`,
            padding:'16px 20px',
            display:'flex', flexDirection:'column', gap:5,
          }}>
            <div style={{ fontSize:16, fontWeight:700, color:n.color }}>{n.num}</div>
            <div style={{ fontSize:13, fontWeight:700, color:'#fff' }}>{n.sub}</div>
            <div style={{ fontSize:12, color:'#94a3b8', lineHeight:1.5 }}>{n.desc}</div>
          </div>
        ))}
      </div>
      <div style={S.bar}/>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   SLIDE 5 — NR 19, NR 25 & ISO 14000
═══════════════════════════════════════════════════════ */
const isoCells = [
  { sc:'SC 1', color:'#00e5ff', title:'Sistemas de Gestão Ambiental',     desc:'Estrutura e requisitos do SGA (ISO 14001)' },
  { sc:'SC 2', color:'#00c896', title:'Auditoria Ambiental',              desc:'Diretrizes para auditorias do SGA' },
  { sc:'SC 3', color:'#8b5cf6', title:'Rotulagem Ambiental',              desc:'Selos e declarações ambientais de produtos' },
  { sc:'SC 4', color:'#00e5ff', title:'Avaliação de Desempenho Ambiental',desc:'Indicadores e métricas de desempenho ambiental' },
  { sc:'SC 5', color:'#00c896', title:'Avaliação do Ciclo de Vida',       desc:'Impacto ambiental do berço ao túmulo do produto' },
  { sc:'SC 7', color:'#8b5cf6', title:'Gases de Efeito Estufa',           desc:'Gestão de emissões e mudanças climáticas' },
]

function Slide5() {
  return (
    <div id="s5" style={{
      ...S.slide,
      background:'#0d1117',
      display:'flex', flexDirection:'column',
      padding:'28px 48px 24px',
    }}>
      <div style={S.eyebrow}>NORMAS REGULAMENTADORAS</div>
      <h2 style={{ fontSize:36, fontWeight:800, color:'#fff', marginBottom:10 }}>NR 19, NR 25 &amp; ISO 14000</h2>
      <div style={S.sep}/>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:12 }}>
        {[
          { color:'#8b5cf6', title:'NR 19 — Explosivos', items:[
            'Requisitos para fabricação, manuseio, armazenamento e transporte.',
            'Estrutura incombustível, piso antiestático, ventilação e combate a incêndio.',
            'Depósitos: máx. 60% da área ocupada. Exige Título de Registro do Exército.',
          ]},
          { color:'#00c896', title:'NR 25 — Resíduos Industriais', items:[
            'Gerenciamento de resíduos sólidos, líquidos ou gasosos.',
            'Melhores práticas para reduzir exposição ocupacional.',
            'Conforme Lei Federal nº 12.305/2010 — Política Nacional de Resíduos Sólidos.',
          ]},
        ].map(b => (
          <div key={b.title} style={{ background:'#1a2233', borderRadius:4, borderTop:`3px solid ${b.color}`, padding:'14px 18px' }}>
            <h3 style={{ fontSize:14, fontWeight:700, color:'#fff', marginBottom:8 }}>{b.title}</h3>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:5 }}>
              {b.items.map((it,i) => (
                <li key={i} style={{ fontSize:12, color:'#94a3b8', lineHeight:1.5, paddingLeft:16, position:'relative' }}>
                  <span style={{ position:'absolute', left:0, color:'#00e5ff', fontSize:8, top:3 }}>●</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ background:'#1a2233', borderRadius:4, border:'1px solid rgba(0,229,255,0.2)', padding:'12px 18px' }}>
        <h3 style={{ fontSize:14, fontWeight:700, color:'#00e5ff', marginBottom:5 }}>ISO 14000 — Gestão Ambiental Internacional</h3>
        <p style={{ fontSize:11.5, color:'#94a3b8', lineHeight:1.55, marginBottom:10 }}>
          Conjunto de normas do Comitê ISO/TC 207 para identificar, controlar e minimizar impactos ambientais. A ISO 14001 é a única certificável da família, definindo a estrutura para implementação de um Sistema de Gestão Ambiental (SGA) eficaz.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:6 }}>
          {isoCells.map(c => (
            <div key={c.sc} style={{ background:'#111827', borderRadius:3, border:`1px solid ${c.color}55`, padding:'7px 10px' }}>
              <div style={{ fontSize:11, fontWeight:800, color:c.color, marginBottom:2 }}>{c.sc}</div>
              <div style={{ fontSize:11, fontWeight:700, color:'#fff', marginBottom:2 }}>{c.title}</div>
              <div style={{ fontSize:10.5, color:'#94a3b8', lineHeight:1.4 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={S.bar}/>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   SLIDE 6 — CLT e CTPS
═══════════════════════════════════════════════════════ */
function Slide6() {
  return (
    <div id="s6" style={{
      ...S.slide,
      background:'#0d1117',
      display:'flex', flexDirection:'column',
      padding:'28px 48px 20px',
    }}>
      <div style={{ ...S.eyebrow, color:'#00e5ff' }}>LEGISLAÇÃO TRABALHISTA</div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
        <h2 style={{ fontSize:38, fontWeight:800, color:'#fff' }}>CLT e Carteira de Trabalho</h2>
        <div style={{ border:'2px solid #f59e0b', borderRadius:4, padding:'10px 22px', textAlign:'center', minWidth:150 }}>
          <div style={{ fontSize:40, fontWeight:900, color:'#f59e0b', lineHeight:1 }}>1943</div>
          <div style={{ fontSize:12, color:'#94a3b8', marginTop:3 }}>Criação da CLT</div>
        </div>
      </div>
      <div style={{ ...S.sep, background:'linear-gradient(90deg,#f59e0b 0%,#00e5ff 100%)' }}/>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, flex:1 }}>
        <div style={{ background:'#1a2233', borderRadius:4, borderLeft:'3px solid #f59e0b', padding:'16px 18px', display:'flex', flexDirection:'column', gap:10 }}>
          <h3 style={{ fontSize:14, fontWeight:700, color:'#fff' }}>CLT — Consolidação das Leis do Trabalho</h3>
          <p style={{ fontSize:12, color:'#94a3b8', lineHeight:1.6 }}>
            Criada por Getúlio Vargas em 1° de Maio de 1943, a CLT unificou normas trabalhistas e direitos fundamentais, protegendo o trabalhador e organizando as relações entre empregado e empregador.
          </p>
          <p style={{ fontSize:12, color:'#94a3b8', lineHeight:1.6 }}>
            Ainda válida no mundo digital e do home office, a CLT precisa acompanhar as mudanças sem perder sua essência: proteção ao trabalhador.
          </p>
        </div>
        <div style={{ background:'#1a2233', borderRadius:4, borderLeft:'3px solid #00e5ff', padding:'16px 18px', display:'flex', flexDirection:'column', gap:10 }}>
          <h3 style={{ fontSize:14, fontWeight:700, color:'#fff' }}>CTPS — Carteira de Trabalho</h3>
          <p style={{ fontSize:12, color:'#94a3b8', lineHeight:1.6 }}>
            Criada em 1932 (Decreto 21.175). Em 1969 passou a se chamar Carteira de Trabalho e Previdência Social.
          </p>
          <div style={{ fontSize:13, fontWeight:700, color:'#fff' }}>Garante ao trabalhador:</div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:6 }}>
            {['Férias','13° Salário','FGTS','Aposentadoria'].map(b => (
              <div key={b} style={{
                background:'rgba(0,229,255,0.08)', border:'1px solid rgba(0,229,255,0.3)',
                borderRadius:3, padding:'8px 0', textAlign:'center',
                fontSize:13, fontWeight:700, color:'#00e5ff',
              }}>{b}</div>
            ))}
          </div>
          <p style={{ fontSize:11.5, color:'#94a3b8', fontStyle:'italic', lineHeight:1.5 }}>
            Art. 1°3: CTPS é obrigatória para exercício de qualquer emprego, inclusive temporário.
          </p>
        </div>
      </div>
      <div style={S.bar}/>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   SLIDE 7 — JORNADA & ADICIONAIS
═══════════════════════════════════════════════════════ */
const stats = [
  { val:'8h / dia',   lbl:'Jornada\ndiária máxima',       color:'#00e5ff', border:'rgba(0,229,255,0.4)' },
  { val:'44h / sem.', lbl:'Jornada\nsemanal máxima',       color:'#00c896', border:'rgba(0,200,150,0.4)' },
  { val:'+50%',       lbl:'Hora extra\ndias úteis',        color:'#f59e0b', border:'rgba(245,158,11,0.4)' },
  { val:'+100%',      lbl:'Hora extra\ndomingos/feriados', color:'#8b5cf6', border:'rgba(139,92,246,0.4)' },
  { val:'2h / dia',   lbl:'Limite de horas\nextras diárias', color:'#00e5ff', border:'rgba(0,229,255,0.4)' },
]
const adics = [
  { color:'#00c896', title:'Insalubridade', items:[
    'Grau Máximo: 40% do sal. mínimo',
    'Grau Médio: 20% do sal. mínimo',
    'Grau Mínimo: 10% do sal. mínimo',
    'Exige laudo técnico-pericial (NR-15)',
  ]},
  { color:'#8b5cf6', title:'Periculosidade', items:[
    '30% sobre o salário do empregado',
    'Risco com explosivos, inflamáveis,',
    'eletricidade e violência (NR-16)',
    'Não é cumulável com insalubridade',
  ]},
  { color:'#f59e0b', title:'Adicional Noturno', items:[
    'Período urbano: 22h–05h (art. 73 CLT)',
    'Mínimo legal: 20% sobre hora diurna',
    'Hora noturna reduzida por coeficiente',
    'Reflexos em férias e 13° salário',
  ]},
]

function Slide7() {
  return (
    <div id="s7" style={{
      ...S.slide,
      background:'#0d1117',
      display:'flex', flexDirection:'column',
      padding:'28px 48px 24px',
    }}>
      <div style={S.eyebrow}>LEGISLAÇÃO TRABALHISTA</div>
      <h2 style={{ fontSize:32, fontWeight:800, color:'#fff', marginBottom:10 }}>Jornada, Horas Extras &amp; Adicionais</h2>
      <div style={S.sep}/>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:8, marginBottom:12 }}>
        {stats.map(s => (
          <div key={s.val} style={{
            background:'#1a2233', borderRadius:4, border:`1px solid ${s.border}`,
            padding:'14px 10px', textAlign:'center',
            display:'flex', flexDirection:'column', alignItems:'center', gap:6,
          }}>
            <div style={{ fontSize:28, fontWeight:800, lineHeight:1, color:s.color }}>{s.val}</div>
            <div style={{ fontSize:11, color:'#94a3b8', lineHeight:1.3, textAlign:'center', whiteSpace:'pre-line' }}>{s.lbl}</div>
          </div>
        ))}
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10 }}>
        {adics.map(a => (
          <div key={a.title} style={{ background:'#1a2233', borderRadius:4, borderTop:`3px solid ${a.color}`, padding:'13px 15px' }}>
            <h3 style={{ fontSize:13, fontWeight:700, color:'#fff', marginBottom:8 }}>{a.title}</h3>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:5 }}>
              {a.items.map((it,i) => (
                <li key={i} style={{ fontSize:11.5, color:'#94a3b8', lineHeight:1.4, paddingLeft:18, position:'relative' }}>
                  <span style={{ position:'absolute', left:0, color:a.color, fontSize:9, top:2 }}>►</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={S.bar}/>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   SLIDE 8 — CONCLUSÃO
═══════════════════════════════════════════════════════ */
const conclusoes = [
  { color:'#00c896', text:'A política de SMS guia operações responsáveis, reduzindo riscos à saúde humana e ao meio ambiente.' },
  { color:'#00e5ff', text:'As NRs garantem condições mínimas de segurança e saúde no trabalho em todos os setores da economia.' },
  { color:'#f59e0b', text:'A CLT e a CTPS protegem o trabalhador e organizam relações de trabalho equilibradas e humanas.' },
]

function Slide8() {
  return (
    <div id="s8" style={{
      ...S.slide,
      background:'linear-gradient(135deg,#0d1117 0%,#111827 100%)',
      display:'flex', flexDirection:'column',
      padding:'52px 64px', justifyContent:'center',
    }}>
      {/* decorative circles */}
      <div style={{ position:'absolute', top:-40, right:-40, width:320, height:320, pointerEvents:'none' }}>
        <div style={{ position:'absolute', width:290, height:290, borderRadius:'50%', border:'1px solid rgba(0,229,255,0.12)', top:0, right:0 }}/>
        <div style={{ position:'absolute', width:200, height:200, borderRadius:'50%', background:'rgba(30,40,80,0.5)', border:'1px solid rgba(139,92,246,0.2)', top:45, right:45 }}/>
        <div style={{ position:'absolute', width:120, height:120, borderRadius:'50%', border:'1px solid rgba(0,229,255,0.15)', top:85, right:85 }}/>
      </div>

      <div style={S.eyebrow}>CONCLUSÃO</div>
      <h2 style={{ fontSize:48, fontWeight:800, color:'#fff', lineHeight:1.1, maxWidth:600, marginBottom:14 }}>
        Uma Base Sólida para o<br/>Trabalhador e a Empresa
      </h2>
      <div style={{ width:120, height:3, background:'#00e5ff', marginBottom:32 }}/>
      <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
        {conclusoes.map((c,i) => (
          <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:18 }}>
            <div style={{ width:22, height:22, borderRadius:'50%', background:c.color, flexShrink:0, marginTop:1 }}/>
            <p style={{ fontSize:14, color:'#94a3b8', lineHeight:1.55 }}>{c.text}</p>
          </div>
        ))}
      </div>
      <div style={{ position:'absolute', bottom:20, left:64, fontSize:13, color:'rgba(148,163,184,0.4)' }}>
        18 / 05 / 2026
      </div>
      <div style={S.bar}/>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   APP PRINCIPAL
═══════════════════════════════════════════════════════ */
const SLIDES: SlideId[] = ['s1','s2','s3','s4','s5','s6','s7','s8']

export default function App() {
  const [active, setActive] = useState<SlideId>('s1')
  const refs = useRef<Record<SlideId, HTMLDivElement | null>>({} as any)

  const go = (id: SlideId) => {
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block:'start' })
  }

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id as SlideId)
      })
    }, { threshold: 0.5 })
    SLIDES.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* NAV */}
      <nav style={{
        position:'fixed', top:0, left:0, right:0,
        background:'rgba(5,8,16,0.95)',
        backdropFilter:'blur(12px)',
        borderBottom:'1px solid rgba(255,255,255,0.1)',
        display:'flex', alignItems:'center', justifyContent:'center',
        gap:6, padding:'8px 24px', zIndex:999,
      }}>
        <span style={{ color:'#94a3b8', fontSize:11, marginRight:8, letterSpacing:1 }}>SLIDES</span>
        {SLIDES.map((id, i) => (
          <button key={id} onClick={() => go(id)} style={{
            background: active === id ? '#00e5ff' : 'rgba(255,255,255,0.06)',
            border: active === id ? '1px solid #00e5ff' : '1px solid rgba(255,255,255,0.12)',
            color: active === id ? '#000' : '#94a3b8',
            fontSize:11, fontWeight:600,
            padding:'4px 12px', borderRadius:4,
            cursor:'pointer', transition:'all .15s',
          }}>
            {String(i+1).padStart(2,'0')}
          </button>
        ))}
      </nav>

      {/* SLIDES */}
      <div style={{
        display:'flex', flexDirection:'column', alignItems:'center',
        paddingTop:56, paddingBottom:80, gap:40,
      }}>
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
        <Slide7 />
        <Slide8 />
      </div>
    </>
  )
}
