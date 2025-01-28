class solution:
    def romanToInteger(self, s: str) -> int:
        romanToInt = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        total = 0
        valor_previo = 0

        for char in reversed(s):
            valor_actual = romanToInt[char]

            if valor_actual < valor_previo:
                total -= valor_actual
            else:
                total += valor_actual
            
            valor_previo = valor_actual
        return total