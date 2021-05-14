---
layout: CS139
title: Setting up a Real Website
math: true
part: true
pre: Theory11
---

# Deploying Applications

## Registering a Domain Name
* Make it memorable
* Shorter is better
* Most registrars charge £10 - £12 per year

## Server for Applications
* use a small computer you own
* Use a shard host with the domain registrar of Platform as a service
    * Advantages
        * Server is preconfigured
        * Simple to use
    * Disadvantages
        * Large cost as scale 
        * Limited control over software stack
        * May not be able to run certain messages e.g Message Queues
* Use a cloud based virtual server
    * Advantages
        * Can have fill control over the software stack
        * Cheap to run
    * Disadvantages
        * Security can be your problem
        * Limited Hardware
* Buy a server and find a data centre
    * Advantages
        * Free Hardware choice
        * Full software choice
    * Disadvantages
        * Security
        * Cost
* Build you own data centre
    * Disadvantages
        * Expensive

## Software Stack Choices
Database options include
* mySQL
* PosrgreSQL

Many different versions __Don't use SQLite3__

Webserver Apache / nginx are both good choices

## Configuring the System
After the OS is installed the software stack can be installed form the source or with a package manager

1. Install apache `apt-get install apache2`
2. Setup the virtual `host file in /etc/apache2/sites-available/example.com`
3. Create the directories `/srv/www/example.com/public_html` and `logs`
4. Enable the sire `a2ensite example.com`
5. Reload apache `service apache reload`

Installing mysql

1. `apt-get install mysql-server`
2. secure the basic installation `mysql_secure_installation`
3. Start a database session `mysql -u root -p`
4. Create a user for the application
5. Create a database for you application
6. Grant privileges for your application

Installing PHP

1. `apt-get install php8.0 php8.0-mysql`
2. restart apache `service apache2 reload`

Additional Software
1. __Imagemagik__ - Manipulating uploaded images
2. __sendmail__ - Acts as a mail server
3. __logrotate__ - To rotate the log files and delete old ones

## Updating the DNS
1. Got to the registrar and register the IP address with the Domain Name
2. Add a record for `www.` which points to the server
3. Save changes
4. It can take some time for any changes to propagate

## Securing the Server
As a minumun allways
* Install `fail2ban` blocks ssh users form an IP for failed logins
* Configure the firewall to only accept SSH and HTTP(s) traffic
* Modify SSH to only accept key based logins from non designated IPs

## Maintenance
* keep an eye ont he server
* Need to install monitoring Software to alert you to issues
* Check logs on a daily basis
    * setup an email script
* Monitor usage to ensure everyone can use the site
