export interface ServicePage {
  slug: string;
  title: string;          // SEO title
  h1: string;             // page H1
  navLabel: string;       // short label for nav/cards
  description: string;    // meta description
  intro: string;          // first paragraph
  highlights: string[];   // bullet list (what's included)
  documents: string[];    // documents required / inputs
  process: { title: string; body: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  category: "Taxation" | "GST" | "Registration" | "Accounting" | "Audit" | "Compliance" | "Specialized";
  icon: string; // lucide icon name
}

const commonFaqJammu = (topic: string, slug: string) => [
  {
    q: `How much does ${topic} cost in Jammu?`,
    a: `Fees depend on the scope and complexity of your case. We share a transparent, fixed-fee quote on the free consultation call. Most ${topic} engagements in Jammu start with an affordable advance and clearly defined deliverables.`,
  },
  {
    q: `How long does ${topic} take?`,
    a: `Typical turnaround is 2–10 working days once the required documents are received. Government processing times for departmental approvals can vary; we keep you updated at every step.`,
  },
  {
    q: `Do I need to visit your office in Guru Nanak Nagar, Jammu?`,
    a: `No. The entire process can be completed online over WhatsApp, email and video call. Clients across Jammu & Kashmir and outside the state work with us remotely. You are also welcome to visit our Sec-14, Railway Road office.`,
  },
  {
    q: `Why choose Kohli Arora & Associates for ${topic}?`,
    a: `We are a Jammu-based Chartered Accountant firm led by CA Maheep Kohli, focused on accuracy, timely compliance and personalised service. Our approach is practical, transparent and built around long-term client relationships.`,
  },
];

export const SERVICES: ServicePage[] = [
  {
    slug: "chartered-accountant-jammu",
    title: "Chartered Accountant in Jammu | Kohli Arora & Associates",
    h1: "Chartered Accountant in Jammu",
    navLabel: "Chartered Accountant Services",
    description:
      "Looking for a trusted Chartered Accountant in Jammu? Kohli Arora & Associates offers taxation, GST, audit, registration and advisory services for businesses, startups and individuals across Jammu & Kashmir.",
    intro:
      "Kohli Arora & Associates is a Chartered Accountant firm based in Guru Nanak Nagar, Jammu, providing end-to-end financial, taxation and compliance services to businesses, startups, professionals and individuals across Jammu & Kashmir. Led by CA Maheep Kohli, our practice combines deep technical expertise with a personalised, client-first approach so that you stay compliant, save tax and focus on growing your business.",
    highlights: [
      "Income tax planning, return filing and assessment representation",
      "GST registration, monthly/quarterly filings and notice handling",
      "Company, LLP, MSME, partnership and proprietorship registrations",
      "Statutory, internal and compliance audits",
      "Accounting, bookkeeping, payroll and TDS compliance",
      "ROC annual filings, Director KYC and corporate compliance",
      "Startup advisory, business structuring and financial consulting",
    ],
    documents: [
      "PAN, Aadhaar and basic KYC of promoters",
      "Existing returns, books of accounts or financial statements (if any)",
      "Bank statements and key transaction summaries",
      "Registration / incorporation certificates (where applicable)",
    ],
    process: [
      { title: "Free Consultation", body: "Book a no-obligation call. We understand your situation and recommend the right service." },
      { title: "Document Collection", body: "Share documents securely over WhatsApp or email. We provide a clear checklist." },
      { title: "Processing & Filing", body: "Our team prepares, reviews and files everything accurately and on time." },
      { title: "Approval & Ongoing Support", body: "You receive acknowledgements, certificates and continued compliance support." },
    ],
    benefits: [
      "Jammu-based CA firm with personalised attention",
      "Transparent, fixed-fee pricing — no hidden charges",
      "Timely compliance, every single month",
      "Single point of contact for all financial matters",
    ],
    faqs: [
      { q: "Who is the best Chartered Accountant in Jammu?", a: "The 'best' CA is one who understands your business, communicates clearly and files on time. Kohli Arora & Associates, led by CA Maheep Kohli, is a trusted CA firm in Jammu known for accuracy, transparency and dependable service." },
      ...commonFaqJammu("CA services", "chartered-accountant-jammu"),
      { q: "Do you serve clients outside Jammu city?", a: "Yes. We serve clients across Jammu & Kashmir and pan-India. All compliance work is delivered online." },
    ],
    category: "Specialized",
    icon: "Briefcase",
  },
  {
    slug: "gst-registration-jammu",
    title: "GST Registration in Jammu | Apply Online | Kohli Arora & Associates",
    h1: "GST Registration in Jammu",
    navLabel: "GST Registration",
    description:
      "Get GST registration in Jammu quickly and correctly. Kohli Arora & Associates handles new GSTIN application, documentation and compliance for traders, manufacturers, service providers and e-commerce sellers.",
    intro:
      "GST registration is mandatory for most businesses crossing the prescribed turnover threshold and is recommended for any business wanting to claim input tax credit, sell inter-state or list on e-commerce platforms. Our team in Jammu manages the entire application end-to-end — from documentation and ARN tracking to issuance of your GSTIN.",
    highlights: [
      "New GST registration (regular and composition scheme)",
      "GST registration for proprietorships, partnerships, LLPs and companies",
      "GST for e-commerce sellers on Amazon, Flipkart, Meesho",
      "Amendment of GST registration (address, business, partners)",
      "Voluntary GST registration for input credit",
    ],
    documents: [
      "PAN and Aadhaar of proprietor / partners / directors",
      "Passport-size photographs",
      "Proof of principal place of business (electricity bill, rent agreement, NOC)",
      "Bank account proof — cancelled cheque or bank statement",
      "Constitution document — partnership deed / certificate of incorporation",
    ],
    process: [
      { title: "Free Consultation", body: "We confirm whether you need regular or composition registration." },
      { title: "Document Collection", body: "Share scanned documents on WhatsApp. We verify completeness." },
      { title: "Online Filing", body: "We file Form REG-01 on the GST portal and track the ARN." },
      { title: "GSTIN Issued", body: "You receive your GST certificate, usually within 3–7 working days." },
    ],
    benefits: [
      "Eligibility for input tax credit on purchases",
      "Legal authorisation to collect GST from customers",
      "Required to sell on e-commerce marketplaces",
      "Builds business credibility with vendors and clients",
    ],
    faqs: [
      { q: "Who must register for GST in Jammu?", a: "Any business with aggregate turnover above ₹40 lakh for goods (₹20 lakh for services) must register. Inter-state suppliers, e-commerce sellers and casual taxable persons must register regardless of turnover." },
      { q: "What is the GST registration fee in Jammu?", a: "There is no government fee for GST registration. We charge a transparent professional fee for documentation, filing and follow-up — shared upfront with no hidden costs." },
      ...commonFaqJammu("GST registration", "gst-registration-jammu"),
    ],
    category: "GST",
    icon: "FileText",
  },
  {
    slug: "gst-return-filing-jammu",
    title: "GST Return Filing in Jammu | Monthly & Quarterly | Kohli Arora & Associates",
    h1: "GST Return Filing in Jammu",
    navLabel: "GST Return Filing",
    description:
      "Accurate monthly and quarterly GST return filing in Jammu. We handle GSTR-1, GSTR-3B, GSTR-9 and reconciliations for businesses across Jammu & Kashmir.",
    intro:
      "Timely GST return filing protects you from heavy late fees, interest and notices. Our Jammu team handles GSTR-1, GSTR-3B, IFF, GSTR-9 and 2A/2B reconciliations every month, so you never miss a due date and always claim the maximum eligible input tax credit.",
    highlights: [
      "Monthly GSTR-1 and GSTR-3B filing",
      "Quarterly QRMP scheme returns",
      "Annual GSTR-9 and GSTR-9C audit",
      "GSTR-2A / 2B input credit reconciliation",
      "E-invoicing and e-way bill support",
      "GST notice and assessment reply",
    ],
    documents: [
      "Sales register / invoices for the period",
      "Purchase register with GSTIN of vendors",
      "Expense bills with GST",
      "Bank statement for the period",
      "Previous return acknowledgements",
    ],
    process: [
      { title: "Data Sharing", body: "Send sales & purchase data by 5th of the next month." },
      { title: "Reconciliation", body: "We reconcile your books with GSTR-2B for maximum input credit." },
      { title: "Return Preparation", body: "Returns are prepared, reviewed and shared for your approval." },
      { title: "Filing & Acknowledgement", body: "We file on the portal and share the acknowledgement." },
    ],
    benefits: [
      "Zero late fees through on-time filing",
      "Maximum input tax credit through proper reconciliation",
      "Notice-free compliance record",
      "Monthly MIS of GST liability and ITC",
    ],
    faqs: [
      { q: "What is the due date for GSTR-3B?", a: "GSTR-3B is generally due on the 20th of the following month for monthly filers. QRMP scheme filers have quarterly due dates with monthly tax payment in PMT-06." },
      { q: "What happens if I miss a GST return?", a: "Late fee of ₹50/day (₹20 for nil return) applies along with 18% interest on tax liability. Continued non-filing can lead to cancellation of GSTIN." },
      ...commonFaqJammu("GST return filing", "gst-return-filing-jammu"),
    ],
    category: "GST",
    icon: "FileSpreadsheet",
  },
  {
    slug: "income-tax-return-filing-jammu",
    title: "Income Tax Return Filing in Jammu | ITR Filing | Kohli Arora & Associates",
    h1: "Income Tax Return Filing in Jammu",
    navLabel: "Income Tax Return Filing",
    description:
      "Expert ITR filing in Jammu for salaried individuals, professionals, businesses and NRIs. Maximum legitimate refund, accurate filing and full assessment support.",
    intro:
      "Whether you are a salaried professional, freelancer, business owner or NRI based in Jammu, filing the correct ITR on time saves tax, builds your financial track record and keeps you ready for loans, visas and tenders. We handle ITR-1 to ITR-7 with detailed tax planning, not just data entry.",
    highlights: [
      "ITR-1 / ITR-2 for salaried individuals and pensioners",
      "ITR-3 / ITR-4 for businesses and professionals",
      "ITR-5 / ITR-6 / ITR-7 for firms, companies and trusts",
      "Capital gains computation (shares, mutual funds, property)",
      "Foreign income and NRI ITR filing",
      "Old vs new regime comparison for maximum savings",
      "Revised and belated return filing",
    ],
    documents: [
      "PAN and Aadhaar",
      "Form 16 / Form 16A",
      "Bank statements for the financial year",
      "Investment proofs (80C, 80D, NPS, home loan)",
      "Capital gains statements (broker / mutual fund)",
      "Rental income details and property documents (if applicable)",
    ],
    process: [
      { title: "Free Consultation", body: "We assess your income sources and choose the right ITR form." },
      { title: "Document Collection", body: "Share Form 16, AIS, bank statements and investment proofs." },
      { title: "Computation & Review", body: "We compute tax under both regimes and pick the best." },
      { title: "E-Filing & Verification", body: "Return is filed and e-verified; you receive acknowledgement." },
    ],
    benefits: [
      "Legitimate maximisation of refunds",
      "Avoid notices through accurate AIS / 26AS matching",
      "Tax planning for the next financial year",
      "Ready records for loan and visa applications",
    ],
    faqs: [
      { q: "What is the last date for ITR filing?", a: "For most individuals, the due date is 31st July. For taxpayers requiring audit, it is 31st October. Belated returns can be filed till 31st December with late fees." },
      { q: "Is ITR filing mandatory if my income is below the basic exemption?", a: "Not always, but filing is recommended to claim TDS refunds, carry forward losses and build a financial record. It is mandatory in several specified cases (foreign assets, high-value transactions, etc.)." },
      ...commonFaqJammu("ITR filing", "income-tax-return-filing-jammu"),
    ],
    category: "Taxation",
    icon: "Receipt",
  },
  {
    slug: "company-registration-jammu",
    title: "Company Registration in Jammu | Private Limited | Kohli Arora & Associates",
    h1: "Private Limited Company Registration in Jammu",
    navLabel: "Company Registration",
    description:
      "Register your Private Limited Company in Jammu with end-to-end support — DSC, DIN, name approval, MOA/AOA, PAN, TAN and bank account opening.",
    intro:
      "A Private Limited Company offers limited liability, easy fundraising and strong credibility — making it the preferred structure for startups and growing businesses in Jammu. We handle the entire incorporation through the MCA SPICe+ form: from DSC and name approval to PAN, TAN, EPFO, ESIC and GST registration.",
    highlights: [
      "Name approval through RUN / SPICe+",
      "DSC for two directors and DIN allotment",
      "MOA and AOA drafting",
      "Certificate of Incorporation, PAN and TAN",
      "Bank account opening support",
      "Statutory registers and post-incorporation compliance starter kit",
    ],
    documents: [
      "PAN and Aadhaar of all directors and shareholders",
      "Passport-size photographs",
      "Latest bank statement / utility bill of directors",
      "Proof of registered office (electricity bill + NOC + rent agreement)",
    ],
    process: [
      { title: "Name Approval", body: "We propose and reserve a unique name through SPICe+ Part A." },
      { title: "DSC & Documentation", body: "We obtain DSC and prepare MOA, AOA and SPICe+ Part B." },
      { title: "MCA Filing", body: "Incorporation form is filed with the Registrar of Companies." },
      { title: "Certificate Issued", body: "You receive COI, PAN, TAN and are ready to open a bank account." },
    ],
    benefits: [
      "Limited liability protection for shareholders",
      "Separate legal identity — own assets, sign contracts, sue and be sued",
      "Easier to raise equity funding from investors",
      "Higher trust with banks, vendors and customers",
    ],
    faqs: [
      { q: "How many people are needed to register a Private Limited Company?", a: "A minimum of 2 shareholders and 2 directors are required (the same persons can be both). At least one director must be an Indian resident." },
      { q: "What is the minimum capital for a Private Limited Company?", a: "There is no minimum paid-up capital requirement. You can start with any amount of authorised capital — typically ₹1 lakh." },
      ...commonFaqJammu("company registration", "company-registration-jammu"),
    ],
    category: "Registration",
    icon: "Building2",
  },
  {
    slug: "llp-registration-jammu",
    title: "LLP Registration in Jammu | Limited Liability Partnership | Kohli Arora & Associates",
    h1: "LLP Registration in Jammu",
    navLabel: "LLP Registration",
    description:
      "Register a Limited Liability Partnership (LLP) in Jammu with simplified compliance, lower cost and limited liability. End-to-end LLP incorporation by Kohli Arora & Associates.",
    intro:
      "An LLP combines the flexibility of a partnership with the limited liability of a company — a popular choice for professionals, consultants and service businesses in Jammu. We handle DSC, DPIN, name approval, FiLLiP, LLP agreement drafting and post-incorporation compliance under one roof.",
    highlights: [
      "Name approval via RUN-LLP",
      "DSC and DPIN for designated partners",
      "FiLLiP incorporation filing",
      "LLP agreement drafting and stamp duty payment",
      "PAN, TAN and bank account support",
    ],
    documents: [
      "PAN and Aadhaar of partners",
      "Passport-size photographs",
      "Address proof of partners",
      "Registered office proof (electricity bill + NOC + rent agreement)",
    ],
    process: [
      { title: "Name Reservation", body: "We reserve your LLP name with the MCA." },
      { title: "DSC & FiLLiP Filing", body: "Digital signatures are issued and FiLLiP is filed for incorporation." },
      { title: "LLP Agreement", body: "We draft and file the LLP agreement within 30 days." },
      { title: "Ready to Operate", body: "COI, PAN and TAN issued; LLP is ready to open a bank account." },
    ],
    benefits: [
      "Limited liability for all partners",
      "Lower compliance cost than a Private Limited Company",
      "No minimum capital requirement",
      "Easy transfer of ownership through the LLP agreement",
    ],
    faqs: [
      { q: "How many partners are required to register an LLP?", a: "A minimum of 2 designated partners are required, with no upper limit. At least one designated partner must be an Indian resident." },
      { q: "Which is better — LLP or Private Limited Company?", a: "Private Limited is preferred when raising external equity. LLP is preferred for professional services and small businesses due to lower compliance burden. We help you choose based on your goals." },
      ...commonFaqJammu("LLP registration", "llp-registration-jammu"),
    ],
    category: "Registration",
    icon: "Users",
  },
  {
    slug: "msme-registration-jammu",
    title: "MSME / Udyam Registration in Jammu | Free Online Registration",
    h1: "MSME / Udyam Registration in Jammu",
    navLabel: "MSME Registration",
    description:
      "Get free MSME / Udyam registration in Jammu and unlock government benefits — priority lending, subsidies, protection against delayed payments and tender preference.",
    intro:
      "Udyam (MSME) registration is the official recognition of your business as a Micro, Small or Medium Enterprise. It opens the door to collateral-free loans, lower interest rates, government tender preference and protection under the MSMED Act for delayed payments. We complete your Udyam registration accurately on the same day.",
    highlights: [
      "New Udyam registration certificate",
      "Udyam update and migration from Udyog Aadhaar",
      "NIC code classification advisory",
      "Linking with GSTIN, PAN and bank details",
    ],
    documents: [
      "Aadhaar of proprietor / partner / director",
      "PAN of business and proprietor",
      "GSTIN (if applicable)",
      "Bank account details",
      "Business activity, NIC code and employee count",
    ],
    process: [
      { title: "Quick Information", body: "Share Aadhaar, PAN, bank and business details on WhatsApp." },
      { title: "Online Filing", body: "We file on the Udyam portal and OTP-verify with your Aadhaar." },
      { title: "Certificate Generated", body: "Udyam certificate with QR code is issued same day." },
      { title: "Benefits Activated", body: "Start availing MSME schemes, loans and tender preferences." },
    ],
    benefits: [
      "Collateral-free loans under CGTMSE",
      "Lower bank interest rates",
      "Government tender exemptions and preferences",
      "Protection against delayed buyer payments (MSMED Act)",
      "Subsidy on patent and trademark fees",
    ],
    faqs: [
      { q: "Is Udyam / MSME registration free?", a: "Yes, government fee is zero. We charge a small professional fee for accurate classification and filing." },
      { q: "Who is eligible for MSME registration?", a: "Any manufacturing or service enterprise within the prescribed investment and turnover limits is eligible — including proprietorships, partnerships, LLPs and companies." },
      ...commonFaqJammu("MSME / Udyam registration", "msme-registration-jammu"),
    ],
    category: "Registration",
    icon: "BadgeCheck",
  },
  {
    slug: "roc-compliance-jammu",
    title: "ROC Compliance Services | Annual Filing & Director KYC | Kohli Arora & Associates",
    h1: "ROC Compliance Services in Jammu",
    navLabel: "ROC Compliance",
    description:
      "Complete ROC compliance services for Private Limited Companies and LLPs — annual filing, Director KYC, board meeting minutes and corporate compliance.",
    intro:
      "Every company and LLP in India must comply with annual ROC filing requirements, irrespective of business activity. Non-compliance attracts daily penalties and director disqualification. We manage your full annual ROC calendar — AOC-4, MGT-7, DPT-3, DIR-3 KYC, LLP Form 8, Form 11 and event-based filings — so your records stay clean and your directors stay protected.",
    highlights: [
      "Annual filing: AOC-4, MGT-7 / MGT-7A",
      "LLP annual filing: Form 8 and Form 11",
      "DIR-3 KYC for all directors",
      "DPT-3 return of deposits",
      "Board meeting minutes and statutory registers",
      "Event-based filings: share allotment, director change, address change",
    ],
    documents: [
      "Audited financial statements",
      "Board resolutions for the year",
      "Shareholding pattern and registers",
      "Director KYC details (PAN, Aadhaar, DSC)",
    ],
    process: [
      { title: "Compliance Audit", body: "We map out all pending and upcoming filings." },
      { title: "Document Preparation", body: "Financials, minutes and resolutions are prepared." },
      { title: "MCA Filings", body: "All forms are filed within statutory due dates." },
      { title: "Compliance Calendar", body: "You receive a yearly calendar and reminders." },
    ],
    benefits: [
      "Avoid penalties of ₹100 per day per form",
      "Prevent director disqualification under Section 164",
      "Maintain clean MCA record for funding and bank loans",
      "Single point of accountability for all MCA matters",
    ],
    faqs: [
      { q: "Is ROC filing mandatory even if my company has no business?", a: "Yes. Every company must file AOC-4 and MGT-7 every year, even with zero turnover. LLPs must file Form 8 and Form 11 annually." },
      { q: "What is DIR-3 KYC?", a: "It is the annual KYC of every person holding a DIN, due by 30th September. Non-filing deactivates the DIN and attracts a ₹5,000 reactivation fee." },
      ...commonFaqJammu("ROC compliance", "roc-compliance-jammu"),
    ],
    category: "Compliance",
    icon: "ShieldCheck",
  },
  {
    slug: "accounting-bookkeeping-jammu",
    title: "Accounting & Bookkeeping Services in Jammu | Kohli Arora & Associates",
    h1: "Accounting & Bookkeeping Services in Jammu",
    navLabel: "Accounting & Bookkeeping",
    description:
      "Professional accounting and bookkeeping services in Jammu for SMEs, startups and professionals. Cloud accounting, monthly MIS, financial statements and payroll.",
    intro:
      "Reliable books are the foundation of every successful business. Our Jammu accounting team maintains your books in Tally, Zoho or QuickBooks, reconciles bank and GST data monthly, and delivers clear MIS reports so you always know how your business is performing.",
    highlights: [
      "Day-to-day bookkeeping in Tally / Zoho Books / QuickBooks",
      "Bank, GST and TDS reconciliations",
      "Monthly MIS, P&L and balance sheet",
      "Receivables and payables tracking",
      "Inventory and cost accounting",
      "Year-end financial statements",
    ],
    documents: [
      "Sales and purchase invoices",
      "Bank statements and cheque books",
      "Expense vouchers and bills",
      "Payroll register",
    ],
    process: [
      { title: "Setup", body: "We set up your chart of accounts and accounting software." },
      { title: "Monthly Bookkeeping", body: "Transactions are recorded and reconciled monthly." },
      { title: "MIS Reports", body: "You receive a clear monthly P&L, balance sheet and key ratios." },
      { title: "Year-End Closure", body: "We prepare audit-ready financial statements." },
    ],
    benefits: [
      "Real-time financial visibility",
      "Audit-ready books year-round",
      "Lower cost than an in-house accountant",
      "GST and TDS-aligned bookkeeping by default",
    ],
    faqs: [
      { q: "Which accounting software do you use?", a: "Primarily Tally Prime, Zoho Books and QuickBooks. We can also work on your existing software if you have a preferred platform." },
      { q: "How are documents shared?", a: "Via WhatsApp, email or a shared Google Drive — whichever you prefer. For cloud accounting, you can also enter invoices directly." },
      ...commonFaqJammu("accounting services", "accounting-bookkeeping-jammu"),
    ],
    category: "Accounting",
    icon: "BookOpen",
  },
  {
    slug: "audit-services-jammu",
    title: "Audit Services in Jammu | Statutory, Internal & Tax Audit",
    h1: "Audit Services in Jammu",
    navLabel: "Audit Services",
    description:
      "Independent statutory audit, internal audit, tax audit and compliance audit services in Jammu. Practical insights and on-time reports by Kohli Arora & Associates.",
    intro:
      "Audits are not just a compliance formality — done right, they strengthen internal controls, identify leakages and add credibility with banks, investors and regulators. Our Jammu audit team delivers risk-focused, on-time audit reports for companies, LLPs, firms and trusts.",
    highlights: [
      "Statutory audit under Companies Act",
      "Tax audit under Section 44AB",
      "Internal audit and process audit",
      "GST audit and stock audit",
      "Bank concurrent and revenue audit support",
      "Trust and society audits",
    ],
    documents: [
      "Books of accounts and trial balance",
      "Bank statements and reconciliations",
      "Tax returns and challans",
      "Stock records, fixed asset register",
      "Major contracts and resolutions",
    ],
    process: [
      { title: "Audit Planning", body: "We understand your business, scope the audit and finalise timelines." },
      { title: "Fieldwork", body: "Test of controls, substantive procedures and analytical reviews." },
      { title: "Discussion & Closure", body: "Observations are discussed with management and finalised." },
      { title: "Report Delivery", body: "Signed audit report and management letter are issued." },
    ],
    benefits: [
      "Stronger internal controls and reduced risk",
      "Credibility with banks, investors and tenders",
      "Early identification of compliance gaps",
      "Actionable management insights, not just opinion",
    ],
    faqs: [
      { q: "Who needs a tax audit under Section 44AB?", a: "Businesses with turnover above ₹1 crore (₹10 crore in some digital cases) and professionals with gross receipts above ₹50 lakh must undergo a tax audit." },
      { q: "When is the statutory audit due?", a: "For companies, the audit report should be finalised before the AGM, typically by 30th September following the financial year." },
      ...commonFaqJammu("audit services", "audit-services-jammu"),
    ],
    category: "Audit",
    icon: "ClipboardCheck",
  },
  {
    slug: "tds-return-filing-jammu",
    title: "TDS Return Filing Services | Quarterly TDS / TCS | Kohli Arora & Associates",
    h1: "TDS Return Filing in Jammu",
    navLabel: "TDS Return Filing",
    description:
      "Accurate quarterly TDS return filing — 24Q, 26Q, 27Q and 27EQ — challan reconciliation, Form 16 / 16A issuance and TDS notice handling.",
    intro:
      "TDS compliance has zero tolerance for errors — wrong PANs, late payments and incorrect rates trigger heavy default notices. We manage your end-to-end TDS workflow: monthly tax deduction working, challan payment, quarterly return filing and Form 16 / 16A issuance.",
    highlights: [
      "Form 24Q — TDS on salary",
      "Form 26Q — TDS on payments other than salary",
      "Form 27Q — TDS on payments to non-residents",
      "Form 27EQ — TCS returns",
      "Form 16 / 16A generation and delivery",
      "TDS default notice and correction return handling",
    ],
    documents: [
      "PAN of deductees",
      "Salary register or vendor payment register",
      "Challan details (BSR code, date, amount)",
      "Previous TDS returns (if any)",
    ],
    process: [
      { title: "Monthly Working", body: "We calculate TDS liability and confirm challan payment by 7th." },
      { title: "Quarterly Preparation", body: "Return is prepared with PAN verification and rate checks." },
      { title: "Filing & Token", body: "Return is filed on TRACES and acknowledgement is shared." },
      { title: "Form 16 / 16A", body: "Certificates are downloaded and issued to your deductees." },
    ],
    benefits: [
      "Avoid 1.5% per month interest on late TDS",
      "No ₹200/day late filing fees",
      "Clean TRACES record — no default notices",
      "Timely Form 16 / 16A for employees and vendors",
    ],
    faqs: [
      { q: "What are the due dates for TDS returns?", a: "Quarterly TDS returns are due on 31st July, 31st October, 31st January and 31st May. TDS payment is due on the 7th of the following month." },
      { q: "What happens if I file a wrong PAN in a TDS return?", a: "It triggers a higher TDS rate (20%) demand on the deductee. We perform PAN verification before filing to eliminate this risk." },
      ...commonFaqJammu("TDS return filing", "tds-return-filing-jammu"),
    ],
    category: "Compliance",
    icon: "Calculator",
  },
  {
    slug: "psara-registration-jammu",
    title: "PSARA Registration Services | Private Security Agency Licence | Kohli Arora & Associates",
    h1: "PSARA Registration in Jammu",
    navLabel: "PSARA Registration",
    description:
      "End-to-end PSARA licence assistance for private security agencies — documentation, MOU with training institute, application and follow-up with the Controlling Authority.",
    intro:
      "The Private Security Agencies Regulation Act (PSARA), 2005 makes it mandatory for every private security agency to obtain a state-level PSARA licence before commencing operations. We assist security agencies in Jammu and across India with the entire PSARA registration process — from company structuring and training MOU to application submission and follow-up.",
    highlights: [
      "Pre-registration advisory — entity selection and structuring",
      "MOU with recognised security training institute",
      "Drafting of application form and supporting affidavits",
      "Documentation of directors, supervisors and key personnel",
      "Submission to the Controlling Authority and follow-up",
      "Renewal and amendment of PSARA licence",
    ],
    documents: [
      "Certificate of incorporation / partnership deed",
      "PAN, GST, MSME / Udyam certificate",
      "Director / partner KYC and antecedent details",
      "Office address proof",
      "MOU with PSARA training institute",
      "Logo, uniform pattern and ID card design",
    ],
    process: [
      { title: "Eligibility Check", body: "We confirm entity eligibility and recommend the right structure." },
      { title: "Documentation", body: "Affidavits, MOU and forms are prepared." },
      { title: "Application Filing", body: "Application is submitted to the Controlling Authority." },
      { title: "Licence Issued", body: "Follow-up till PSARA licence is granted." },
    ],
    benefits: [
      "Legal authorisation to operate a private security agency",
      "Eligibility to bid for security contracts (government and private)",
      "Trained, certified and compliant workforce",
      "Hassle-free renewal and amendments",
    ],
    faqs: [
      { q: "Is PSARA licence mandatory for every security agency?", a: "Yes. Under the PSARA Act, 2005, no person can carry on the business of a private security agency without a PSARA licence from the State Controlling Authority." },
      { q: "Is the PSARA licence valid across India?", a: "A PSARA licence is granted state-wise. To operate in multiple states, separate licences (or all-India licence with state-wise fees) are required." },
      ...commonFaqJammu("PSARA registration", "psara-registration-jammu"),
    ],
    category: "Specialized",
    icon: "Shield",
  },
  {
    slug: "trademark-registration-jammu",
    title: "Trademark Registration in Jammu | TM Filing & Brand Protection | Kohli Arora & Associates",
    h1: "Trademark Registration in Jammu",
    navLabel: "Trademark Registration",
    description:
      "Protect your brand name, logo or tagline with trademark registration in Jammu. End-to-end TM search, filing, examination reply and registration certificate support.",
    intro:
      "Your brand is one of your most valuable business assets. A registered trademark gives you exclusive ownership of your name, logo or tagline across India and the legal right to stop others from copying it. Our Jammu team handles TM searches, classification, filing in the right class(es), examination response and follow-up until your registration certificate is issued.",
    highlights: [
      "Free trademark search and availability check",
      "Filing under correct Nice classification (Class 1–45)",
      "Word mark, logo mark and combined mark applications",
      "MSME / startup discounted government fee filing",
      "Examination report reply and hearing representation",
      "Trademark objection, opposition and renewal support",
    ],
    documents: [
      "Applicant PAN and Aadhaar / business KYC",
      "Logo file (JPG / PNG) — if applying for a logo mark",
      "Udyam / MSME certificate (for discounted fees)",
      "Power of Attorney (Form TM-48) — we draft this for you",
      "Brief description of goods / services",
    ],
    process: [
      { title: "TM Search", body: "We perform a public TM search to confirm availability in your class." },
      { title: "Documentation & Filing", body: "TM-A is filed with the Trademark Registry; you receive the application number." },
      { title: "Examination & Reply", body: "We respond to any examination report or hearing notice." },
      { title: "Journal & Registration", body: "Mark is published in the TM Journal; certificate issued after 4 months if unopposed." },
    ],
    benefits: [
      "Exclusive nationwide rights to your brand name / logo",
      "Right to use the ® symbol once registered",
      "Legal protection against copycats and infringement",
      "Builds intangible asset value — useful for fundraising and licensing",
      "Valid for 10 years and indefinitely renewable",
    ],
    faqs: [
      { q: "How long does trademark registration take in India?", a: "If unopposed, registration typically takes 12–18 months from filing. However, you can use the ™ symbol and enforce rights from the date of filing itself." },
      { q: "What is the government fee for trademark registration?", a: "₹4,500 per class for individuals, startups and MSMEs (with Udyam certificate). ₹9,000 per class for other applicants. Our professional fees are shared transparently upfront." },
      ...commonFaqJammu("trademark registration", "trademark-registration-jammu"),
    ],
    category: "Registration",
    icon: "Award",
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

// Service categories displayed on home & services pages
export const SERVICE_CATEGORIES = [
  {
    title: "Taxation",
    icon: "Receipt",
    blurb: "ITR filing, tax planning, advisory, notices and assessment support.",
    items: ["Income Tax Return Filing", "Tax Planning", "Tax Advisory", "Income Tax Notices", "Assessment Support"],
    href: "/income-tax-return-filing-jammu",
  },
  {
    title: "GST Services",
    icon: "FileText",
    blurb: "Registration, monthly & quarterly filing, advisory and notice handling.",
    items: ["GST Registration", "GST Return Filing", "GST Advisory", "GST Compliance", "GST Notices"],
    href: "/gst-registration-jammu",
  },
  {
    title: "Business Registration",
    icon: "Building2",
    blurb: "Private Limited, LLP, partnership, proprietorship, startup and MSME.",
    items: ["Pvt. Ltd. Company", "LLP Registration", "MSME / Udyam", "Trademark Registration", "Startup India"],
    href: "/company-registration-jammu",
  },
  {
    title: "Accounting Services",
    icon: "BookOpen",
    blurb: "Bookkeeping, financial statements, MIS reporting and cloud accounting.",
    items: ["Bookkeeping", "Accounting", "Financial Statements", "MIS Reporting"],
    href: "/accounting-bookkeeping-jammu",
  },
  {
    title: "Audit Services",
    icon: "ClipboardCheck",
    blurb: "Statutory, internal, tax, GST and compliance audits.",
    items: ["Statutory Audit", "Internal Audit", "Tax Audit", "Compliance Audit"],
    href: "/audit-services-jammu",
  },
  {
    title: "ROC Compliance",
    icon: "ShieldCheck",
    blurb: "Annual filings, Director KYC and corporate compliance for companies & LLPs.",
    items: ["Annual Filing", "Director KYC", "ROC Compliance", "Corporate Compliance"],
    href: "/roc-compliance-jammu",
  },
  {
    title: "Payroll & TDS",
    icon: "Calculator",
    blurb: "Payroll processing, TDS deduction, return filing and Form 16 / 16A.",
    items: ["Payroll Processing", "TDS Return Filing", "Salary Compliance"],
    href: "/tds-return-filing-jammu",
  },
  {
    title: "Specialized Services",
    icon: "Shield",
    blurb: "PSARA registration, business advisory, financial & compliance consulting.",
    items: ["PSARA Registration", "Business Advisory", "Financial Consulting", "Compliance Management"],
    href: "/psara-registration-jammu",
  },
] as const;

export const HOME_FAQS = [
  { q: "Who is the best Chartered Accountant in Jammu?", a: "Kohli Arora & Associates, led by CA Maheep Kohli, is a trusted Chartered Accountant firm in Jammu offering taxation, GST, audit, registration and advisory services with a strong reputation for timely compliance and personalised client service." },
  { q: "What services does a CA firm in Jammu provide?", a: "A full-service CA firm provides income tax and GST compliance, company / LLP / MSME registrations, statutory and internal audits, accounting, payroll, TDS, ROC compliance and business advisory — all of which we deliver under one roof." },
  { q: "How much do CA services cost in Jammu?", a: "Fees vary by service and complexity. We share transparent, fixed-fee quotes on the free consultation call. No hidden charges, ever." },
  { q: "Can I file my GST and ITR online without visiting your office?", a: "Yes. The entire process can be handled over WhatsApp, email and video call. Our clients across Jammu & Kashmir and pan-India work with us remotely." },
  { q: "Do you handle income tax notices and GST notices?", a: "Yes. We help draft and file replies, represent before authorities and resolve notices ranging from intimation under Section 143(1) to full scrutiny assessments and GST DRC notices." },
  { q: "How quickly can you register a Private Limited Company in Jammu?", a: "Once documents are received, incorporation typically takes 7–12 working days, including name approval, DSC, DIN and filing of SPICe+ on the MCA portal." },
  { q: "Do you offer GST registration for e-commerce sellers?", a: "Yes. We register sellers for Amazon, Flipkart, Meesho and other marketplaces, including amendments for additional places of business." },
  { q: "What is the difference between LLP and Private Limited Company?", a: "Private Limited Companies are preferred for fundraising and equity-based startups; LLPs offer lower compliance and are well-suited for professional services and small businesses." },
  { q: "Is MSME / Udyam registration mandatory?", a: "Not mandatory, but strongly recommended — it unlocks priority lending, lower interest rates, government tender preferences and protection under the MSMED Act for delayed payments." },
  { q: "Do you provide accounting services for small businesses?", a: "Yes. We maintain books in Tally, Zoho Books and QuickBooks, do monthly bank and GST reconciliations and deliver MIS reports — at a fraction of the cost of an in-house accountant." },
  { q: "What is the due date for ITR filing?", a: "For most individuals the due date is 31st July; for taxpayers requiring audit it is 31st October. Belated returns can be filed by 31st December with late fees." },
  { q: "Can you assist with PSARA registration in Jammu?", a: "Yes. We help private security agencies with the entire PSARA licensing process — documentation, MOU with training institutes, application and follow-up with the Controlling Authority." },
  { q: "Do you handle TDS return filing and Form 16 issuance?", a: "Yes. We prepare and file 24Q, 26Q, 27Q and 27EQ quarterly returns and generate Form 16 / 16A from the TRACES portal." },
  { q: "Will my data be kept confidential?", a: "Absolutely. As Chartered Accountants we are bound by ICAI's professional ethics. Client data is handled with strict confidentiality and shared only with authorised team members." },
  { q: "How do I get started?", a: "Tap 'Book Free Consultation' to chat with us on WhatsApp or call +91 60050 57822. We will understand your requirement, recommend the right service and share a transparent quote." },
];