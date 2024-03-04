const vscode = require('vscode');
const path = require('path');

function getRepoName() {
    const workspaceFolder = vscode.workspace.workspaceFolders[0];
    if (workspaceFolder) {
        const workspacePath = workspaceFolder.uri.fsPath;
        const repoName = path.basename(workspacePath);
        return repoName;
    }
    return null;
}

const repoName = getRepoName();
if (repoName) {
    console.log(`Current repository name: ${repoName}`);
} else {
    console.log('Not inside a workspace.');
}
