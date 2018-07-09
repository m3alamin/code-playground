def sortThisList(unsortedList):
    swapHappened = True

    while swapHappened:
        swapHappened = False
        
        for num in enumerate(unsortedList):
            
            if num[0] + 1 < len(unsortedList):
                currentNum = num[1]
                nextNum = unsortedList[num[0] + 1]
                
                if currentNum > nextNum:
                    unsortedList[num[0]] = nextNum
                    unsortedList[num[0]+1] = currentNum
                    swapHappened = True
                    
    return unsortedList
        
    
    
unsortedList = [8,4,6,9,1,4,5,6,7, 0];
sortedList = sortThisList(unsortedList)    
print("Sorted: {sorted} and Unsorted: {unsorted}". format(sorted=sortedList, unsorted=unsortedList))
