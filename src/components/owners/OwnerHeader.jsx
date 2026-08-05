
function OwnerHeader({ owner }) {
  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-3xl font-semibold text-text-primary">
          {owner.name}
        </h1>

        <p className="text-sm text-text-secondary">Owner profile</p>
      </div>
    </section>
  );
}

export default OwnerHeader;
