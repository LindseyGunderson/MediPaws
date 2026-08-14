import Card from "../ui/Card";

function OwnerPetNotes() {
  return (
    <section className="h-full">
      <Card className="h-full">
        <h2 className="text-lg font-semibold text-text-primary">Notes</h2>

        <div className="mt-5 border-l-2 border-primary/30 pl-4">
          <p className="text-sm font-medium text-text-primary">Max: </p>

          <p className="mt-1 text-sm leading-6 text-text-secondary">
            Allergic to penicillin.
          </p>
        </div>
      </Card>
    </section>
  );
}

export default OwnerPetNotes;
