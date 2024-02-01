import { useState, useEffect } from 'react';

function usePrefixSuffixWidth({ type, prefix, suffix, prefixRef, suffixRef }) {
  const [prefixWidth, setPrefixWidth] = useState(null);
  const [suffixWidth, setSuffixWidth] = useState(null);

  useEffect(() => {
    if (prefixRef.current) {
      const width = parseFloat(getComputedStyle(prefixRef.current).width);
      setPrefixWidth(Number.isNaN(width) ? null : width + 22);
    } else {
      setPrefixWidth(null);
    }
  }, [prefix, prefixRef]);

  useEffect(() => {
    if (suffixRef.current) {
      const width = parseFloat(getComputedStyle(suffixRef.current).width);
      setSuffixWidth(Number.isNaN(width) ? null : width + 22);
    } else {
      setSuffixWidth(null);
    }
  }, [suffix, suffixRef, type]);

  /* ======================== Return ======================== */

  return { prefixWidth, suffixWidth };
}

export default usePrefixSuffixWidth;
