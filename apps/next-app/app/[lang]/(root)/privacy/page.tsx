export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 2, 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy describes how feishucli.net (&quot;the Website&quot;) collects, uses, and protects information when you visit our site. We are committed to protecting your privacy and handling your data responsibly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">2. Information We Collect</h2>
            <h3 className="text-lg font-medium mt-4 mb-2">2.1 Automatically Collected Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              When you visit the Website, we may automatically collect certain information through Google Analytics, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages visited and time spent</li>
              <li>Approximate geographic location (country/city level)</li>
              <li>Device type (desktop, mobile, tablet)</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-2">2.2 Information You Provide</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you create an account or contact us, we may collect information you voluntarily provide, such as your email address.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">3. How We Use Information</h2>
            <p className="text-muted-foreground leading-relaxed">We use the collected information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
              <li>Understand how visitors use the Website and improve our content</li>
              <li>Analyze traffic patterns and Website performance</li>
              <li>Ensure the security and proper functioning of the Website</li>
              <li>Respond to inquiries or support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">4. Google Analytics</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use Google Analytics to analyze Website usage. Google Analytics uses cookies to collect anonymous traffic data. This data is processed by Google in accordance with their{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Privacy Policy
              </a>
              . You can opt out of Google Analytics by installing the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">5. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Website uses cookies for essential functionality (such as theme preferences) and analytics. You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of the Website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">6. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share anonymous, aggregated data with third-party analytics services (Google Analytics) as described above.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">7. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement reasonable security measures to protect the information collected through the Website. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">8. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Website contains links to third-party sites (GitHub, Feishu Open Platform, npm, etc.). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">9. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Website is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Your continued use of the Website constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-8 mb-3">11. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please visit our{" "}
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
