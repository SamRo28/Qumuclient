package edu.uclm.qumugen.http;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.services.MutantService;
import edu.uclm.qumugen.services.QiskitService;
import edu.uclm.qumugen.services.UnexService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class GenControllerTest {

    @Mock
    private MutantService mutantService;

    @Mock
    private UnexService unexService;

    @Mock
    private QiskitService qiskitService;

    @InjectMocks
    private GenController genController;

    @Test
    void testGenerateQuirkMutants() {
        Map<String, Object> info = new HashMap<>();
        Map<String, Object> circuit = new HashMap<>();
        info.put("circuit", circuit);
        info.put("operatorNames", new ArrayList<String>());
        info.put("mutableColumns", "0,1");
        info.put("mutableRows", "0,1");
        info.put("generateWithAllInputs", false);
        info.put("inputQubits", "2");

        List<Circuit> expectedMutants = new ArrayList<>();
        when(mutantService.generateQuirkMutants(any(), any(), anyString(), anyString(), anyBoolean(), anyString())).thenReturn(expectedMutants);

        List<Circuit> result = genController.generateQuirkMutants(info);
        assertEquals(expectedMutants, result);
    }

    @Test
    void testGetQiskitCode() {
        Map<String, Object> info = new HashMap<>();
        Map<String, Object> qCircuit = new HashMap<>();
        qCircuit.put("quirkCode", new HashMap<String, Object>());
        info.put("qCircuit", qCircuit);
        info.put("qubits", 2);

        Map<String, Object> expectedCode = new HashMap<>();
        when(qiskitService.getCode(any(), any(), anyInt())).thenReturn(expectedCode);

        Map<String, Object> result = genController.getQiskitCode(false, 100, "template.txt", info);
        assertEquals(expectedCode, result);
    }

    @Test
    void testGetMultipleQiskitCode() {
        Map<String, Object> info = new HashMap<>();
        List<Map<String, Object>> mutants = new ArrayList<>();
        Map<String, Object> mutant = new HashMap<>();
        Map<String, Object> circuit = new HashMap<>();
        circuit.put("quirkCode", new HashMap<String, Object>());
        circuit.put("qubits", 2);
        mutant.put("circuit", circuit);
        mutant.put("mutantIndex", 1);
        mutants.add(mutant);
        info.put("mutants", mutants);
        
        Map<String, Object> expectedCode = new HashMap<>();
        when(qiskitService.getCode(any(), any(), anyInt())).thenReturn(expectedCode);
        
        assertDoesNotThrow(() -> {
            genController.getMultipleQiskitCode(100, "template.txt", info);
        });
    }

    @Test
    void testGetOperatorsAndGates() {
        assertDoesNotThrow(() -> {
            genController.getOperators("someFamily");
            genController.getOperatorsByFamily();
            genController.getGates();
        });
    }

    @Test
    void testUnexEndpoints() {
        Map<String, Object> data = new HashMap<>();
        assertDoesNotThrow(() -> {
            genController.buildUnexCurls(data);
            genController.sendToUnex(data);
        });
    }
}
