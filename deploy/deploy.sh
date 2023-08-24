#!/bin/bash

# Set variables
BUCKET_NAME=saaas-marketing-bucket
WEBSITE_FOLDER=$(pwd)/build

# Create the S3 bucket
aws s3 mb s3://$BUCKET_NAME

# Enable static website hosting on the bucket
aws s3 website s3://$BUCKET_NAME --index-document index.html

# Sync the local website folder with the S3 bucket
aws s3 sync $WEBSITE_FOLDER s3://$BUCKET_NAME

# Set the bucket policy to allow public read access
cat > bucket-policy.json << EOL
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
    }
  ]
}
EOL

aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json

# Print the website URL
echo "Website URL: http://$BUCKET_NAME.s3-website-us-east-1.amazonaws.com"
