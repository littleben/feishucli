export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 2, 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using feishucli.net (&quot;the Website&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              Feishu CLI is an open-source command-line tool for interacting with the Feishu/Lark platform. The Website provides information, documentation, and resources related to the Feishu CLI tool. The CLI tool itself is distributed under the MIT License via npm and GitHub.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">3. Use of the Website</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to use the Website only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
              <li>Use the Website in any way that violates applicable laws or regulations</li>
              <li>Attempt to interfere with the proper functioning of the Website</li>
              <li>Use automated systems to access the Website in a manner that sends more requests than a human can reasonably produce</li>
              <li>Misrepresent your identity or affiliation with any person or organization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Feishu CLI tool is open-source software licensed under the MIT License. The Website content, design, and branding are the property of the Website operator. Feishu and Lark are trademarks of Beijing Feishu Technology Co., Ltd. and/or its affiliates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">5. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Website may contain links to third-party websites or services, including but not limited to the Feishu Open Platform, GitHub, and npm. We are not responsible for the content or practices of these third-party services. Your use of third-party services is governed by their respective terms and policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">6. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Website and the Feishu CLI tool are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not guarantee that the Website or tool will be uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, the Website operator shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Website or the Feishu CLI tool.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">8. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of the Website after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">9. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please visit our{" "}
              <a href="https://github.com/larksuite/cli" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                GitHub repository
              </a>{" "}
              to open an issue.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
