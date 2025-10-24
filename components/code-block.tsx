'use client';

import { useState, useEffect } from 'react';
import { Check, Copy } from 'lucide-react';
import { codeToHtml } from 'shiki';
import { useTheme } from './theme-provider';

interface CodeBlockProps {
  code: string;
  filename?: string;
  lang?: string;
}

export function CodeBlock({ code, filename, lang = 'typescript' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlighted, setHighlighted] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    const highlight = async () => {
      try {
        const html = await codeToHtml(code, {
          lang: lang,
          theme: theme === 'light' ? 'github-light' : 'github-dark'
        });
        setHighlighted(html);
      } catch (error) {
        console.error('Failed to highlight code:', error);
        // Fallback to plain code
        setHighlighted(`<pre><code>${code}</code></pre>`);
      }
    };

    highlight();
  }, [code, lang, theme]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 relative group">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-200/50 dark:bg-slate-800/50">
          <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">{filename}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                Copy
              </>
            )}
          </button>
        </div>
      )}
      {!filename && (
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 flex items-center gap-1 text-xs text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100 z-10"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              Copy
            </>
          )}
        </button>
      )}
      <div 
        className="[&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:!bg-transparent [&_code]:text-sm [&_code]:font-mono"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
}