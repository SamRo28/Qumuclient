import { Project } from '../model/Project';
import { MutantCycle } from '../model/MutantCycle';
import { Mutant } from '../model/Mutant';
import { QProgram } from '../model/QProgram';
import { QCircuit } from '../model/QCircuit';
import { ExecConfiguration } from '../model/ExecConfiguration';
import { ProjectNote } from '../model/ProjectNote';
import { TestSuite } from '../model/TestSuite';
import { Deterministic } from '../model/Deterministic';
import { Stochastic } from '../model/Stochastic';

export function programFromDto(p: any): QProgram {
  if (!p) return new QProgram();
  const qProgram = new QProgram();
  Object.assign(qProgram, p);

  if (p.qCircuit) {
    let quirkCode = p.qCircuit.quirkCode;
    if (typeof quirkCode === 'string') {
      try {
        quirkCode = JSON.parse(quirkCode);
      } catch (e) {
        // conservar como string si falla el parseo
      }
    }
    const qCircuit = new QCircuit(p.qCircuit.id, quirkCode);
    if (p.qCircuit.mutableColumns !== undefined && p.qCircuit.mutableColumns !== null) {
      qCircuit.mutableColumns = p.qCircuit.mutableColumns;
    }
    if (p.qCircuit.mutableRows !== undefined && p.qCircuit.mutableRows !== null) {
      qCircuit.mutableRows = p.qCircuit.mutableRows;
    }
    qProgram.qCircuit = qCircuit;
  }
  return qProgram;
}

export function mutantFromMatrixDto(m: any): Mutant {
  const mutant = new Mutant();
  mutant.id = m.id !== undefined && m.id !== null ? String(m.id) : undefined;
  mutant.mutantIndex = m.mutantIndex;
  mutant.mutatedColumn = m.mutatedColumn;
  mutant.mutatedRow = m.mutatedRow;
  mutant.oracleName = m.oracleName;
  mutant.mutationDetail = m.mutationDetail;
  mutant.mutantResults = m.mutantResults ? [...m.mutantResults] : [];
  if (m.operator?.name) {
    mutant.operator.name = m.operator.name;
    mutant.mutationOperator = m.operator.name;
  }
  return mutant;
}

export function applyCycleMatrix(cycle: MutantCycle, dto: any): void {
  cycle.execConfiguration = new ExecConfiguration(dto.execConfiguration);
  cycle.mutants = (dto.mutants || []).map(mutantFromMatrixDto);
  cycle.mutantsCount = cycle.mutants.length;
  cycle.matrixLoaded = true;
}

export function projectFromLight(dto: any): Project {
  const project = new Project(undefined, undefined, undefined, undefined, true);
  project.id = dto.id;
  project.name = dto.name;

  if (dto.qProgram) {
    project.qProgram = programFromDto(dto.qProgram);
  }

  project.mutantCycles = (dto.mutantCycles || []).map((cycleData: any) => {
    const mutantCycle = new MutantCycle();
    mutantCycle.id = cycleData.id;
    mutantCycle.name = cycleData.name || ('Mutant Cycle ' + cycleData.id);
    mutantCycle.date = cycleData.date;
    mutantCycle.execConfiguration = new ExecConfiguration(cycleData.execConfiguration);
    mutantCycle.mutantsCount = cycleData.mutantsCount !== undefined ? cycleData.mutantsCount : 0;
    mutantCycle.mutants = [];
    mutantCycle.matrixLoaded = false;
    return mutantCycle;
  });

  if (dto.projectNotes) {
    project.projectNotes = dto.projectNotes.map((noteData: any) => new ProjectNote(
      noteData.title,
      noteData.text,
      noteData.type,
      noteData.id,
      new Date(noteData.timestamp)
    ));
  }

  if (dto.testSuites) {
    project.testSuites = dto.testSuites.map((testSuiteData: any) => {
      const testSuite = new TestSuite();
      testSuite.id = testSuiteData.id;
      testSuite.error_range = testSuiteData.error_range;

      testSuite.testCases = (testSuiteData.testCases || []).map((testCaseData: any) => {
        let testCase: any = null;
        if (testCaseData.type === 'DETERMINISTIC') {
          testCase = new Deterministic();
          testCase.entryValues = testCaseData.entryValues;
          testCase.expectedValues = testCaseData.expectedValues;
        } else if (testCaseData.type === 'STOCHASTIC') {
          testCase = new Stochastic();
          testCase.probabilityDistribution = testCaseData.probabilityDistribution;
        }

        if (testCase) {
          testCase.id = testCaseData.id;
          testCase.entryIndexes = testCaseData.entryIndexes;
          testCase.outputIndexes = testCaseData.outputIndexes;
        }
        return testCase;
      }).filter((tc: any) => tc !== null);

      return testSuite;
    });
  }

  project.markAsSaved();
  return project;
}

export function mergeSidebarMutants(lightProject: Project, sidebarProject: Project | undefined): Project {
  if (!sidebarProject || !sidebarProject.mutantCycles) {
    return lightProject;
  }
  const sidebarCyclesMap = new Map<number, MutantCycle>();
  for (const sc of sidebarProject.mutantCycles) {
    sidebarCyclesMap.set(sc.id, sc);
  }

  for (const lc of lightProject.mutantCycles) {
    if ((!lc.mutants || lc.mutants.length === 0) && sidebarCyclesMap.has(lc.id)) {
      const sc = sidebarCyclesMap.get(lc.id)!;
      if (sc.mutants && sc.mutants.length > 0) {
        lc.mutants = sc.mutants.map(m => {
          const summaryMutant = new Mutant();
          summaryMutant.id = m.id;
          summaryMutant.mutantIndex = m.mutantIndex;
          summaryMutant.mutatedColumn = m.mutatedColumn;
          summaryMutant.mutatedRow = m.mutatedRow;
          summaryMutant.oracleName = m.oracleName;
          summaryMutant.mutationDetail = m.mutationDetail;
          summaryMutant.mutationOperator = m.mutationOperator;
          if (m.operator) {
            summaryMutant.operator.name = m.operator.name;
          }
          return summaryMutant;
        });
        lc.matrixLoaded = false;
        if (lc.mutantsCount === undefined || lc.mutantsCount === 0) {
          lc.mutantsCount = lc.mutants.length;
        }
      }
    }
  }
  return lightProject;
}
