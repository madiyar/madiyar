import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_RESUME = "resume.json";
const FILE_TEMPLATE = "template.tex";
const FILE_RESULT = "resume.tex";

const resume = JSON.parse(fs.readFileSync(path.join(__dirname, FILE_RESUME), 'utf-8'));
let template = fs.readFileSync(path.join(__dirname, FILE_TEMPLATE), 'utf-8');

// --- Обработка циклов %for projects% ... %endfor%
template = template.replace(/%for (\w+)%([\s\S]*?)%endfor%/g, (_, arrayName, block) => {
  const items = resume[arrayName];
  if (!Array.isArray(items)) return '';

  return items.map(item => {
    return block.replace(/%\{([\w.]+)\}%/g, (_, key) => item[key] ?? '');
  }).join('');
});

// --- Обработка одиночных переменных %{basics.name}%
template = template.replace(/%\{([\w.]+)\}%/g, (_, keyPath) => {
  const keys = keyPath.split('.');
  let value = resume;
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return '';
  }
  return value;
});

fs.writeFileSync(path.join(__dirname, FILE_RESULT), template, 'utf-8');

console.log(`✅ ${FILE_RESULT} сгенерирован!`);
