import { useEffect, useRef, useState } from 'react'

/* ─── tipos ─────────────────────────────────────────── */
type SlideId = 's1'|'s2'|'s3'|'s4'|'s5'|'s6'|'s7'|'s8'

/* ─── estilos inline compartilhados ─────────────────── */
const S = {
  slide: {
    width: '100%',
    minHeight: '100vh',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column' as any,
    justifyContent: 'center',
  },
  bar: {
    position: 'absolute' as const,
    bottom: 0, left: 0, right: 0,
    height: 3,
    background: 'linear-gradient(90deg,#00e5ff 0%,#8b5cf6 50%,#f59e0b 100%)',
  },
  eyebrow: {
    fontSize: 20, fontWeight: 700,
    letterSpacing: 4, textTransform: 'uppercase' as const,
    color: '#00e5ff', marginBottom: 8,
  },
  sep: {
    width: '100%', height: 1.5,
    background: 'linear-gradient(90deg,#00e5ff 0%,#8b5cf6 100%)',
  },
}

/* ═══════════════════════════════════════════════════════
   SLIDE 1 — CAPA
═══════════════════════════════════════════════════════ */
function Slide1() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  
  const subtitleChars = "TRABALHO DE LOGÍSTICA".split("");
  const titleChars = "Segurança, Meio Ambiente e Saúde (SMS)".split("");

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (inView && step === 0) {
      setStep(1); // Inicia subtitle
      setTimeout(() => setStep(2), 1000); // Inicia title após 1s
      setTimeout(() => setStep(3), 2400); // Mostra o resto após 2.4s
    }
  }, [inView, step]);

  return (
    <div id="s1" ref={ref} style={{
      ...S.slide,
      background: 'linear-gradient(135deg,#0d1117 0%,#111827 60%,#0f172a 100%)',
      display: 'flex', flexDirection: 'column' as any,
      justifyContent: 'center',
      padding: '10vh 8vw', gap: '3vh',
    }}>
      {/* decorative circles */}
      <div style={{ position:'absolute', top:-60, right:-60, width:380, height:380, pointerEvents:'none' }}>
        <div style={{ position:'absolute', width:340, height:340, borderRadius:'50%', border:'1.5px solid rgba(139,92,246,0.35)', top:0, right:0 }}/>
        <div style={{ position:'absolute', width:260, height:260, borderRadius:'50%', background:'rgba(30,40,70,0.7)', border:'1px solid rgba(0,229,255,0.15)', top:40, right:40 }}/>
      </div>

      <div style={{ fontSize:24, fontWeight:700, letterSpacing:3, textTransform:'uppercase', color:'#00e5ff', marginBottom: '2vh', minHeight: 28 }}>
        {subtitleChars.map((char, i) => (
          <span key={i} style={{
            opacity: step >= 1 ? 1 : 0,
            transition: `opacity 0.1s ease ${i * 0.04}s`
          }}>{char}</span>
        ))}
        {step === 1 && <span style={{ borderRight: '3px solid #00e5ff', marginLeft: 4, animation: 'blink 0.8s step-end infinite' }} />}
      </div>
      <h1 style={{ fontSize: 82, fontWeight: 800, color: '#fff', lineHeight: 1.1, maxWidth: 1200, letterSpacing: '-2px', minHeight: 180 }}>
        {titleChars.map((char, i) => (
          <span key={i} style={{
            opacity: step >= 2 ? 1 : 0,
            transition: `opacity 0.15s ease ${i * 0.035}s`
          }}>{char}</span>
        ))}
        {step === 2 && <span style={{ borderRight: '5px solid #fff', marginLeft: 4, animation: 'blink 0.8s step-end infinite' }} />}
      </h1>

      <div style={{ width:120, height:3, background:'#00e5ff', marginBottom: '6vh' }}/>
      <div style={{ display:'flex', gap: '2.5vh', opacity: step === 3 ? 1 : 0, transition: 'opacity 1s ease 0.3s' }}>
        {['SMS','NRs','CLT','ISO 14000'].map(b => (
          <div key={b} style={{
            border:'1.5px solid rgba(0,229,255,0.4)', color:'#fff',
            fontSize:24, fontWeight:700, padding:'8px 24px', borderRadius:2,
            background:'rgba(0,229,255,0.05)',
          }}>{b}</div>
        ))}
      </div>

      <div style={S.bar}/>
      <style>{`
        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: inherit; }
        }
      `}</style>
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

function Slide2({ isActive }: { isActive?: boolean }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      setInView(e.isIntersecting);
    }, { threshold: 0.8 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="s2" ref={ref} style={{
      ...S.slide,
      background:'#0d1117',
      display:'flex', flexDirection:'column',
      justifyContent:'flex-start',
      padding: '12vh 8vw', gap: '3vh',
    }}>
      <div style={{ display:'flex', flexDirection:'column' }}>
        <div style={{
          ...S.eyebrow,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease 0s',
        }}>SEGURANÇA, MEIO AMBIENTE E SAÚDE</div>
        <h2 style={{
          fontSize: 64, fontWeight: 800, color: '#fff', letterSpacing: '-1px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease 0.1s',
        }}>Os 4 Pilares SMS</h2>
      </div>
      <div style={{
        ...S.sep,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease 0.2s',
      }}/>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap: '3vh', flex:1 }}>
        {pilares.map((p, index) => (
          <div key={p.num} style={{
            background:'#1a2233', borderRadius:4,
            borderTop:`3px solid ${p.color}`,
            padding:'28px 32px',
            display:'flex', flexDirection:'column', gap: '3vh',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: `all 0.8s ease ${0.3 + index * 0.2}s`,
          }}>
            <div style={{ display:'flex', justifyContent:'center' }}>
              <div style={{
                width:72, height:72, borderRadius:'50%',
                background:p.color, color:p.textColor,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:32, fontWeight:800,
              }}>{p.num}</div>
            </div>
            <h3 style={{ fontSize:24, fontWeight:700, color:'#fff', textAlign:'center', lineHeight:1.3, whiteSpace:'pre-line' }}>{p.title}</h3>
            <p style={{ fontSize:18, color:'#fff', lineHeight:1.55 }}>{p.desc}</p>
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
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      setIsActive(e.isIntersecting);
    }, { threshold: 0.8 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="s3" ref={ref} style={{
      ...S.slide,
      background:'#0d1117',
      display:'flex', flexDirection:'column',
      justifyContent:'flex-start',
      padding: '12vh 8vw', gap: '3vh',
    }}>
      <div style={{
        display:'flex', flexDirection:'column',
        opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.6s ease 0s'
      }}>
        <div style={S.eyebrow}>LEGISLAÇÃO &nbsp;●&nbsp; NR</div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
          <h2 style={{ fontSize:64, fontWeight:800, color:'#fff', lineHeight:1.1, letterSpacing: '-1px' }}>
            O que são as Normas Regulamentadoras?
          </h2>
          <div style={{ border:'2px solid #8b5cf6', borderRadius:4, padding:'18px 32px', textAlign:'center', minWidth:220, flexShrink: 0 }}>
            <div style={{ fontSize:28, fontWeight:800, color:'#8b5cf6' }}>Lei nº 6.514</div>
            <div style={{ fontSize:18, color:'#fdfdfd', margin:'4px 0' }}>de 1977</div>
            <div style={{ fontSize:14, color:'#fff' }}>Ministério do Trabalho</div>
          </div>
        </div>
      </div>
      <div style={{
        ...S.sep,
        opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.6s ease 0.1s'
      }}/>
      <div style={{
        background:'#1a2233', borderLeft:'4px solid #8b5cf6',
        borderRadius:'0 4px 4px 0', padding:'24px 32px',
        fontSize:20, color:'#fff', lineHeight:1.65,
        opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.6s ease 0.2s'
      }}>
        São disposições complementares ao Capítulo V do Título II da CLT, introduzidas pela Lei nº 6.514/1977, que atribuiu ao Ministério do Trabalho a competência para estabelecê-las. Seu objetivo é prevenir acidentes e doenças ocupacionais.
      </div>
      <div style={{
        background:'#1a2233', border:'1px solid rgba(0,229,255,0.25)',
        borderRadius:4, padding:'24px 32px',
        display:'flex', gap:28, alignItems:'flex-start',
        opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.6s ease 0.3s'
      }}>
        <div style={{ fontSize:32, fontWeight:800, color:'#00e5ff', whiteSpace:'nowrap' }}>Art. 1°</div>
        <p style={{ fontSize:18, color:'#fff', lineHeight:1.6, fontStyle:'italic' }}>
          As NRs são de observância obrigatória pelas empresas privadas e públicas e pelos órgãos dos Poderes Legislativo e Judiciário, que possuam empregados regidos pela CLT.
        </p>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(350px, 1fr))', gap: '3vh' }}>
        {[
          { color:'#00e5ff', title:'Obrigatoriedade', text:'Aplicável ao setor público e privado, incluindo os Poderes Legislativo e Judiciário com empregados CLT.' },
          { color:'#00c896', title:'Objetivo Principal', text:'Prevenir acidentes e doenças ocupacionais em todos os ambientes de trabalho.' },
          { color:'#8b5cf6', title:'Aplicação', text:'Abrange todos os setores que possuam empregados regidos pela Consolidação das Leis do Trabalho.' },
        ].map((b, i) => (
          <div key={b.title} style={{
            background:'#1a2233', borderRadius:4, borderTop:`3px solid ${b.color}`, padding:'20px 24px',
            opacity: isActive ? 1 : 0, transform: isActive ? 'translateX(0)' : 'translateX(-40px)', transition: `all 0.6s ease ${0.4 + i*0.15}s`
          }}>
            <h4 style={{ fontSize:20, fontWeight:700, color:'#fff', marginBottom:10 }}>{b.title}</h4>
            <p style={{ fontSize:16, color:'#fff', lineHeight:1.6 }}>{b.text}</p>
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
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      setInView(e.isIntersecting);
    }, { threshold: 0.8 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="s4" ref={ref} style={{
      ...S.slide,
      background:'#0d1117',
      display:'flex', flexDirection:'column',
      justifyContent:'flex-start',
      padding: '12vh 8vw', gap: '3vh',
    }}>
      <div style={{
        display:'flex', flexDirection:'column',
        opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.6s ease 0s'
      }}>
        <div style={S.eyebrow}>LEGISLAÇÃO &nbsp;●&nbsp; NR</div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
          <h2 style={{ fontSize: 64, fontWeight: 800, color: '#fff', letterSpacing: '-1px' }}>
            Normas Regulamentadoras
          </h2>
          <div style={{ border:'2px solid #00e5ff', borderRadius:4, padding:'18px 32px', textAlign:'center', minWidth:220 }}>
            <div style={{ fontSize:28, fontWeight:800, color:'#00e5ff' }}>Lei nº 6.514</div>
            <div style={{ fontSize:18, color:'#fff', margin:'4px 0' }}>de 1977</div>
            <div style={{ fontSize:14, color:'#fff' }}>Ministério do Trabalho</div>
          </div>
        </div>
      </div>
      
      <div style={{
        ...S.sep,
        opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.6s ease 0.15s'
      }}/>
      
      <p style={{
        fontSize:22, color:'#fff', lineHeight:1.55,
        opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.6s ease 0.3s'
      }}>
        Prevenção de acidentes e doenças ocupacionais em todos os setores, garantindo um ambiente de trabalho mais seguro.
      </p>
      
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(400px, 1fr))', gap: '5vh 4vw', margin: '4vh -4vw 0' }}>
        {nrs.map((n, i) => (
          <div key={n.num} style={{
            background:'#1a2233', borderRadius:6,
            borderTop:`4px solid ${n.color}`,
            padding:'28px 32px',
            display:'flex', flexDirection:'column', gap:10,
            opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(-40px)', transition: `all 0.6s ease ${0.45 + i*0.15}s`
          }}>
            <div style={{ fontSize:28, fontWeight:800, color:n.color }}>{n.num}</div>
            <div style={{ fontSize:24, fontWeight:700, color:'#fff' }}>{n.sub}</div>
            <div style={{ fontSize:18, color:'#fff', lineHeight:1.6 }}>{n.desc}</div>
          </div>
        ))}
      </div>
      <div style={{
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 14,
        color: '#8b949e',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease 0.9s'
      }}>
        AEP - Avaliação Ergonômica Preliminar &nbsp;|&nbsp; AET - Análise Ergonômica do Trabalho
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
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      setInView(e.isIntersecting);
    }, { threshold: 0.8 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="s5" ref={ref} style={{
      ...S.slide,
      background:'#0d1117',
      display:'flex', flexDirection:'column',
      justifyContent:'flex-start',
      padding: '12vh 8vw', gap: '3vh',
    }}>
      <div style={{
        display:'flex', flexDirection:'column',
        opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.6s ease 0s'
      }}>
        <div style={S.eyebrow}>NORMAS REGULAMENTADORAS</div>
        <h2 style={{ fontSize:64, fontWeight:800, color:'#fff', letterSpacing: '-1px' }}>NR 19, NR 25 &amp; ISO 14000</h2>
      </div>
      <div style={{
        ...S.sep,
        opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.6s ease 0.15s'
      }}/>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(400px, 1fr))', gap: '3vh' }}>
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
        ].map((b, i) => (
          <div key={b.title} style={{
            background:'#1a2233', borderRadius:4, borderTop:`3px solid ${b.color}`, padding:'28px 32px',
            opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-40px)', transition: `all 0.6s ease ${0.3 + i*0.15}s`
          }}>
            <h3 style={{ fontSize:24, fontWeight:700, color:'#fff', marginBottom:8 }}>{b.title}</h3>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:5 }}>
              {b.items.map((it,idx) => (
                <li key={idx} style={{ fontSize:18, color:'#fff', lineHeight:1.5, paddingLeft:16, position:'relative' }}>
                  <span style={{ position:'absolute', left:0, color:'#00e5ff', fontSize:12, top:5 }}>●</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        background:'#1a2233', borderRadius:4, border:'1px solid rgba(0,229,255,0.2)', padding:'28px 32px', marginLeft: '-4vw', marginRight: '-4vw',
        opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 0.6s ease 0.6s'
      }}>
        <h3 style={{ fontSize:24, fontWeight:700, color:'#00e5ff', marginBottom:5 }}>ISO 14000 — Gestão Ambiental Internacional</h3>
        <p style={{ fontSize:18, color:'#fff', lineHeight:1.55, marginBottom: '3vh' }}>
          Conjunto de normas do Comitê ISO/TC 207 para identificar, controlar e minimizar impactos ambientais. A ISO 14001 é a única certificável da família, definindo a estrutura para implementação de um Sistema de Gestão Ambiental (SGA) eficaz.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:8 }}>
          {isoCells.map((c, i) => (
            <div key={c.sc} style={{
              background:'#111827', borderRadius:3, border:`1px solid ${c.color}55`, padding:'16px 20px',
              opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-20px)', transition: `all 0.6s ease ${0.75 + i*0.1}s`
            }}>
              <div style={{ fontSize:16, fontWeight:800, color:c.color, marginBottom:2 }}>{c.sc}</div>
              <div style={{ fontSize:18, fontWeight:700, color:'#fff', marginBottom:2 }}>{c.title}</div>
              <div style={{ fontSize:16, color:'#fff', lineHeight:1.4 }}>{c.desc}</div>
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
      justifyContent:'flex-start',
      padding: '12vh 8vw', gap: '3vh',
    }}>
      <div style={{ display:'flex', flexDirection:'column' }}>
        <div style={{ ...S.eyebrow, color:'#00e5ff' }}>LEGISLAÇÃO TRABALHISTA</div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
          <h2 style={{ fontSize:64, fontWeight:800, color:'#fff', letterSpacing: '-1px' }}>CLT e Carteira de Trabalho</h2>
          <div style={{ border:'2px solid #f59e0b', borderRadius:4, padding:'20px 32px', textAlign:'center', minWidth:200 }}>
            <div style={{ fontSize:52, fontWeight:900, color:'#f59e0b', lineHeight:1 }}>1943</div>
            <div style={{ fontSize:18, color:'#fff', marginTop:3 }}>Criação da CLT</div>
          </div>
        </div>
      </div>
      <div style={{ ...S.sep, background:'linear-gradient(90deg,#f59e0b 0%,#00e5ff 100%)' }}/>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(400px, 1fr))', gap: '3vh', flex:1 }}>
        <div style={{ background:'#1a2233', borderRadius:4, borderLeft:'3px solid #f59e0b', padding:'28px 32px', display:'flex', flexDirection:'column', gap: '2.5vh' }}>
          <h3 style={{ fontSize:24, fontWeight:700, color:'#fff' }}>CLT — Consolidação das Leis do Trabalho</h3>
          <p style={{ fontSize:18, color:'#fff', lineHeight:1.6 }}>
            Criada por Getúlio Vargas em 1° de Maio de 1943, a CLT unificou normas trabalhistas e direitos fundamentais, protegendo o trabalhador e organizando as relações entre empregado e empregador.
          </p>
          <p style={{ fontSize:18, color:'#fff', lineHeight:1.6 }}>
            Ainda válida no mundo digital e do home office, a CLT precisa acompanhar as mudanças sem perder sua essência: proteção ao trabalhador.
          </p>
        </div>
        <div style={{ background:'#1a2233', borderRadius:4, borderLeft:'3px solid #00e5ff', padding:'28px 32px', display:'flex', flexDirection:'column', gap: '2.5vh' }}>
          <h3 style={{ fontSize:24, fontWeight:700, color:'#fff' }}>CTPS — Carteira de Trabalho</h3>
          <p style={{ fontSize:18, color:'#fff', lineHeight:1.6 }}>
            Criada em 1932 (Decreto 21.175). Em 1969 passou a se chamar Carteira de Trabalho e Previdência Social.
          </p>
          <div style={{ fontSize:24, fontWeight:700, color:'#fff' }}>Garante ao trabalhador:</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(400px, 1fr))', gap:6 }}>
            {['Férias','13° Salário','FGTS','Aposentadoria'].map(b => (
              <div key={b} style={{
                background:'rgba(0,229,255,0.08)', border:'1px solid rgba(0,229,255,0.3)',
                borderRadius:3, padding:'14px 0', textAlign:'center',
                fontSize:24, fontWeight:700, color:'#00e5ff',
              }}>{b}</div>
            ))}
          </div>
          <p style={{ fontSize:18, color:'#fff', fontStyle:'italic', lineHeight:1.5 }}>
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
  { prefix:'', num: 8, suffix:'h / dia',   lbl:'Jornada\ndiária máxima',       color:'#00e5ff', border:'rgba(0,229,255,0.4)' },
  { prefix:'', num: 44, suffix:'h / sem.', lbl:'Jornada\nsemanal máxima',       color:'#00c896', border:'rgba(0,200,150,0.4)' },
  { prefix:'+', num: 50, suffix:'%',       lbl:'Hora extra\ndias úteis',        color:'#f59e0b', border:'rgba(245,158,11,0.4)' },
  { prefix:'+', num: 100, suffix:'%',      lbl:'Hora extra\ndomingos/feriados', color:'#8b5cf6', border:'rgba(139,92,246,0.4)' },
  { prefix:'', num: 2, suffix:'h / dia',   lbl:'Limite de horas\nextras diárias', color:'#00e5ff', border:'rgba(0,229,255,0.4)' },
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

