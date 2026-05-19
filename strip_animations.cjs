const fs = require('fs');

try {
  let content = fs.readFileSync('src/App.tsx', 'utf-8');

  // Slide 1 text reset
  content = content.replace(/\{subtitleChars\.map\([\s\S]*?\)\}/, 'TRABALHO DE LOGÍSTICA');
  content = content.replace(/\{titleChars\.map\([\s\S]*?\)\}/, 'Segurança, Meio Ambiente e Saúde (SMS)');
  content = content.replace(/\{step === 1 && <span[^>]+><\/span>\}/g, '');
  content = content.replace(/\{step === 2 && <span[^>]+><\/span>\}/g, '');
  content = content.replace(/const subtitleChars = [^\n]+;\n/g, '');
  content = content.replace(/const titleChars = [^\n]+;\n/g, '');
  content = content.replace(/const \[step, setStep\] = useState\(0\);\s*useEffect\(\(\) => \{[\s\S]*?\}, \[step\]\);\n/g, '');

  // Slide 8 text reset
  content = content.replace(/\{textChars\.map\([\s\S]*?\)\}/, 'Obrigado!');
  content = content.replace(/const textChars = [^\n]+;\n/g, '');
  content = content.replace(/\{step === 1 && <span[^>]+><\/span>\}/g, '');

  // Remove IntersectionObserver instances inside slides (excluding the one in App)
  content = content.replace(/const \[(inView|isActive), set[A-Z][a-zA-Z]+\] = useState\(false\);\n\s*const ref = useRef<HTMLDivElement>\(null\);\n\s*useEffect\(\(\) => \{\n\s*const obs = new IntersectionObserver\([\s\S]*?return \(\) => obs\.disconnect\(\);\n\s*\}, \[\]\);\n/g, '');

  // For Slide 8 specifically, which has step state as well
  content = content.replace(/const \[step, setStep\] = useState\(0\);\n\s*useEffect\(\(\) => \{[\s\S]*?\}, \[inView, step\]\);\n/g, '');

  // Strip styling attributes: opacity
  content = content.replace(/opacity:\s*(inView|isActive)\s*\?\s*1\s*:\s*0\s*,?\s*/g, '');
  content = content.replace(/opacity:\s*step[^?]+\?\s*1\s*:\s*0\s*,?\s*/g, '');

  // Strip styling attributes: transform
  content = content.replace(/transform:\s*(inView|isActive)\s*\?\s*'[^']+'\s*:\s*'[^']+'\s*,?\s*/g, '');
  content = content.replace(/transform:\s*step[^?]+\?\s*'[^']+'\s*:\s*'[^']+'\s*,?\s*/g, '');

  // Strip styling attributes: transition
  content = content.replace(/transition:\s*'[^']+'\s*,?\s*/g, '');
  content = content.replace(/transition:\s*`[^`]+`\s*,?\s*/g, '');

  // Fix lingering styles
  content = content.replace(/ref=\{ref\}/g, '');

  fs.writeFileSync('src/App.tsx', content, 'utf-8');
  console.log('Successfully stripped animations.');
} catch (e) {
  console.error(e);
}
