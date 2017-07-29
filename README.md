# UniFi Dev Test

 * [Installation](#installation)
 * [Dependencies](#dependencies)
 * [Run](#run)

## Installation

Project should work fine with node:
 * `4.4.7` LTS
 * `0.10.44` (used by most contributors)

Warning:
Currently project and project's components do not support flat dependency install (default in Node v3).

Use `nvm` to install and select `node`:

```
nvm install 4.4.7
nvm use 4.4.7
```

Make sure you have the following gems installed:

```
gem install sass
gem install compass
```

If you're on a Mac and you get the error `Error: EMFILE, too many open files` you should [increase your ulimit value](http://stackoverflow.com/questions/19981065/nodejs-error-emfile-too-many-open-files-on-mac-os).
```
ulimit -n 4096
```

## Dependencies

Project uses `npm` package managers.

```
npm install
```


## Run

```
grunt
```


### View

Point your browser to `https://localhost:6060`.
