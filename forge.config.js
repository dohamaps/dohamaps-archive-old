module.exports = {
    packagerConfig: { icon: "./electron/icon.icns" },
    makers: [
        {
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "name": "dohamaps"
            }
        },
        {
            name: "@electron-forge/maker-zip",
            platforms: [
                "darwin"
            ]
        },
        {
            name: "@electron-forge/maker-deb",
            config: {}
        },
        {
            name: "@electron-forge/maker-rpm",
            config: {}
        }
    ],
    publishers: [
        {
            name: "@electron-forge/publisher-github",
            config: {
                authToken: "aa0530e263fae2b9010c103a0596924ed5b4db6d",
                repository: {
                    name: "dohamaps",
                    owner: "aegooby"
                },
                prerelease: false,
                draft: false
            }
        },
    ],
}
