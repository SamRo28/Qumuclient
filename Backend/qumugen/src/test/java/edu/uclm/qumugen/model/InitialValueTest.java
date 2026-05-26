package edu.uclm.qumugen.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class InitialValueTest {

    @Test
    void testParseAndGetValue() {
        assertEquals(InitialValue.ZERO, InitialValue.parse("0"));
        assertEquals(0, InitialValue.ZERO.getValue());

        assertEquals(InitialValue.ONE, InitialValue.parse("1"));
        assertEquals(1, InitialValue.ONE.getValue());

        assertEquals(InitialValue.POS_I, InitialValue.parse("i"));
        assertEquals("i", InitialValue.POS_I.getValue());

        assertEquals(InitialValue.NEG_I, InitialValue.parse("-i"));
        assertEquals("-i", InitialValue.NEG_I.getValue());

        assertEquals(InitialValue.PLUS, InitialValue.parse("+"));
        assertEquals("+", InitialValue.PLUS.getValue());

        assertEquals(InitialValue.MINUS, InitialValue.parse("-"));
        assertEquals("-", InitialValue.MINUS.getValue());
    }
}
