#!/bin/bash
PROJECT_DIRECTORY=`pwd`

PATH=$PATH:/usr/local/bin

echo -----------------------------------------------------------------------------
echo get all node packages for this project
echo -----------------------------------------------------------------------------
echo
cd "$PROJECT_DIRECTORY"
npm install

echo -----------------------------------------------------------------------------
echo get configuration file
echo -----------------------------------------------------------------------------
cp /var/Projects/fitbit-node/fitbit-private.js "$PROJECT_DIRECTORY"

echo -----------------------------------------------------------------------------
echo run node unit tests
echo -----------------------------------------------------------------------------
mkdir "$PROJECT_DIRECTORY/test-results"
cd "$PROJECT_DIRECTORY"
mocha --recursive --reporter xunit > "$PROJECT_DIRECTORY/test-results/node-unit-tests.xml"