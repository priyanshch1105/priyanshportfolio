/**
 * Deterministic, pure pseudo-random generator (mulberry32). Because it is
 * seeded, calling it inside render/useMemo is idempotent — identical inputs
 * produce identical sequences, satisfying React's purity rules.
 */
export function mulberry32(seed: number): () => number {
  let state = seed | 0
  return () => {
    state = (state + 0x6d2b79f5) | 0
    let t = Math.imul(state ^ (state >>> 15), 1 | state)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
