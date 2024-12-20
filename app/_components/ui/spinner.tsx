import { Loader2Icon } from "lucide-react";

const Spinner = () => {
  return (
    <section>
      <Loader2Icon
        className="animate-spin text-primary repeat-infinite"
        size={32}
      />
    </section>
  );
};

export default Spinner;
