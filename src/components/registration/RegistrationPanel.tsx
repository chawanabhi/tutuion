import { ButtonLink } from "@/components/ui/ButtonLink";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { REGISTRATION_FORMS } from "@/config/site";

type RegistrationRole = keyof typeof REGISTRATION_FORMS;

type RegistrationPanelProps = {
  role: RegistrationRole;
  title: string;
  description: string;
};

export function RegistrationPanel({
  role,
  title,
  description,
}: RegistrationPanelProps) {
  const form = REGISTRATION_FORMS[role];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="editorial-panel relative overflow-hidden p-8 sm:p-12">
        <div
          className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-champagne/15 blur-2xl"
          aria-hidden="true"
        />
        <p className="section-eyebrow">Registration</p>
        <h1 className="font-display text-3xl text-midnight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink
            href={form.url}
            variant="gold"
            external
            ariaLabel={`Open ${form.label} form (opens in a new tab)`}
          >
            Continue to form
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Contact us instead
          </ButtonLink>
        </div>

        <p className="mt-6 break-all text-xs text-ink-soft">
          Destination:{" "}
          <ExternalLink href={form.url} className="underline underline-offset-2">
            {form.url}
          </ExternalLink>
        </p>
      </div>
    </div>
  );
}
