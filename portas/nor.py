def porta_nor():
    while True:
        a = input("Se A for 1 ou 0, digite este número: ")
        b = input("Se B for 1 ou 0, digite este número: ")
        a1 = True
        a0 = False
        b1 = True
        b0 = False

        if a == "0" and b == "0":
            print(not (a0 or b0), "=1")

        if a == "0" and b == "1":
            print(not (a0 or b1), "=0")

        if a == "1" and b == "0":
            print(not (a1 or b0), "=0")

        if a == "1" and b == "1":
            print(not (a1 or b1), "=0")
porta_nor()