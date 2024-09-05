def is_fibonacci(n):
    # Inicia os primeiros números da sequência
    a, b = 0, 1
    # Verifica se o número pertence à sequência
    while b <= n:
        if b == n:
            return True
        a, b = b, a + b
    return n == 0  # Caso especial para 0, que pertence à sequência

# Solicita ao usuário um número e verifica se ele pertence à sequência
numero = int(input("Informe um número: "))
if is_fibonacci(numero):
    print(f"O número {numero} pertence à sequência de Fibonacci.")
else:
    print(f"O número {numero} não pertence à sequência de Fibonacci.")