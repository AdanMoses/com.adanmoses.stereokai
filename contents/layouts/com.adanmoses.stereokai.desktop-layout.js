var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometries-2560x1440": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/General": {
                    "positions": "{\"1920x1080\":[],\"2226x1252\":[],\"2560x1440\":[]}"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/adanmoses/Pictures/piergiovanni-di-blasi-QrusP139kG8-unsplash.jpg",
                    "PreviewImage": "/usr/share/wallpapers/Next/",
                    "SlidePaths": "/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/General": {
                    "positions": "{\"1080x1920\":[],\"1920x1080\":[],\"2560x1440\":[]}"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/adanmoses/Pictures/piergiovanni-di-blasi-QrusP139kG8-unsplash.jpg",
                    "PreviewImage": "/usr/share/wallpapers/Next/",
                    "SlidePaths": "/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "508",
                            "popupWidth": "647"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/General": {
                            "launchers": "applications:systemsettings.desktop,applications:org.kde.discover.desktop,preferred://filemanager,applications:thunderbird.desktop,applications:proton-pass.desktop,preferred://browser,applications:md.obsidian.Obsidian.desktop,applications:jetbrains-toolbox.desktop,applications:Alacritty.desktop,applications:org.kde.konsole.desktop,applications:docker-desktop.desktop,applications:com.microsoft.VSCode.desktop,applications:jetbrains-rider-30423a07-55ec-4c2e-a5ae-bb2983d22522.desktop,file:///var/lib/flatpak/exports/share/applications/net.puddletag.puddletag.desktop,file:///var/lib/flatpak/exports/share/applications/org.soundconverter.SoundConverter.desktop,applications:org.mixxx.Mixxx.desktop,file:///var/lib/flatpak/exports/share/applications/app.legcord.Legcord.desktop,file:///var/lib/flatpak/exports/share/applications/io.github.Faugus.faugus-launcher.desktop,applications:steam.desktop,applications:battlenet.desktop,applications:curseforge.desktop,applications:tsm.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "65",
                            "popupHeight": "450",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "fontWeight": "400"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 3.3333333333333335,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 142.22222222222223,
            "minimumLength": 142.22222222222223,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
