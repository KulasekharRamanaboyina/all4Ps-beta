
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | all4Ps",
  description:
    "Read the all4Ps Terms and Conditions governing website usage, professional services, intellectual property, payments, and other terms.",
  alternates: {
    canonical: "https://www.all4ps.co/terms-conditions",
  },
};

const headingStyle = {
  color: "#FFFFFF",
  fontSize: "clamp(24px, 3vw, 32px)",
  fontWeight: 750,
  lineHeight: 1.3,
  marginBottom: "22px",
};

const paragraphStyle = {
  color: "#C8C5CF",
  fontSize: "16px",
  lineHeight: 1.85,
  marginBottom: "16px",
};

const subHeadingStyle = {
  color: "#D8A0E8",
  fontSize: "19px",
  fontWeight: 650,
  marginTop: "24px",
  marginBottom: "12px",
};

const listStyle = {
  color: "#C8C5CF",
  fontSize: "16px",
  lineHeight: 1.9,
  paddingLeft: "25px",
  marginTop: "12px",
  marginBottom: "20px",
};

const sectionStyle = {
  marginBottom: "48px",
};

const linkStyle = {
  color: "#D946EF",
  textDecoration: "none" as const,
};

export default function TermsConditionsPage() {
  return (
    <main
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "80px 28px 90px",
        boxSizing: "border-box",
      }}
    >
      {/* Page Heading */}
      <header style={{ marginBottom: "55px" }}>
        <p
          style={{
            color: "#D946EF",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "3px",
            marginBottom: "16px",
          }}
        >
          all4Ps
        </p>

        <h1
          style={{
            color: "#FFFFFF",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          Terms &amp; Conditions
        </h1>

        <p style={paragraphStyle}>
          Please read these terms carefully before using the all4Ps website
          or engaging with our services.
        </p>

        <p style={{ ...paragraphStyle, fontSize: "14px" }}>
          <strong>Effective Date:</strong> November 6, 2026
          <br />
          <strong>Last Updated:</strong> November 6, 2026
        </p>
      </header>

      {/* 1. Introduction */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>1. Introduction</h2>

        <p style={paragraphStyle}>
          Welcome to <strong>all4Ps</strong>.
        </p>

        <p style={paragraphStyle}>
          These Terms &amp; Conditions govern your access to and use
          of our website,{" "}
          <a href="https://www.all4ps.co" style={linkStyle}>
            https://www.all4ps.co
          </a>
          , and the information, content, and services available
          through it.
        </p>

        <p style={paragraphStyle}>
          By accessing or using our website, you agree to comply
          with these Terms &amp; Conditions. If you do not agree
          with any part of these terms, please discontinue using
          our website.
        </p>

        <p style={paragraphStyle}>
          In these terms, &quot;all4Ps,&quot; &quot;we,&quot;
          &quot;our,&quot; or &quot;us&quot; refers to all4Ps,
          and &quot;you&quot; or &quot;your&quot; refers to any
          visitor, user, prospective client, or customer accessing
          our website.
        </p>
      </section>

      {/* 2. About Our Services */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>2. About Our Services</h2>

        <p style={paragraphStyle}>
          all4Ps provides B2B marketing and business growth services,
          including:
        </p>

        <ul style={listStyle}>
          <li>Brand Identity and Positioning</li>
          <li>Marketing Strategy</li>
          <li>Growth Marketing</li>
          <li>Content Marketing</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>Search Engine Marketing (SEM)</li>
          <li>Website Design, Development, and Optimization</li>
        </ul>

        <p style={paragraphStyle}>
          The specific scope, deliverables, timelines, pricing, and
          terms of any professional engagement will be mutually
          agreed upon separately through a proposal, statement of
          work, service agreement, or other written communication.
        </p>

        <p style={paragraphStyle}>
          Information presented on this website is for general
          informational purposes and does not constitute a binding
          offer to provide services.
        </p>
      </section>

      {/* 3. Website Usage */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>3. Website Usage</h2>

        <p style={paragraphStyle}>
          By using our website, you agree that you will:
        </p>

        <ul style={listStyle}>
          <li>Use the website only for lawful purposes.</li>
          <li>
            Provide accurate information when submitting enquiries
            or contact forms.
          </li>
          <li>
            Not attempt to disrupt, damage, or interfere with
            website functionality.
          </li>
          <li>
            Not gain unauthorised access to our systems, servers,
            or data.
          </li>
          <li>
            Not use website content for fraudulent, misleading,
            or unlawful purposes.
          </li>
          <li>
            Not copy, reproduce, or distribute website materials
            without prior written permission.
          </li>
        </ul>

        <p style={paragraphStyle}>
          We reserve the right to restrict or terminate access to
          our website if we identify activities that violate these
          terms or applicable laws.
        </p>
      </section>

      {/* 4. Intellectual Property */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>4. Intellectual Property Rights</h2>

        <p style={paragraphStyle}>
          All content available on this website, including but not
          limited to:
        </p>

        <ul style={listStyle}>
          <li>Text, articles, blogs, and website copy</li>
          <li>Logos, brand elements, and visual designs</li>
          <li>Graphics, illustrations, and images</li>
          <li>Website layouts and design elements</li>
          <li>Marketing materials and case studies</li>
          <li>Videos and other multimedia content</li>
        </ul>

        <p style={paragraphStyle}>
          Is owned by all4Ps or used under appropriate licences or
          permissions, unless otherwise stated.
        </p>

        <p style={paragraphStyle}>
          You may not reproduce, modify, distribute, publish,
          commercially exploit, or create derivative works from
          our website content without obtaining prior written
          permission from the respective rights holder.
        </p>

        <p style={paragraphStyle}>
          Unauthorised use of our intellectual property may result
          in appropriate legal action.
        </p>
      </section>

      {/* 5. Service Engagements */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>
          5. Service Engagements and Agreements
        </h2>

        <p style={paragraphStyle}>
          Any professional services provided by all4Ps will be
          governed by the specific terms agreed upon between all4Ps
          and the client.
        </p>

        <p style={paragraphStyle}>
          Such agreements may cover:
        </p>

        <ul style={listStyle}>
          <li>Scope of work and deliverables</li>
          <li>Project timelines and milestones</li>
          <li>Fees, payment schedules, and applicable taxes</li>
          <li>Revisions and approval processes</li>
          <li>Client responsibilities and dependencies</li>
          <li>Confidentiality and intellectual property ownership</li>
          <li>Termination and cancellation conditions</li>
        </ul>

        <p style={paragraphStyle}>
          If there is any conflict between these website Terms
          &amp; Conditions and a separately signed service agreement,
          the terms of the signed service agreement will prevail
          for that engagement.
        </p>
      </section>

      {/* 6. Pricing and Payments */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>6. Pricing and Payments</h2>

        <p style={paragraphStyle}>
          Prices, estimates, or service descriptions displayed or
          communicated through our website are subject to change
          unless confirmed in a separate written proposal or
          agreement.
        </p>

        <p style={paragraphStyle}>
          Payment terms, applicable taxes, advance payments,
          milestones, and any additional charges will be communicated
          and agreed upon before the commencement of a project.
        </p>

        <p style={paragraphStyle}>
          Clients are responsible for making payments according
          to the agreed payment schedule.
        </p>
      </section>

      {/* 7. Marketing and SEO Disclaimer */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>
          7. Marketing and SEO Disclaimer
        </h2>

        <p style={paragraphStyle}>
          Our marketing, SEO, SEM, and growth marketing services
          are designed to improve brand visibility, website
          performance, audience engagement, and business growth.
        </p>

        <p style={paragraphStyle}>
          However, we do not guarantee specific results, rankings,
          traffic levels, leads, conversions, revenue, or return
          on investment.
        </p>

        <p style={paragraphStyle}>
          Marketing performance may depend on several factors
          beyond our control, including:
        </p>

        <ul style={listStyle}>
          <li>Search engine algorithm updates.</li>
          <li>Advertising platform policies and changes.</li>
          <li>Market conditions and competition.</li>
          <li>Website performance and technical infrastructure.</li>
          <li>Client-provided information and implementation.</li>
          <li>Target audience behaviour and campaign budgets.</li>
        </ul>

        <p style={paragraphStyle}>
          Any results, statistics, or case studies presented on our
          website are illustrative of specific projects or
          experiences and should not be interpreted as guaranteed
          future outcomes.
        </p>
      </section>

      {/* 8. Third-Party Platforms */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>
          8. Third-Party Platforms and Services
        </h2>

        <p style={paragraphStyle}>
          Our website and services may involve third-party platforms,
          tools, and technologies, including search engines,
          analytics platforms, advertising networks, hosting
          providers, and content management systems.
        </p>

        <p style={paragraphStyle}>
          We are not responsible for:
        </p>

        <ul style={listStyle}>
          <li>Changes to third-party platform policies or algorithms.</li>
          <li>Service interruptions or technical failures caused by third parties.</li>
          <li>Third-party products, services, or content.</li>
          <li>
            Data handling practices governed by third-party privacy
            policies.
          </li>
        </ul>

        <p style={paragraphStyle}>
          Your use of third-party platforms is subject to their
          respective terms and conditions.
        </p>
      </section>

      {/* 9. Website Content */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>9. Website Content and Accuracy</h2>

        <p style={paragraphStyle}>
          We make reasonable efforts to ensure that the information
          published on our website is accurate and up to date.
        </p>

        <p style={paragraphStyle}>
          However, we do not guarantee that all information,
          descriptions, statistics, or other website content will
          always be complete, accurate, or current.
        </p>

        <p style={paragraphStyle}>
          We reserve the right to update, modify, or remove website
          content at any time without prior notice.
        </p>
      </section>

      {/* 10. Limitation of Liability */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>10. Limitation of Liability</h2>

        <p style={paragraphStyle}>
          To the maximum extent permitted by applicable law, all4Ps
          shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising from:
        </p>

        <ul style={listStyle}>
          <li>The use or inability to use our website.</li>
          <li>Reliance on information published on our website.</li>
          <li>Temporary website interruptions or technical errors.</li>
          <li>Third-party services, platforms, or external links.</li>
          <li>
            Unauthorised access to information due to circumstances
            beyond our reasonable control.
          </li>
        </ul>

        <p style={paragraphStyle}>
          Nothing in these terms excludes or limits liability that
          cannot legally be excluded or limited under applicable law.
        </p>
      </section>

      {/* 11. Indemnification */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>11. Indemnification</h2>

        <p style={paragraphStyle}>
          You agree to indemnify and hold harmless all4Ps, its
          representatives, and associated personnel from claims,
          liabilities, damages, losses, and expenses arising from:
        </p>

        <ul style={listStyle}>
          <li>Your violation of these Terms &amp; Conditions.</li>
          <li>Your misuse of our website or services.</li>
          <li>Your violation of applicable laws or third-party rights.</li>
          <li>
            Information or content submitted by you that infringes
            the rights of others.
          </li>
        </ul>

        <p style={paragraphStyle}>
          This provision applies to the extent permitted by
          applicable law.
        </p>
      </section>

      {/* 12. Confidentiality */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>12. Confidentiality</h2>

        <p style={paragraphStyle}>
          Any confidential business information shared between
          all4Ps and its clients during a professional engagement
          will be handled in accordance with the confidentiality
          obligations agreed upon between the parties.
        </p>

        <p style={paragraphStyle}>
          Information that is publicly available or independently
          developed without using confidential information will
          not be considered confidential solely because it was
          discussed during an engagement.
        </p>
      </section>

      {/* 13. External Links */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>13. External Links</h2>

        <p style={paragraphStyle}>
          Our website may contain links to third-party websites
          for additional information or convenience.
        </p>

        <p style={paragraphStyle}>
          These external websites are not controlled by all4Ps.
          We do not endorse or accept responsibility for their
          content, availability, accuracy, or privacy practices.
        </p>

        <p style={paragraphStyle}>
          Accessing external links is at your own discretion
          and risk.
        </p>
      </section>

      {/* 14. Suspension and Termination */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>
          14. Suspension and Termination
        </h2>

        <p style={paragraphStyle}>
          We reserve the right to suspend or restrict access to
          our website if we reasonably believe that a user has
          violated these Terms &amp; Conditions, engaged in
          unlawful activities, or attempted to compromise
          website security.
        </p>

        <p style={paragraphStyle}>
          Any termination of professional services will be
          governed by the applicable service agreement between
          all4Ps and the client.
        </p>
      </section>

      {/* 15. Changes to Terms */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>15. Changes to These Terms</h2>

        <p style={paragraphStyle}>
          We may revise or update these Terms &amp; Conditions
          from time to time to reflect changes in our business
          operations, services, website functionality, or legal
          requirements.
        </p>

        <p style={paragraphStyle}>
          Updated terms will be published on this page with a
          revised &quot;Last Updated&quot; date.
        </p>

        <p style={paragraphStyle}>
          Your continued use of the website after changes are
          published constitutes acceptance of the updated terms,
          to the extent permitted by applicable law.
        </p>
      </section>

      {/* 16. Governing Law */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>
          16. Governing Law and Jurisdiction
        </h2>

        <p style={paragraphStyle}>
          These Terms &amp; Conditions shall be governed by and
          interpreted in accordance with the laws of India.
        </p>

        <p style={paragraphStyle}>
          Any disputes arising out of or relating to the use of
          this website shall be subject to the jurisdiction of
          the competent courts in Bangalore, Karnataka, India,
          subject to applicable law.
        </p>
      </section>

      {/* 17. Contact Information */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>17. Contact Information</h2>

        <p style={paragraphStyle}>
          If you have any questions or concerns regarding these
          Terms &amp; Conditions, please contact us:
        </p>

        <ul style={listStyle}>
          <li>
            <strong>Company:</strong> all4Ps
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:grow@all4ps.co" style={linkStyle}>
              grow@all4ps.co
            </a>
          </li>
          <li>
            <strong>Location:</strong> Bangalore, Karnataka, India
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a href="https://www.all4ps.co" style={linkStyle}>
              https://www.all4ps.co
            </a>
          </li>
        </ul>
      </section>

      <hr
        style={{
          border: 0,
          borderTop: "1px solid rgba(255,255,255,0.15)",
          margin: "40px 0 25px",
        }}
      />

      <p
        style={{
          color: "#A9A2B1",
          fontSize: "14px",
          textAlign: "center",
          paddingBottom: "20px",
        }}
      >
        © 2026 all4Ps. All Rights Reserved.
      </p>
    </main>
  );
}
