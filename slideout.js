//The only required JS changes are editting the values for the variables. Add the guide ID for each respective guide as the value for each variable.
//The currentTab guide ID sets which guide is opened when the minimize button is used and the guide is reopened. When this code is added to a code block, the currentTab guide ID should match the guide ID of that guide. It will be different for each tab of the slideout.
var educationTab = 'AddguideID';
var bestpracticeTab = 'AddguideID';
var troubleshootingTab = 'AddguideID';
var currentTab = 'AddguideID';

function EducationClick () {
    pendo.onGuideDismissed();
    pendo.showGuideById(educationTab);
}

function BestPracticeClick () {
    pendo.onGuideDismissed();
    pendo.showGuideById(bestpracticeTab);
}

function TroubleshootingClick () {
    pendo.onGuideDismissed();
    pendo.showGuideById(troubleshootingTab);
}

//Adds hover state to the minimize button.
document.head.insertAdjacentHTML('beforeend', '<style type="text/css">#slideout_maximize:hover{background-color:#eaecf1 !important;}</style>');


//function to create minimize button
function createLauncher() {
    var guideLauncher = document.createElement('div')
    guideLauncher.setAttribute ('id', 'slideout_maximize')
	guideLauncher.style.cssText = "position: absolute;height: 40px;min-width: 40px;right: 0px;top: 0px;display: inline-flex;cursor: pointer;background-color: rgb(248, 248, 249);border-bottom-left-radius: 3px;border: thin solid rgb(218, 220, 229);text-align: center;align-items: center;justify-content: center";
  guideLauncher.innerHTML = '<i class="pendo-icon pendo-icon__maximize-2" style="display: inline-block;position: relative;height: 20px;width: 20px;margin: auto;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize-2 pendo-icon__content" display="block"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg></i>'
	guideLauncher.onclick = function() { pendo.showGuideById(currentTab) }
	pendo.dom('body')[0].appendChild(guideLauncher)
}

//remove minimize button when guide is displayed again
step.before("render", function () {
	if(pendo.dom('#slideout_maximize')[0]){
    	var launcherButton = pendo.dom('#slideout_maximize')[0]
    	launcherButton.remove()}
})

function MinimizeClick () {
    createLauncher();
    pendo.onGuideDismissed();
}
