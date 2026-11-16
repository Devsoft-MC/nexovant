import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Send } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { serviceOptions } from '@/data/siteContent';
import {
  emptyContactForm,
  submitContactRequest,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '@/lib/contactRequests';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full rounded-xl border bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-navy-400 transition-colors duration-300 focus:border-accent-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent-400/30';

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-navy-100">{label}</span>
      {children}
      {error && (
        <span className="mt-2 flex items-center gap-1.5 text-xs font-medium text-rose-300">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </span>
      )}
    </label>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyContactForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [serverError, setServerError] = useState('');

  const updateField = (field: keyof ContactFormValues) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    setServerError('');
    try {
      await submitContactRequest(values);
      setValues(emptyContactForm);
      setStatus('success');
    } catch (error) {
      setServerError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-24 sm:py-32">
      <div className="absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary-600/25 blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-accent-500/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            align="left"
            tone="dark"
            eyebrow="Contact"
            title="Tell Us Where Your Business Needs to Go Next"
            description="Share a few details and a senior consultant will respond within one business day with next steps and a free discovery call."
          />

          <div className="mt-10 space-y-4">
            <div className="glass flex items-center gap-4 rounded-2xl p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy-300">Response time</p>
                <p className="text-sm font-semibold text-white">Within one business day</p>
              </div>
            </div>
            <div className="glass flex items-center gap-4 rounded-2xl p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/20 text-primary-300">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy-300">Delivery</p>
                <p className="text-sm font-semibold text-white">Remote-first teams across five countries</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-7">
          <div className="glass rounded-3xl p-6 shadow-2xl shadow-black/30 sm:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center py-12 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/20">
                  <CheckCircle2 className="h-8 w-8 text-accent-300" />
                </span>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">Thank you, your request is in</h3>
                <p className="mt-3 max-w-md text-sm leading-[1.5] text-navy-200">
                  A consultant will reach out to your work email within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-8 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Full name" error={errors.fullName}>
                    <input
                      type="text"
                      name="fullName"
                      required
                      autoComplete="name"
                      value={values.fullName}
                      onChange={updateField('fullName')}
                      placeholder="Jane Doe"
                      className={`${inputClass} ${errors.fullName ? 'border-rose-400/70' : 'border-white/15'}`}
                    />
                  </Field>
                  <Field label="Work email" error={errors.workEmail}>
                    <input
                      type="email"
                      name="workEmail"
                      required
                      autoComplete="email"
                      value={values.workEmail}
                      onChange={updateField('workEmail')}
                      placeholder="jane@company.com"
                      className={`${inputClass} ${errors.workEmail ? 'border-rose-400/70' : 'border-white/15'}`}
                    />
                  </Field>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Company" error={errors.company}>
                    <input
                      type="text"
                      name="company"
                      required
                      autoComplete="organization"
                      value={values.company}
                      onChange={updateField('company')}
                      placeholder="Company name"
                      className={`${inputClass} ${errors.company ? 'border-rose-400/70' : 'border-white/15'}`}
                    />
                  </Field>
                  <Field label="Service of interest" error={errors.serviceInterest}>
                    <select
                      name="serviceInterest"
                      required
                      value={values.serviceInterest}
                      onChange={updateField('serviceInterest')}
                      className={`${inputClass} appearance-none ${errors.serviceInterest ? 'border-rose-400/70' : 'border-white/15'}`}
                    >
                      <option value="" className="bg-navy-900">Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option} className="bg-navy-900">
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Project details" error={errors.message}>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={values.message}
                    onChange={updateField('message')}
                    placeholder="Tell us about your goals, timeline, and current systems."
                    className={`${inputClass} resize-none ${errors.message ? 'border-rose-400/70' : 'border-white/15'}`}
                  />
                </Field>

                {status === 'error' && (
                  <div className="flex items-start gap-3 rounded-xl border border-rose-400/30 bg-rose-500/10 p-4 text-sm text-rose-200">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {serverError}
                  </div>
                )}

                <div className="flex flex-col-reverse items-stretch justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                  <p className="text-xs leading-[1.5] text-navy-300">
                    We only use your details to respond to this enquiry.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-primary-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-500 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Request'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
