import Spinner from "./_components/ui/spinner";

export default function Loading() {
  return (
    <section className="flex h-full flex-col items-center justify-center">
      <Spinner />
    </section>
  );
}
