export default function combineClassNames(...args) {
  const filteredArgs = args.filter(arg =>
    typeof arg === 'string' ? arg.trim() !== '' : typeof arg === 'number'
  );

  return filteredArgs.join(' ');
}
