import mutagen
import os
from mutagen.easyid3 import EasyID3
# vars
ospath = os.getcwd() + ('\\')

# crawl
file_list = []
for dirpath, dirnames, filename in os.walk(ospath):
    for filename in filename:
        file_list.append(os.path.join(dirpath, filename))


for song in file_list:
    if song[-3:] == 'mp3':
        song_file = song.split('\\')[-1]
        song_artist = song_file.split('-')[0].lstrip().rstrip()
        song_title = song_file.split('-')[1].lstrip().rstrip()[:-4]
        try:
            tag = EasyID3(song)
        except:
            tag = mutagen.File((song), easy=True)
            tag.add_tags()
        
        tag['artist'] = song_artist
        tag['title'] = song_title
        tag.save()

    # error handle
    else:
        break

# logic
song_path = ospath + 'song.mp3'
try:
    tag = EasyID3(song_path)
except:
    tag = mutagen.File((song_path + 'song.mp3'), easy=True)
    tag.add_tags()

tag['artist'] = 'hhhhhhhhh'
tag['title'] = 'asdg'

tag.save(v2_version=3)
