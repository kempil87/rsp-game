type Nullable<T> = T | undefined | null;

export const cn = (
  ...args: Array<Nullable<string> | Nullable<Record<PropertyKey, boolean>>>
) => {
  const classes: string[] = [];

  args.map((i) => {
    if (typeof i === 'string') {
      classes.push(i);
    } else {
      for (const k in i) {
        if (i[k]) {
          classes.push(k);
        }
      }
    }
  });

  return classes.join(' ');
};
