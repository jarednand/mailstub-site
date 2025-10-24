'use client';

import { useState } from 'react';
import { CodeBlock } from './code-block';

interface PackageManagerTabsProps {
  npm: string;
  pnpm: string;
  yarn: string;
  filename?: string;
  lang?: string;
}

export function PackageManagerTabs({ npm, pnpm, yarn, filename, lang = 'bash' }: PackageManagerTabsProps) {
  const [activeTab, setActiveTab] = useState<'npm' | 'pnpm' | 'yarn'>('npm');

  const tabs = [
    { id: 'npm' as const, label: 'npm', code: npm },
    { id: 'pnpm' as const, label: 'pnpm', code: pnpm },
    { id: 'yarn' as const, label: 'yarn', code: yarn },
  ];

  return (
    <div>
      <div className="flex gap-2 mb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              activeTab === tab.id
                ? 'bg-cyan-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <CodeBlock 
        code={tabs.find(t => t.id === activeTab)!.code} 
        filename={filename}
        lang={lang}
      />
    </div>
  );
}