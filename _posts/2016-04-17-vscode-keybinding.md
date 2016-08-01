---
title: VSCode Keybindings
date: 2016-04-17 11:20 +0800
---
copy from [Visual Studio Code Key Bindings](https://code.visualstudio.com/Docs/customization/keybindings)

## Index

* [Basic Editing](#basicediting)
* [Rich Languages Editing](#richlanguagesediting)
* [Navigation](#navigation)
* [Editor/Window Management](#editorwindowmanagement)
* [File Management](#filemanagement)
* [Display](#display)
* [Debug](#debug)
* [Task](#task)
* [Extensions](#extensions)
* [Preferences](#preferences)

## Basic Editing


<div class="table-wrapper" markdown="block">

| Key                      | Command                                     | Command id                                       |
|--------------------------|---------------------------------------------|--------------------------------------------------|
| Ctrl+X                   | Cut line (empty selection)                  | editor.action.clipboardCutAction                 |
| Ctrl+C                   | Copy line (empty selection)                 | editor.action.clipboardCopyAction                |
| Ctrl+Shift+K             | Delete Line                                 | editor.action.deleteLines                        |
| Ctrl+Enter               | Insert Line Below                           | editor.action.insertLineAfter                    |
| Ctrl+Shift+Enter         | Insert Line Above                           | editor.action.insertLineBefore                   |
| Alt+Down                 | Move Line Down                              | editor.action.moveLinesDownAction                |
| Alt+Up                   | Move Line Up                                | editor.action.moveLinesUpAction                  |
| Ctrl+Shift+Alt+Down      | Copy Line Down                              | editor.action.copyLinesDownAction                |
| Ctrl+Shift+Alt+Up        | Copy Line Up                                | editor.action.copyLinesUpAction                  |
| Ctrl+D                   | Add Selection To Next Find Match            | editor.action.addSelectionToNextFindMatch        |
| Ctrl+K Ctrl+D            | Move Last Selection To Next Find Match      | editor.action.moveSelectionToNextFindMatch       |
| Ctrl+U                   | Undo last cursor operation                  | cursorUndo                                       |
| Ctrl+Shift+L             | Select all occurrences of current selection | editor.action.selectHighlights                   |
| Ctrl+F2                  | Select all occurrences of current word      | editor.action.changeAll                          |
| Ctrl+I                   | Select current line                         | expandLineSelection                              |
| Shift+Alt+Down           | Insert Cursor Below                         | editor.action.insertCursorBelow                  |
| Shift+Alt+Up             | Insert Cursor Above                         | editor.action.insertCursorAbove                  |
| Ctrl+Shift+\             | Jump to matching bracket                    | editor.action.jumpToBracket                      |
| Ctrl+]                   | Indent Line                                 | editor.action.indentLines                        |
| Ctrl+[                   | Outdent Line                                | editor.action.outdentLines                       |
| Home                     | Go to Beginning of Line                     | cursorHome                                       |
| End                      | Go to End of Line                           | cursorEnd                                        |
| Ctrl+End                 | Go to End of File                           | cursorBottom                                     |
| Ctrl+Home                | Go to Beginning of File                     | cursorTop                                        |
| Ctrl+Down                | Scroll Line Down                            | scrollLineDown                                   |
| Ctrl+Up                  | Scroll Line Up                              | scrollLineUp                                     |
| Ctrl+PageDown            | Scroll Page Down                            | scrollPageDown                                   |
| Ctrl+PageUp              | Scroll Page Up                              | scrollPageUp                                     |
| Ctrl+Shift+[             | Fold (collapse) region                      | editor.fold                                      |
| Ctrl+Shift+]             | Unfold (uncollapse) region                  | editor.unfold                                    |
| Ctrl+Shift+Alt+[         | Fold (collapse) all regions                 | editor.foldAll                                   |
| Ctrl+Shift+Alt+]         | Unfold (uncollapse) all regions             | editor.unfoldAll                                 |
| Ctrl+K Ctrl+C            | Add Line Comment                            | editor.action.addCommentLine                     |
| Ctrl+K Ctrl+U            | Remove Line Comment                         | editor.action.removeCommentLine                  |
| Ctrl+/                   | Toggle Line Comment                         | editor.action.commentLine                        |
| Ctrl+Shift+A             | Toggle Block Comment                        | editor.action.blockComment                       |
| Ctrl+F                   | Find                                        | actions.find                                     |
| Ctrl+H                   | Replace                                     | editor.action.startFindReplaceAction             |
| F3                       | Find Next                                   | editor.action.nextMatchFindAction                |
| Shift+F3                 | Find Previous                               | editor.action.previousMatchFindAction            |
| Alt+C                    | Toggle Find Case Sensitive                  | toggleFindCaseSensitive                          |
| Alt+R                    | Toggle Find Regex                           | toggleFindRegex                                  |
| Alt+W                    | Toggle Find Whole Word                      | toggleFindWholeWord                              |
| Ctrl+M                   | Toggle Use of Tab Key for Setting Focus     | editor.action.toggleTabFocusMode                 |
| unassigned               | Toggle Render Whitespace                    | toggleRenderWhitespace                           |

</div>

## Rich Languages Editing

<div class="table-wrapper" markdown="block">

| Key                      | Command                                     | Command id                                       |
|--------------------------|---------------------------------------------|--------------------------------------------------|
| Ctrl+Space               | Trigger Suggest                             | editor.action.triggerSuggest                     |
| Ctrl+Shift+Space         | Trigger Parameter Hints                     | editor.action.triggerParameterHints              |
| Ctrl+Shift+I             | Format Code                                 | editor.action.format                             |
| F12                      | Go to Definition                            | editor.action.goToDeclaration                    |
| Ctrl+Shift+F10           | Peek Definition                             | editor.action.previewDeclaration                 |
| Ctrl+K F12               | Open Definition to the Side                 | editor.action.openDeclarationToTheSide           |
| Ctrl+.                   | Quick Fix                                   | editor.action.quickFix                           |
| Shift+F12                | Show References                             | editor.action.referenceSearch.trigger            |
| F2                       | Rename Symbol                               | editor.action.rename                             |
| Ctrl+Shift+.             | Replace with Next Value                     | editor.action.inPlaceReplace.down                |
| Ctrl+Shift+,             | Replace with Previous Value                 | editor.action.inPlaceReplace.up                  |
| Shift+Alt+Right          | Expand AST Select                           | editor.action.smartSelect.grow                   |
| Shift+Alt+Left           | Shrink AST Select                           | editor.action.smartSelect.shrink                 |
| Ctrl+Shift+X             | Trim Trailing Whitespace                    | editor.action.trimTrailingWhitespace             |
| Ctrl+K M                 | Change Language Mode                        | workbench.action.editor.changeLanguageMode       |

</div>

## Navigation

<div class="table-wrapper" markdown="block">

| Key                      | Command                                     | Command id                                       |
|--------------------------|---------------------------------------------|--------------------------------------------------|
| Ctrl+T                   | Show All Symbols                            | workbench.action.showAllSymbols                  |
| Ctrl+G                   | Go to Line...                               | workbench.action.gotoLine                        |
| Ctrl+P                   | Go to File..., Quick Open                   | workbench.action.quickOpen                       |
| Ctrl+Shift+O             | Go to Symbol...                             | workbench.action.gotoSymbol                      |
| Ctrl+Shift+M             | Show Errors and Warnings                    | workbench.action.showErrorsWarnings              |
| F8                       | Go to Next Error or Warning                 | editor.action.marker.next                        |
| Shift+F8                 | Go to Previous Error or Warning             | editor.action.marker.prev                        |
| F1                       | Show All Commands                           | workbench.action.showCommands                    |
| Ctrl+Tab                 | Navigate History                            | workbench.action.openPreviousEditor              |
| Ctrl+Alt+-               | Go Back                                     | workbench.action.navigateBack                    |
| Ctrl+Shift+-             | Go Forward                                  | workbench.action.navigateForward                 |

</div>

<h2 id="editorwindow-management">Editor/Window Management</h2>

<div class="table-wrapper" markdown="block">

| Key                      | Command                                     | Command id                                       |
|--------------------------|---------------------------------------------|--------------------------------------------------|
| Ctrl+Shift+N             | New Window                                  | workbench.action.newWindow                       |
| Ctrl+Shift+W             | Close Window                                | workbench.action.closeWindow                     |
| Ctrl+W                   | Close Editor                                | workbench.action.closeActiveEditor               |
| Ctrl+K F                 | Close Folder                                | workbench.action.closeFolder                     |
| Ctrl+`                   | Cycle Between Opened Editors                | workbench.action.cycleEditor                     |
| Ctrl+\                   | Split Editor                                | workbench.action.splitEditor                     |
| Ctrl+1                   | Focus into Left Hand Editor                 | workbench.action.focusFirstEditor                |
| Ctrl+2                   | Focus into Side Editor                      | workbench.action.focusSecondEditor               |
| Ctrl+3                   | Focus into Right Hand Editor                | workbench.action.focusThirdEditor                |
| Ctrl+Shift+Alt+Left      | Focus into Next Editor on the Left          | workbench.action.focusLeftEditor                 |
| Ctrl+Shift+Alt+Right     | Focus into Next Editor on the Right         | workbench.action.focusRightEditor                |
| Ctrl+K Left              | Move Active Editor Left                     | workbench.action.moveActiveEditorLeft            |
| Ctrl+K Right             | Move Active Editor Right                    | workbench.action.moveActiveEditorRight           |

</div>

## File Management

<div class="table-wrapper" markdown="block">

| Key                      | Command                                     | Command id                                       |
|--------------------------|---------------------------------------------|--------------------------------------------------|
| Ctrl+N                   | New File                                    | workbench.action.files.newUntitledFile           |
| Ctrl+O                   | Open File...                                | workbench.action.files.openFile                  |
| Ctrl+S                   | Save                                        | workbench.action.files.save                      |
| unassigned               | Save All                                    | workbench.action.files.saveAll                   |
| Ctrl+Shift+S             | Save As...                                  | workbench.action.files.saveAs                    |
| Ctrl+K W                 | Close File                                  | workbench.files.action.closeFile                 |
| Ctrl+K Ctrl+W            | Close All Files                             | workbench.files.action.closeAllFiles             |
| Ctrl+K Ctrl+Shift+W      | Close Other Files                           | workbench.files.action.closeOtherFiles           |
| Ctrl+K Enter             | Add to Working Files                        | workbench.files.action.addToWorkingFiles         |
| Ctrl+K Down              | Open Next Working File                      | workbench.files.action.openNextWorkingFile       |
| Ctrl+K Up                | Open Previous Working File                  | workbench.files.action.openPreviousWorkingFile   |
| Ctrl+K P                 | Copy Path of Active File                    | workbench.action.files.copyPathOfActiveFile      |
| Ctrl+K R                 | Reveal Active File in Windows               | workbench.action.files.revealActiveFileInWindows |
| Ctrl+K O                 | Show Opened File in New Window              | workbench.action.files.showOpenedFileInNewWindow |
| unassigned               | Compare Opened File With                    | workbench.files.action.compareFileWith           |

</div>

## Display

<div class="table-wrapper" markdown="block">

| Key                      | Command                                     | Command id                                       |
|--------------------------|---------------------------------------------|--------------------------------------------------|
| F11                      | Toggle Full Screen                          | workbench.action.toggleFullScreen                |
| Ctrl+=                   | Zoom in                                     | workbench.action.zoomIn                          |
| Ctrl+-                   | Zoom out                                    | workbench.action.zoomOut                         |
| Ctrl+B                   | Toggle Sidebar Visibility                   | workbench.action.toggleSidebarVisibility         |
| Ctrl+Shift+D             | Show Debug                                  | workbench.view.debug                             |
| Ctrl+Shift+E             | Show Explorer                               | workbench.view.explorer                          |
| Ctrl+Shift+G             | Show Git                                    | workbench.view.git                               |
| Ctrl+Shift+F             | Show Search                                 | workbench.view.search                            |
| Ctrl+Shift+J             | Toggle Search Details                       | workbench.action.search.toggleQueryDetails       |
| Ctrl+Shift+C             | Open New Command Prompt                     | workbench.action.terminal.openNativeConsole      |
| Ctrl+Shift+H             | Show Output                                 | workbench.action.output.toggleOutput             |
| Ctrl+Shift+V             | Toggle Markdown Preview                     | workbench.action.markdown.togglePreview          |
| Ctrl+K V                 | Open Preview to the Side                    | workbench.action.markdown.openPreviewSideBySide  |

</div>

## Debug

<div class="table-wrapper" markdown="block">

| Key           | Command                        | Command id                                          |
|---------------|--------------------------------|-----------------------------------------------------|
| F9            | Toggle Breakpoint              | editor.debug.action.toggleBreakpoint                |
| F5            | Continue                       | workbench.action.debug.continue                     |
| F5            | Pause                          | workbench.action.debug.start                        |
| F11           | Step Into                      | workbench.action.debug.stepInto                     |
| Shift+F11     | Step Out                       | workbench.action.debug.stepOut                      |
| F10           | Step Over                      | workbench.action.debug.stepOver                     |
| Shift+F5      | Stop                           | workbench.action.debug.stop                         |
| Ctrl+K Ctrl+I | Show Hover                     | editor.action.showHover                             |

</div>

## Tasks

<div class="table-wrapper" markdown="block">

| Key           | Command                        | Command id                                          |
|---------------|--------------------------------|-----------------------------------------------------|
| Ctrl+Shift+B  | Run Build Task                 | workbench.action.tasks.build                        |
| Ctrl+Shift+T  | Run Test Task                  | workbench.action.tasks.test                         |

</div>

## Extensions

<div class="table-wrapper" markdown="block">

| Key           | Command                        | Command id                                          |
|---------------|--------------------------------|-----------------------------------------------------|
| unassigned    | Install Extension              | workbench.extensions.action.installExtension        |
| unassigned    | Show Installed Extensions      | workbench.extensions.action.listExtensions          |
| unassigned    | Show Outdated Extensions       | workbench.extensions.action.listOutdatedExtensions  |
| unassigned    | Show Extension Recommendations | workbench.extensions.action.listSuggestedExtensions |

</div>

## Preferences

<div class="table-wrapper" markdown="block">

| Key           | Command                        | Command id                                          |
|---------------|--------------------------------|-----------------------------------------------------|
| unassigned    | Open User Settings             | workbench.action.openGlobalSettings                 |
| unassigned    | Open Workspace Settings        | workbench.action.openWorkspaceSettings              |
| unassigned    | Open Keyboard Shortcuts        | workbench.action.openGlobalKeybindings              |
| unassigned    | Open User Snippets             | workbench.action.openSnippets                       |
| unassigned    | Select Color Theme             | workbench.action.selectTheme                        |
| unassigned    | Configure Display Language     | workbench.action.configureLocale                    |

</div>
