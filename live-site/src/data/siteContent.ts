import {
  Blocks,
  Bot,
  Briefcase,
  Cloud,
  Code2,
  Cpu,
  Factory,
  HeartPulse,
  Plug,
  ShoppingBag,
  Smartphone,
  Truck,
  Workflow,
  Zap,
  Layers,
  Boxes,
  ShieldCheck,
  Gauge,
  Users,
  Target,
  Eye,
  Gem,
  type LucideIcon,
} from 'lucide-react';

export const brand = {
  name: 'Nexovant Solutions',
  short: 'Nexovant',
};

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Capabilities', href: '#competencies' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const heroImage =
  'https://images.pexels.com/photos/17194838/pexels-photo-17194838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const trustMetrics: { value: number | null; suffix: string; label: string }[] = [
  // TODO: Replace the pending values with figures verified by Nexovant before launch.
  { value: null, suffix: '', label: 'Projects Delivered' },
  { value: null, suffix: '', label: 'Enterprise Clients' },
  { value: null, suffix: '', label: 'Countries Served' },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    icon: Layers,
    title: 'Zoho Consulting',
    description:
      'Strategy, process design, and a practical roadmap for getting the most from the Zoho ecosystem across your departments.',
    highlights: ['Zoho Readiness Assessments', 'Process Mapping & Design', 'Team Adoption & Training'],
  },
  {
    icon: Blocks,
    title: 'Zoho Creator Development',
    description:
      'Custom business applications built on Zoho Creator, from approval workflows to full operational systems.',
    highlights: ['Custom Creator Applications', 'Deluge Scripting', 'Forms, Approvals & Reports'],
  },
  {
    icon: Briefcase,
    title: 'Zoho CRM Implementation',
    description:
      'End-to-end Zoho CRM setup, data migration, and integrations that give your sales and service teams one source of truth.',
    highlights: ['Pipeline & Stage Configuration', 'Data Migration & Cleanup', 'Integrations & Dashboards'],
  },
  {
    icon: Code2,
    title: 'Custom Web Applications',
    description:
      'Secure, scalable web platforms built around your workflows, from internal portals to customer-facing products.',
    highlights: ['Customer & Partner Portals', 'Dashboards & Analytics', 'API & System Integrations'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Application Development',
    description:
      'iOS and Android apps for your teams and customers, designed for speed in the field and polished on every screen.',
    highlights: ['iOS & Android Apps', 'Offline-Ready Field Tools', 'App Store Launch Support'],
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description:
      'Workflow automation that removes manual handoffs, keeps data in sync, and frees your people for higher-value work.',
    highlights: ['Approval & Routing Workflows', 'Document Automation', 'Cross-System Data Sync'],
  },
];

export const serviceOptions = [...services.map((service) => service.title), 'Other'];

export const competencies: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Workflow,
    title: 'Digital Transformation',
    description: 'Re-architect legacy processes into connected, data-driven operating models.',
  },
  {
    icon: Bot,
    title: 'Business Process Automation',
    description: 'Eliminate manual handoffs with workflow engines that run around the clock.',
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    description: 'Embed practical machine learning and generative AI into everyday business tools.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Secure, elastic cloud foundations designed for resilience and predictable cost.',
  },
  {
    icon: Plug,
    title: 'Enterprise Integration',
    description: 'Unify ERP, CRM, finance, and field systems into one trusted source of truth.',
  },
];

export const industries: { icon: LucideIcon; name: string; description: string }[] = [
  { icon: Factory, name: 'Manufacturing', description: 'Production, inventory, and quality workflows on one platform.' },
  { icon: Boxes, name: 'Construction', description: 'Project, field team, and document workflows in sync.' },
  { icon: ShoppingBag, name: 'Retail', description: 'Sales, stock, and customer data connected across channels.' },
  { icon: HeartPulse, name: 'Healthcare', description: 'Patient intake, approvals, and service workflows.' },
  { icon: Truck, name: 'Logistics', description: 'Dispatch, delivery, and proof of delivery in one flow.' },
];

export const mvv: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Target,
    title: 'Mission',
    body: 'Give growing businesses practical software, from Zoho to custom apps, that is simple to adopt and built to pay back.',
  },
  {
    icon: Eye,
    title: 'Vision',
    body: 'Become the most trusted partner for businesses that want their operations, data, and customer experience working as one.',
  },
  {
    icon: Gem,
    title: 'Values',
    body: 'Clarity over jargon, ownership over excuses, and care over every touchpoint in every engagement.',
  },
];

export const caseStudies = [
  {
    client: 'Mid-Sized Manufacturer',
    sector: 'Manufacturing',
    title: 'Sales pipeline and quoting unified in Zoho CRM',
    // TODO: Replace with the client's verified result before launch.
    result: 'Verified result to be added before launch',
    image:
      'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    client: 'Regional Clinic Network',
    sector: 'Healthcare',
    title: 'Patient intake and approvals built on Zoho Creator',
    // TODO: Replace with the client's verified result before launch.
    result: 'Verified result to be added before launch',
    image:
      'https://images.pexels.com/photos/37880001/pexels-photo-37880001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    client: 'Logistics Operator',
    sector: 'Logistics',
    title: 'Driver app for dispatch and proof of delivery',
    // TODO: Confirm this outcome with the client before launch.
    result: 'Verified result to be added before launch',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const whyChooseUs: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ShieldCheck,
    title: 'Proven Depth',
    body: 'Consultants and engineers with hands-on experience across Zoho, custom web, and mobile projects.',
  },
  {
    icon: Gauge,
    title: 'Outcome-Led Delivery',
    body: 'Every phase is tied to KPIs you define up front, with transparent reporting from kickoff to go-live.',
  },
  {
    icon: Users,
    title: 'Built to Last',
    body: 'Stable, named teams that learn your business, so you never repeat onboarding.',
  },
  {
    icon: Boxes,
    title: 'Future-Ready Architecture',
    body: 'Solutions that grow from a single department to multi-country operations without a rebuild.',
  },
];

export const techStack = [
  'Zoho CRM',
  'Zoho Creator',
  'Zoho Books',
  'Deluge',
  'React',
  'Node.js',
  'Python',
  'PostgreSQL',
  'AWS',
  'Flutter',
  'React Native',
  'Power BI',
];

export const testimonials = [
  {
    // TODO: Replace with a real client quote, name, title, and company after receiving permission.
    quote: 'Approved client quote to be added before launch.',
    name: 'Client name pending permission',
    role: 'Client title pending permission',
    company: 'Client company pending permission',
  },
  {
    // TODO: Replace with a real client quote, name, title, and company after receiving permission.
    quote: 'Approved client quote to be added before launch.',
    name: 'Client name pending permission',
    role: 'Client title pending permission',
    company: 'Client company pending permission',
  },
  {
    // TODO: Replace with a real client quote, name, title, and company after receiving permission.
    quote: 'Approved client quote to be added before launch.',
    name: 'Client name pending permission',
    role: 'Client title pending permission',
    company: 'Client company pending permission',
  },
];
