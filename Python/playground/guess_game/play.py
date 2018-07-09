import random
import os
import sys
import time

print(" ")
print("******************************************************************************")
print("************************** Welcome to Guess game!!! **************************")
print("*************** Machine will guess a number and you'll find it. **************")
print("****************** You will input the length of the number. ******************")
print("************* I.E 3 will generate any number between 100 to 999. *************")
print("****** Machine will show you way to find the number based on your guess. *****")
print("****************** Anytime you can press Q to Quit the game. *****************")
print("********************************** Good Luck *********************************")
print("******************************************************************************")
print(" ")
print(" ")
time.sleep(3)

short_messages = [
	'Are you suffering from low balance problem? :D',
	'Oh man! Group up',
	'You should insert bigger number'
]

long_messages = [
	'Clam down',
	'Are you mad? :P',
	'Little lower please'
]

user_intension = input("Enter S to Start the game: ")
print(" ")

if(user_intension not in ['S', 's']):
	sys.exit("Are you afraid?")

rand = str(random.random())
rand = rand.replace('.', '')

digit_limit = input("Please enter length of the number to guess (I.E 2/3/4).\n3 will generate a 3 digit number. I.E 213\nMax length is {}: ".format(len(rand)))
print("Specify level of the game. 1 is easiest and {} is the hardest.".format(len(rand)))

try:
	digit_limit = int(digit_limit)
except Exception as e:
	sys.exit("Your input \"{}\" is invalid. Try again.".format(digit_limit))

if(digit_limit < 1):
	sys.exit("This game is not for stupid")

print("Generating number .......")
time.sleep(3)
rand = str(int(rand))
number_guessed = rand[:digit_limit]
length_of_gussed_num = len(number_guessed)
number_guessed = int(number_guessed)
print("Number generation is completed")
time.sleep(2)
print("The number is {}. Lol find it!\n".format('X'*length_of_gussed_num))
time.sleep(2)

play = True
total_try = 0

def quit_check(user_guess):
	return len(user_guess) == 1 and (user_guess in ['q', 'Q'])

def clear_command(user_guess):
	return 	user_guess == 'c'

def clear_console():
	os.system("clear")


while(play):

	user_guess = input("Please enter your {} digit guess: ".format(digit_limit))
	print(" ")
	total_try += 1

	if(quit_check(user_guess)):
		print("Bye Bye...")
		break

	if(clear_command(user_guess)):
		clear_console()
		continue

	try:
		user_guess = int(user_guess)
	except Exception as e:
		print("Your input {} is invalid. Try again.".format(user_guess))
		continue

	if(len(str(user_guess)) != digit_limit):
		add_instead_of_s = ''
		if(len(str(user_guess)) > 1):
			add_instead_of_s = 's'

		print("Your input {} is {} digit{}. Please enter {} digits only.".format(user_guess, len(str(user_guess)), add_instead_of_s, digit_limit))
		continue

	if(user_guess < number_guessed):
		print("{}. Too short.\n".format(random.choice(short_messages)))
	elif(user_guess > number_guessed):
		print("{}. Too long.\n".format(random.choice(long_messages)))
	else:
		print("You perfect!!! Congratulations. You needed {} entry to find the number.".format(total_try))
		play = False
