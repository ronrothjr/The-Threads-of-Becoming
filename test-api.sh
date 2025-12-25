#!/bin/bash

TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OTRiNzQ0MjUwOGQ0Y2U1NWYwOTkwYmEiLCJlbWFpbCI6InJvbnJvdGhqckBnbWFpbC5jb20iLCJpYXQiOjE3NjY2NjIzMzksImV4cCI6MTc2Njc0ODczOX0.26NS5esiCHuvgFSUOSU0rJ1EYjh_-J8ThBPeQHAa4P8"

echo "Testing /api/journal endpoint..."
curl -s -X GET http://localhost:5050/api/journal \
  -H "Authorization: Bearer $TOKEN" | jq 'length'

echo ""
echo "Testing /api/practice/analytics endpoint..."
curl -s -X GET http://localhost:5050/api/practice/analytics \
  -H "Authorization: Bearer $TOKEN" | jq '.'
