
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | all4Ps",
  description:
    "Read the all4Ps Privacy Policy to understand how we collect, use, store, and protect your personal information.",
  alternates: {
    canonical: "https://www.all4ps.co/privacy-policy",
  },
};

const headingStyle = {
  color: "#FFFFFF",
  fontSize: "clamp(24px, 3vw, 32px)",
  fontWeight: 750,
  lineHeight: 1.3,
  marginBottom: "22px",
};

const subHeadingStyle = {
  color: "#D8A0E8",
  fontSize: "19px",
  fontWeight: 650,
  marginTop: "24px",
  marginBottom: "12px",
};

const paragraphStyle = {
  color: "#C8C5CF",
  fontSize: "16px",
  lineHeight: 1.85,
  marginBottom: "16px",
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

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>

        <p style={paragraphStyle}>
          Your privacy matters to us. Learn how we collect, use, and
          protect your information.
        </p>

        <p style={{ ...paragraphStyle, fontSize: "14px" }}>
          <strong>Effective Date:</strong> November 6, 2026
          <br />
          <strong>Last Updated:</strong> November 6, 2026
        </p>
      </header>

      <p style={paragraphStyle}>
        This Privacy Policy applies to visitors, prospective clients,
        and anyone who interacts with the all4Ps website.
      </p>

      {/* 1. Introduction */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>1. Introduction</h2>

        <p style={paragraphStyle}>
          Welcome to <strong>all4Ps</strong>. Your privacy is important
          to us, and we are committed to protecting the personal
          information you share with us.
        </p>

        <p style={paragraphStyle}>
          This Privacy Policy explains how all4Ps (&quot;we,&quot;
          &quot;our,&quot; or &quot;us&quot;) collects, uses, stores,
          and protects information when you visit our website,{" "}
          <a href="https://www.all4ps.co" style={linkStyle}>
            https://www.all4ps.co
          </a>
          , interact with our services, or contact us through our
          website.
        </p>

        <p style={paragraphStyle}>
          By using our website, you acknowledge that you have read
          and understood this Privacy Policy.
        </p>
      </section>

      {/* 2. Information We Collect */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>2. Information We Collect</h2>

        <h3 style={subHeadingStyle}>A. Personal Information</h3>

        <p style={paragraphStyle}>
          When you contact us or submit an enquiry through our website,
          we may collect:
        </p>

        <ul style={listStyle}>
          <li>Full name</li>
          <li>Business email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>Job title or designation</li>
          <li>
            Any information you voluntarily provide in enquiry forms
            or messages.
          </li>
        </ul>

        <h3 style={subHeadingStyle}>B. Technical Information</h3>

        <p style={paragraphStyle}>
          When you visit our website, certain technical information
          may be collected automatically, including:
        </p>

        <ul style={listStyle}>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Operating system</li>
          <li>Pages visited and time spent on our website</li>
          <li>Referring website or source</li>
          <li>Website interaction and usage data.</li>
        </ul>

        <h3 style={subHeadingStyle}>
          C. Cookies and Tracking Technologies
        </h3>

        <p style={paragraphStyle}>
          We may use cookies and similar technologies to improve
          website functionality, understand visitor behaviour,
          analyse website performance, and enhance user experience.
        </p>
      </section>

      {/* 3. How We Use Your Information */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>3. How We Use Your Information</h2>

        <p style={paragraphStyle}>
          We use the collected information for the following purposes:
        </p>

        <ul style={listStyle}>
          <li>To respond to enquiries and business requests.</li>
          <li>To provide information about our services.</li>
          <li>To communicate with prospective and existing clients.</li>
          <li>To improve our website, services, and user experience.</li>
          <li>To analyse website traffic and visitor engagement.</li>
          <li>To measure marketing and advertising performance.</li>
          <li>To maintain website security and prevent fraudulent activity.</li>
          <li>To comply with applicable legal and regulatory requirements.</li>
        </ul>

        <p style={paragraphStyle}>
          We do not use your information for purposes unrelated to
          the reasons for which it was collected, unless permitted
          by applicable law.
        </p>
      </section>

      {/* 4. Google Analytics */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>
          4. Google Analytics and Third-Party Tools
        </h2>

        <p style={paragraphStyle}>
          We may use third-party tools and services to understand
          website performance and improve our marketing activities.
        </p>

        <p style={paragraphStyle}>These may include:</p>

        <ul style={listStyle}>
          <li>
            <strong>Google Analytics 4 (GA4):</strong> To analyse
            website traffic, user behaviour, and engagement.
          </li>
          <li>
            <strong>Email communication services:</strong> To process
            and respond to website enquiries.
          </li>
          <li>
            <strong>Advertising and marketing platforms:</strong> To
            measure campaign performance and improve relevant
            marketing activities.
          </li>
        </ul>

        <p style={paragraphStyle}>
          These third-party providers may collect or process
          information according to their respective privacy policies
          and terms.
        </p>

        <p style={paragraphStyle}>
          We encourage you to review the privacy policies of these
          providers.
        </p>
      </section>

      {/* 5. Cookies Policy */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>5. Cookies Policy</h2>

        <p style={paragraphStyle}>Our website may use cookies to:</p>

        <ul style={listStyle}>
          <li>Ensure proper website functionality.</li>
          <li>Understand how visitors interact with our website.</li>
          <li>Analyse traffic and performance.</li>
          <li>Improve website navigation and user experience.</li>
          <li>
            Support marketing and advertising measurement, where
            applicable.
          </li>
        </ul>

        <p style={paragraphStyle}>
          You can manage or disable cookies through your browser
          settings. Please note that disabling certain cookies may
          affect some website functionalities.
        </p>

        <p style={paragraphStyle}>
          Where required by applicable law, we will obtain consent
          before placing non-essential cookies.
        </p>
      </section>

      {/* 6. Sharing Information */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>6. Sharing of Information</h2>

        <p style={paragraphStyle}>
          We do not sell your personal information.
        </p>

        <p style={paragraphStyle}>We may share information with:</p>

        <ul style={listStyle}>
          <li>
            Trusted service providers who help us operate our website
            and business.
          </li>
          <li>Analytics and marketing service providers.</li>
          <li>Professional advisers, where necessary.</li>
          <li>
            Government authorities or regulatory bodies when required
            by law.
          </li>
        </ul>

        <p style={paragraphStyle}>
          Any such sharing will be limited to what is reasonably
          necessary for the relevant purpose and subject to applicable
          legal requirements.
        </p>
      </section>

      {/* 7. Data Security */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>7. Data Storage and Security</h2>

        <p style={paragraphStyle}>
          We take reasonable technical and organisational measures
          to protect the information collected through our website
          against unauthorised access, disclosure, alteration, or
          destruction.
        </p>

        <p style={paragraphStyle}>
          However, no method of online transmission or electronic
          storage is completely secure. While we strive to protect
          your information, we cannot guarantee absolute security.
        </p>

        <p style={paragraphStyle}>
          We retain personal information only for as long as necessary
          to fulfil the purposes described in this policy or as
          required by applicable law.
        </p>
      </section>

      {/* 8. Privacy Rights */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>8. Your Privacy Rights</h2>

        <p style={paragraphStyle}>
          Depending on applicable laws, you may have the right to:
        </p>

        <ul style={listStyle}>
          <li>Request access to your personal information.</li>
          <li>Request correction of inaccurate or incomplete information.</li>
          <li>
            Request deletion of your personal information, subject
            to legal obligations.
          </li>
          <li>Withdraw consent where processing is based on consent.</li>
          <li>Raise concerns regarding how your information is handled.</li>
        </ul>

        <p style={paragraphStyle}>
          To exercise these rights, please contact us using the
          details provided below.
        </p>
      </section>

      {/* 9. Third-Party Websites */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>9. Third-Party Websites</h2>

        <p style={paragraphStyle}>
          Our website may contain links to external websites,
          platforms, or services.
        </p>

        <p style={paragraphStyle}>
          We are not responsible for the privacy practices, content,
          or security of third-party websites. We recommend reviewing
          their privacy policies before sharing any personal
          information.
        </p>
      </section>

      {/* 10. Children's Privacy */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>10. Children&apos;s Privacy</h2>

        <p style={paragraphStyle}>
          Our website and services are intended for business and
          professional audiences. We do not knowingly collect personal
          information from children.
        </p>

        <p style={paragraphStyle}>
          If we become aware that personal information has been
          collected from a child without the required consent, we
          will take appropriate steps in accordance with applicable
          laws.
        </p>
      </section>

      {/* 11. Policy Changes */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>
          11. Changes to This Privacy Policy
        </h2>

        <p style={paragraphStyle}>
          We may update this Privacy Policy from time to time to
          reflect changes in our business practices, website
          functionality, technology, or applicable legal requirements.
        </p>

        <p style={paragraphStyle}>
          Any updates will be published on this page along with the
          revised &quot;Last Updated&quot; date.
        </p>

        <p style={paragraphStyle}>
          We encourage visitors to review this page periodically.
        </p>
      </section>

      {/* 12. Contact Us */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>12. Contact Us</h2>

        <p style={paragraphStyle}>
          If you have questions, concerns, or requests regarding
          this Privacy Policy or how we handle your personal
          information, please contact us:
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

        <p style={paragraphStyle}>
          We will make reasonable efforts to respond to privacy-related
          requests in accordance with applicable laws.
        </p>
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
