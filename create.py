courses = {'cs':'Computing Science', 'r':'Robotics', 'it':'Computer Works'}

import io
for key, value in courses.items():
    for level in ['10','20','30']:
        filename = key+level+'.md'
        title = '# ' + value + ' ' + level
        print(filename, title)
        with io.open(filename, 'a', encoding='utf-8') as f:
            f.write(title + '\n')
            f.close()