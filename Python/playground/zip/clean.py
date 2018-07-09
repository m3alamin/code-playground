import os

remove_dir = './backup/*';

remove_copmmand = 'rm -r {}'.format(remove_dir)

os.system(remove_copmmand)

print("Removed")