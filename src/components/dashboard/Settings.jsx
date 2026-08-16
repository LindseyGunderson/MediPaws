import { Bell, Building2, User } from "lucide-react";
import Card from "../../components/ui/Card";

function Settings() {
  return (
    <div className="mx-auto max-w-4xl space-y-10">
      {/* Page intro */}
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-text-primary">
          Settings
        </h1>

        <p className="mt-1.5 text-sm text-text-secondary">
          Manage your account, clinic information, and preferences.
        </p>
      </section>

      {/* Account */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-text-primary">
            Account
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Your administrator account information.
          </p>
        </div>

        <Card>
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-primary/10
                text-primary
              "
            >
              <User size={19} />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-medium text-text-primary">
                Sarah Wilson
              </p>

              <p className="mt-1 text-sm text-text-secondary">
                sarah@medipaws.com
              </p>

              <p className="mt-2 text-xs font-medium text-text-secondary">
                Administrator
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Clinic */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-text-primary">
            Clinic
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Information about your clinic.
          </p>
        </div>

        <Card>
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-primary/10
                text-primary
              "
            >
              <Building2 size={19} />
            </div>

            <div className="grid flex-1 gap-5 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium text-text-secondary">
                  Clinic name
                </p>

                <p className="mt-1 text-sm font-medium text-text-primary">
                  MediPaws Veterinary Clinic
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-text-secondary">Phone</p>

                <p className="mt-1 text-sm font-medium text-text-primary">
                  (604) 555-0142
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-text-secondary">
                  Address
                </p>

                <p className="mt-1 text-sm font-medium text-text-primary">
                  Vancouver, BC
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-text-secondary">
                  Time zone
                </p>

                <p className="mt-1 text-sm font-medium text-text-primary">
                  Pacific Time
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Preferences */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-text-primary">
            Preferences
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Control how MediPaws keeps you informed.
          </p>
        </div>

        <Card className="divide-y divide-border/70 p-0">
          <div className="flex items-center justify-between gap-6 px-6 py-5">
            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-primary/10
                  text-primary
                "
              >
                <Bell size={19} />
              </div>

              <div>
                <p className="text-sm font-medium text-text-primary">
                  Notifications
                </p>

                <p className="mt-1 text-sm text-text-secondary">
                  Receive notifications about appointment changes.
                </p>
              </div>
            </div>

            <span
              className="
                shrink-0
                rounded-full
                bg-primary/10
                px-2.5
                py-1
                text-xs
                font-medium
                text-primary
              "
            >
              Enabled
            </span>
          </div>

          <div className="flex items-center justify-between gap-6 px-6 py-5">
            <div>
              <p className="text-sm font-medium text-text-primary">
                Appointment reminders
              </p>

              <p className="mt-1 text-sm text-text-secondary">
                Send reminders for upcoming appointments.
              </p>
            </div>

            <span
              className="
                shrink-0
                rounded-full
                bg-primary/10
                px-2.5
                py-1
                text-xs
                font-medium
                text-primary
              "
            >
              Enabled
            </span>
          </div>
        </Card>
      </section>

      {/* Placeholder notice */}
      <div
        className="
          rounded-lg
          border
          border-border/70
          bg-surface-muted
          px-5
          py-4
        "
      >
        <p className="text-sm font-medium text-text-primary">
          Settings are currently read-only
        </p>

        <p className="mt-1 text-sm text-text-secondary">
          Editing preferences will be available in a future version.
        </p>
      </div>
    </div>
  );
}

export default Settings;
