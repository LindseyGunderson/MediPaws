function OwnerHeader({ owner }) {
  const petCount = owner.pets?.length ?? 0;

  return (
    <section>
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
          {owner.name}
        </h1>

        <div className="mt-2 flex items-center gap-2 text-sm text-text-secondary">
          <span>Owner profile</span>
          <span aria-hidden="true">·</span>
          <span>
            {petCount} {petCount === 1 ? "pet" : "pets"}
          </span>
        </div>
      </div>
    </section>
  );
}

export default OwnerHeader;
