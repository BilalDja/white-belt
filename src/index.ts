import express from 'express';

const main = async () => {
	const app = express();
	app.get('/', (_, res) => {
		res.send('<h1>Hello, 🥋!</h1>');
    });
    console.log({PORT: process.env.PORT});
    
	app.listen(process.env.PORT, () => {
		app.emit('started');
		console.log(`Server running on http://127.0.0.1/${process.env.PORT}`);
	});
};

main();
