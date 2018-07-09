def shortThisList(theList):
    for i in range(1, len(theList)+1):
        print(i)
            
    return theList
    
unsortedList = [9,5,7,8,6,4,1,2,3,0]
sortedList = shortThisList(unsortedList)
print(sortedList)
