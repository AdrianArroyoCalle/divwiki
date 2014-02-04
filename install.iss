; Script generated by the Inno Setup Script Wizard.
; SEE THE DOCUMENTATION FOR DETAILS ON CREATING INNO SETUP SCRIPT FILES!

[Setup]
AppName=DivWiki
AppVerName=DivWiki 0.1
AppPublisher=Adrián Arroyo Calle
AppPublisherURL=http://github.com/AdrianArroyoCalle/divwiki
AppSupportURL=http://github.com/AdrianArroyoCalle/divwiki
AppUpdatesURL=http://github.com/AdrianArroyoCalle/divwiki
DefaultDirName={pf}\DivWiki
DefaultGroupName=DivWiki
AllowNoIcons=yes
OutputDir=..\build\output
OutputBaseFilename=divwiki-0.1-win32
; SetupIconFile=
Compression=lzma
SolidCompression=yes

[Languages]
Name: english; MessagesFile: compiler:Default.isl

[Components]
Name: main; Description: DivWiki; Types: full compact custom; Flags: fixed
Name: runtime; Description: XUL Runner Runtime; Types: full custom

[Tasks]
Name: desktopicon; Description: {cm:CreateDesktopIcon}; GroupDescription: {cm:AdditionalIcons}; Flags: unchecked
Name: quicklaunchicon; Description: {cm:CreateQuickLaunchIcon}; GroupDescription: {cm:AdditionalIcons}; Flags: unchecked

[Files]
Source: C:\Divel\Divel Game Center\DivWiki.exe; DestDir: {app}; Components: main; Flags: ignoreversion
Source: C:\Users\arroyo\Documents\GitHub\divwiki\chrome.manifest; DestDir: {app}; Components: main; Flags: ignoreversion
Source: C:\Users\arroyo\Documents\GitHub\divwiki\application.ini; DestDir: {app}; Components: main; Flags: ignoreversion
Source: C:\Users\arroyo\Documents\GitHub\divwiki\extensions\*; Excludes: .svn; DestDir: {app}\extensions; Components: main; Flags: ignoreversion recursesubdirs createallsubdirs
Source: C:\Users\arroyo\Documents\GitHub\divwiki\chrome\*; Excludes: .svn; DestDir: {app}\chrome; Components: main; Flags: ignoreversion recursesubdirs createallsubdirs
Source: C:\Users\arroyo\Documents\GitHub\divwiki\defaults\*; Excludes: .svn; DestDir: {app}\defaults; Components: main; Flags: ignoreversion recursesubdirs createallsubdirs
Source: C:\Divel\Divel Game Center\xulrunner\*; DestDir: {app}\xulrunner; Components: runtime; Flags: ignoreversion recursesubdirs createallsubdirs
; NOTE: Don't use "Flags: ignoreversion" on any shared system files

[Icons]
Name: {group}\DivWiki; Filename: {app}\DivWiki.exe
Name: {group}\{cm:UninstallProgram,DivWiki}; Filename: {uninstallexe}
Name: {userdesktop}\DivWiki; Filename: {app}\DivWiki.exe; Tasks: desktopicon
Name: {userappdata}\Microsoft\Internet Explorer\Quick Launch\DivWiki; Filename: {app}\DivWiki.exe; Tasks: quicklaunchicon

[Run]
Filename: {app}\DivWiki.exe; Description: {cm:LaunchProgram,My App}; OnlyBelowVersion: 0,6; Flags: nowait postinstall skipifsilent