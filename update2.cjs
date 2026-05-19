const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `{stats.map(s => (
          <div key={s.val} style={{
            background:'#1a2233', borderRadius:4, border:\`1px solid \${s.border}\`,
            padding:'24px 20px', textAlign:'center',
            display:'flex', flexDirection:'column', alignItems:'center', gap:6,
          }}>
            <div style={{ fontSize:42, fontWeight:800, lineHeight:1, color:s.color }}>{s.val}</div>
            <div style={{ fontSize:16, color:'#fff', lineHeight:1.3, textAlign:'center', whiteSpace:'pre-line' }}>{s.lbl}</div>
          </div>
        ))}`;

const replacement = `{stats.map(s => (
          <AnimatedStat key={s.lbl} s={s} isActive={isActive} />
        ))}`;

c = c.replace(target, replacement);
fs.writeFileSync('src/App.tsx', c);
