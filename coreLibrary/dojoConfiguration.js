﻿/*global location,dojoConfig */
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
//============================================================================================================================//

/**
 * initialize default dojo configuration attributes by creating a dojoConfig object
 */
var root = location.href.slice(0, location.href.lastIndexOf('/'));
dojoConfig = {
    parseOnLoad: true,
    async: true,
    baseURL: root,
    locale: location.search.match(/locale=([\w\-]+)/) ? RegExp.$1 : "fr-fr",
    packages: [{
        name: "application",
        location: root
    }, {
        name: "widgets",
        location: root + '/widgets'
    }, {
        name: "coreLibrary",
        location: root + '/coreLibrary'
    }, {
        name: "nls",
        location: root + '/nls'
    }]
};