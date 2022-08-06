git pull origin master;
git push origin master;
aws s3 sync . s3://www.samadanc.com --delete --exclude ".git/*" --exclude ".idea/*" --exclude "resources/images/unused/*" --exclude "push_to_s3.cmd";
