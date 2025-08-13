const cn = (...classes: (string | undefined | false)[]) => classes.filter(Boolean).join(" ");

function toLocalTime(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "short",
    });
  } catch {
    return iso;
  }
}

export { cn, toLocalTime };