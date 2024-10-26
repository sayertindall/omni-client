#!/bin/bash

# Navigate to the 'data' directory
cd data || exit

# Find all files recursively and remove the suffixes
find . -type f \( -name '*-wikicrow*' -o -name '*-wikipedia*' \) | while read -r file; do
    # Get the directory and filename
    dir=$(dirname "$file")
    filename=$(basename "$file")
    
    # Remove the suffix
    new_filename=$(echo "$filename" | sed -E 's/(-wikicrow|-wikipedia)//g')
    
    # Rename the file
    mv "$file" "$dir/$new_filename"
    
    echo "Renamed: $file -> $dir/$new_filename"
done

echo "Finished renaming files."