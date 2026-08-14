import { Mail, Phone } from "lucide-react";
import Card from "../ui/Card";

const OwnerContactInfo = ({ owner }) => {
  return (
    <section className="space-y-4 flex h-full flex-col">
      <Card>
        <h2 className="text-lg font-semibold text-text-primary mb-4">
          Contact Info
        </h2>
        
        <div className="mb-2 flex flex-row gap-4 items-center">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Mail size={18} />
          </div>
          <div>
            <p className="text-sm text-text-secondary">Email</p>
            <p className="mt-0.5 text-sm font-medium text-text-primary">
              {owner.email}
            </p>
          </div>
        </div>
        <hr className="border-border my-4" />
        <div className="mb-2 flex flex-row gap-4 items-center">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Phone size={18} />
          </div>
          <div>
            <p className="text-sm text-text-secondary">Phone</p>
            <p className="text-sm font-medium">{owner.phone}</p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default OwnerContactInfo;
