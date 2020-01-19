const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 680
    });

    mainWindow.loadURL('http://localhost:3000');
    // mainWindow.loadURL(`file://${__dirname}/build/index.html`);
})