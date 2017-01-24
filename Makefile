VIRTUAL_ENV='env_challenge'

all: install setup

install: python-libs-install frontend-install

frontend-install:
	sudo apt-get -y install npm
	npm install -y --global gulp-cli

python-libs-install:
	sudo apt-get install -y python3-dev

setup:
	test -d $(VIRTUAL_ENV) || virtualenv -p python3 $(VIRTUAL_ENV)
	$(VIRTUAL_ENV)/bin/pip install -Ur requirements.txt

	
run: setup 
	./run.py 

clean:
	rm -rf $(VIRTUAL_ENV)
	find . -name *.pyc -type f -delete
