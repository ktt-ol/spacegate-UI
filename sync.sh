#!/bin/bash
rsync -aziv --delete dist/ spacegate:/var/www/