function AnimatedStat({ s, isActive }: { s: typeof stats[0], isActive?: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isActive) {
      let startTime: number | null = null;
      let reqId: number;
      const duration = 1500;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const easeOut = 1 - Math.pow(1 - percentage, 3);
        setCount(Math.floor(easeOut * s.num));
        if (progress < duration) {
          reqId = requestAnimationFrame(animate);
        } else {
          setCount(s.num);
        }
      };
      reqId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(reqId);
    } else {
      setCount(0);
    }
  }, [isActive, s.num])

  return (
    <div style={{
      background:'#1a2233', borderRadius:4, border:`1px solid ${s.border}`,
      padding:'24px 20px', textAlign:'center',
      display:'flex', flexDirection:'column', alignItems:'center', gap:6,
    }}>
      <div style={{ fontSize:42, fontWeight:800, lineHeight:1, color:s.color }}>
        {s.prefix}{count}{s.suffix}
      </div>
      <div style={{ fontSize:16, color:'#fff', lineHeight:1.3, textAlign:'center', whiteSpace:'pre-line' }}>{s.lbl}</div>
    </div>
  )
}

function Slide7({ isActive }: { isActive?: boolean }) {
  return (
    <div id="s7" style={{
      ...S.slide,
      background:'#0d1117',
      display:'flex', flexDirection:'column',
      justifyContent:'flex-start',
      padding: '12vh 8vw', gap: '3vh',
    }}>
      <div style={{ display:'flex', flexDirection:'column' }}>
        <div style={S.eyebrow}>LEGISLAÇÃO TRABALHISTA</div>
        <h2 style={{ fontSize: 64, fontWeight: 800, color: '#fff', letterSpacing: '-1px' }}>Jornada, Horas Extras &amp; Adicionais</h2>
      </div>
      <div style={S.sep}/>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap: '2vh' }}>
        {stats.map(s => (
          <AnimatedStat key={s.lbl} s={s} isActive={isActive} />
        ))}
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5vh' }}>
        {adics.map(a => (
          <div key={a.title} style={{ background:'#1a2233', borderRadius:4, borderTop:`3px solid ${a.color}`, padding:'24px 32px' }}>
            <h3 style={{ fontSize:24, fontWeight:700, color:'#fff', marginBottom:8 }}>{a.title}</h3>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:5 }}>
              {a.items.map((it,i) => (
                <li key={i} style={{ fontSize:18, color:'#fff', lineHeight:1.4, paddingLeft:18, position:'relative' }}>
                  <span style={{ position:'absolute', left:0, color:a.color, fontSize:14, top:3 }}>►</span>
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
function Slide8() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  const textChars = "Obrigado!".split("");

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (inView && step === 0) {
      setStep(1); // Inicia digitação
      setTimeout(() => setStep(2), 1500); // Mostra o sublinhado após terminar
    }
  }, [inView, step]);

  return (
    <div id="s8" ref={ref} style={{
      ...S.slide,
      background:'linear-gradient(135deg,#0d1117 0%,#111827 100%)',
      display:'flex', flexDirection:'column',
      justifyContent:'center', alignItems: 'center',
    }}>
      {/* decorative circles */}
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:600, height:600, pointerEvents:'none' }}>
        <div style={{ position:'absolute', width:580, height:580, borderRadius:'50%', border:'1px solid rgba(0,229,255,0.05)', top:10, left:10 }}/>
        <div style={{ position:'absolute', width:400, height:400, borderRadius:'50%', border:'1px solid rgba(139,92,246,0.1)', top:100, left:100 }}/>
        <div style={{ position:'absolute', width:220, height:220, borderRadius:'50%', background:'rgba(0,229,255,0.03)', border:'1px solid rgba(0,229,255,0.15)', top:190, left:190 }}/>
      </div>

      <h1 style={{ 
        fontSize: 120, 
        fontWeight: 800, 
        color: '#fff', 
        letterSpacing: '-2px',
        zIndex: 10,
        textShadow: '0 10px 30px rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        minHeight: 140
      }}>
        {textChars.map((char, i) => (
          <span key={i} style={{
            opacity: step >= 1 ? 1 : 0,
            transition: `opacity 0.1s ease ${i * 0.1}s`
          }}>{char}</span>
        ))}
        {step === 1 && <span style={{ borderRight: '8px solid #fff', height: 100, marginLeft: 8, animation: 'blink 0.8s step-end infinite' }} />}
      </h1>
      
      <div style={{ 
        width: 80, height: 4, background: '#00e5ff', marginTop: '2vh', zIndex: 10, borderRadius: 2,
        opacity: step === 2 ? 1 : 0, transform: step === 2 ? 'scaleX(1)' : 'scaleX(0)', transition: 'all 0.8s ease'
      }}/>

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
        <span style={{ color:'#fff', fontSize:11, marginRight:8, letterSpacing:1 }}>SLIDES</span>
        {SLIDES.map((id, i) => (
          <button key={id} onClick={() => go(id)} style={{
            background: active === id ? '#00e5ff' : 'rgba(255,255,255,0.06)',
            border: active === id ? '1px solid #00e5ff' : '1px solid rgba(255,255,255,0.12)',
            color: active === id ? '#000' : '#fff',
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
        display:'flex', flexDirection:'column', alignItems:'center', width: '100%',
      }}>
        <Slide1 />
        <Slide2 isActive={active === 's2'} />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
        <Slide7 isActive={active === 's7'} />
        <Slide8 />
      </div>
    </>
  )
}
