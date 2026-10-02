export const POSITION_LABELS: Record<string, string> = {
  Start: 'at start',
  End: 'at end',
  Random: 'at random position'
};

export const FIXED_LABELS: Record<string, string> = {
  ChangeInitialValue: 'Change initial value',
  FirstGateDuplication: 'Duplicate first gate',
  ControlGateRemoval: 'Remove control',
  SwapControlAndControlledQubits: 'Swap control and target',
  FurtherGateDuplication: 'Duplicate a gate',
  NonControlGateRemoval: 'Remove a gate',
  MoveGateDownAdj: 'Move gate down (adjacent)',
  MoveGateDownAll: 'Move gate down (any row)',
  MoveGateUpAdj: 'Move gate up (adjacent)',
  MoveGateUpAll: 'Move gate up (any row)',
  ChangeControlledQubitDown: 'Move target qubit down',
  ChangeControlledQubitUp: 'Move target qubit up',
  ChangeControlQubitDown: 'Move control qubit down',
  ChangeControlQubitUp: 'Move control qubit up'
};

export interface ParsedOperator {
  kind: 'addGate' | 'noise' | 'swap' | 'other';
  position?: 'Start' | 'End' | 'Random';
  gate?: string;
  from?: string;
  to?: string;
}

export function parseOperator(name: string): ParsedOperator {
  if (!name) {
    return { kind: 'other' };
  }

  const addGateMatch = name.match(/^AddGate(Start|End|Random)_(.+)$/);
  if (addGateMatch) {
    return {
      kind: 'addGate',
      position: addGateMatch[1] as 'Start' | 'End' | 'Random',
      gate: addGateMatch[2]
    };
  }

  const noiseMatch = name.match(/^NoiseInsertion(Start|End|Random)$/);
  if (noiseMatch) {
    return {
      kind: 'noise',
      position: noiseMatch[1] as 'Start' | 'End' | 'Random'
    };
  }

  const swapMatch = name.match(/^([^_]+)_([^_]+)$/);
  if (swapMatch) {
    return {
      kind: 'swap',
      from: swapMatch[1],
      to: swapMatch[2]
    };
  }

  return { kind: 'other' };
}

function splitCamelCase(text: string): string {
  const words = text.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(/\s+/).filter(Boolean);
  if (words.length === 0) return text;
  return words
    .map((w, idx) => (idx === 0 ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w.toLowerCase()))
    .join(' ');
}

export function operatorLabel(name?: string | null): string {
  if (!name || !name.trim()) {
    return '';
  }

  const parsed = parseOperator(name);
  switch (parsed.kind) {
    case 'addGate':
      return `Add ${parsed.gate} ${POSITION_LABELS[parsed.position!] || parsed.position}`;
    case 'noise':
      return `Noise ${POSITION_LABELS[parsed.position!] || parsed.position}`;
    case 'swap':
      return `${parsed.from} → ${parsed.to}`;
    case 'other':
    default:
      if (FIXED_LABELS[name]) {
        return FIXED_LABELS[name];
      }
      return splitCamelCase(name);
  }
}
