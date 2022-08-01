#!/bin/sh
# Start front end
echo "Starting front end"
cd rdacompliance
npm start
# Start back end
start powershell {echo "Starting back end"; cd ../rdacompliance_backend; npm start; Read-Host}

