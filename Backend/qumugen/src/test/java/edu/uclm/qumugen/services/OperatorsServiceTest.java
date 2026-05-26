package edu.uclm.qumugen.services;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.qumugen.model.Gate;
import edu.uclm.qumugen.operators.Operator;

import static org.junit.jupiter.api.Assertions.*;

class OperatorsServiceTest {

    @BeforeAll
    static void setUp() throws Exception {
        Gate.loadGates(new OperatorsServiceTest());
        Operator.loadOperators(new OperatorsServiceTest());
    }

    @Test
    void testFindOperator() {
        OperatorsService service = new OperatorsService();

        // Valid operator existing in JSON
        Operator op1 = service.find("MoveGateDownAll");
        assertNotNull(op1);
        assertEquals("MoveGateDownAll", op1.getName());

        // Implicit SwapGates operator (contains '_')
        Operator op2 = service.find("X_Y");
        assertNotNull(op2);
        assertEquals("X_Y", op2.getName());

        // Invalid operator
        assertThrows(ResponseStatusException.class, () -> {
            service.find("InvalidOperatorName");
        });
    }
}
