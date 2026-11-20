import {
  projectFromLight,
  applyCycleMatrix,
  mutantFromMatrixDto,
  mergeSidebarMutants
} from './lazy-project.utils';
import { MutantCycle } from '../model/MutantCycle';
import { Project } from '../model/Project';
import { Mutant } from '../model/Mutant';
import { Result } from '../model/MutantResult';

describe('lazy-project.utils', () => {

  it('projectFromLight con 2 ciclos debe tener mutants.length === 0, matrixLoaded === false, mutantsCount correcto y qProgram.qCircuit.quirkCode como objeto', () => {
    const quirkObj = { cols: [['H']] };
    const dto = {
      id: 'proj-1',
      name: 'Project 1',
      qProgram: {
        id: 'prog-1',
        qubits: 1,
        shots: 1024,
        inputQubits: [0],
        outputQubits: [0],
        qCircuit: {
          id: 'circ-1',
          quirkCode: quirkObj,
          mutableColumns: '0',
          mutableRows: '0'
        }
      },
      mutantCycles: [
        { id: 1, name: 'Cycle 1', mutantsCount: 5, execConfiguration: {} },
        { id: 2, name: 'Cycle 2', mutantsCount: 0, execConfiguration: {} }
      ],
      projectNotes: [],
      testSuites: []
    };

    const project = projectFromLight(dto);

    expect(project.id).toBe('proj-1');
    expect(project.name).toBe('Project 1');
    expect(project.saved).toBeTrue();
    expect(project.mutantCycles.length).toBe(2);

    expect(project.mutantCycles[0].mutants.length).toBe(0);
    expect(project.mutantCycles[0].matrixLoaded).toBeFalse();
    expect(project.mutantCycles[0].mutantsCount).toBe(5);

    expect(project.mutantCycles[1].mutants.length).toBe(0);
    expect(project.mutantCycles[1].matrixLoaded).toBeFalse();
    expect(project.mutantCycles[1].mutantsCount).toBe(0);

    expect(project.qProgram.qCircuit.quirkCode).toEqual(quirkObj);
  });

  it('applyCycleMatrix debe añadir mutantes con mutantResults y mutationOperator, y matrixLoaded === true', () => {
    const cycle = new MutantCycle();
    cycle.id = 1;
    cycle.name = 'Cycle 1';

    const matrixDto = {
      id: 1,
      name: 'Cycle 1',
      execConfiguration: { machine: 'ibmq_qasm_simulator' },
      mutants: [
        {
          id: 10,
          mutantIndex: 0,
          mutatedColumn: 1,
          mutatedRow: 0,
          operator: { name: 'GateReplacement' },
          oracleName: 'oracle1',
          mutationDetail: 'H->X',
          mutantResults: [{ id: 1, result: 'Killed' }]
        }
      ]
    };

    applyCycleMatrix(cycle, matrixDto);

    expect(cycle.matrixLoaded).toBeTrue();
    expect(cycle.mutantsCount).toBe(1);
    expect(cycle.mutants.length).toBe(1);

    const m = cycle.mutants[0];
    expect(m.id).toBe('10');
    expect(m.mutantIndex).toBe(0);
    expect(m.mutationOperator).toBe('GateReplacement');
    expect(m.operator.name).toBe('GateReplacement');
    expect(m.mutantResults.length).toBe(1);
    expect(m.mutantResults[0].result).toBe(Result.KILLED);
    expect(m.circuit).toBeUndefined();
  });

  it('mutantFromMatrixDto sin operador debe dejar mutationOperator indefinido sin fallar', () => {
    const dto = {
      id: 20,
      mutantIndex: 1,
      mutatedColumn: 0,
      mutatedRow: 1,
      oracleName: 'oracle2',
      mutationDetail: 'detail2',
      mutantResults: []
    };

    const mutant = mutantFromMatrixDto(dto);

    expect(mutant.id).toBe('20');
    expect(mutant.mutantIndex).toBe(1);
    expect(mutant.mutationOperator).toBeUndefined();
    expect(mutant.mutantResults).toEqual([]);
  });

  it('mergeSidebarMutants debe conservar los mutantes resumidos', () => {
    const lightProject = new Project('p1', 'Project 1');
    const lightCycle = new MutantCycle();
    lightCycle.id = 1;
    lightCycle.mutants = [];
    lightCycle.matrixLoaded = false;
    lightProject.mutantCycles = [lightCycle];

    const sidebarProject = new Project('p1', 'Project 1');
    const sidebarCycle = new MutantCycle();
    sidebarCycle.id = 1;
    const summaryMutant = new Mutant(0, 1, 0, 'GateReplacement');
    sidebarCycle.mutants = [summaryMutant];
    sidebarProject.mutantCycles = [sidebarCycle];

    const merged = mergeSidebarMutants(lightProject, sidebarProject);

    expect(merged.mutantCycles[0].mutants.length).toBe(1);
    expect(merged.mutantCycles[0].mutants[0].mutantIndex).toBe(0);
    expect(merged.mutantCycles[0].mutants[0].mutationOperator).toBe('GateReplacement');
    expect(merged.mutantCycles[0].matrixLoaded).toBeFalse();
  });

});
