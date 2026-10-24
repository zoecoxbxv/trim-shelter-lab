// trim-shelter-lab — Chess puzzles and TypeScript, open source.
// 拿来练手的小仓库

const fs = require('fs');

function scan(text) {
  const counts = new Map();
  for (const line of text.split('\n')) {
    const key = line.trim();
    if (!key) continue;
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return counts;
}

function main(file) {
  const counts = scan(fs.readFileSync(file, 'utf8'));
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  for (const [k, v] of sorted) console.log(String(v).padStart(4), k);
  console.log('---');
  const total = sorted.reduce((s, [, v]) => s + v, 0);
  console.log(`${counts.size} unique / ${total} lines`);
}

main(process.argv[2] || 'data.txt');
