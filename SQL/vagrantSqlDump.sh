#!/bin/bash

# script that logs on to a vagrant vm and dumps a sql database. 
# it's ment to be run from withn a folder inside a vagrant structure.

	bashRealpath() {
    [[ $1 = /* ]] && echo "$1" || echo "$PWD/${1#./}"
}

folderRunFrom="$(dirname "$(bashRealpath "$0")")"

# initzialize empty/default parameters 
hostname="qlokast.local"
username=vagrant # to connect to the ssh server running on the vm, not the mysql server
database=wordpress 
outputFile="$folderRunFrom/sqlDump"-"$( date "+%y%m%d-%H%M%S" )".sql # /home/user/projects/project/folder/database-160220-133700.sql

if [[ $1 == "--help" ]]; then
	echo '
		Script that logs on to a vagrant vm and dumps a sql database. 
		it is ment to be run from withn a folder inside a vagrant structure.

		Usage: ./vagrantSqlDump.sh [-h host][-u username][-d database][-o outputfile][-k keysdirectory]


		Defaults:

		host     = 192.168.33.11

		username = vagrant 
		Used to connect to the ssh server running on the vm, not the mysql server

		database = database 

		outputFile = "$( realpath $( dirname $0 ) )/sqlDump"-"$( date "+%y%m%d-%H%M%S" )".sql 
		Should end up looking something like: /home/user/projects/project/folder/sqlDump-160220-133700.sql
		if the vagrantSqlDump.sh script is located in /home/user/projects/project/folder/

		keysdirectory
		This is a subfolder of the hidden folder ".vagrant" that holds the "private_key" file. 
		This file is used to connect to the vagrant vm via ssh. 
		If not specified by the user, the vagrantSqlDump script will automatically find this folder by looking in parrent 
		folders from where the vagrantSqlDump script is located.
	'
	exit 
fi

# parse the input-parameters with getops and overide the defaults
OPTIND=1 # Reset in case getopts has been used previously in the shell.
while getopts "h:u:d:o:k:" opt; do
    case "$opt" in
    h)  hostname=$OPTARG
        ;;
    u)  username=$OPTARG
        ;;
    d)  database=$OPTARG
        ;;
    o)  outputFile=$OPTARG
        ;;
    k)  keysDirectory=$OPTARG
        ;;
    esac
done
shift $((OPTIND-1))
[ "$1" = "--" ] && shift

# try to find the .vagrant directory if no custom keysDirectory was specified
if [[ -z $keysDirectory ]]; then
	while [[ "/" != "$(pwd)" ]]; do
		if [[ -d .vagrant ]]; then
			cd .vagrant/machines/default/virtualbox
			break
		fi
		cd ..
	done
else
	cd $keysDirectory
fi

echo "Trying to run mysqldump on $hostname as $username (it wont actually add it to the list of know hosts, it's all lies)" 
ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -i private_key "$username"@"$hostname" \
	"mysqldump -h localhost -u root --password='root' $database " > $outputFile

