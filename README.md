# AWS S3 Static Website Hosting Guide

This guide provides a step-by-step explanation of a bash script that creates an AWS S3 bucket, enables static website hosting on the bucket, syncs a local website folder with the bucket, sets the bucket policy to allow public read access, and finally prints the website URL.

## Prerequisites

Before running the script, make sure you have the following:
- The AWS Command Line Interface (CLI) installed and configured on your system. You can install the AWS CLI by following the instructions in the official documentation.
- A local folder containing the files for your static website.

## Script Explanation

The script performs the following steps:

1. **Set variables**: The script sets two variables: `BUCKET_NAME` and `WEBSITE_FOLDER`. `BUCKET_NAME` specifies the name of the S3 bucket to create, and `WEBSITE_FOLDER` specifies the path to the local folder containing the website files.

2. **Create the S3 bucket**: The script uses the `aws s3 mb` command to create an S3 bucket with the specified name.

3. **Enable static website hosting on the bucket**: The script uses the `aws s3 website` command to enable static website hosting on the newly created bucket. This allows you to host a static website using the files in the S3 bucket.

4. **Sync the local website folder with the S3 bucket**: The script uses the `aws s3 sync` command to sync the contents of the local website folder with the S3 bucket. This uploads all of the website files to the S3 bucket.

5. **Set the bucket policy to allow public read access**: The script creates a JSON file containing a bucket policy that allows public read access to the objects in the S3 bucket. It then uses the `aws s3api put-bucket-policy` command to apply this policy to the S3 bucket.

6. **Print the website URL**: Finally, the script prints the URL of the hosted website. You can use this URL to access your static website hosted on Amazon S3.

## Running The Script

To run this script, follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the directory where you saved this script.
3. Make this script executable by running `chmod +x <script_name>.sh`.
4. Run this script by entering `./<script_name>.sh` and pressing enter.

The script will then execute and perform all of its steps, creating an S3 bucket, enabling static website hosting, syncing your local website folder with it, setting its policy for public read access and printing out your hosted website's URL.
