function Header() {
  return (
    <section className="mb-8 sm:mb-10 p-4">
      <h1
        className="
          text-3xl
          sm:text-4xl
          font-bold
          text-slate-900
          mb-2
        "
      >
        Referral Dashboard
      </h1>

      <p
        className="
          text-sm
          sm:text-base
          text-slate-500
          max-w-md
        "
      >
        Track your referrals, earnings, and partner activity in one place.
      </p>
    </section>
  );
}

export default Header;