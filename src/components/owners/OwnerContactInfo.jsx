import { Mail, Phone } from "lucide-react";
import Card from "../ui/Card";

const OwnerContactInfo = ({ owner }) => {
  return (
    <section className="flex h-full flex-col">
      <Card className="h-full">
        <h2 className="mb-5 text-lg font-semibold text-text-primary">
          Contact Info
        </h2>

        <div className="space-y-5">
          <a
            href={`mailto:${owner.email}`}
            className="group flex items-center gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail size={18} />
            </div>

            <div className="min-w-0">
              <p className="text-sm text-text-secondary">Email</p>

              <p className="mt-0.5 truncate text-sm font-medium text-text-primary transition-colors group-hover:text-primary">
                {owner.email}
              </p>
            </div>
          </a>

          <a
            href={`tel:${owner.phone}`}
            className="group flex items-center gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Phone size={18} />
            </div>

            <div>
              <p className="text-sm text-text-secondary">Phone</p>

              <p className="mt-0.5 text-sm font-medium text-text-primary transition-colors group-hover:text-primary">
                {owner.phone}
              </p>
            </div>
          </a>
        </div>
      </Card>
    </section>
  );
};

export default OwnerContactInfo;
