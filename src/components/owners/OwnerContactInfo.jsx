import { Mail, Phone } from "lucide-react";
const OwnerContactInfo = ({ owner }) => {
  return (
    <section className="space-y-4 flex h-full flex-col">
      <div
        className="
            flex-1
            rounded-lg
            border
            border-border
            bg-surface
            p-4
          "
      >
        <h2 className="text-lg font-semibold text-text-primary mb-4">
          Contact Info
        </h2>
        <div className="mb-2 flex flex-row gap-4 items-center">
          <Mail size={20} />
          <div>
            <p className="text-sm text-text-secondary">Email</p>
            <p className="text-sm font-medium">{owner.email}</p>
          </div>
        </div>
        <hr className="border-border my-4" />
        <div className="mb-2 flex flex-row gap-4 items-center">
          <Phone size={20} />
          <div>
            <p className="text-sm text-text-secondary">Phone</p>
            <p className="text-sm font-medium">{owner.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerContactInfo;
