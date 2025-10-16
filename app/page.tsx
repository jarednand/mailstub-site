import { Mail, Users, Inbox, Github, ChevronDown, Check } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { CodeBlock } from '@/components/code-block';

export default function Home() {
  const clientCode = `${'import'} { client } from 'mailstub-client';

await client.send('p_your-project-id', {
  sender: 'noreply@myapp.local',
  receiver: 'user@example.com',
  subject: 'Welcome!',
  body: '<h1>Hello World</h1>'
});`;

  const exampleCode = `const result = await client.send('p_abc123', {
  sender: 'support@myapp.local',
  receiver: 'testuser@example.com',
  subject: 'Password Reset',
  body: '<p>Click here to reset...</p>'
});

console.log(result.message.id); // m_xyz789`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-slate-900 dark:text-slate-100">MailStub</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Features
            </a>
            <a href="#quickstart" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Quick Start
            </a>
            <a href="#docs" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Docs
            </a>
            <ThemeToggle />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-cyan-200 dark:border-cyan-800">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
            Open Source Email Testing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
            Test emails,<br />simplified
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            A lightweight email testing tool for developers. Catch and view test emails in a clean interface without sending to real inboxes.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#quickstart"
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-cyan-600/20"
            >
              Get Started
              <ChevronDown className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Everything you need for email testing
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Simple, powerful, and built for developers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-950 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Organized Projects
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Separate emails by project. Keep test emails organized and easy to find.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Multiple Users
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Create test users and send emails to different recipients. Perfect for testing user flows.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-950 rounded-lg flex items-center justify-center mb-4">
                <Inbox className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                Clean Interface
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                View and manage all test emails in one place. Beautiful UI with dark mode support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quickstart" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Get started in minutes
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Three simple steps to start testing emails
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Start the MailStub server
                </h3>
                <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 border border-slate-800">
                  <code className="text-sm text-slate-300 font-mono">
                    mailstub start
                  </code>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Create a project and user
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  Open <code className="text-sm bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-cyan-600 dark:text-cyan-400">http://localhost:8000</code> and create your first project and test user through the UI.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Install the client and send emails
                </h3>
                <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 border border-slate-800 mb-3">
                  <code className="text-sm text-slate-300 font-mono">
                    npm install mailstub-client
                  </code>
                </div>
                <CodeBlock code={clientCode} filename="your-app.ts" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              API Documentation
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Simple API for sending test emails
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                client.send()
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Send a test email to MailStub.
              </p>
              
              <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 border border-slate-800 mb-6">
                <code className="text-sm text-slate-300 font-mono">
                  client.send(projectId: string, options: SendEmailOptions): Promise&lt;SendEmailResponse&gt;
                </code>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Parameters</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-cyan-600 dark:text-cyan-400">projectId</code>
                      <span className="text-slate-600 dark:text-slate-400">The ID of your project (format: p_xxxxx)</span>
                    </li>
                    <li className="flex gap-2">
                      <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-cyan-600 dark:text-cyan-400">sender</code>
                      <span className="text-slate-600 dark:text-slate-400">Full sender email address</span>
                    </li>
                    <li className="flex gap-2">
                      <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-cyan-600 dark:text-cyan-400">receiver</code>
                      <span className="text-slate-600 dark:text-slate-400">Recipient email (must be a user in your project)</span>
                    </li>
                    <li className="flex gap-2">
                      <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-cyan-600 dark:text-cyan-400">subject</code>
                      <span className="text-slate-600 dark:text-slate-400">Email subject line</span>
                    </li>
                    <li className="flex gap-2">
                      <code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-cyan-600 dark:text-cyan-400">body</code>
                      <span className="text-slate-600 dark:text-slate-400">Email body (supports HTML)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Example</h4>
                  <CodeBlock code={exampleCode} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes Section */}
      <section className="py-16 px-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Usage Guidelines
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              MailStub is designed for testing environments only
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Recommended Use */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Use For
                </h3>
              </div>
              <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400 mt-0.5">•</span>
                  <span>Local development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400 mt-0.5">•</span>
                  <span>Staging & QA environments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400 mt-0.5">•</span>
                  <span>CI/CD testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400 mt-0.5">•</span>
                  <span>Demo environments</span>
                </li>
              </ul>
            </div>

            {/* Not Recommended */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">✕</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Don't Use For
                </h3>
              </div>
              <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                  <span>Production email delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                  <span>Real customer emails</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                  <span>Sensitive or PII data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                  <span>Compliance-regulated communications</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong className="font-semibold">Disclaimer:</strong> MailStub is for testing purposes only. 
              It does not provide delivery guarantees, encryption, or compliance features. 
              Use a proper transactional email service for production.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">MailStub</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#docs"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                Documentation
              </a>
              <span className="text-sm text-slate-400 dark:text-slate-500">
                MIT License
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}