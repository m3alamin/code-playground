import os, time

backup_dir = './backup/'
source_dir = './source/'
file_name = '{}.zip'.format(time.strftime("%Y-%m-%d-%H%M%S"))

zip_command= 'zip -r {}{} {}'.format(backup_dir, file_name, source_dir)

os.system(zip_command)
os.system("ls {} -al".format(backup_dir))