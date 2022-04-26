# owner: Andrés Castro

# here are the examples that were provided for testing
input1 = [1, 2, 6, 3]
input2 = [2, 1, 2, 1, 3, 2]
input3 = [2, 2, 2, 2, 2, 2, 2, 6, 10, 3, 1, 5, 2, 5, 3, 1, 3, 14]

# Additional test case
input4 = [1, 2, 3, 3, 1, 1, 2, 3, 5, 3]
input5 = [7]


#This function allow us to sum all the numbers within the list that the user provides
#in this case all the numbers of the test inputs

def sumAll(input):
    sum = 0
    for i in input:
        sum += i
    return sum

# to solve the problem I propose that in an n positions array that also has all the problem
# specifications which are "the array would on the left and right always sum the same."
# to make a sum of all the numbers within the array, then divide it by two
# (Storing this sum in the variable limit)

# input is the main array that will be run by the algorithm
def fIndex(input):
    limit = (sumAll(input)/2)
    #print (limit)
    i = 0
    a = input[i]
    next=a

    # then go through the array adding up all the numbers one by one until we surpass
    # the "limit" variable with a while loop.
    while a <= limit:
        next = input[i+1]
        a = a+next
        i = i+1

    # after running the algorithm we end with the position of "the middle" number stored in "i"
    # here we print the input array and the result
    i = i+1
    print(input)
    print("the index is", i, ",and is the number", next)


fIndex(input1)
fIndex(input2)
fIndex(input3)
fIndex(input4)
fIndex(input5)

#TODO Hacer una matriz con todas las entradas para que el programa las ejecute en
#orden y de todas las respuestas con un solo click

#TODO IDEA, hacer que el usuario pueda agregar n cantidad de datos a un arreglo y que un 
#algoritmo los organice de mayor a menor
# de ser posible, dandole el mínimo y máximo index posible. De ser un arreglo de datos que
# no tenga ese punto medio deberá informarle qué dato debe agregar para poder tener un punto medio