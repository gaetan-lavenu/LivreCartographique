/*global define */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
/*
 | Copyright 2014 Esri
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
define([], function() {
    return {
        /*  appSetting contains application configuration */

        // Set application title
        ApplicationName: "Mes Livres Cartograhiques",

        // Set application icon path
        ApplicationIcon: "themes/images/mapbookIcon.png",

        // Set application Favicon path
        ApplicationFavicon: "themes/images/mapBookFavIco.ico",

        // Set application home screen path
        AppHomeScreenIcon: "themes/images/mapbookHomeIcon-grey.ico",

        //Authoring Mode not supported in this release.
        //Set application mode. Set to false for Public interface. Set to true for Admin interface
        AuthoringMode: false, //false:      Public mode and true:      Editable mode

        //Set theme for application
        ApplicationTheme: "blue", // grey||blue.css

        BriefingBookCoverIcon: "themes/images/map-book-bg-grey.png",

        //video url for YouTube
        YouTubeVideoUrl: "https://www.youtube.com/embed/",

        //video url for Esri
        EsriVideoUrl: "https://video.esri.com/iframe/",

        //video url for Vimeo
        VimeoVideoUrl: "https://player.vimeo.com/video/",

        //The URL for your ArcGIS Online Organization or Portal for ArcGIS site.
        PortalURL: "",

        //Location of your proxy file (proxy.ashx or proxy.jsp depending on your web server)
        ProxyURL: "/proxy/proxy.ashx",

        //The unique tag given to each book. This tag will determine which books are visible in the Briefing Book application.
        //ex: ConfigSearchTag: "Livre-Cartographique" 
        ConfigSearchTag: "",

        //cookie/local storage name  for storing user credential
        Credential: "esribriefingbookcredential",

        //max webmap count
        MaxWebMapCount: 100,

        //display no of webmap thumbnail in' Select webmap' dialog
        webmapPerPage: 10,

        //Sorting field
        SortField: "owner", //Values:title | owner | avgRating |numViews| created | modified

        //sorting order
        SortOrder: "asc", //Values: asc | desc

        /* module Defaults contains default settings for each and every module */
        /* cover page layout contains layout for index page*/
        CoverPageLayout: {
            title: "Titre du livre",
            Name: "coverPageLayout1",
            columns: 2,
            columnWidth: [50, 50],
            content: [
                ["title", "subtitle", "author", "date", "logo"],
                ["webmap"]
            ],
            height: [
                [40, 100, 60, 50],
                [300]
            ],
            type: "CoverPage"

        },
        /* content page layout contains layout for content page*/
        ContentPageLayouts: [{
            Name: "ContentLayout1",
            columnWidth: [50, 50],
            columns: 2,
            templateIcon: "themes/images/contentLayout1.png",
            selectedTemplateIcon: "themes/images/contentLayout1-select.png",
            content: [
                ["text", "TOC"],
                ["webmap"]
            ],
            height: [
                [50, 200],
                [250]
            ],
            type: "ContentPage"
        }, {
            Name: "ContentLayout2",
            columns: 2,
            columnWidth: [50, 50],
            templateIcon: "themes/images/contentLayout2.png",
            selectedTemplateIcon: "themes/images/contentLayout2-select.png",
            content: [
                ["webmap", "text"],
                ["TOC"]
            ],
            height: [
                [300, 100],
                [400]
            ]
        }, {
            Name: "ContentLayout3",
            columns: 2,
            columnWidth: [50, 50],
            templateIcon: "themes/images/contentLayout3.png",
            selectedTemplateIcon: "themes/images/contentLayout3-select.png",
            content: [
                ["TOC"],
                ["text", "webmap"]
            ],
            height: [
                [300],
                [50, 250]
            ]
        }],
        /* book page layout contains layout for different pages of books */
        BookPageLayouts: [{
            Name: "TwoColumnLayout",
            columnWidth: [40, 60],
            columns: 2,
            templateIcon: "themes/images/temp1.png",
            selectedTemplateIcon: "themes/images/temp1-select.png",
            content: [
                ["text"],
                ["webmap"]
            ],
            height: [
                [250],
                [250]
            ]
        }, {
            Name: "MostlyText",
            columns: 2,
            columnWidth: [50, 50],
            templateIcon: "themes/images/temp2.png",
            selectedTemplateIcon: "themes/images/temp2-select.png",
            content: [
                ["webmap", "text"],
                ["text"]
            ],
            height: [
                [230, 30],
                [300]
            ]

        }, {
            Name: "OneColumnLayout ",
            columns: 1,
            columnWidth: [100],
            templateIcon: "themes/images/temp3.png",
            selectedTemplateIcon: "themes/images/temp3-select.png",
            content: [
                ["webmap", "text"]
            ],
            height: [
                [250, 50]
            ]

        }, {
            Name: "DominantVisual",
            columns: 2,
            columnWidth: [30, 70],
            templateIcon: "themes/images/temp4.png",
            selectedTemplateIcon: "themes/images/temp4-select.png",
            content: [
                ["webmap", "text"],
                ["text"]
            ],
            height: [
                [230, 60],
                [335]
            ]
        }],
        ModuleDefaultsConfig: {
            "webmap": {
                map: "",
                type: "webmap",
                title: "Titre de la carte web",
                caption: "Sous-titre de la carte web.",
                URL: "",
                height: 230 // in pixel
            },
            "title": {
                type: "text",
                text: "Sans-titre",
                height: 30,
                uid: "title" // in pixel
            },
            "text": {
                type: "text",
                text: "Ajouter du texte ici.",
                height: 40 // in pixel
            },
            "HTML": {
                type: "HTML",
                HTML: " <p>Ajouter des éléments HTML ici.</p>",
                height: 100 // in pixel
            },
            "image": {
                type: "image",
                URL: "",
                height: 100,
                width: "" // in pixel
            },
            "video": {
                type: "video",
                title: "Titre de la vidéo",
                caption: "Sous-titre de la vidéo",
                URL: "",
                height: 250 // in pixel
            },
            "flickr": {
                type: "flickr",
                username: "",
                apiKey: "",
                title: "",
                caption: "",
                URL: "",
                rows: 5,
                columns: 5,
                height: 250 // in pixel
            },
            "logo": {
                type: "logo",
                URL: "themes/images/logo-default.jpg",
                height: 50 // in pixel
            },
            "TOC": {
                type: "TOC",
                height: 200 // in pixel
            },
            "author": {
                text: "Auteur",
                type: "text",
                uid: "Author",
                height: 50
            },
            "date": {
                text: "Date ou autre information ici",
                type: "text",
                uid: "date",
                height: 20
            },
            "subtitle": {
                type: "text",
                text: "Ceci est le sous-titre ou le descriptif relatif à votre livre cartographique. Cette propriété est optionnelle, mais recommandée pour une meilleure compréhaension des visiteurs.",
                height: 40
            }
        },
        DefaultModuleIcons: {
            "webmap": {
                type: "webmap",
                URL: "themes/images/mapIcon.png"
            },
            "image": {
                type: "image",
                URL: "themes/images/imageIcon.png"
            },
            "logo": {
                type: "logo",
                URL: "themes/images/imageIcon.png"
            },
            "text": {
                type: "text",
                URL: "themes/images/textIcon.png"
            },
            "HTML": {
                type: "HTML",
                URL: "themes/images/htmlIcon.png"
            },
            "video": {
                type: "video",
                URL: "themes/images/videoIcon.png"
            },
            "flickr": {
                type: "flickr",
                URL: "themes/images/flickrIcon.png"
            }
        }
    };

});