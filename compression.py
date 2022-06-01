# # decompress a string 
# #  will need to utilize a loop and two pointers 

# a= "2c3a2t" # ccaaatt
# b= "1c2o1l" # cool
# c= "1h1e2l1o" #hello

# def decomp (a):
#     numbers='0123456789'
#     result= ""
#     i=0
#     j=0
#     while j <len(a):
#         if a[j] in numbers:
#             #  need to handle where the case is a number 
#             j+=1
#         else:
#             # if the character is a number 
#             nums = int(a[i:j]) # starting at index i and upto but not including j
#             result += s[j] * num 
#             j +=1 
#             i= j
    
#  -------compress a string --------
#  caatsss => c2at3s
# use 2 pointers i and j 
#  i start of streak
#  j end  of streak 
# to get the count  subtract j from i 

str= "coolllorrs"
def encoded(str):
    result = ""
    i=0 # top pointer
    j=0 # bottom pointer 
    while j < len(str):
        #  check for consecutive streak
        if str[i] == str[j]: # if i and j are equal to eachother  then the streak is over
            j+1 
        else: # do this when there is a new streak 
            num = j-i
            result += str(num) +str[i]













