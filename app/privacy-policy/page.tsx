import { TransparentNavbar } from "@/components/layout/navbar-transparent";
import { Footer } from "@/components/layout/footer";
import { privacyPolicyData } from "@/data/privacy-policy";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Upright Solutions and Systems Consultancy Corp. - Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  const data = privacyPolicyData;

  return (
    <div className="relative min-h-screen">
      <TransparentNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-blue-100">
              Last updated: {data.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* Introduction */}
            {data.introduction.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-8">
                {paragraph}
              </p>
            ))}

            {/* Interpretation and Definitions */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Interpretation and Definitions
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Interpretation
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The words whose initial letters are capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Definitions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For the purposes of this Privacy Policy:
            </p>

            <ul className="space-y-4 mb-8">
              {data.definitions.map((def, index) => (
                <li key={index} className="text-gray-700">
                  <strong>{def.term}</strong> {def.definition}
                </li>
              ))}
            </ul>

            {/* Collecting and Using Your Personal Data */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Collecting and Using Your Personal Data
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Types of Data Collected
            </h3>

            {/* Personal Data */}
            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Personal Data
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              {data.dataCollection.personalData.description}
            </p>
            <ul className="space-y-2 mb-6">
              {data.dataCollection.personalData.items.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>

            {/* Usage Data */}
            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Usage Data
            </h4>
            {data.dataCollection.usageData.description.map(
              (paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              )
            )}

            {/* Tracking Technologies and Cookies */}
            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Tracking Technologies and Cookies
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              {data.dataCollection.trackingTechnologies.description}
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              The technologies We use may include:
            </p>
            <ul className="space-y-4 mb-6">
              {data.dataCollection.trackingTechnologies.technologies.map(
                (tech, index) => (
                  <li key={index} className="text-gray-700">
                    <strong>{tech.name}.</strong> {tech.description}
                  </li>
                )
              )}
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies can be "Persistent" or "Session" Cookies. Persistent
              Cookies remain on Your personal computer or mobile device when You
              go offline, while Session Cookies are deleted as soon as You close
              Your web browser.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We use both Session and Persistent Cookies for the purposes set
              out below:
            </p>
            <ul className="space-y-4 mb-8">
              {data.dataCollection.trackingTechnologies.cookieTypes.map(
                (cookie, index) => (
                  <li key={index} className="text-gray-700">
                    <strong>{cookie.name}</strong>
                    <br />
                    Type: {cookie.type}
                    <br />
                    Administered by: {cookie.administrator}
                    <br />
                    Purpose: {cookie.purpose}
                  </li>
                )
              )}
            </ul>

            {/* Use of Your Personal Data */}
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Use of Your Personal Data
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Company may use Personal Data for the following purposes:
            </p>
            <ul className="space-y-3 mb-8">
              {data.dataUsage.purposes.map((purpose, index) => (
                <li key={index} className="text-gray-700">
                  <strong>{purpose.title}:</strong> {purpose.description}
                </li>
              ))}
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              We may share Your personal information in the following
              situations:
            </p>
            <ul className="space-y-3 mb-8">
              {data.dataUsage.sharing.map((share, index) => (
                <li key={index} className="text-gray-700">
                  <strong>{share.title}:</strong> {share.description}
                </li>
              ))}
            </ul>

            {/* Retention */}
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Retention of Your Personal Data
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {data.dataRetention}
            </p>

            {/* Transfer */}
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Transfer of Your Personal Data
            </h3>
            {data.dataTransfer.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}

            {/* Delete */}
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Delete Your Personal Data
            </h3>
            {data.dataDeletion.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            {/* Disclosure */}
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Disclosure of Your Personal Data
            </h3>

            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Business Transactions
            </h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              {data.disclosure.businessTransactions}
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Law Enforcement
            </h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              {data.disclosure.lawEnforcement}
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Other Legal Requirements
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </p>
            <ul className="space-y-2 mb-8">
              {data.disclosure.legalRequirements.map((requirement, index) => (
                <li key={index} className="text-gray-700">
                  {requirement}
                </li>
              ))}
            </ul>

            {/* Security */}
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Security of Your Personal Data
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              {data.security}
            </p>

            {/* Children's Privacy */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Children's Privacy
            </h2>
            {data.childrensPrivacy.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-8">
                {paragraph}
              </p>
            ))}

            {/* Links to Other Websites */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Links to Other Websites
            </h2>
            {data.externalLinks.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-8">
                {paragraph}
              </p>
            ))}

            {/* Changes to Privacy Policy */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Changes to this Privacy Policy
            </h2>
            {data.policyChanges.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            {/* Contact Us */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="text-gray-700">
                By email:{" "}
                <a
                  href={`mailto:${data.contactEmail}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {data.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
