const electron = require('electron')
const url = require('url')
const path = require('path')

// vars
let __views__ = path.join(__dirname, 'resources/views');
const { app, BrowserWindow, Menu } = electron;
let mainWindow;
let urlPickerWindow;


// * Create app
app.on('ready', function () {
    //create new window
    mainWindow = new BrowserWindow({});

    // Load Html
    mainWindow.loadURL(url.format({
        pathname: path.join(__views__, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    // Make menu
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    // Insert menu into window
    Menu.setApplicationMenu(mainMenu);
});

function openUrlPicker(){
    //create new window
    urlPickerWindow = new BrowserWindow({
        width: 300,
        height: 100,
        title: 'address picker'
    });

    // Load Html
    urlPickerWindow.loadURL(url.format({
        pathname: path.join(__views__, 'urlPicker.html'),
        protocol: 'file',
        slashes: true
    }));
};


const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add an address',
                click(){
                    openUrlPicker();
                }
            },
            {
                label: 'Quit',
                accelerator: 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
]
