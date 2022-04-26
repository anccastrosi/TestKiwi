from flask import Flask, request, jsonify
import json

app = Flask(__name__)

if __name__ == "__main__":
    app. run(debug=True)


#Function that sums all the items in the list
def sumAll(input):
    sum = 0
    for i in input:
        sum += i
    return sum

#Algorithm to solve "middle number" problem
def fIndex(input):

    limit = (sumAll(input)/2)
    print(limit)
    i = 0
    a = input[i]
    next = a
    while a <= limit:
        next = input[i+1]
        a = a+next
        i = i+1

    i = i+1
    a = "the index is " + str(i) +" and the number is " + str(next)

    return {"output": [a]}



# backend API Route, "http://localhost:5000/back"
@app. route("/back", methods=["POST"])
def calc():
    
    #exctracts the information from the connection through request method which is in json format
    listStr=request.json["data"]
    
    #converts it to a string list ["1","2","3",..."n"] 
    li= list (listStr.split(","))
    
    # converts all the string list into int list 
    for i in range(0, len(li)):
        li[i] = int(li[i])
    
    #prints for testing purpose
    #print(li)
    #print(fIndex(li))

    #returns the final answer from the function that executes the algorithm
    return fIndex(li)

