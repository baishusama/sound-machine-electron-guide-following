'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;// = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
    // TODO: Unknown Error
    // mainWindow.loadURL(url.format({
    //     pathname: path.join(__dirname, 'app/index.html'),
    //     protocal: 'file:',
    //     slashes: true
    // }));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);