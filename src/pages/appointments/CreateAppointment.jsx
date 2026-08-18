import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  Clock3,
  Mail,
  PawPrint,
  Phone,
} from "lucide-react";

import Card from "../../components/ui/Card";
import PetAvatar from "../../components/pets/PetAvatar";

import { pets } from "../../data/pets";
import { owners } from "../../data/owners";

import { formatDate, formatTimeForDisplay } from "../../utils/dates";

function CreateAppointment() {
  const [selectedOwnerId, setSelectedOwnerId] = useState("");
  const [selectedPetId, setSelectedPetId] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const selectedPet = pets.find(
    (pet) => Number(pet.id) === Number(selectedPetId),
  );

  const selectedOwner = owners.find(
    (owner) => Number(owner.id) === Number(selectedOwnerId),
  );

  const ownerPets = pets.filter(
    (pet) => Number(pet.ownerId) === Number(selectedOwnerId),
  );

  function handleOwnerChange(event) {
    const ownerId = event.target.value;

    setSelectedOwnerId(ownerId);
    setSelectedPetId("");
  }

  return (
    <div className="mx-auto max-w-4xl space-y-10">
        
      <header className="space-y-4">
        <Link
          to="/appointments"
          className="
            inline-flex
            items-center
            gap-1
            text-sm
            font-medium
            text-text-secondary
            transition-colors
            hover:text-text-primary
          "
        >
          <ChevronLeft size={16} aria-hidden="true" />
          Back to Appointments
        </Link>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
            Create Appointment
          </h1>

          <p className="mt-2 text-sm leading-6 text-text-secondary">
            Schedule a new visit for a patient.
          </p>
        </div>
      </header>

      <form className="space-y-6">
        <Card>
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <PawPrint size={18} aria-hidden="true" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary">
                Patient
              </h2>

              <p className="mt-1 text-sm text-text-secondary">
                Select the owner and pet for this appointment.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="owner"
                className="text-sm font-medium text-text-primary"
              >
                Owner
              </label>

              <select
                id="owner"
                name="owner"
                value={selectedOwnerId}
                onChange={handleOwnerChange}
                className="
                  w-full
                  rounded-md
                  border
                  border-border
                  bg-surface
                  px-3
                  py-2.5
                  text-sm
                  text-text-primary
                  outline-none
                  transition
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                "
              >
                <option value="" disabled>
                  Select an owner
                </option>

                {owners.map((owner) => (
                  <option key={owner.id} value={owner.id}>
                    {owner.name}
                  </option>
                ))}
              </select>

              {selectedOwner && (
                <div className="flex flex-1 items-center rounded-lg bg-surface-muted p-4">
                  <div>
                    <p className="font-medium text-text-primary">
                      {selectedOwner.name}
                    </p>

                    <div className="mt-2 space-y-1.5 text-sm text-text-secondary">
                      {selectedOwner.email && (
                        <span className="flex items-center gap-2">
                          <Mail size={14} aria-hidden="true" />
                          {selectedOwner.email}
                        </span>
                      )}

                      {selectedOwner.phone && (
                        <span className="flex items-center gap-2">
                          <Phone size={14} aria-hidden="true" />
                          {selectedOwner.phone}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="pet"
                className="text-sm font-medium text-text-primary"
              >
                Pet
              </label>

              <select
                id="pet"
                name="pet"
                value={selectedPetId}
                onChange={(event) => setSelectedPetId(event.target.value)}
                disabled={!selectedOwnerId}
                className="
                  w-full
                  rounded-md
                  border
                  border-border
                  bg-surface
                  px-3
                  py-2.5
                  text-sm
                  text-text-primary
                  outline-none
                  transition
                  disabled:cursor-not-allowed
                  disabled:bg-surface-muted
                  disabled:text-text-secondary
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                "
              >
                <option value="" disabled>
                  {selectedOwnerId ? "Select a pet" : "Select an owner first"}
                </option>

                {ownerPets.map((pet) => (
                  <option key={pet.id} value={pet.id}>
                    {pet.name}
                  </option>
                ))}
              </select>

              {selectedPet && (
                <div className="flex flex-1 items-center rounded-lg bg-surface-muted p-4">
                  <div className="flex items-center gap-3">
                    <PetAvatar pet={selectedPet} size="md" />

                    <div className="min-w-0">
                      <p className="font-medium text-text-primary">
                        {selectedPet.name}
                      </p>

                      <p className="mt-0.5 text-sm text-text-secondary">
                        {selectedPet.breed}
                      </p>

                      {selectedPet.age != null && (
                        <p className="mt-1 text-xs text-text-secondary">
                          {selectedPet.age} years old
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <CalendarDays size={18} aria-hidden="true" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary">
                Appointment Details
              </h2>

              <p className="mt-1 text-sm text-text-secondary">
                Choose when the visit will take place and what type of visit it
                is.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-5">

            <div className="space-y-2">
              <label
                htmlFor="type"
                className="text-sm font-medium text-text-primary"
              >
                Appointment Type
              </label>

              <select
                id="type"
                name="type"
                value={selectedType}
                onChange={(event) => setSelectedType(event.target.value)}
                className="
                  w-full
                  rounded-md
                  border
                  border-border
                  bg-surface
                  px-3
                  py-2.5
                  text-sm
                  text-text-primary
                  outline-none
                  transition
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                "
              >
                <option value="" disabled>
                  Select appointment type
                </option>

                <option value="Wellness Checkup">Wellness Checkup</option>
                <option value="Wellness Exam">Wellness Exam</option>
                <option value="Vaccination">Vaccination</option>
                <option value="Dental Cleaning">Dental Cleaning</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Surgery">Surgery</option>
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="date"
                  className="text-sm font-medium text-text-primary"
                >
                  Date
                </label>

                <div className="relative">
                  <CalendarDays
                    size={17}
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-3
                      top-1/2
                      -translate-y-1/2
                      text-text-secondary
                    "
                  />

                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={selectedDate}
                    onChange={(event) => setSelectedDate(event.target.value)}
                    className="
                      w-full
                      rounded-md
                      border
                      border-border
                      bg-surface
                      py-2.5
                      pl-10
                      pr-3
                      text-sm
                      text-text-primary
                      outline-none
                      transition
                      focus:border-primary
                      focus:ring-2
                      focus:ring-primary/10
                    "
                  />
                </div>

                <p className="text-xs text-text-secondary">
                  Select the appointment date.
                </p>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="time"
                  className="text-sm font-medium text-text-primary"
                >
                  Time
                </label>

                <div className="relative">
                  <Clock3
                    size={17}
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-3
                      top-1/2
                      -translate-y-1/2
                      text-text-secondary
                    "
                  />

                  <input
                    id="time"
                    name="time"
                    type="time"
                    value={selectedTime}
                    onChange={(event) => setSelectedTime(event.target.value)}
                    className="
                      w-full
                      rounded-md
                      border
                      border-border
                      bg-surface
                      py-2.5
                      pl-10
                      pr-3
                      text-sm
                      text-text-primary
                      outline-none
                      transition
                      focus:border-primary
                      focus:ring-2
                      focus:ring-primary/10
                    "
                  />
                </div>

                <p className="text-xs text-text-secondary">
                  Select the appointment time.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {(selectedPet ||
          selectedOwner ||
          selectedType ||
          selectedDate ||
          selectedTime) && (
          <div className="pt-4">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />

              <span className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                Review
              </span>

              <div className="h-px flex-1 bg-border" />
            </div>

            <section
              className="
                rounded-2xl
                border
                border-primary/30
                bg-primary/5
                p-6
                shadow-sm
                sm:p-7
              "
            >
                
              <div className="mb-7 flex items-start gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <CheckCircle2 size={19} aria-hidden="true" />
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-text-primary">
                    Appointment Summary
                  </h2>

                  <p className="mt-1 text-sm leading-5 text-text-secondary">
                    Review the appointment details before scheduling.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border/70 bg-surface p-5 sm:p-6">

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                
                  {selectedOwner && (
                    <div
                      className="
                        flex
                        items-center
                        gap-4
                        border-b
                        border-primary/10
                        pb-5
                        md:border-b-0
                        md:border-r
                        md:pb-0
                        md:pr-5
                      "
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                          Owner
                        </p>

                        <p className="mt-1 font-semibold text-text-primary">
                          {selectedOwner.name}
                        </p>

                        {selectedOwner.email && (
                          <p className="mt-0.5 text-sm text-text-secondary">
                            {selectedOwner.email}
                          </p>
                        )}

                        {selectedOwner.phone && (
                          <p className="mt-0.5 text-sm text-text-secondary">
                            {selectedOwner.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {selectedPet && (
                    <div
                      className="
                        flex
                        items-center
                        gap-4
                        border-b
                        border-primary/10
                        pb-5
                        md:border-b-0
                        md:pb-0
                      "
                    >
                      <PetAvatar pet={selectedPet} size="md" />

                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                          Patient
                        </p>

                        <p className="mt-1 font-semibold text-text-primary">
                          {selectedPet.name}
                        </p>

                        <p className="mt-0.5 text-sm text-text-secondary">
                          {selectedPet.breed}
                        </p>

                        {selectedPet.age != null && (
                          <p className="mt-0.5 text-xs text-text-secondary">
                            {selectedPet.age} years old
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {(selectedType || selectedDate || selectedTime) && (
                  <div className="mt-5 grid gap-3 border-t border-primary/10 pt-5 sm:grid-cols-2">
                    <div className="rounded-lg bg-surface-muted p-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                        Appointment Type
                      </p>

                      <p className="mt-1.5 font-medium text-text-primary">
                        {selectedType || "Not selected"}
                      </p>
                    </div>

                    <div className="rounded-lg bg-surface-muted p-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                        Date & Time
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                        {selectedDate && (
                          <span className="inline-flex items-center gap-1.5 font-medium text-text-primary">
                            <CalendarDays size={15} aria-hidden="true" />
                            {formatDate(selectedDate)}
                          </span>
                        )}

                        {selectedDate && selectedTime && (
                          <span
                            aria-hidden="true"
                            className="text-text-secondary"
                          >
                            ·
                          </span>
                        )}

                        {selectedTime && (
                          <span className="inline-flex items-center gap-1.5 font-medium text-text-primary">
                            <Clock3 size={15} aria-hidden="true" />
                            {formatTimeForDisplay(selectedTime)}
                          </span>
                        )}

                        {!selectedDate && !selectedTime && (
                          <span className="text-text-secondary">
                            Date and time not selected
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}
        
        <div className="flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
          <Link
            to="/appointments"
            className="
              inline-flex
              items-center
              justify-center
              rounded-md
              border
              border-border
              bg-surface
              px-4
              py-2.5
              text-sm
              font-medium
              text-text-primary
              transition-colors
              hover:bg-surface-muted
            "
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-primary
              px-4
              py-2.5
              text-sm
              font-medium
              text-white
              shadow-sm
              transition-all
              hover:bg-primary-dark
              hover:shadow-md
              active:scale-[0.98]
            "
          >
            Schedule Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAppointment;
