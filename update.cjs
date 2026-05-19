const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf-8');
c = c.replace(/val:'8h \/ dia'/, "prefix:'', num: 8, suffix:'h / dia'");
c = c.replace(/val:'44h \/ sem.'/, "prefix:'', num: 44, suffix:'h / sem.'");
c = c.replace(/val:'\\+50%'/, "prefix:'+', num: 50, suffix:'%'");
c = c.replace(/val:'\\+100%'/, "prefix:'+', num: 100, suffix:'%'");
c = c.replace(/val:'2h \/ dia'/, "prefix:'', num: 2, suffix:'h / dia'");
fs.writeFileSync('src/App.tsx', c);
