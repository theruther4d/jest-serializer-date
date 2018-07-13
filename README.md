# A Jest snapshot serializer that removes headaches when working with JavaScript Date objects
[![NPM version](https://badge.fury.io/js/jest-serializer-date.svg)](https://npmjs.org/package/jest-serializer-date)
[![Build Status](https://travis-ci.org/theruther4d/jest-serializer-date.svg?branch=master)](https://travis-ci.org/theruther4d/jest-serializer-date)

When encountering a JavaScript Date object within a Jest snapshot, this serializer determines if the date corresponds to the current date (`new Date()`) or not. It then serializes them as follows:

Current Date:
```diff
- "yourDate": 2018-07-13T22:42:46.531Z
+ "yourDate": "Current Date"
```

Non-current Date:
```diff
- "yourDate": 2018-07-13T22:42:46.531Z
+ "yourDate": "07-13-2018"
```

This effectively avoids errors where snapshots fail because
1. Something like `new Date()` was used, and the snapshot test was re-run on a different date
2. The snapshot test is run in an environment with a different timezone than that of the developer who wrote the test, causing date serialization mis-match

## Install
Install the package as a dev-dependency:
```bash
# npm
npm install --save-dev jest-serializer-date

# yarn
yarn add --dev jest-serializer-date
```

Tell jest to use the package in package.json:
```json
"jest": {
    "snapshotSerializers": ["jest-serializer-date"]
}
```