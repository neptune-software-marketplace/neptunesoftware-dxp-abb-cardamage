var currentModel = modelSimpleForm.getJSON();

if (currentModel == _compareModel) {
    App.to(MainListPage);
    resetSvgClasses(); // In "Functions"
    SyncButton.firePress();
} else {
    NavBackWithChangesDialog.open();
}

