// Generates the core site files needed for any website
var files = require('fs');

// generate base html file
files.writeFile(__dirname + '/index.html', '<h1>HTML rocks<h1>');

// generate gitignore file with most common files to ignore
files.writeFile(__dirname +'/.gitignore', 
'# Numerous always-ignore extensions\n*.diff\n*.e\n*.orig\n*.log\n*.rej\n*.swo\n*.swp\n*.vi\n*~\n*.sass-cache\nnode_modules/\n.tmp/\n\n# OS or Editor folders\n.DS_Store\nThumbs.db\n.cache\n.project\n.settings\n.tmproj\n*.esproj\nnbproject\n*.sublime-project\n*.sublime-workspace\n*.komodoproject\n.komodotools\n_notes\ndwsync.xml');

// generate README.md file
files.writeFile(__dirname + '/README.md', '## Project Template\n### Define the project below');

// builds the core app folder to work out of
function buildAppFolder() {
	files.mkdirSync(__dirname + '/app');
	// calls function that builds first level of folders down from /app
	buildAssetFolder(); 
}

// builds assets folder down from app
function buildAssetFolder() {
	files.mkdirSync(__dirname + '/app/assets');
	// calls the function that builds the sub folders of app/assets/
	buildAssetSubs();
}

// builds the sub folders of app/assets/
function buildAssetSubs() {
	files.mkdirSync(__dirname + '/app/assets/js');
	files.mkdirSync(__dirname + '/app/assets/styles');	
	files.mkdirSync(__dirname + '/app/assets/images');
	// calls function that will build the module folders for app/assets/styles & app/assets/js
	buildModuleFolders();
}

function buildModuleFolders() {
	files.mkdirSync(__dirname + '/app/assets/js/modules');
	files.mkdirSync(__dirname + '/app/assets/styles/base')
	files.mkdirSync(__dirname + '/app/assets/styles/modules');
	// calls the function that will build the actual css and js files
	buildScriptFiles();
}

function buildScriptFiles() {
	files.writeFile(__dirname + '/app/assets/styles/styles.css');
	files.writeFile(__dirname + '/app/assets/js/App.js');
}

buildAppFolder();