import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — 5ISH",
  description: "5ISH collects no personal data whatsoever.",
};

export default function PrivacyPolicy() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="font-pixel text-gold text-xl mb-8">Privacy Policy</h1>

      <div className="space-y-6 text-text-dim leading-relaxed text-sm">
        <section>
          <h2 className="text-text-main font-semibold text-base mb-2">
            No Data Collection
          </h2>
          <p>
            5ISH does not collect, store, or transmit any personal data. The
            game runs entirely on your device with no server communication.
          </p>
        </section>

        <section>
          <h2 className="text-text-main font-semibold text-base mb-2">
            No Analytics
          </h2>
          <p>
            We do not use any analytics services, crash reporters, or tracking
            tools. No usage data is gathered.
          </p>
        </section>

        <section>
          <h2 className="text-text-main font-semibold text-base mb-2">
            No Third Parties
          </h2>
          <p>
            5ISH does not include any third-party SDKs, advertising networks, or
            external services. There are no ads and no in-app purchases that
            share data.
          </p>
        </section>

        <section>
          <h2 className="text-text-main font-semibold text-base mb-2">
            No Network Access
          </h2>
          <p>
            The game does not require an internet connection and makes no
            network requests. All game data is stored locally on your device
            using standard system storage.
          </p>
        </section>

        <section>
          <h2 className="text-text-main font-semibold text-base mb-2">
            Safe for All Ages
          </h2>
          <p>
            Because we collect absolutely no data, 5ISH is safe for players of
            all ages, including children under 13, and complies with COPPA, GDPR,
            and other privacy regulations by default.
          </p>
        </section>

        <section>
          <h2 className="text-text-main font-semibold text-base mb-2">
            Contact
          </h2>
          <p>
            If you have any questions about this privacy policy, please contact
            us at{" "}
            <a
              href="mailto:support@fiveish.app"
              className="text-cyan hover:underline"
            >
              support@fiveish.app
            </a>
            .
          </p>
        </section>

        <p className="text-text-dim/60 text-xs pt-4">
          Last updated: February 25, 2026
        </p>
      </div>
    </article>
  );
}
