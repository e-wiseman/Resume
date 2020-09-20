# Step-by-step guide
## Setting up Python
1. Make Python3 the default Python for the server
`sudo update-alternatives --install /usr/bin/python python /usr/bin/python3 10`
2. Install Flask and Pip
`sudo apt install python-flask`
`sudo apt install python-pip`
3. Install the project's Python dependencies
`sudo pip install requests`
`sudo pip flask_cors`

## Setup an Apache Server
1. Install Apache
`sudo apt-get update`
`sudo apt-get install apache2`
`sudo apt-get install libapache2-mod-wsgi-py3 python-dev`
2. Enable WSGI
`sudo a2enmod wsgi`
3. Change the firewall settings to let appache2 through
`sudo ufw allow 'Apache'`
4. The default apache2 configuration file is  /etc/apache2/sites-available/000-default.conf. 
Replace this file with the project's configuration file.
`cd /etc/apache2/sites-available/`
`sudo rm 000-default.conf`
`sudo mv ~/wr-skilljar/WRApp.conf /etc/apache2/sites-available/`
5. Activate the new site.
`cd /etc/apache2/sites-available/`
`sudo a2ensite WRApp`

## Run the Server
1. Restart the server to include your changes
`sudo service apache2 restart`
2. Check the status of your apache server
`sudo service apache2 status`
3. Make sure there are no errors in the Flask application
`sudo tail -f /var/log/apache2/error.log`

## Setting up HTTPS
1. To enable HTTPS you will need a valid domain name. Your domain name must have A Record and CNAME records that point to the AWS server instance's IP Address and public DNS (e.g. ec2-54-152-32-128.compute-1.amazonaws.com/)
2. Install Certbot.
`sudo apt-get install certbot python3-certbot-apache`
2. Use Certbot to create certificate and edit apache configuration
`sudo certbot --apache`