import shell from 'shelljs';

shell.cp('-R', 'src/views', 'dist/src/views');
shell.cp('-R', 'public', 'dist/public');
