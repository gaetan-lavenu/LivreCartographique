﻿/*global define,Modernizr */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
/*
 | Copyright 2013 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
//==================================================================================================================//
define([
    "dojo/_base/declare",
    "dojo/i18n!nls/localizedStrings",
    "dijit/_WidgetBase",
    "widgets/alertDialog/alertDialog",
    "widgets/appHeader/appHeader",
    "widgets/mapBookCollection/mapBookCollection",
    "widgets/mapBookConfigLoader/mapBookConfigLoader",
    "widgets/selectWebmap/selectWebmap",
    "widgets/shareBook/shareBook",
    "dojo/domReady!"
], function (declare, nls, _WidgetBase, alertBox, appHeader, mapBookCollection, mapBookConfigLoader, selectWebmap, shareBook) {
    return declare([_WidgetBase], {
        nls: nls,
        startup: function () {
            var mapbookLoader, MapBookCollection, applicationHeader, sharebook, alertDialog;
            try {
                mapbookLoader = new mapBookConfigLoader();
                mapbookLoader.startup().then(function (response) {
                    MapBookCollection = new mapBookCollection();
                    applicationHeader = new appHeader();
                    selectWebmap = new selectWebmap();
                    sharebook = new shareBook();
                });
            } catch (ex) {
                alertDialog = new alertBox();
                alertDialog._setContent(nls.errorMessages.widgetNotLoaded, 0);
            }
        }
    });
});
