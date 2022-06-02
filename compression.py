# ======Un Compression=======
#  2c301l => ccoool
#       in this function we want to decode the first string 
#       and return one that has the same amount of letters corresponding
#       to the number prior to the letter.
#       ----------
#       pseudo code
#       1.  we need to pointers here, one will iterate through the string 
#           the second will then move upto but not include the first pointer 
#               i =0
#               j=0
#       2.  we need an empty string to push our reslts into     
#               result = ''


s= "3o1p3s"

def uncompress (s):
    #  push the results into the variable result
    result=""
    numbers="0123456789"
    #  top pointer
    i=0
    #second pointer
    j=0

    #  iterate through s 
    while j< len(s):
        # we ant j to move along the string as long as there is not a letter, once j hits a 
        #letter j is expected to stop

        #  how can j tell wether something is a letter versus a number
        #  we can declare a variable at the top of our function that will let j 
        #  know what to look for 
        if s[j] in numbers:
            #  if s[j] is withing numbers then increment j
            #  remeber we only want j to stop till it reaches something 
            # in s that is not in the variable numbers.
            j+= 1
        else:
            # if it is not the case that j is in numbers then 
            #  we want to bring our second pointer (i) to j 
            #  and return values from i to j by slicing the string
            # add int infront of slice, seeing as we're iterating through a 
            #  string we want to return a number or int not a string value

            num= int(s[i:j])
            #  at this point our j is pointing to a letter and we want to multiply that letter
            #  by the amount that precedes it and push it intou or empty string 
            result += s[j] * num
            #  move j along and bring i up to j
            j += 1
            i = j

        return result

print("hello")


