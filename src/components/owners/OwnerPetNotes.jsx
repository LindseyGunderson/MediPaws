
const OwnerPetNotes = () => {
  return (
    <section className="space-y-4 flex h-full flex-col">
      <div
        className="
            flex-1
            items-start
            justify-between
            rounded-lg
            border
            border-border
            bg-surface
            p-4
          "
      >
        <h2 className="text-lg font-semibold text-text-primary mb-4">Notes</h2>
        <p className="text-sm">Max: Allergic to penicillin.</p>
      </div>
    </section>
  );
}

export default OwnerPetNotes