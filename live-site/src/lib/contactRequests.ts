import { supabase } from '@/lib/supabase';
import { serviceOptions } from '@/data/siteContent';

export type ContactFormValues = {
  fullName: string;
  workEmail: string;
  company: string;
  serviceInterest: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const emptyContactForm: ContactFormValues = {
  fullName: '',
  workEmail: '',
  company: '',
  serviceInterest: '',
  message: '',
};

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const fullName = values.fullName.trim();
  const workEmail = values.workEmail.trim();
  const message = values.message.trim();

  if (fullName.length < 2) errors.fullName = 'Please enter your full name.';
  if (!emailPattern.test(workEmail) || workEmail.length > 254) {
    errors.workEmail = 'Please enter a valid work email address.';
  }
  if (!values.company.trim()) errors.company = 'Please enter your company name.';
  else if (values.company.trim().length > 120) errors.company = 'Company name is too long.';
  if (!values.serviceInterest) errors.serviceInterest = 'Please choose a service.';
  else if (!serviceOptions.includes(values.serviceInterest)) {
    errors.serviceInterest = 'Please choose a service from the list.';
  }
  if (message.length < 10) errors.message = 'Please share at least a sentence about your project.';
  if (message.length > 2000) errors.message = 'Please keep your message under 2,000 characters.';

  return errors;
}

export async function submitContactRequest(values: ContactFormValues): Promise<void> {
  if (!supabase) {
    throw new Error('The contact service is not configured yet.');
  }

  const { error } = await supabase.from('contact_requests').insert({
    full_name: values.fullName.trim(),
    work_email: values.workEmail.trim(),
    company: values.company.trim() || null,
    service_interest: values.serviceInterest || null,
    message: values.message.trim(),
  });

  if (error) {
    throw new Error('We could not send your request. Please try again in a moment.');
  }
}
