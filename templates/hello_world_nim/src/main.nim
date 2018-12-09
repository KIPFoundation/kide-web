import unittest
import pkg/leypa
proc main() {.exportwasm.} =
    test "correct welcome" : check getWelcomeMessage() == "Hello, World!"
