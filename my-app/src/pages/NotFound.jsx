import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="flex min-h-[70vh] items-center justify-center px-6 py-32 text-center">
    <div>
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-400">404</p>
      <h1 className="mb-4 text-4xl font-semibold text-white">Page not found</h1>
      <p className="mx-auto mb-8 max-w-md text-white/60">
        The page you requested does not exist or has moved.
      </p>
      <Link
        to="/"
        className="inline-flex rounded-full border border-amber-400/50 px-5 py-3 text-sm text-amber-300 transition-colors hover:bg-amber-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
      >
        Return home
      </Link>
    </div>
  </section>
);

export default NotFound;
