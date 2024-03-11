const {app, BrowserWindow, globalShortcut } = require('electron')
    const url = require("url");
    const path = require("path");

    let mainWindow

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600, 
        autoHideMenuBar: true,
        titleBarStyle: 'hidden',       
        webPreferences: {
          nodeIntegration: true
        }
      })

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `index.html`),
          protocol: "file:",
          slashes: true
        })
      );
      // Open the DevTools.
    //  mainWindow.webContents.openDevTools()
    mainWindow.on('close', (event) => {
      event.preventDefault();
    });
      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }

    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })
//    app.whenReady()
//    .then(() => {
//      globalShortcut.register('Alt+CommandOrControl+I', () => {
 //       console.log('Electron loves global shortcuts!')
 //     })
//      globalShortcut.register('Alt+F4', () => {
//  console.log("F5 is pressed: Shortcut Disabled");
//});
 //   })
  //  .then(createWindow)
 
    
    