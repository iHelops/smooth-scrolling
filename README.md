<p align="center">
 <img src="./images/icon.png" height="128" alt="Logo">
 <h1 align="center">Smooth Scrolling</h1>
</p>

This extension for Spotify improves scrolling performance by rendering scrolling elements on the GPU.

⭐ If this extension helped you, please put a star to get it noticed by more people.

## Dependencies
To install the extension you need to install [`Spicetify`](https://spicetify.app/docs/advanced-usage/installation) following the instructions in the documentation. After that you can find the `Smooth Scrolling` extension in the `Spicetify` extension shop.


## Manual installation
1. Download the [`smooth-scroll.js`](https://github.com/iHelops/smooth-scroll/blob/main/dist/smooth-scroll.js) file from this repository and place it in the following directory

| Platform      | Path                             |
| ------------- |:--------------------------------:|
| Windows       | `%appdata%\spicetify\Extensions` |
| Linux/MacOS	| `~/.config/spicetify/Extensions` |

2. Activate the extension using the following commands
```console
$ spicetify config extensions smooth-scroll.js
$ spicetify apply
```

## Uninstall
1. Disable the extension using the following commands
```console
$ spicetify config extensions smooth-scroll.js-
$ spicetify apply
```

2. Delete the file from step #1 in the installation instructions. (Optional)

## Credits
Big thanks to [`Aziz`](https://blog.aziz.tn/2025/01/spotify-fix-lagging-issue-on-scrolling.html) for finding the solution and source code. The `Smooth Scrolling` extension is based on his developments.