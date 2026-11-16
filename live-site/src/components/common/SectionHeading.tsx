type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
}: SectionHeadingProps) {
  const isDark = tone === 'dark';
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <p
        className={`text-sm font-semibold uppercase tracking-[0.2em] ${
          isDark ? 'text-accent-400' : 'text-primary-600'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-bold leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl ${
          isDark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-[1.5] sm:text-lg ${
            isDark ? 'text-navy-200' : 'text-navy-500'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
