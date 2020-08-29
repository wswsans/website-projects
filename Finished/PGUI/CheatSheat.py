import pyautogui; pgui = pyautogui
from time import sleep

pgui.click(x=760, y=210) #(x=840, y=210)

### Stage1 ###
x = [490, 165, 775, 757, 894, 331, 119, 607, 942, 210, 427, 498, 749, 249, 217, 274, 497, 526, 529, 700]
y = [475, 458, 241, 308, 413, 51, 90, 492, 27, 366, 415, 432, 406, 153, 104, 443, 352, 33, 483, 146]
sleep(1)
pgui.press('enter')
sleep(1.9)
for n in range(20):
	pgui.click(x=x[n], y=y[n]+135)
	# sleep(100)

sleep(1)
pgui.press('enter')
sleep(1.89)
pgui.typewrite('k0onoku9s8tta7regascp-8900-ex')
# for n in ['K', '0', 'o', 'n', 'o', 'k', 'U', '9', 'S', '8', 'o', 't', 't', 'A', '7', 'r', 'e', 'g', 'a', 'S', 'C', 'P', '-', '8', '9', '0', '0', '-', 'E', 'X']:
# 	pgui.press(n)

input('END\nEnter:')