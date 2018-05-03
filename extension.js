
const { window, commands, workspace } = require('vscode');
const { countWords, getTimingStrings, SpeedNames } = require('./calculator'); 

function activate(context) {
    console.log('speech-timer activated.');

    let disposable = commands.registerCommand('extension.speechTimeEstimator', speechTimeEstimator);

    context.subscriptions.push(disposable);
}

exports.activate = activate;

function speechTimeEstimator() {

    const editor = window.activeTextEditor;
    if (!editor) { return; }

    const configuredSpeeds = workspace.getConfiguration('speechTimer.wpm');
    
    const selection = editor.selection;
    
    const selectionText = editor.document.getText(selection);
    
    const allText = editor.document.getText();

    const sourceText = selectionText || allText;
    
    const source = sourceText == selectionText ? 'Selected Text' : 'Whole File';
    
    const wordCount = countWords(sourceText);
    
    const estimates = getTimingStrings(wordCount, configuredSpeeds);

    window.showInformationMessage(`${source}: ${wordCount} words spoken @ ${SpeedNames.map(s=> configuredSpeeds[s]).join('|')} wpm`, estimates[0], estimates[1], estimates[2]);
};


// this method is called when your extension is deactivated
function deactivate() {
}

exports.deactivate = deactivate;
