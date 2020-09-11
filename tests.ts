import Mocha from 'mocha';
import tests from './tests/subtests';
import path from 'path';

const config = () => {
    const testDirectory = './tests';
	const mocha = new Mocha({
		ui: 'bdd',
		reporter: 'spec',
		timeout: 5000,
		bail: true
    });
    tests.forEach(test => {
        mocha.addFile(path.join(testDirectory, test));
    });
    mocha.run(failure => {
        process.on('exit', () => {
            process.exit(failure);
        });
    });
};

config();
