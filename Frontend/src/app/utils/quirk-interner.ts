// Los mutantes son el circuito original con 1-2 cambios: compartir las columnas/puertas identicas entre mutantes
// reduce la memoria ~60 veces sin cambiar el JSON (JSON.stringify expande las referencias compartidas).
function deepFreeze(v: any): any {
  if (v !== null && typeof v === 'object' && !Object.isFrozen(v)) {
    Object.freeze(v);
    for (const key of Object.keys(v)) {
      deepFreeze(v[key]);
    }
  }
  return v;
}

export class QuirkInterner {
  private pool = new Map<string, any>();

  intern(quirk: any): any {
    if (quirk === null || quirk === undefined || typeof quirk !== 'object') {
      return quirk;
    }
    if (Array.isArray(quirk.cols)) {
      quirk.cols = quirk.cols.map((c: any) => this.share(c));
    }
    if (Array.isArray(quirk.gates)) {
      quirk.gates = quirk.gates.map((g: any) => this.share(g));
    }
    if (quirk.init !== undefined) {
      quirk.init = this.share(quirk.init);
    }
    return quirk;
  }

  private share(v: any): any {
    if (v === null || typeof v !== 'object') {
      return v;
    }
    const key = JSON.stringify(v);
    const existing = this.pool.get(key);
    if (existing !== undefined) {
      return existing;
    }
    deepFreeze(v);
    this.pool.set(key, v);
    return v;
  }

  clear(): void {
    this.pool.clear();
  }
}
