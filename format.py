filename = 'CSE3120.md'

contents = ''

for line in open(filename, 'r'):
    try:
        if line[1] == '.' and line[2] != ' ':
            if line[3] == '.':
                contents = contents + '        ' +  line
            else:
                contents = contents + '    ' +  line
        else:
            contents = contents + line
        contents = contents + '\n'
    except:
        contents = contents + line

with open(filename, 'w') as f:
    f.write(contents)

print('done')